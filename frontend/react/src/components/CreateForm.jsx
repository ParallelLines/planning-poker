import { useState } from "react"

export default function CreateForm({ onCreate, onJoin }) {
    const [sessionId, setSessionId] = useState('')

    const updateSessionId = (e) => {
        setSessionId(e.target.value)
    }

    const handleJoin = () => {
        onJoin(sessionId)
    }

    return (
        <main>
            <button className="big-btn" name="Create session" onClick={onCreate}>create</button>
            <span>or</span>
            <div className="input-with-btn-container">
                <input 
                    type="text" 
                    className="big-input" 
                    name="Session ID" 
                    placeholder="session id..."
                    onChange={updateSessionId}
                    value={sessionId} />
                <button className="big-btn btn-on-input" name="Join session" onClick={handleJoin}>join</button>
            </div>
        </main>
    )
}