export const tableBox = {
    borderRadius: '20px', padding: '10px'
}
export const headerBox = {
    display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "space-between", mb: '40px'
  }
export const categoryBox = {
    display: 'flex', flexDirection: "row", gap: 5, alignItems: 'center'
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
    padding: "30px",
    borderRadius: '10px'
}