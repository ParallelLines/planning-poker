import { useEffect, useMemo, useRef } from 'react'
import useWebSocket from 'react-use-websocket'

export function useSessionSocket(baseURL, sessionId, userId, handlers = {}) {
    const { onReconnectStop } = handlers
    const canConnect = sessionId !== null && userId !== null

    const wsURL = useMemo(() => {
        if (!canConnect) return null
        const wsBase = baseURL
            .replaceAll('https://', 'wss://')
            .replaceAll('http://', 'ws://')
        return `${wsBase}/sessions/${sessionId}/get/${userId}`
    }, [baseURL, sessionId, userId, canConnect])

    const { lastJsonMessage, readyState } = useWebSocket(
        wsURL,
        {
            // onOpen: () => console.log('WS connection established'),
            shouldReconnect: (closeEvent) => true,
            reconnectAttempts: 5,
            onReconnectStop,
            reconnectInterval: 1000,
            canConnect,
        }
    )

    return { lastJsonMessage, readyState }
}