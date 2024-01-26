import { useEffect, useState } from "react"

const mountainGoat = ['0', '0.5', '1', '2', '3', '5', '8', '13', '20', '40', '100', '?']

export default function ScoreButtons({ onVote }) {
    const [currentVote, setCurrentVote] = useState(null)
    const buttonList = mountainGoat
    const handleClick = (e) => {
        setCurrentVote(e.target.innerText)
    }

    useEffect(() => {
        if (currentVote !== null) {
            onVote(currentVote)
        }
    }, [currentVote])
    return (
        <div className="poker-btns">
            {buttonList.map((button, i) => (
                <button
                    className={`poker-btn ${currentVote === button ? 'selected' : ''}`}
                    name={button}
                    onClick={handleClick}
                    key={i}
                >
                    {button}
                </button>
            ))}
        </div>
    )
}