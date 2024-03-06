import { Box, TextField, Typography } from '@mui/material'
import { textFieldStyle } from '../../global/globalStyle'
import React from 'react'
import { taskInput } from '../../Types/taskInput'


type Props = {
    task: taskInput,
    setTask: React.Dispatch<React.SetStateAction<taskInput>>,
    titleErrors: string
}
const TitleTextField = ({task, setTask, titleErrors}: Props) => {
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