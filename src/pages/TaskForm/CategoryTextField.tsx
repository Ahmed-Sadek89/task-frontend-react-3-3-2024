import { Box, MenuItem, TextField, Typography } from '@mui/material'
import { selectCategoryStyle } from '../../global/globalStyle'
import React from 'react'
import { categories } from '../../global/dummyTableData';
import { taskInput } from '../../Types/taskInput';


type Props = {
    task: taskInput,
    setTask: React.Dispatch<React.SetStateAction<taskInput>>,
    categoryErrors: string
}
const CategoryTextField = ({ task, setTask, categoryErrors }: Props) => {
    return (
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
                categoryErrors !== '' &&
                <Typography color='error' sx={{ fontStyle: "italic" }}>{categoryErrors} *</Typography>
            }
        </Box>
    )
}

export default CategoryTextField