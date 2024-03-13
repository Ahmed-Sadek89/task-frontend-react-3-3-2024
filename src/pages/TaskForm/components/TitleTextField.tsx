import { Box, TextField, Typography } from '@mui/material'
import { textFieldStyle } from '../../../global/globalStyle'
import React from 'react'
import { Task } from '../../../Types/Tasks'


type Props = {
    task: Task,
    setTask: React.Dispatch<React.SetStateAction<Task>>,
    titleErrors: string | undefined
}
const TitleTextField = ({ task, setTask, titleErrors }: Props) => {
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
                titleErrors !== '' &&
                <Typography color='error' sx={{ fontStyle: "italic" }}>{titleErrors}*</Typography>
            }
        </Box>
    )
}

export default TitleTextField