import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CheckAuthLogin = () => {
    const navigate = useNavigate()
    const token = Cookies.get("authorization") || ''
    useEffect(() => {
        token.length > 0 && navigate('/')
    }, [navigate,token ])
}

export default CheckAuthLogin