export function useRetryableAction({ getSessionId, getUserId, reconnect, processError, canPerformAction }) {
    const withRetry = (action, actionName) => async (...args) => {
        const sessionId = getSessionId()
        const userId = getUserId()

        try {
            console.log('doing action')
            return await action(sessionId, userId, ...args)
        } catch (error) {
            console.log('catched an error after the first try: ', error)
            if (error?.response?.status !== 404) {
                console.log('it is not 404, so doing standard procedure')
                processError(error)
                return
            }
            console.log('refreshing user id...')
            const { userId: freshUserId, votesHidden } = await reconnect()
            if (freshUserId == null) {
                console.log('could not refresh the user id, so doing standard procedure')
                processError(error)
                return
            }

            if (canPerformAction(actionName, votesHidden)) {
                console.log('action is allowed: ', actionName)
                try {
                    console.log('doing action 2')
                    return await action(sessionId, freshUserId, ...args)
                } catch (error) {
                    console.log('catched an error after the second try: ', error)
                    processError(error)
                }
            } else {
                console.log('action is not allowed: ', actionName)
            }
        }
    }

    return { withRetry }
}