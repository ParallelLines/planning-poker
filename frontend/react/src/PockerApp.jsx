import Game from './components/Game'
import Header from './components/Header'
import { useWebSocket } from 'react-use-websocket'
import axios from 'axios'
import CreateForm from './components/CreateForm'
import { useState } from 'react'
import JoinForm from './components/JoinForm'

const BACKEND_URL = 'https://romangaranin.net/pc/api'

export default function PockerApp() {
    const [sessionId, setSessionId] = useState(null)
    const [userId, setUserId] = useState(null)

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
        setSessionId(sid)
    }

    const createUser = (username) => {
        const joinSessionUrl = BACKEND_URL + '/sessions/' + sessionId + '/join'
        axios.post(joinSessionUrl, JSON.stringify({name: username}))
            .then((response) => {
                setUserId(response.data.id)
                //here we setup websocket
            })
            .catch((error) => {
                console.log('ERROR while joining a session', error)
            })
    }

    let content
    if (!sessionId) {
        content = <CreateForm onCreate={createSession} onJoin={joinSession} />
    } else if (sessionId && !userId) {
        content = <JoinForm onJoin={createUser} />
    } else {
        content = <Game />
    }

    return (
        <>
            <Header />
            {content}
        </>
    )
}