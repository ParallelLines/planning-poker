import { useState } from "react"

export default function Form({ onSubmit, errorMessage, ...params }) {
    const [value, setValue] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [isValid, setIsValid] = useState(true)

    const updateValue = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        const valid = e.target.checkValidity()
        setIsValid(valid)
        if (valid) {
            onSubmit(value)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={`input-with-btn-container ${submitted ? 'submitted' : ''}`}
            noValidate
        >
            <input
                type="text"
                className="big-input"
                name="sessionId"
                onChange={updateValue}
                value={value}
                {...params}
                autoFocus
            />
            <button className="big-btn btn-on-input" name="Join session">join</button>
            {!isValid && <div className="validation-message">{errorMessage}</div>}
        </form>
    )
}