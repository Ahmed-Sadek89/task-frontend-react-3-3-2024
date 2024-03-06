import { Box, Button, Container, Typography } from '@mui/material'
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import { useState } from 'react';
import { formatDate } from '../../global/formateDate';
import { boxContainer, addTaskForm, buttonBoxStyle, buttonStyle, homeTitle } from '../../global/globalStyle';
import { checkTaskFormvalidate } from '../../global/checkTaskFormvalidate';
import { useLocation, useParams } from 'react-router-dom';
import { rows } from '../../global/dummyTableData';
import CheckPageName from './CheckPageName';
import TaskState from './TaskState';
import TitleTextField from './TitleTextField';
import DescriptionTextField from './DiscriptionTextField';
import CategoryTextField from './CategoryTextField';

const TaskForm = () => {
    const { task_id } = useParams();
    const location = useLocation();
    const myTask = rows.filter(index => index.id.toString() === task_id)

    CheckPageName(myTask)
    const [task, setTask] = TaskState(myTask)
    const [isTitle, setIsTitle] = useState(true)
    const [isDescripton, setIsDescripton] = useState(true)
    const [isCategory, setIsCategory] = useState(true)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        checkTaskFormvalidate(task, { setIsTitle, setIsDescripton, setIsCategory })
        const taskState = {
            id: 1,
            ...task,
            date: formatDate(new Date()),
            status: "pending",
            owner: "Ahmed sadek"
        }
        if (isCategory === true && isTitle === true && isDescripton === true) {
            if (location.pathname !== '/task/add') {
                console.log("task updated successfully ", taskState)
            } else {
                console.log("task added successfully ", taskState)
            }
        }
    }
    return (
        <Container>
            <Box sx={boxContainer}>
                <Typography sx={homeTitle} >
                    {myTask.length === 0 ? 'Add your new task.' : `Edit your new task number #${task_id}`}
                </Typography>
                <Container>
                    <Box component='form' sx={addTaskForm} onSubmit={e => handleSubmit(e)}>
                        <TitleTextField task={task} setTask={setTask} isTitle={isTitle} />
                        <DescriptionTextField task={task} setTask={setTask} isDescripton={isDescripton} />
                        <CategoryTextField task={task} setTask={setTask} isCategory={isCategory} />
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