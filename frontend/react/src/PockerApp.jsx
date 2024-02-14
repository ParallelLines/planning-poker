import Game from './components/Game'
import Header from './components/Header'
import axios from 'axios'
import CreateForm from './components/CreateForm'
import { useEffect, useState } from 'react'
import JoinForm from './components/JoinForm'
import { useNavigate, useLocation } from 'react-router-dom'
import ErrorMessage from './components/ErrorMessage'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
const FRONTEND_FOLDER = import.meta.env.VITE_FRONTEND_FOLDER

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
                const path = FRONTEND_FOLDER.length ? '/' + FRONTEND_FOLDER + '/' + response.data.id : '/' + response.data.id
                navigate(path)
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
                addError(error)
            })
    }

    const createUser = (username) => {
        const joinSessionUrl = BACKEND_URL + '/sessions/' + sessionId + '/join'
        axios.post(joinSessionUrl, JSON.stringify({ name: username }))
            .then((response) => {
                setUserId(response.data.id)
                const path = FRONTEND_FOLDER.length ? '/' + FRONTEND_FOLDER + '/' + sessionId : '/' + sessionId
                navigate(path)
            })
            .catch((error) => {
                addError(error)
            })
    }

    const addError = (newError) => {
        let errorText
        if (newError.message) {
            const status = newError.response.status
            if (status === 404) {
                setSessionId(null)
                setUserId(null)
                errorText = 'no such session :('
                navigate('/' + FRONTEND_FOLDER)
            } else if (status === 400) {
                setSessionId(null)
                setUserId(null)
                errorText = 'server says it\'s a weird request'
                navigate('/' + FRONTEND_FOLDER)
            }
            else {
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
        const numToSlice = FRONTEND_FOLDER.length ? FRONTEND_FOLDER.length + 2 : 1
        const sid = location.pathname.slice(numToSlice)
        if (sid.length) joinSession(sid)
    }, [location])

    return (
        <>
            <Header />
            {!sessionId && <CreateForm onCreate={createSession} onJoin={joinSession} />}
            {sessionId && !userId && <JoinForm onJoin={createUser} />}
            {userId && <Game sessionId={sessionId} userId={userId} onError={addError} />}
            <div className="error-container">
                {errorQueue.map((err, idx) => (
                    <ErrorMessage key={idx} message={err} onRemove={removeError} />
                ))}
            </div>
        </>
    )
}