import { Box, MenuItem, TextField, Typography } from '@mui/material'
import { selectCategoryStyle } from '../../../global/globalStyle'
import React from 'react'
import { Task } from '../../../Types/Tasks';


type Props = {
    task: Task,
    setTask: React.Dispatch<React.SetStateAction<Task>>,
    categoryErrors: string
}
const categories = ['WORK', 'PERSONAL', 'SHOPPING', 'OTHERS'];

const CategoryTextField = ({ task, setTask, categoryErrors }: Props) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: "column" }}>
            <TextField
                select
                variant="outlined"
                label="Category"
                defaultValue="WORK"
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
                    categories.map((index) => (
                        <MenuItem
                            key={index}
                            value={index}
                            sx={{ textTransform: "capitalize" }}
                        > {index.toLowerCase()} </MenuItem>
                    ))
                }
            </TextField>
            {
                categoryErrors !== '' &&
                <Typography color='error' sx={{ fontStyle: "italic" }}>{categoryErrors} *</Typography>
            }
        </Box>
    )
}

export default CategoryTextField