import { useEffect, useState } from "react"
import { mountainGoat } from './CardPacks'

export default function ScoreButtons({ onVote, currentUser }) {
    const buttonList = mountainGoat.cards
    const currentVote = currentUser && currentUser.is_voted ? currentUser.vote.toString() : null
    const handleClick = (e) => {
        onVote(e.target.innerText)
    }

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