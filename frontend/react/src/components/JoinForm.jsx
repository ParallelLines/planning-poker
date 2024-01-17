import { useState } from "react"

export default function JoinForm({ onJoin }) {
    const [username, setUsername] = useState('')

    const updateUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleJoin = () => {
        onJoin(username)
    }

    return (
        <main>
            <div className="input-with-btn-container">
                <input 
                    type="text" 
                    className="big-input" 
                    name="" 
                    placeholder="your name..."
                    onChange={updateUsername} 
                    value={username} />
                <button className="big-btn btn-on-input" name="" onClick={handleJoin}>join</button>
            </div>
            <div className="error-message">no more than 30 characters please</div>
        </main>
    )
}
