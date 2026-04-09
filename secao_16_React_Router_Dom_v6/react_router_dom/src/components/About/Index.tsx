import { useLocation } from 'react-router-dom'
import './Index.css'


export const About = () => {

    const {state} = useLocation()

    return (
        <div>
            <h1>About</h1>
            <p>{state?.message || 'No message available'}</p>
        </div>
    )
}