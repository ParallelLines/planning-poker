import IconCopy from "./IconCopy";

export default function CopyLinkButton({ sessionId }) {
    return (
        <div className="copy-link">
            <button id="copy-link-btn" className="svg-btn" name="copy link">
                <IconCopy />
            </button>
            <label htmlFor="copy-link-btn">session id {sessionId}</label>
        </div>
    )
}