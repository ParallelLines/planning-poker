import ControlButtons from './ControlButtons'
import CopyLinkButton from './CopyLinkButton'
import Participants from './Participants'
import Result from './Result'
import ScoreButtons from './ScoreButtons'
import Settings from './Settings'
import Stats from './Stats'

export default function Game() {
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

            <Participants />
        </>
    )
}