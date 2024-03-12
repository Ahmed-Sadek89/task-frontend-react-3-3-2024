import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { theme } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
