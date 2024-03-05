import { Box, Button, Container, MenuItem, TextField, Typography } from '@mui/material'
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { addTaskForm, boxHomeContainer, buttonBoxStyle, buttonStyle, datePickerStyle, homeTitle, selectCategoryStyle, textFieldStyle } from './styles';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import { useState } from 'react';
import dayjs from 'dayjs';


const AddTask = () => {
  const categories = ['work', 'personal', 'shopping', 'others'];
  const [task, setTask] = useState({
    title: "",
    description: "",
    category: '',
    date: ""
  })
  const [selectedDate, setSelectedDate] = useState<Date| null>(null);
  const handleDateChange = (newDate: Date| null) => {
    setSelectedDate(newDate);
    const formatedDate = dayjs(newDate).format('MM/DD/YYYY HH:mm')
    setTask((prev) => {
      return {
        ...prev,
        date: formatedDate
      }
    })
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("task added successfully ", {...task})
  }
  return (
    <Container>
      <Box sx={boxHomeContainer}>
        <Typography sx={homeTitle} >Add your new task...</Typography>
        <Container>
          <Box component='form' sx={addTaskForm} onSubmit={e => handleSubmit(e)}>
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                sx={datePickerStyle}
                format="MM/DD/YYYY HH:mm"
                label="Select Date and Time"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </LocalizationProvider>
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

export default AddTask