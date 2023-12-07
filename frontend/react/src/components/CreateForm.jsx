export default function CreateForm() {
    return (
        <main>
            <div className="input-with-btn-container">
                <input type="text" className="big-input" name="" placeholder="your name..." />
                <button className="big-btn btn-on-input" name="">join</button>
            </div>
            <div className="error-message">no more than 30 characters please</div>
        </main>
    )
}
