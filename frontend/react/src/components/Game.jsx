import { useEffect, useState } from 'react'
import ControlButtons from './ControlButtons'
import CopyLinkButton from './CopyLinkButton'
import Participants from './Participants'
import Result from './Result'
import ScoreButtons from './ScoreButtons'
import Settings from './Settings'
import Stats from './Stats'
import useWebSocket, { ReadyState } from 'react-use-websocket'

export default function Game({ wsURL }) {
    const [participants, setParticipants] = useState([]) 

    console.log('WS url: ', wsURL)
    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
        wsURL,
        {
            onOpen: () => console.log('WS connection established'),
            shouldReconnect: () => true
        }
    )

    useEffect(() => {
        console.log(readyState)
    }, [readyState])

    useEffect(() => {
        console.log('new message', lastJsonMessage)
        setParticipants(lastJsonMessage?.votes_info)
    }, [lastJsonMessage])

    return (
        <>
            <Settings />

            <main>
                <Stats />
                <ScoreButtons />
                <Result />
                <ControlButtons />
                <CopyLinkButton />
            </main>

            <Participants list={participants}/>
        </>
    )
}