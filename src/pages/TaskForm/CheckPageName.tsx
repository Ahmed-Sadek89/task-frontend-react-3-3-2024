import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Task } from '../../Types/Tasks';


const CheckPageName = (myTask: Task) => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (location.pathname !== '/task/add') {
            if (myTask.length === 0) {
                navigate('/')
            }
        }
    }, [location, myTask, navigate])
}

export default CheckPageName