import { textFieldStyle } from "../../global/globalStyle"

export const userContainerStyle = {
    height: '100vh',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
export const userLayoutStyle = {
    backgroundColor: "secondary.main",
    padding: { xs: "20px", md: "40px 20px" },
    width: { xs: "100%", md: "50%" },
    display: 'flex',
    flexDirection: "column",
    justifyContent: "flex-start",
    borderRadius: '5px',
    gap: { xs: 3, md: 5 }
}
export const pageTitle = { fontWeight: "bold", fontSize: "25px" }
export const formContent = { display: 'flex', flexDirection: "column", gap: { xs: 1, md: 3 } }
export const userTextField = {
    width: '100%',
    ...textFieldStyle

}
export const formButtonContent = { display: "flex", justifyContent: "center" }

export const fetchDataTextError = { textAlign: 'center', marginTop: "10px", fontStyle: "italic" }

export const checkAcc = {
    display: "flex",
    flexDirection: { xs: "column", md: 'row' },
    justifyContent: "center",
    alignItems: "center",
    gap: { xs: 0, md: 1 },
}
export const goToRoute = { cursor: "pointer", textDecoration: "underline", color: "secondary.contrastText" }