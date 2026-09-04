import { useErrorQueue } from '../helpers/AppContext'
import ErrorMessage from './ErrorMessage'

export default function ErrorQueue() {
    const { errorQueue } = useErrorQueue()

    if (errorQueue.length === 0) return null

    return (
        <div className="error-container">
            {errorQueue.map((error) => (
                <ErrorMessage
                    key={error.id}
                    id={error.id}
                    message={error.message}
                    bad={error.bad}
                />
            ))}
        </div>
    )
}