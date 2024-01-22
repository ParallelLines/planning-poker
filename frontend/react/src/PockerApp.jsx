import Game from './components/Game'
import Header from './components/Header'
import axios from 'axios'
import CreateForm from './components/CreateForm'
import { useEffect, useState } from 'react'
import JoinForm from './components/JoinForm'
import { useNavigate, useLocation } from 'react-router-dom'

const BACKEND_URL = 'https://romangaranin.net/pc/api'

export default function PockerApp() {
    const [sessionId, setSessionId] = useState(null)
    const [userId, setUserId] = useState(null)
    const [wsURL, setWsUrl] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()
    
    const createSession = () => {
        const createSessionUrl = BACKEND_URL + '/sessions'
        axios.post(createSessionUrl)
            .then((response) => {
                setSessionId(response.data.id)
            })
            .catch((error) => {
                console.log('unfortunately error :(', error)
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
                    console.log('no such session')
                    navigate('/')
                } else {
                    console.log(error)
                }
            })
    }

    const createUser = (username) => {
        const joinSessionUrl = BACKEND_URL + '/sessions/' + sessionId + '/join'
        axios.post(joinSessionUrl, JSON.stringify({name: username}))
            .then((response) => {
                setUserId(response.data.id)
                
                const newWsUrl = BACKEND_URL
                    .replaceAll('https://', 'wss://')
                    .replaceAll('http://', 'ws://')
                    + '/sessions/' + sessionId + '/get/' + response.data.id
                setWsUrl(newWsUrl)

                navigate('/' + sessionId)
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    setSessionId(null)
                    setWsUrl(null)
                    console.log('no such session')
                    navigate('/')
                } else {
                    console.log(error)
                }
            })
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
    } else if (wsURL) {
        console.log(wsURL)
        content = <Game wsURL={wsURL} sessionId={sessionId}/>
    }

    return (
        <>
            <Header />
            {content}
        </>
    )
}