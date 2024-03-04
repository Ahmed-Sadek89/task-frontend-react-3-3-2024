import { TableContainer, Box, Typography, Button, Paper } from '@mui/material';
import { addTaskBtn, categoryBox, headerBox, tableBox, tableContainer } from './styles';
import DropDownCategory from './DropDownCategory';
import TasksTable from './TasksTable';
import { useNavigate } from 'react-router-dom';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';

export default function Home() {
  const navigate = useNavigate()
  return (
    <TableContainer sx={tableContainer} component={Paper}>
      <Box boxShadow={2} sx={tableBox}>
        <Box sx={headerBox}>
          <Box sx={categoryBox}>
            <Typography variant="h6">
              Sort by category:
            </Typography>
            <DropDownCategory />
          </Box>
          <Button sx={addTaskBtn} variant='contained' color='success' onClick={() => navigate('/task/add')}>
            <AddCardOutlinedIcon />
            <Typography variant='body1'>
              Add a task
            </Typography>
          </Button>
        </Box>
        <TasksTable />
      </Box>
    </TableContainer >
  );
}