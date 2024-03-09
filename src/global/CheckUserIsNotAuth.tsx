import Cookies from 'js-cookie';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const CheckUserIsNotAuth = () => {
    const navigate = useNavigate()
    const token = Cookies.get("authorization");
    const isAuth = token && token?.length > 0 ? true : false;
    useEffect(() => {
        !isAuth && navigate("/login");
    }, [isAuth, navigate]);
}

export default CheckUserIsNotAuth