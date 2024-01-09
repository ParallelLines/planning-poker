import { useEffect, useState } from "react"
import IconParticipants from "./IconParticipants"
import IconCross from "./IconCross"
import IconCrown from "./IconCrown"
import Collapsible from "./Collapsible"

const participantsList = [
    {
        voted: false,
        name: "Sinji [polezai v yobanogo robota] Ikari",
        result: null,
        isAdmin: true
    },
    {
        voted: true,
        name: "Directed by Robert B. Weide",
        result: 13,
        isAdmin: false
    },
    {
        voted: true,
        name: "Thurston Waffles",
        result: 100,
        isAdmin: false
    },
    {
        voted: false,
        name: "Serious Sam",
        result: null,
        isAdmin: false
    },
    {
        voted: false,
        name: "Ayanami Rei",
        result: null,
        isAdmin: false
    },
    {
        voted: true,
        name: "Asuka Soryu Langley",
        result: 0.5,
        isAdmin: false
    },
    {
        voted: true,
        name: "Daenerys Stormborn of House Ta ",
        result: 1,
        isAdmin: false
    },
    {
        voted: false,
        name: "Mei",
        result: null,
        isAdmin: false
    },
    {
        voted: false,
        name: "Suzuki Haruhi",
        result: null,
        isAdmin: false
    },
    {
        voted: false,
        name: "Kyon",
        result: null,
        isAdmin: false
    },
    {
        voted: true,
        name: "Rot Geganger Tot Geganger",
        result: 2,
        isAdmin: false
    },
    {
        voted: true,
        name: "Kot Vasiliy",
        result: 3,
        isAdmin: false
    },
    {
        voted: false,
        name: "Iduschiy k reke",
        result: null,
        isAdmin: false
    },
    {
        voted: false,
        name: "anonimus",
        result: null,
        isAdmin: false
    },
    {
        voted: true,
        name: "Tishka",
        result: "?",
        isAdmin: false
    },
    {
        voted: true,
        name: "Vitas",
        result: 5,
        isAdmin: false
    },
    {
        voted: false,
        name: "Eva 01",
        result: null,
        isAdmin: false
    },
    {
        voted: false,
        name: "Eva 02",
        result: null,
        isAdmin: false
    },
    {
        voted: true,
        name: "Eva 03",
        result: 8,
        isAdmin: false
    },
    {
        voted: false,
        name: "Iduschiy k reke",
        result: null,
        isAdmin: false
    },
    {
        voted: true,
        name: "Were's my lasagna?",
        result: 13,
        isAdmin: false
    },
    {
        voted: true,
        name: ";l&*#$$%%sdkvnsdfj",
        result: 40,
        isAdmin: false
    },
    {
        voted: false,
        name: "Eva 04",
        result: null,
        isAdmin: false
    },
    {
        voted: true,
        name: "Eva 05",
        result: 20,
        isAdmin: false
    },
    {
        voted: true,
        name: "Eva 06",
        result: 100,
        isAdmin: false
    }
] 

export default function Participants() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 705)

    useEffect(() => {
        window.addEventListener("resize", () => {
            const isSmall = window.innerWidth < 705
            if (isSmall ^ isMobile) setIsMobile(isSmall)
        })
    }, [isMobile])

    return (
        <aside className="participants">
            <div className="title">
                <div className="progressbar"></div>
            </div>
            <Collapsible
                wrapperId="collapsible-participants-list"
                wrapperClass={`scrollable-col ${isMobile ? 'collapsible' : ''}`}
                togglerId="show-participants-btn"
                togglerInsides={<><IconParticipants /> <IconCross /></>}
            >
                {participantsList.map((person, i) => {
                    return (
                        <li className="participant" key={i}>
                            <span className={person.voted ? "vote-indicator voted" : "vote-indicator"}></span>
                            <span className="participant-name">{person.name}
                                {person.isAdmin ? <IconCrown /> : null}
                            </span>
                            <span className="result">{person.result}</span>
                        </li>
                    )
                })}
            </Collapsible>
            <div className="vote-counter">
                <span className="did-vote">7</span>/26
            </div>
        </aside>
    )
}