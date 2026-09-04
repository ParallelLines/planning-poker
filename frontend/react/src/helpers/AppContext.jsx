import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const ErrorQueueContext = createContext(null)

export function AppContext({ children }) {
    const [errorQueue, setErrorQueue] = useState([])

    const addError = useCallback((message, bad = true) => {
        setErrorQueue(prevQueue => [...prevQueue, { id: Date.now(), message: message, bad: bad }])
    }, [])

    const removeError = useCallback((id) => {

        setErrorQueue(prevQueue => prevQueue.filter(err => err.id !== id))
    }, [])

    return (
        <ErrorQueueContext.Provider value={{ errorQueue, addError, removeError }}>
            {children}
        </ErrorQueueContext.Provider>
    )
}

export function useErrorQueue() {
    return useContext(ErrorQueueContext)
}