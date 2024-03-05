import { useNavigate } from "react-router-dom";
import { cellsInTableBody } from "./styles";
import { Box, Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { Task } from "../../Types/Tasks";
import { useState } from "react";
import { deleteTaskAlert } from "../../assets/sweetAlert";

export const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50, sortable: false, },
    { field: 'title', headerName: 'Title', width: 200, sortable: false, },
    { field: 'description', headerName: 'Description', width: 300, sortable: false, },
    {
        field: 'category',
        headerName: 'Category',
        sortable: true,
        width: 150,
    },
    {
        field: 'date',
        headerName: 'Date',
        width: 150,
        sortable: false,
    },
    {
        field: 'status',
        headerName: 'status',
        width: 200,
        sortable: false,
        renderCell: RenderStatusCell
    },
    {
        field: 'action',
        headerName: 'Action',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 300,
        renderCell: RenderButtonGroupCell
    },
];

function RenderStatusCell(params: Task | any) {
    const [status, setStatus] = useState<string>(params.row.status)
    return (
        <Button
            sx={{ mr: 2 }}
            variant='outlined'
            color={status === 'pending' ? 'warning' : 'success'}
            onClick={() => setStatus((prev) => prev === 'completed' ? 'pending' : "completed")}
        >
            {status}
        </Button>)
}

function RenderButtonGroupCell(params: Task | any) {
    const navigate = useNavigate()
    const handleDelete = (id: number) => {
        deleteTaskAlert(id)
    }
    return (
        <Box sx={cellsInTableBody}>
            <Button
                sx={{ mr: 2 }}
                variant='contained'
                color='primary'
                onClick={() => navigate(`task/${params.row.id}`)}
            >Edit</Button>
            <Button variant='contained' color='error'
                onClick={() => handleDelete(params.row.id)}
            >Delete</Button>
        </Box>
    );
}