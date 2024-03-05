import { Box, TextField, Typography } from '@mui/material'
import { textFieldStyle } from '../../assets/globalStyle'
import React from 'react'

type taskInput = {
    title: string,
    description: string,
    category: string;
}
type Props = {
    task: taskInput,
    setTask: React.Dispatch<React.SetStateAction<taskInput>>,
    isDescripton: boolean
}
const DescriptionTextField = ({ task, setTask, isDescripton }: Props) => {
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
                isDescripton === false &&
                <Typography color='error' sx={{ fontStyle: "italic" }}>Description is required *</Typography>
            }
        </Box>
    )
}

export default DescriptionTextField