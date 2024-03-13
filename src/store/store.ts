import { configureStore } from "@reduxjs/toolkit";
import user_register_slice from "./async_slices/slices/user/register.user.slice";
import user_login_slice from "./async_slices/slices/user/login.user.slice";
import taskByUserIdTaskSlice from "./async_slices/slices/task/taskByUserId.task.slice";
import updateByIdTaskSlice from "./async_slices/slices/task/updateById.task.slice";
import getTaskByIdTaskSlice from "./async_slices/slices/task/getTaskById.task.slice";
import insertTaskTaskSlice from "./async_slices/slices/task/insertTask.task.slice";
import deleteTaskById_slice from "./async_slices/slices/task/deleteTaskById.task.slice";

export const store = configureStore({
    reducer: {
        user_register: user_register_slice,
        userLogin: user_login_slice,

        getTaskByUserId: taskByUserIdTaskSlice,
        updateTaskById: updateByIdTaskSlice,
        getTaskById: getTaskByIdTaskSlice,
        insertTask: insertTaskTaskSlice,
        deleteTaskById: deleteTaskById_slice
    }
})

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch