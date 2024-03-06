import { taskInput } from "../../Types/taskInput";

type props = {
    task: taskInput,
    setErrors: React.Dispatch<React.SetStateAction<taskInput>>
}
export const validateForm = ({ task, setErrors }: props) => {
    let valid = true;
    const newErrors: taskInput = {
        title: '',
        description: '',
        category: ''
    };

    if (!task.title.trim()) {
        newErrors.title = 'title is required';
        valid = false;
    }

    if (!task.description.trim()) {
        newErrors.description = 'description is required';
        valid = false;
    } else if (task.description.length > 30) {
        newErrors.description = 'description must be not more than 30 characters';
        valid = false;
    }

    if (!task.category.trim()) {
        newErrors.category = 'category is required';
        valid = false;
    }
    setErrors(newErrors);

    return valid;
};