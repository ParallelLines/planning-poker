import { useEffect, useState } from 'react'
import IconParticipants from './IconParticipants'
import IconCross from './IconCross'
import IconCrown from './IconCrown'
import Collapsible from './Collapsible'

export default function Participants({ list, isHidden }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 705)

    useEffect(() => {
        window.addEventListener('resize', () => {
            const isSmall = window.innerWidth < 705
            if (isSmall ^ isMobile) setIsMobile(isSmall)
        })
    }, [isMobile])

    const voted = list?.reduce((acc, curr) => curr.is_voted ? acc + 1 : acc, 0)
    const progress = (voted / list?.length) * 100

    return (
        <aside className="participants">
            <div className="title">
                <div className="progressbar" style={{ width: progress + '%' }}></div>
            </div>
            <Collapsible
                wrapperId="collapsible-participants-list"
                wrapperClass={`scrollable-col ${isMobile ? 'collapsible' : ''}`}
                togglerId="show-participants-btn"
                togglerInsides={<><IconParticipants /> <IconCross /></>}
            >
                {list?.map((person, i) => {
                    return (
                        <li className={`participant ${person.is_current_user ? 'current' : ''}`} key={i}>
                            <span className={person.is_voted ? "vote-indicator voted" : "vote-indicator"}></span>
                            <span className="participant-name">{person.name}
                                {person.is_current_user ? ' ' : null}
                                {person.is_current_user ? <IconCrown /> : null}
                            </span>
                            <span className="result">{isHidden && person.is_voted ? '...' : person.vote}</span>
                        </li>
                    )
                })}
            </Collapsible>
            <div className="vote-counter">
                <span className="did-vote">{voted}</span>/{list?.length}
            </div>
        </aside>
    )
}