import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { cellsInTableBody, dataGridStyle } from './styles';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70, sortable: false, },
  { field: 'title', headerName: 'Title', width: 130, sortable: false, },
  { field: 'description', headerName: 'Description', width: 230, sortable: false, },
  {
    field: 'category',
    headerName: 'Category',
    sortable: true,
    width: 130,

  },
  {
    field: 'date',
    headerName: 'Date',
    width: 130,
    sortable: false,
  },
  { field: 'Written_by', headerName: 'WrittenBy', width: 130, sortable: false, },

  {
    field: 'action',
    headerName: 'Action',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 260,
    renderCell: RenderButtonGroupCell
  },
];

const rows = [
  { id: 1, title: 'Snow', description: 'Jon', category: 315, date: 35, Written_by: 'Snow' },
  { id: 2, title: 'Snow', description: 'Jon', category: 325, date: 35, Written_by: 'Snow' },
  { id: 3, title: 'Snow', description: 'Jon', category: 335, date: 35, Written_by: 'Snow' },
  { id: 4, title: 'Snow', description: 'Jon', category: 345, date: 35, Written_by: 'Snow' },
  { id: 5, title: 'Snow', description: 'Jon', category: 355, date: 35, Written_by: 'Snow' },
  { id: 6, title: 'Snow', description: 'Jon', category: 35, date: 35, Written_by: 'Snow' },
  { id: 7, title: 'Snow', description: 'Jon', category: 35, date: 35, Written_by: 'Snow' },
  { id: 8, title: 'Snow', description: 'Jon', category: 35, date: 35, Written_by: 'Snow' },
  { id: 9, title: 'Snow', description: 'Jon', category: 35, date: 35, Written_by: 'Snow' }
];
function RenderButtonGroupCell(params: any) {
  const navigate = useNavigate()
  return (
    <Box sx={cellsInTableBody}>
      <Button sx={{ mr: 2 }} variant='outlined' color='primary' onClick={() => navigate(`task/${params.row.id}`)}>Edit</Button>
      <Button variant='outlined' color='error'>Delete</Button>
    </Box>
  );
}
export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooterPagination
        sx={dataGridStyle}
      />
    </div>
  );
}
