import { useEffect, useState } from 'react'
import ControlButtons from './ControlButtons'
import CopyLinkButton from './CopyLinkButton'
import Participants from './Participants'
import Result from './Result'
import ScoreButtons from './ScoreButtons'
import Settings from './Settings'
import Stats from './Stats'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import axios from 'axios'
import { mountainGoat } from './CardPacks'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export default function Game({ sessionId, userId, onError }) {
    const [participants, setParticipants] = useState([])
    const [votesHidden, setVotesHidden] = useState(true)

    const wsURL = BACKEND_URL
        .replaceAll('https://', 'wss://')
        .replaceAll('http://', 'ws://')
        + '/sessions/' + sessionId + '/get/' + userId
    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
        wsURL,
        {
            // onOpen: () => console.log('WS connection established'),
            shouldReconnect: () => true
        }
    )

    const vote = async (vote) => {
        const voteUrl = BACKEND_URL + '/sessions/' + sessionId + '/vote'
        await axios.post(voteUrl, JSON.stringify({
            user_id: userId,
            vote: parseFloat(vote)
        }))
            .then(console.log(`new vote ${vote} successfully sent`))
            .catch(error => {
                console.log('error while trying to vote: ', error)
                onError(error)
            })
    }

    const showVotes = async () => {
        const voteUrl = BACKEND_URL + '/sessions/' + sessionId + '/show'
        await axios.post(voteUrl, JSON.stringify({ user_id: userId }))
            .catch(error => {
                onError(error)
            })
    }

    const clearVotes = async () => {
        const voteUrl = BACKEND_URL + '/sessions/' + sessionId + '/clear'
        await axios.post(voteUrl, JSON.stringify({ user_id: userId }))
            .catch(error => {
                onError(error)
            })
    }

    const countAverage = () => {
        const votes = participants ? participants.map(p => p.vote) : []
        return mountainGoat.average(votes)
    }

    // useEffect(() => {
    //     console.log(readyState)
    // }, [readyState])

    useEffect(() => {
        setParticipants(lastJsonMessage?.votes_info)
        if (lastJsonMessage?.votes_hidden !== votesHidden && lastJsonMessage?.votes_hidden !== undefined) {
            setVotesHidden(lastJsonMessage?.votes_hidden)
        }
    }, [lastJsonMessage])

    return (
        <>
            {/* <Settings /> */}
            <main>
                <Stats
                    score={countAverage()}
                    isHidden={votesHidden}
                />
                {
                    votesHidden ?
                        <ScoreButtons
                            onVote={vote}
                            currentUser={participants?.filter(p => p.is_current_user)[0]}
                        /> :
                        <Result votes={participants?.map(p => p.vote)} />
                }
                <ControlButtons
                    isHidden={votesHidden}
                    onReveal={showVotes}
                    onStart={clearVotes}
                />
                <CopyLinkButton sessionId={sessionId} />
            </main>
            <Participants list={participants} isHidden={votesHidden} />
        </>
    )
}