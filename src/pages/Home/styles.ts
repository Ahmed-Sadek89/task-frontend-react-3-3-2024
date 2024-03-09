export const dataGridStyle = {
    "& .MuiDataGrid-main": {
        backgroundColor: "secondary.main",
        width: '91vw',
        overflowX: {xs: "scroll", md: "auto"},
    },
    "& .MuiDataGrid-columnHeaderTitle": {
        fontWeight: "bold",
        fontSize: "17px"
    },
    '& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell': {
        backgroundColor: "secondary.main",
        color: "secondary.contrastText",
        borderBottom: '1px solid #dee2e6',
    },
    '& .MuiDataGrid-row': {
        backgroundColor: "secondary.main",
        color: "secondary.contrastText",
        '&:hover': {
            backgroundColor: '#f5f5f5',
        },
    },
    "& .MuiDataGrid-footerContainer ": { display: 'none' },
    "& .MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell": {
        overflow: 'visible',
        whiteSpace: 'nowrap',
    }
}

export const tableBox = {
    borderRadius: '20px', padding: '10px'
}
export const headerBox = {
    display: 'flex', 
    flexDirection: {xs:"column", md: "row"}, 
    alignItems: "center", 
    justifyContent: {xs:"flex-start", md: "space-between"}, 
    gap: 3,
    mb: '40px'
}


export const addTaskBtn = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2
}
export const cellsInTableHead = {
    color: "secondary.contrastText",
    fontWeight: "bold",
    borderColor: "secondary.contrastText",
    borderBottomWidth: "2px",
    fontSize: "20px"
}
export const cellsInTableBody = {
    ...cellsInTableHead,
    fontSize: 'normal',
    fornWeight: "normal"
}
export const tableContainer = {
    backgroundColor: "secondary.main",
    padding: {xs: "30px 0px", md: "30px"},
    borderRadius: '10px'
}