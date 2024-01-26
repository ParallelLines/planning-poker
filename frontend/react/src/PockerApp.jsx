import Game from './components/Game'
import Header from './components/Header'
import axios from 'axios'
import CreateForm from './components/CreateForm'
import { useEffect, useState } from 'react'
import JoinForm from './components/JoinForm'
import { useNavigate, useLocation } from 'react-router-dom'
import ErrorMessage from './components/ErrorMessage'

const BACKEND_URL = 'https://romangaranin.net/pc/api'

export default function PockerApp() {
    const [sessionId, setSessionId] = useState(null)
    const [userId, setUserId] = useState(null)
    const [errorQueue, setErrorQueue] = useState([])
    const navigate = useNavigate()
    const location = useLocation()

    const createSession = () => {
        const createSessionUrl = BACKEND_URL + '/sessions'
        axios.post(createSessionUrl)
            .then((response) => {
                setSessionId(response.data.id)
                navigate('/' + response.data.id)
            })
            .catch((error) => {
                addError(error)
            })
    }

    const joinSession = (sid) => {
        const checkSessionUrl = BACKEND_URL + '/sessions/' + sid
        axios.get(checkSessionUrl)
            .then(() => {
                setSessionId(sid)
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    addError('no such session')
                    navigate('/')
                } else {
                    addError(error)
                }
            })
    }

    const createUser = (username) => {
        const joinSessionUrl = BACKEND_URL + '/sessions/' + sessionId + '/join'
        axios.post(joinSessionUrl, JSON.stringify({ name: username }))
            .then((response) => {
                setUserId(response.data.id)
                navigate('/' + sessionId)
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    setSessionId(null)
                    setWsUrl(null)
                    addError('no such session :(')
                    navigate('/')
                } else {
                    addError(error)
                }
            })
    }

    const addError = (newError) => {
        let errorText
        if (newError.message) {
            if (newError.response.status === 404) {
                setSessionId(null)
                errorText = 'no such session :('
                navigate('/')
            } else {
                errorText = newError.message + ': ' + newError.response.statusText
            }
        } else {
            errorText = newError
        }
        setErrorQueue(prev => [...prev, errorText])
    }

    const removeError = () => {
        setErrorQueue(prev => prev.slice(1))
    }

    useEffect(() => {
        const sid = location.pathname.slice(1)
        if (sid.length) joinSession(sid)
    }, [location])

    let content
    if (!sessionId) {
        content = <CreateForm onCreate={createSession} onJoin={joinSession} />
    } else if (sessionId && !userId) {
        content = <JoinForm onJoin={createUser} />
    } else if (userId) {
        content = <Game sessionId={sessionId} userId={userId} onError={addError} />
    }

    return (
        <>
            <Header />
            {content}
            <div className="error-container">
                {errorQueue.map((err, idx) => (
                    <ErrorMessage key={idx} message={err} onRemove={removeError} />
                ))}
            </div>
        </>
    )
}