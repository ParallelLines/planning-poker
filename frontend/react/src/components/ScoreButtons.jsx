import { useEffect, useState } from "react"
import { mountainGoat } from './CardPacks'

export default function ScoreButtons({ onVote }) {
    const [currentVote, setCurrentVote] = useState(null)
    const buttonList = mountainGoat.cards

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