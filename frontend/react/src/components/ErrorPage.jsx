import { useNavigate } from 'react-router-dom'

export default function ErrorPage({ message }) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div className="error-page">
            <div className="error-message">{message}</div>
            {/* <button className='usual-btn' name='go to home page' onClick={handleClick}>go home</button> */}
        </div>

    )
}