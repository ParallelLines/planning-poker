import { useMemo } from 'react'
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

            shouldReconnect: (closeEvent) => true,
            retryOnError: true,
            reconnectAttempts: 5,
            onReconnectStop,
            reconnectInterval: 1000,
            canConnect,
            onOpen: () => console.log('WS connection established'),
            onClose: (closeEvent) => {
                console.log('WS closed:', closeEvent.code, closeEvent.reason)
            },
            onError: (error) => {
                console.log('WS error:', error)
            }
        }
    )

    return { lastJsonMessage, readyState }
}