import { Box, Button, Container, Typography } from '@mui/material'
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import { useEffect, useState } from 'react';
import { formatDate } from '../../global/formateDate';
import { boxContainer, addTaskForm, buttonBoxStyle, buttonStyle, homeTitle } from '../../global/globalStyle';
import { useLocation, useParams } from 'react-router-dom';
import TitleTextField from './TitleTextField';
import DescriptionTextField from './DiscriptionTextField';
import CategoryTextField from './CategoryTextField';
import { addEditTaskSuccess } from '../../global/sweetAlert';
import { validateForm } from './validationForm';
import { Task, TaskError } from '../../Types/Tasks';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, rootState } from '../../store/store';
import { getTaskById } from '../../store/async_slices/slices/task/getTaskById.task.slice';

const TaskForm = () => {

    const [task, setTask] = useState<Task>({
        title: "",
        description: "",
        category: undefined,
    });
    const [errors, setErrors] = useState<TaskError>({
        title: '',
        description: '',
        category: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm({ task, setErrors })) {
            console.log({ id: 1, ...task, date: formatDate(new Date()) })
            addEditTaskSuccess("new task added successfully")
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
                    Add your new task.
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
                                color={"success"}
                                sx={buttonStyle}
                            >
                                <AddCardOutlinedIcon />
                                <Typography variant='body1'>
                                    Add Task
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