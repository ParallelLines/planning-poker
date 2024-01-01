import { useEffect, useState } from "react"
import IconParticipants from "./IconParticipants"
import IconCross from "./IconCross"

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
                <button id="show-participants-btn" className="svg-btn toggle-btn" name="toggle participants" data-target="collapsible-participants-list">
                    <IconParticipants />
                    <IconCross />
                </button>
                <div className="vote-counter">
                    <span className="did-vote">7</span>/26
                </div>
            </div>
            <ul id="collapsible-participants-list" className={`scrollable-col ${isMobile ? 'collapsible' : ''}`} data-toggler="show-participants-btn">
                {participantsList.map((person, i) => {
                    return (
                        <li className="participant" key={i}>
                            <span className={person.voted ? "vote-indicator voted" : "vote-indicator"}></span>
                            <span className="participant-name">{person.name}
                                {person.isAdmin ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 26" width="15" hight="15">
                                    <path d="M2,24L2,6L0,6L0,26L30,26L30,6L28,6L28,24L2,24ZM12,14L12,8L10,8L10,12L8,12L8,10L6,10L6,14L8,14L8,16L10,16L10,14L12,14ZM18,8L18,14L20,14L20,16L22,16L22,14L24,14L24,10L22,10L22,12L20,12L20,8L18,8ZM6,10L6,6L4,6L4,10L6,10ZM26,10L26,6L24,6L24,10L26,10ZM18,6L16,6L16,8L18,8L18,6ZM14,6L12,6L12,8L14,8L14,6ZM0,6L4,6L4,4L0,4L0,6ZM18,4L16,4L16,6L18,6L18,4ZM30,4L26,4L26,6L30,6L30,4ZM14,4L12,4L12,6L14,6L14,4ZM26,4L30,4L30,2L26,2L26,4ZM4,2L0,2L0,4L4,4L4,2ZM16,2L14,2L14,4L16,4L16,2ZM2,0L0,0L0,2L2,2L2,0ZM16,0L14,0L14,2L16,2L16,0ZM30,0L28,0L28,2L30,2L30,0Z" style={{ fill: "rgb(255,178,0)" }} />
                                </svg> : null}
                            </span>
                            <span className="result">{person.result}</span>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}