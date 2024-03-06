import { Box, TextField, Typography } from '@mui/material'
import { textFieldStyle } from '../../global/globalStyle'
import React from 'react'

type taskInput = {
    title: string,
    description: string,
    category: string;
}
type Props = {
    task: taskInput,
    setTask: React.Dispatch<React.SetStateAction<taskInput>>,
    isTitle: boolean
}
const TitleTextField = ({task, setTask, isTitle}: Props) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: "column" }}>
            <TextField
                label="Title"
                variant="outlined"
                sx={textFieldStyle}
                value={task?.title}
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
    )
}

export default TitleTextField