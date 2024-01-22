// import { useRef } from 'react'
import IconCopy from './IconCopy'
// import gsap from 'gsap'

export default function CopyLinkButton({ sessionId }) {
    // const copiedMsg = useRef(null)

    const copyLinkToClip = async () => {
        await navigator.clipboard.writeText(location.href)
        // gsap.timeline()
        //     .to(copiedMsg.current, {opacity: 1, duration: 0.01})
        //     .to(copiedMsg.current, {opacity: 0, scale: 2, duration: 1})
        console.log('link copied! :)')
    }

    return (
        <div className="copy-link">
            {/* <span ref={copiedMsg}>copied!</span> */}
            <button id="copy-link-btn" className="svg-btn" name="copy link" onClick={copyLinkToClip}>
                <IconCopy />
            </button>
            <label htmlFor="copy-link-btn">session id {sessionId}</label>
        </div>
    )
}