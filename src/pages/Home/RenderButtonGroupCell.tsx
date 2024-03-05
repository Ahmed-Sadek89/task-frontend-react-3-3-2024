import { useNavigate } from "react-router-dom";
import { cellsInTableBody } from "./styles";
import { Box, Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100, sortable: false, },
    { field: 'title', headerName: 'Title', width: 150, sortable: false, },
    { field: 'description', headerName: 'Description', width: 400, sortable: false, },
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
    { field: 'status', headerName: 'status', width: 130, sortable: true, },
    {
        field: 'action',
        headerName: 'Action',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 400,
        renderCell: RenderButtonGroupCell
    },
];

function RenderButtonGroupCell(params: any) {
    const navigate = useNavigate()
    return (
        <Box sx={cellsInTableBody}>
            <Button sx={{ mr: 2 }} variant='outlined' color='warning' >Completed</Button>
            <Button sx={{ mr: 2 }} variant='outlined' color='primary' onClick={() => navigate(`task/${params.row.id}`)}>Edit</Button>
            <Button variant='outlined' color='error'>Delete</Button>
        </Box>
    );
}