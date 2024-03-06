import { textFieldStyle } from "../../global/globalStyle"

export const userContainerStyle = {
    height: '100vh',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
export const userLayoutStyle = {
    backgroundColor: "secondary.main",
    padding: "40px 20px",
    width: { xs: "100%", md: "50%" },
    display: 'flex',
    flexDirection: "column",
    justifyContent: "flex-start",
    borderRadius: '5px',
    gap: 5
}
export const pageTitle = { fontWeight: "bold", fontSize: "25px" }
export const formContent = { display: 'flex', flexDirection: "column", gap: 3 }
export const userTextField = {
    width: '100%',
    ...textFieldStyle

}
export const formButtonContent = { display: "flex", justifyContent: "center" }
export const linkedInContent = { display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 1 }
export const ORAccount = {
    backgroundColor: "secondary.dark", padding: "10px",
    color: "secondary.contrastText", border: "2px dotted",
    borderColor: "secondary.contrastText",
    borderRadius: "50%"
}
export const checkAcc = { display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }
export const goToRoute = { cursor: "pointer", textDecoration: "underline", color: "secondary.contrastText" }