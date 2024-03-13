import { Task, TaskError } from "../../../Types/Tasks";

type props = {
    task: Task,
    setErrors: React.Dispatch<React.SetStateAction<TaskError>>
}
export const validateForm = ({ task, setErrors }: props) => {
    let valid = true;
    const newErrors: TaskError = {
        title: '',
        description: '',
        category: ''
    };
    if (task.title?.trim() === '') {
        newErrors.title = 'title is required';
        valid = false;
    }

    if (task.description?.trim() === '') {
        newErrors.description = 'description is required';
        valid = false;
    } else if (task.description && task.description.length > 30) {
        newErrors.description = 'description must be not more than 30 characters';
        valid = false;
    }

    if (task.description?.trim()  === "") {
        newErrors.category = 'category is required';
        valid = false;
    }
    setErrors(newErrors);

    return valid;
};