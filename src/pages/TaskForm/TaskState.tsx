import { useState } from 'react'
import { useSelector } from 'react-redux';
import { rootState } from '../../store/store';

const TaskState = () => {
    const { data } = useSelector((state: rootState) => state.getTaskById);
    const task = data ? data[0] : {
        title: "",
        description: "",
        category: undefined
    }

    console.log({data})
    return useState({
        title: data && data[0]?.title,
        description: data && data[0]?.description,
        category:  data && data[0]?.category,
    })
}

export default TaskState