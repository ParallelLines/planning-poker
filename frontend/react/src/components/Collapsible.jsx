import { useEffect, useRef, useState } from "react"
import IconCross from "./IconCross"
import IconParticipants from "./IconParticipants"
import IconSettings from "./IconSettings"

export default function Collapsible(props) {
    const [open, setOpen] = useState(false)
    const collapsibleRef = useRef(null)
    const togglerRef = useRef(null)

    const handleClick = () => {
        console.log(`handling click, state: ${open}`)
        setOpen(!open)
    }

    useEffect(() => {
        console.log(`using effect, state: ${open}`)
        const handleOutsideClick = (e) => {
            if (!collapsibleRef.current.contains(e.target) && !togglerRef.current.contains(e.target)) {
                console.log('the click was not on collapsible, so closing the window')
                setOpen(false)
            }
        }
        if (open) {
            console.log('adding event listener')
            document.addEventListener('click', handleOutsideClick, false)
        }
        return () => {
            console.log('removing event listener')
            document.removeEventListener('click', handleOutsideClick, false)
        }
    }, [open])

    return (
        <>
            <button
                className={`svg-btn toggle-btn ${open ? "close-btn" : ""}`}
                name="toggle"
                onClick={handleClick}
                ref={togglerRef}
            >
                {props.type === "settings" ? <IconSettings /> : null}
                {props.type === "participants" ? <IconParticipants /> : null}
                <IconCross />
            </button>
            <ul id={props.id} className={`menu collapsible ${open ? "opened" : ""}`} ref={collapsibleRef}>
                {props.children}
            </ul>
        </>
    )
}