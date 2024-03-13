import { useState } from 'react'
import { Task } from '../../Types/Tasks'
import { useLocation } from 'react-router-dom';

const TaskState = () => {
    const { state }: { state: Task } = useLocation();
    return useState<Task>({
        title: state ? state.title : "",
        description: state ? state.description : "",
        category: state ? state.category : "",
    });
}

export default TaskState