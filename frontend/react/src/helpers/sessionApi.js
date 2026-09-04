import axios from 'axios'

export function createSessionAPI(baseURL) {
    return {
        createSession: () => axios.post(`${baseURL}/sessions`),

        checkSessionExists: (sessionId) => axios.get(`${baseURL}/sessions/${sessionId}`),

        getSessionState: (sessionId, userId) => axios.get(`${baseURL}/sessions/${sessionId}?userId=${userId}`),

        joinSession: (sessionId, username) => axios.post(`${baseURL}/sessions/${sessionId}/join`, JSON.stringify({ name: username })),

        vote: (sessionId, userId, vote) => axios.post(`${baseURL}/sessions/${sessionId}/vote`, JSON.stringify({
            user_id: userId,
            vote: vote
        })),

        showVotes: (sessionId, userId) => axios.post(`${baseURL}/sessions/${sessionId}/show`, JSON.stringify({ user_id: userId })),

        clearVotes: (sessionId, userId) => axios.post(`${baseURL}/sessions/${sessionId}/clear`, JSON.stringify({ user_id: userId })),
    }
}