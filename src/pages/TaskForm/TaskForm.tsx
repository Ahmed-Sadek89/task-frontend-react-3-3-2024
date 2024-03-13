import { Box, Button, Container, Typography } from '@mui/material'
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import { useState } from 'react';
import { boxContainer, addTaskForm, buttonBoxStyle, buttonStyle, homeTitle } from '../../global/globalStyle';
import TitleTextField from './components/TitleTextField';
import DescriptionTextField from './components/DiscriptionTextField';
import CategoryTextField from './components/CategoryTextField';
import { addEditTaskSuccess } from '../../global/sweetAlert';
import { validateForm } from './hooks/validationForm';
import { Task, TaskError } from '../../Types/Tasks';
import { useLocation } from 'react-router-dom';
import TaskState from './hooks/TaskState';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, rootState } from '../../store/store';
import { updateTaskById } from '../../store/async_slices/slices/task/updateById.task.slice';
import { insertTask } from '../../store/async_slices/slices/task/insertTask.task.slice';
import { getInfoFromDecodedToken } from '../../global/getDecodedToken';

const TaskForm = () => {
    const { state }: { state: Task } = useLocation();
    const dispatch = useDispatch<AppDispatch>();
    const [task, setTask] = TaskState()
    const [errors, setErrors] = useState<TaskError>({
        title: '',
        description: '',
        category: ''
    });
    const updatetaskState = useSelector((state: rootState) => state.updateTaskById);
    const insertTaskState = useSelector((state: rootState) => state.insertTask);
    const decoded = getInfoFromDecodedToken()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm({ task, setErrors })) {
            if (state === null) {
                await dispatch(insertTask({ ...task, userId: decoded.user.id }))
                    .then(() => {
                        addEditTaskSuccess("new task added successfully")
                            .then(() => window.location.href = "/")
                    })
            } else {
                await dispatch(updateTaskById({ id: state.id, ...task }))
                    .then(() => {
                        addEditTaskSuccess("the task is updated successfully")
                            .then(() => window.location.href = "/")
                    })
            }
            setTask({
                title: "", description: "", category: ""
            })
        } else {
            console.log('task Form validation failed');
        }
    };
    return (
        <Container>
            <Box sx={boxContainer}>
                <Typography sx={homeTitle} >
                    {state ? `Edit the task number #${state.id}` : "Add your new task."}
                </Typography>
                <Container>
                    <Box component='form' sx={addTaskForm} onSubmit={e => handleSubmit(e)}>
                        <TitleTextField task={task} setTask={setTask} titleErrors={errors.title} />
                        <DescriptionTextField task={task} setTask={setTask} descriptionErrors={errors.description} />
                        <CategoryTextField task={task} setTask={setTask} categoryErrors={errors.category} />
                        <Box sx={buttonBoxStyle}>
                            <Button
                                type='submit'
                                disabled={
                                    updatetaskState.loading === true || insertTaskState.loading === true ?
                                        true :
                                        false
                                }
                                variant='contained'
                                color={state ? "info" : "success"}
                                sx={buttonStyle}
                            >
                                <AddCardOutlinedIcon />
                                <Typography variant='body1'>
                                    {state ? "Edit the " : "Add a "} Task
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