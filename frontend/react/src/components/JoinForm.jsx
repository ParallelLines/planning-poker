import Form from './Form'

export default function JoinForm({ onJoin, cookieValue = '' }) {
    return (
        <main>
            <Form
                onSubmit={onJoin}
                errorMessage="type smth in pls 🙏"
                name="username"
                placeholder="your name..."
                required
                minLength={1}
                maxLength={20}
                cookieValue={cookieValue}
            />
        </main>
    )
}
