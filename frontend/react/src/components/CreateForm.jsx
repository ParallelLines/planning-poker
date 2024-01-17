export default function CreateForm({ onCreate, onJoin }) {


    return (
        <main>
            <button className="big-btn" name="Create session" onClick={onCreate}>create</button>
            <span>or</span>
            <div className="input-with-btn-container">
                <input type="text" className="big-input" name="Session ID" placeholder="session id..." />
                <button className="big-btn btn-on-input" name="Join session">join</button>
            </div>
            <div className="error-message">can't find session with this id :(</div>
            <div className="error-message">no more than 20 characters please</div>
        </main>
    )
}