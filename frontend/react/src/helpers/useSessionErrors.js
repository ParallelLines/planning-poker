import { useErrorQueue } from './AppContext'

export function useSessionErrors({ onBadRequest, onSessionGone }) {
    const { addError } = useErrorQueue()

    const processError = (error) => {
        if (!error?.message) {
            addError(error)
            return
        }

        const status = error.response?.status
        if (status === 404) {
            onSessionGone()
        } else if (status === 400) {
            onBadRequest()
        } else if (error.response) {
            addError(`${error.message}: ${error.response.statusText}`)
        } else {
            addError(error.message)
        }
    }

    return { processError }
}