import AverageScore from "./AverageScore";
import Stopwatch from "./Stopwatch";

export default function Stats({ score, isHidden }) {
    return (
        <div className="stats">
            <AverageScore score={isHidden ? '...' : score} />
            {/* <Stopwatch start={isHidden} /> */}
        </div>
    )
}