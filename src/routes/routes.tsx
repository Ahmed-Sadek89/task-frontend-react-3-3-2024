import {
    createBrowserRouter
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import TaskForm from "../pages/TaskForm/TaskForm";


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
                element: <TaskForm />
            },
            {
                path: 'task/profile/:id',
                element: <Profile />
            },
            {
                path: 'task/:task_id',
                element: <TaskForm />
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