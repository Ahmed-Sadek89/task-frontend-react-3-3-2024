import { Box, Button, Container, Typography } from '@mui/material'
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import { useState } from 'react';
import { formatDate } from '../../global/formateDate';
import { boxContainer, addTaskForm, buttonBoxStyle, buttonStyle, homeTitle } from '../../global/globalStyle';
import { useLocation, useParams } from 'react-router-dom';
import { rows } from '../../global/dummyTableData';
import TaskState from './TaskState';
import TitleTextField from './TitleTextField';
import DescriptionTextField from './DiscriptionTextField';
import CategoryTextField from './CategoryTextField';
import { addEditTaskSuccess } from '../../global/sweetAlert';
import { validateForm } from './validationForm';

const TaskForm = () => {
    const { task_id } = useParams();
    const location = useLocation();
    const myTask = rows.filter(index => index.id.toString() === task_id)

    const [task, setTask] = TaskState(myTask)
    const [errors, setErrors] = useState({
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
                    {myTask.length === 0 ? 'Add your new task.' : `Edit your new task number #${task_id}`}
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
                                color={myTask.length === 0 ? "success" : "info"}
                                sx={buttonStyle}
                            >
                                <AddCardOutlinedIcon />
                                <Typography variant='body1'>
                                    {myTask.length === 0 ? "Add " : "Edit "}Task
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