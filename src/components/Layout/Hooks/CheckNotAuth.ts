import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch } from '../../../store/store'
import { task_getByUserId } from '../../../store/async_slices/slices/task/taskByUserId.task.slice'
import { getInfoFromDecodedToken } from '../../../global/getDecodedToken'

const CheckNotAuth = () => {
    const navigate = useNavigate()
    const token = Cookies.get("authorization") || '';
    const dispatch = useDispatch<AppDispatch>();
    const decoded = getInfoFromDecodedToken()
    useEffect(() => {
        if(token.length === 0) {
            navigate('/login')
        } else {
            dispatch(task_getByUserId({userId: decoded.user.id}))
        }
    }, [navigate, token, dispatch, decoded.user.id])
}

export default CheckNotAuth