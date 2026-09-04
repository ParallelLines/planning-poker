import ControlButtons from './ControlButtons'
import CopyLinkButton from './CopyLinkButton'
import Participants from './Participants'
import Result from './Result'
import ScoreButtons from './ScoreButtons'
import Settings from './Settings'
import Stats from './Stats'

export default function Game({ sessionId, votesHidden, average, voteFn, showVotesFn, clearVotesFn, participants }) {
    return (
        <>
            <main>
                <Stats
                    score={average}
                    isHidden={votesHidden}
                />
                {
                    votesHidden ?
                        <ScoreButtons
                            onVote={voteFn}
                            currentUser={participants?.filter(p => p.is_current_user)[0]}
                        /> :
                        <Result votes={participants?.map(p => p.vote)} />
                }
                <ControlButtons
                    isHidden={votesHidden}
                    onReveal={showVotesFn}
                    onStart={clearVotesFn}
                />
                <CopyLinkButton sessionId={sessionId} />
            </main>
            <Participants list={participants} isHidden={votesHidden} />
            {/*<Settings />*/}
        </>
    )
}