import { Link } from "react-router-dom";
import { cellsInTableBody } from "../styles";
import { Box, Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { Task } from "../../../Types/Tasks";
import { useState } from "react";
import { deleteTaskAlert } from "../../../global/sweetAlert";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, rootState } from "../../../store/store";
import { updateTaskById } from "../../../store/async_slices/slices/task/updateById.task.slice";

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
        width: 250,
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
    const [status, setStatus] = useState<string>(params.row.status);
    const dispatch = useDispatch<AppDispatch>();

    const handleUpdateTaskState = async () => {
        setStatus((prev) => prev === 'COMPLETED' ? 'PENDING' : "COMPLETED")
        await dispatch(updateTaskById({
            id: params.row.id, status: params.row.status === 'COMPLETED' ? 'PENDING' : "COMPLETED",
        }))
    }
    return (
        <Button
            sx={{ mr: 2 }}
            variant='outlined'
            color={status === 'PENDING' ? 'warning' : 'success'}
            onClick={handleUpdateTaskState}
        >
            {status}
        </Button>)
}

function RenderButtonGroupCell(params: Task | any) {
    const handleDelete = (id: number) => {
        deleteTaskAlert(id)
    }
    const tasks = useSelector((state: rootState) => state.getTaskByUserId)
    return (
        <Box sx={cellsInTableBody}>
            <Link to={`task/${params.row.id}`} state={tasks.data?.filter(index => index.id === params.row.id)[0]}>
                <Button
                    sx={{ mr: 2 }}
                    variant='contained'
                    color='primary'
                >Edit</Button>
            </Link>
            <Button variant='contained' color='error'
                onClick={() => handleDelete(params.row.id)}
            >Delete</Button>
        </Box>
    );
}