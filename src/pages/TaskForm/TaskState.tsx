import { useState } from 'react'
import { Task } from '../../Types/Tasks'

const TaskState = (myTask: Task) => {
    return useState({
        title: myTask[0]?.title || '',
        description: myTask[0]?.description || '',
        category: myTask[0]?.category || '',
    })
}

export default TaskState