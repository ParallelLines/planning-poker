import { useState } from 'react'
import Form from './Form'

export default function CreateForm({ onCreate, onJoin }) {
    return (
        <main>
            <button className="big-btn" name="Create session" onClick={onCreate}>create</button>
            <span>or</span>
            <Form
                onSubmit={onJoin}
                errorMessage="numbers only pls 🙏"
                name="sessionId"
                placeholder="session id..."
                required
                pattern="\d+"
            />
        </main>
    )
}