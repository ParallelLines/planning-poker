import { useState } from "react"

export default function CreateForm({ onCreate, onJoin }) {
    const [sessionId, setSessionId] = useState('')

    const updateSessionId = (e) => {
        setSessionId(e.target.value)
    }

    const handleJoin = (e) => {
        e.preventDefault()
        onJoin(sessionId)
    }

    return (
        <main>
            <button className="big-btn" name="Create session" onClick={onCreate}>create</button>
            <span>or</span>
            <form onSubmit={handleJoin} className="input-with-btn-container">
                <input
                    type="text"
                    className="big-input"
                    name="sessionId"
                    placeholder="session id..."
                    onChange={updateSessionId}
                    value={sessionId} />
                <button className="big-btn btn-on-input" name="Join session">join</button>
            </form>
        </main>
    )
}