import { Box, Button, Container, MenuItem, TextField, Typography } from '@mui/material'
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import { useState } from 'react';
import { formatDate } from '../../assets/formateDate';
import { boxContainer, addTaskForm, buttonBoxStyle, buttonStyle, homeTitle, selectCategoryStyle, textFieldStyle } from '../../assets/globalStyle';
import { checkTaskFormvalidate } from '../../assets/checkTaskFormvalidate';
import { useLocation, useParams } from 'react-router-dom';
import { categories, rows } from '../../assets/dummyTableData';
import CheckPageName from './CheckPageName';
import TaskState from './TaskState';

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
                <Typography sx={homeTitle} >Edit your new task number #{task_id}</Typography>
                <Container>
                    <Box component='form' sx={addTaskForm} onSubmit={e => handleSubmit(e)}>
                        <Box sx={{ display: 'flex', flexDirection: "column" }}>
                            <TextField
                                label="Title"
                                variant="outlined"
                                sx={textFieldStyle}
                                value={task.title}
                                onChange={(e) => setTask((prev) => {
                                    return {
                                        ...prev,
                                        title: e.target.value
                                    }
                                })}
                            />
                            {
                                isTitle === false &&
                                <Typography color='error' sx={{ fontStyle: "italic" }}>Title is required *</Typography>
                            }
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: "column" }}>
                            <TextField
                                label="Description"
                                multiline
                                variant="outlined"
                                maxRows={10}
                                sx={textFieldStyle}
                                value={task.description}
                                onChange={(e) => setTask((prev) => {
                                    return {
                                        ...prev,
                                        description: e.target.value
                                    }
                                })}
                            />
                            {
                                isDescripton === false &&
                                <Typography color='error' sx={{ fontStyle: "italic" }}>Description is required *</Typography>
                            }
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: "column" }}>
                            <TextField
                                select
                                variant="outlined"
                                label="Category"
                                defaultValue="work"
                                sx={selectCategoryStyle}
                                value={task.category}
                                onChange={(e) => setTask((prev) => {
                                    return {
                                        ...prev,
                                        category: e.target.value
                                    }
                                })}
                            >
                                {
                                    categories.map((index) => (<MenuItem key={index} value={index}> {index} </MenuItem>))
                                }
                            </TextField>
                            {
                                isCategory === false &&
                                <Typography color='error' sx={{ fontStyle: "italic" }}>Category is required *</Typography>
                            }
                        </Box>

                        <Box sx={buttonBoxStyle}>
                            <Button type='submit' variant='contained' color="success" sx={buttonStyle}>
                                <AddCardOutlinedIcon />
                                <Typography variant='body1'>Add Task</Typography>
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>

        </Container>
    )
}

export default TaskForm