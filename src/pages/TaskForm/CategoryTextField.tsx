import { Box, MenuItem, TextField, Typography } from '@mui/material'
import { selectCategoryStyle } from '../../assets/globalStyle'
import React from 'react'
import { categories } from '../../assets/dummyTableData';

type taskInput = {
    title: string,
    description: string,
    category: string;
}
type Props = {
    task: taskInput,
    setTask: React.Dispatch<React.SetStateAction<taskInput>>,
    isCategory: boolean
}
const CategoryTextField = ({ task, setTask, isCategory }: Props) => {
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
                isCategory === false &&
                <Typography color='error' sx={{ fontStyle: "italic" }}>Category is required *</Typography>
            }
        </Box>
    )
}

export default CategoryTextField