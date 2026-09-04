import { useEffect, useState } from "react"
import { useErrorQueue } from '../helpers/AppContext'

export default function ErrorMessage({ id, message, bad = true, timeout = 3000 }) {
    const [visible, setVisible] = useState(true)
    const { removeError } = useErrorQueue()

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false)
            removeError(id)
        }, timeout)

        return () => {
            clearTimeout(timer)
        }
    }, [timeout, id, removeError])

    if (!visible) return null

    return <div className={`error-message ${bad ? 'bad' : 'good'}`}>{message}</div>
}