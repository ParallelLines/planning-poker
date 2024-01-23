import { useEffect, useState } from "react"

export default function ErrorMessage({ message, timeout = 3000, onRemove }) {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false)
            onRemove()
        }, timeout)

        return () => {
            clearTimeout(timer)
        }
    }, [timeout])
    
    return visible ? <div className="error-message">{message}</div> : null
}