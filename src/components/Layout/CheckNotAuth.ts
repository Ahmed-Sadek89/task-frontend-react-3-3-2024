import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CheckNotAuth = () => {
    const navigate = useNavigate()
    const token = Cookies.get("authorization") || ''
    useEffect(() => {
        token.length === 0 && navigate('/login')
    }, [navigate, token])
}

export default CheckNotAuth