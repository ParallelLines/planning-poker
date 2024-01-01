import { useEffect, useRef, useState } from "react"

export default function Collapsible({ children, wrapperId, wrapperClass, togglerInsides }) {
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
                {togglerInsides}
            </button>
            <ul id={wrapperId} className={`${wrapperClass} ${open ? "opened" : ""}`} ref={collapsibleRef}>
                {children}
            </ul>
        </>
    )
}