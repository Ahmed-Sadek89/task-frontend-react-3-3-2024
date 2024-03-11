import React from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../store/store'
import { useNavigate } from 'react-router-dom';
import { userOutput } from '../../../store/async_slices/interfaces/user.interface';
import { userDataInput } from '../../../Types/userDataInput';
import { user_login } from '../../../store/async_slices/slices/user/login.user.slice';
import Cookies from 'js-cookie';

type props = {
    userDataInput: userDataInput,
    setUserDataInput: React.Dispatch<React.SetStateAction<userDataInput>>
}
const SetLogin = ({ userDataInput, setUserDataInput }: props) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()
    const handleLogin = async () => {
        await dispatch(user_login({
            email: userDataInput.email,
            password: userDataInput.password,
        })).then(({ payload }) => {
            let res = payload as userOutput;
            if (res.authorization !== null) {
                Cookies.set("authorization", res.authorization || "");
                navigate("/");
                setUserDataInput({ username: "", email: "", password: "", confirmPassword: "" })
            }
        });
    }
    return handleLogin
}

export default SetLogin