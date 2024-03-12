import { DataGrid } from '@mui/x-data-grid';
import { dataGridStyle } from '../styles';
import { columns } from './RenderButtonGroupCell';
import { useSelector } from 'react-redux';
import { rootState } from '../../../store/store';
import { Typography } from '@mui/material';

export default function DataTable() {
  const { data, loading } = useSelector((state: rootState) => state.getTaskByUserId);
  return (
    <div style={{ height: 500, width: '100%' }}>
      {loading === true && <Typography variant='h3' color="secondary.light">loading...</Typography>}
      {
        (loading === false && data) &&
        <DataGrid
          rows={data ? data : []}
          columns={columns}
          hideFooterPagination
          sx={dataGridStyle}
        />
      }
    </div>
  );
}
