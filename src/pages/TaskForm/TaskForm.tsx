import { Box, Button, Container, Typography } from '@mui/material'
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import { useEffect, useState } from 'react';
import { formatDate } from '../../global/formateDate';
import { boxContainer, addTaskForm, buttonBoxStyle, buttonStyle, homeTitle } from '../../global/globalStyle';
import { useLocation, useParams } from 'react-router-dom';
import TaskState from './TaskState';
import TitleTextField from './TitleTextField';
import DescriptionTextField from './DiscriptionTextField';
import CategoryTextField from './CategoryTextField';
import { addEditTaskSuccess } from '../../global/sweetAlert';
import { validateForm } from './validationForm';
import { TaskError } from '../../Types/Tasks';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, rootState } from '../../store/store';
import { getTaskById } from '../../store/async_slices/slices/task/getTaskById.task.slice';

const TaskForm = () => {
    const { task_id } = useParams();
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(getTaskById({id: parseInt(task_id || '0')}))
    }, [dispatch, task_id]);

    const location = useLocation();
    const taskById = useSelector((state: rootState) => state.getTaskById);
    console.log(taskById)
    const [task, setTask] = TaskState(taskById.data);
    console.log(task)
    const [errors, setErrors] = useState<TaskError>({
        title: '',
        description: '',
        category: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm({task, setErrors})) {
            console.log({id: 1, ...task, date: formatDate(new Date())})
            if (location.pathname === '/task/add') {
                addEditTaskSuccess("new task added successfully")
            } else if (location.pathname === `/task/${task_id}`) {
                addEditTaskSuccess("this task updated successfully")
            }
            setTask({
                title: "", description: "", category: undefined
            })
        } else {
            console.log('task Form validation failed');
        }
    };
    return (
        <Container>
            <Box sx={boxContainer}>
                <Typography sx={homeTitle} >
                    {!taskById.data ? 'Add your new task.' : `Edit your new task number #${task_id}`}
                </Typography>
                <Container>
                    <Box component='form' sx={addTaskForm} onSubmit={e => handleSubmit(e)}>
                        <TitleTextField task={task} setTask={setTask} titleErrors={errors.title} />
                        <DescriptionTextField task={task} setTask={setTask} descriptionErrors={errors.description} />
                        <CategoryTextField task={task} setTask={setTask} categoryErrors={errors.category} />
                        <Box sx={buttonBoxStyle}>
                            <Button
                                type='submit'
                                variant='contained'
                                color={taskById.data ? "success" : "info"}
                                sx={buttonStyle}
                            >
                                <AddCardOutlinedIcon />
                                <Typography variant='body1'>
                                    {taskById.data ? "Add " : "Edit "}Task
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Container>
    )
}

export default TaskForm