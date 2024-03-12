import {
    createBrowserRouter
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import TaskForm from "../pages/TaskForm/TaskForm";
import User from "../pages/User/User";
import Error from "../components/Error/Error";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
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
        element: <User />
    },
    {
        path: '/register',
        element: <User />
    },
]);


export default routes;