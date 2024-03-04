import {
    createBrowserRouter
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import AddTask from "../pages/AddTask/AddTask";
import EditTask from "../pages/EditTask/EditTask";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <h1>put error component here</h1>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'task/add',
                element: <AddTask />
            },
            {
                path: 'task/profile/:id',
                element: <Profile />
            },
            {
                path: 'task/:task_id',
                element: <EditTask />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
]);


export default routes;