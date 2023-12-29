import { useEffect, useRef, useState } from "react"
import IconCross from "./IconCross"
import IconParticipants from "./IconParticipants"
import IconSettings from "./IconSettings"

export default function Collapsible(props) {
    const [open, setOpen] = useState(false)
    const collapsibleRef = useRef(null)
    const togglerRef = useRef(null)

    const handleClick = () => {
        setOpen(!open)
    }

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!collapsibleRef.current.contains(e.target) && !togglerRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        if (open) {
            document.addEventListener('click', handleOutsideClick, false)
        }
        return () => {
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