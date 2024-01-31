import { useEffect, useState, useRef } from 'react'

export default function Stopwatch({ start }) {
    const [isRunning, setIsRunning] = useState(false)
    const [time, setTime] = useState(0)
    let timeInterval = useRef(null)

    const formatTime = () => {
        const minutes = Math.floor(time / 60).toString().padStart(2, '0')
        const seconds = Math.floor(time % 60).toString().padStart(2, '0')

        return { minutes, seconds }
    }

    useEffect(() => {
        if (start && !isRunning) {
            setIsRunning(true)
        }
        if (!start && isRunning) {
            setIsRunning(false)
        }
    }, [start])

    useEffect(() => {
        if (isRunning) {
            timeInterval.current = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000)
        } else {
            clearInterval(timeInterval.current)
            setTime(0)
        }

        return () => clearInterval(timeInterval.current)
    }, [isRunning])

    const { minutes, seconds } = formatTime()

    return <time dateTime="PT15M43S">{minutes}:{seconds}</time>
}