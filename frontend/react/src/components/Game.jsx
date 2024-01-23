import { useEffect, useState } from 'react'
import ControlButtons from './ControlButtons'
import CopyLinkButton from './CopyLinkButton'
import Participants from './Participants'
import Result from './Result'
import ScoreButtons from './ScoreButtons'
import Settings from './Settings'
import Stats from './Stats'
import useWebSocket, { ReadyState } from 'react-use-websocket'

export default function Game({ wsURL, sessionId, onError }) {
    const [participants, setParticipants] = useState([]) 
    const [votesHidden, setVotesHidden] = useState(true)

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
        if (lastJsonMessage?.votes_hidden !== votesHidden) {
            setVotesHidden(!votesHidden)
        }
    }, [lastJsonMessage])

    return (
        <>
            <Settings />
            <main>
                <Stats />
                {votesHidden ? <ScoreButtons /> : <Result />}
                <ControlButtons isHidden={votesHidden} />
                <CopyLinkButton sessionId={sessionId}/>
            </main>
            <Participants list={participants}/>
        </>
    )
}