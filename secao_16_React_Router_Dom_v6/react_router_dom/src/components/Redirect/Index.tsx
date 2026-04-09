import './Index.css'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'




export const Redirect = () => {
    const [time, setTime] = useState(5)
    const timeout = useRef(0)
    const navigate = useNavigate()

    useEffect(() => {
        clearTimeout(timeout.current)

        if (time <= 0) {
            navigate('/')
            return
        }
        timeout.current = window.setTimeout(() => {
            setTime((t) => t - 1)
        }, 1000)
    })

    return (
        <div>
            <h1>Get out of here in: {time}</h1>
        </div>
    )
}