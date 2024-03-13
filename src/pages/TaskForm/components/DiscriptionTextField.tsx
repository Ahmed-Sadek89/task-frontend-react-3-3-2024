import { Box, TextField, Typography } from '@mui/material'
import { textFieldStyle } from '../../../global/globalStyle'
import React from 'react'
import { Task } from '../../../Types/Tasks'


type Props = {
    task: Task,
    setTask: React.Dispatch<React.SetStateAction<Task>>,
    descriptionErrors: string
}
const DescriptionTextField = ({ task, setTask, descriptionErrors }: Props) => {
    return (
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
                descriptionErrors !== '' &&
                <Typography color='error' sx={{ fontStyle: "italic" }}>{descriptionErrors} *</Typography>
            }
        </Box>
    )
}

export default DescriptionTextField