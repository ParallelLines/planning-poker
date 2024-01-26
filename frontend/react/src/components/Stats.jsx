import AverageScore from "./AverageScore";

export default function Stats({ score, isHidden }) {
    return (
        <div className="stats">
            <AverageScore score={isHidden ? '...' : score} />
            <time dateTime="PT15M43S">00:00</time>
        </div>
    )
}