import { useState } from "react"

export default function JoinForm({ onJoin }) {
    const [username, setUsername] = useState('')

    const updateUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleJoin = (e) => {
        e.preventDefault()
        onJoin(username)
    }

    return (
        <main>
            <form onSubmit={handleJoin} className="input-with-btn-container">
                <input
                    type="text"
                    className="big-input"
                    name="username"
                    placeholder="your name..."
                    onChange={updateUsername}
                    value={username} />
                <button className="big-btn btn-on-input" name="join">join</button>
            </form>
        </main>
    )
}
