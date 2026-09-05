import Game from './components/Game'
import Header from './components/Header'
import CreateForm from './components/CreateForm'
import { useEffect, useMemo, useState } from 'react'
import JoinForm from './components/JoinForm'
import { useNavigate, useLocation } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import ErrorQueue from './components/ErrorQueue'
import { useErrorQueue } from './helpers/AppContext'
import { ReadyState } from 'react-use-websocket'
import Loader from './components/Loader'
import { mountainGoat } from './components/CardPacks'
import { createSessionAPI } from './helpers/sessionApi'
import { useSessionSocket } from './helpers/useSessionSocket'
import { useSessionErrors } from './helpers/useSessionErrors'
import { useRetryableAction } from './helpers/useRetryableAction'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
const FRONTEND_FOLDER = import.meta.env.VITE_FRONTEND_FOLDER

const sessionApi = createSessionAPI(BACKEND_URL)

export default function PockerApp() {
    const [cookies, setCookie] = useCookies(['planningCat_name'])

    const [sessionId, setSessionId] = useState(null)
    const [userId, setUserId] = useState(null)
    const [savedUsername, setSavedUsername] = useState('')
    const [participants, setParticipants] = useState([])
    const [votesHidden, setVotesHidden] = useState(true)

    const navigate = useNavigate()
    const location = useLocation()
    const { addError } = useErrorQueue()

    const inAYear = useMemo(() => {
        const date = new Date()
        date.setFullYear(date.getFullYear() + 1)
        return date
    }, [])

    const updateSessionState = (jsonMessage) => {
        if (!jsonMessage) return
        setParticipants(jsonMessage?.votes_info)
        if (jsonMessage?.votes_hidden !== votesHidden && jsonMessage?.votes_hidden !== undefined) {
            setVotesHidden(jsonMessage?.votes_hidden)
        }
    }

    const requestAndUpdateSessionState = async (uid, showMessage = true) => {
        const freshMessage = await sessionApi.getSessionState(sessionId, uid)
            .then((response) => response.data)
        if (!freshMessage) return null

        if (showMessage) addError('you were reconnected', false)

        updateSessionState(freshMessage)

        return freshMessage
    }

    const goHome = () => navigate('/' + FRONTEND_FOLDER)

    const goToSession = (sid) => navigate(`${FRONTEND_FOLDER.length ? '/' + FRONTEND_FOLDER : ''}/${sid}`)

    const resetSession = () => {
        setSessionId(null)
        setUserId(null)
    }

    const { processError } = useSessionErrors({
        onBadRequest: () => {
            resetSession()
            goHome()
            addError('server says it\'s a weird request')
        },
        onSessionGone: () => {
            resetSession()
            goHome()
            addError('no such session :(')
        }
    })

    const createSession = () => {
        sessionApi.createSession()
            .then((response) => {
                setSessionId(response.data.id)
                goToSession(response.data.id)
            })
            .catch(processError)
    }

    const joinSession = (sid) => {
        sessionApi.checkSessionExists(sid)
            .then(() => setSessionId(sid))
            .catch(processError)
    }

    const doesSessionExist = async (sid) => {
        try {
            await sessionApi.checkSessionExists(sid)
            return true
        } catch {
            return false
        }
    }

    const createUser = async (username) => {
        setSavedUsername(username)
        if (cookies.planningCat_name !== username) {
            setCookie('planningCat_name', username, { expires: inAYear })
        }
        try {
            const response = await sessionApi.joinSession(sessionId, username)
            setUserId(response.data.id)
            goToSession(sessionId)
            return response.data.id
        } catch (error) {
            processError(error)
            return null
        }
    }

    const handleUserReconnect = async () => {
        const username = savedUsername || cookies.planningCat_name
        if (!username) return null

        const sidValid = await doesSessionExist(sessionId)
        if (!sidValid) return null

        const freshUserId = await createUser(username)
        if (freshUserId === null) return null

        const freshMessage = await requestAndUpdateSessionState(freshUserId)
        if (!freshMessage) return null

        return { userId: freshUserId, votesHidden: freshMessage.votes_hidden }
    }

    const canPerformAction = (actionName, hidden) => {
        switch (actionName) {
            case 'vote': return hidden
            case 'showVotes': return hidden
            case 'clearVotes': return !hidden
            default: return false
        }
    }

    const { withRetry } = useRetryableAction({
        getSessionId: () => sessionId,
        getUserId: () => userId,
        reconnect: handleUserReconnect,
        processError,
        canPerformAction
    })

    const vote = withRetry((sid, uid, voteValue) => sessionApi.vote(sid, uid, voteValue), 'vote')
    const showVotes = withRetry((sid, uid) => sessionApi.showVotes(sid, uid), 'showVotes')
    const clearVotes = withRetry((sid, uid) => sessionApi.clearVotes(sid, uid), 'clearVotes')

    const countAverage = () => {
        const votes = participants ? participants.map(p => p.vote) : []
        return mountainGoat.average(votes)
    }

    const { lastJsonMessage, readyState } = useSessionSocket(
        BACKEND_URL,
        sessionId,
        userId,
        {
            onOpen: async () => {
                console.log('WS connection established')
                try {
                    await requestAndUpdateSessionState(userId, false)
                } catch (error) {
                    processError(error)
                }
            },
            onReconnectStop: async () => {
                const reconnected = await handleUserReconnect()
                if (!reconnected) {
                    resetSession()
                    goHome()
                    addError('Something\'s really wrong. Try again maybe')
                }
            },
        }
    )

    useEffect(() => {
        console.log('readyState: ', readyState)
    }, [readyState])

    useEffect(() => {
        updateSessionState(lastJsonMessage)
    }, [lastJsonMessage])

    useEffect(() => {
        const numToSlice = FRONTEND_FOLDER.length ? FRONTEND_FOLDER.length + 2 : 1
        const sid = location.pathname.slice(numToSlice)
        if (sid.length) joinSession(sid)
    }, [location])

    return (
        <>
            <Header />
            {!sessionId && <CreateForm onCreate={createSession} onJoin={joinSession} />}
            {sessionId && !userId && <JoinForm onJoin={createUser} cookieValue={cookies.planningCat_name} />}
            {userId && readyState !== ReadyState.OPEN && <Loader />}
            {userId && readyState === ReadyState.OPEN &&
                <Game
                    sessionId={sessionId}
                    votesHidden={votesHidden}
                    average={countAverage()}
                    voteFn={vote}
                    showVotesFn={showVotes}
                    clearVotesFn={clearVotes}
                    participants={participants}
                />}
            <ErrorQueue />
        </>
    )
}