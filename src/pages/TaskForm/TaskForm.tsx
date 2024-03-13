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

const TaskForm = () => {
    const { state }: { state: Task } = useLocation();
    const [task, setTask] = TaskState()
    const [errors, setErrors] = useState<TaskError>({
        title: '',
        description: '',
        category: ''
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm({ task, setErrors })) {
            console.log({ id: 1, ...task })
            addEditTaskSuccess("new task added successfully")
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
                    {state ? `Edit the task number #${state.id}` :"Add your new task."}
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
                                color={state ? "info" :"success"}
                                sx={buttonStyle}
                            >
                                <AddCardOutlinedIcon />
                                <Typography variant='body1'>
                                    {state ? "Edit the ": "Add a "} Task
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