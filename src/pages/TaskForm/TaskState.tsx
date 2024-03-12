import { useState } from 'react'
import { Task } from '../../Types/Tasks'

const TaskState = (myTask: Task[]| null) => {
    let task = myTask ? myTask[0] : {};
    console.log(task)
    return useState({
        title: '',
        description:'',
        category:undefined,
    })
}

export default TaskState