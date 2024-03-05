import { DataGrid} from '@mui/x-data-grid';
import { dataGridStyle } from './styles';
import { rows } from '../../assets/dummyTableData';
import { columns } from './RenderButtonGroupCell';

export default function DataTable() {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooterPagination
        sx={dataGridStyle}
      />
    </div>
  );
}
