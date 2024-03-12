import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store/store';
import { task_getByUserId } from './store/async_slices/slices/task/taskByUserId.task.slice';
import { getInfoFromDecodedToken } from './global/getDecodedToken';

const GetTasksForAuthUser = () => {
    const dispatch = useDispatch<AppDispatch>();
    const decoded = getInfoFromDecodedToken()

    useEffect(() => {
        dispatch(task_getByUserId({ userId: decoded.user.id }))
    }, [dispatch, decoded.user.id])
}

export default GetTasksForAuthUser