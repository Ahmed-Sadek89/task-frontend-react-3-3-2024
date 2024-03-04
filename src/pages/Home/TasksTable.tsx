import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import { cellsInTableBody, cellsInTableHead } from './styles';
import { rows, tableHeading } from './variables';
import { useNavigate } from 'react-router-dom';

const TasksTable = () => {
    const navigate = useNavigate()
    return (
        <Table sx={{ minWidth: 650 }}>
            <TableHead>
                <TableRow>
                    {
                        tableHeading.map(index => (
                            <TableCell key={index.title} sx={cellsInTableHead} align={index.align}>{index.title}</TableCell>
                        ))
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell sx={cellsInTableBody} align="left">#{row.id}</TableCell>
                        <TableCell sx={cellsInTableBody} align="center">{row.name}</TableCell>
                        <TableCell sx={cellsInTableBody} align="center">{row.calories}</TableCell>
                        <TableCell sx={cellsInTableBody} align="center">{row.fat}</TableCell>
                        <TableCell sx={cellsInTableBody} align="center">{row.carbs}</TableCell>
                        <TableCell sx={cellsInTableBody} align="center">{row.writtenBy}</TableCell>
                        <TableCell sx={{ ...cellsInTableBody }} align="right">
                            <Button sx={{ mr: 2 }} variant='outlined' color='primary' onClick={() => navigate(`task/${row.id}`)}>Edit</Button>
                            <Button variant='outlined' color='error'>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default TasksTable