import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { theme } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import Cookies from "js-cookie";
import { task_getByUserId } from "./store/async_slices/slices/task/taskByUserId.task.slice";
import { getDecodedToken } from "./global/getDecodedToken";

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const token = Cookies.get("authorization") || ''
  const decoded = getDecodedToken(token);
   useEffect( () => {
    if (token !== '') {
       dispatch(task_getByUserId({ userId: decoded.user.id }))
    }
  }, [dispatch, decoded.user.id, token])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
