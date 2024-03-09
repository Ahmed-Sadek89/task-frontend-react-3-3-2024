import React from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { useNavigate } from 'react-router-dom';
import { userOutput } from '../../store/async_slices/interfaces/user.interface';
import { userDataInput } from '../../Types/userDataInput';
import { user_register } from '../../store/async_slices/slices/user/register.user.slice';

type props = {
    userDataInput: userDataInput,
    setUserDataInput: React.Dispatch<React.SetStateAction<userDataInput>>
}
const SetRegister = ({ userDataInput, setUserDataInput }: props) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()
    const handleRegister = async () => {
        await dispatch(user_register({
            username: userDataInput?.username || '',
            email: userDataInput.email,
            password: userDataInput.password,
        })).then(({ payload }) => {
            let res = payload as userOutput;
            if (res.id) {
                navigate("/login");
                setUserDataInput({ username: "", email: "", password: "", confirmPassword: "" })
            }
        }).catch(error => {
            console.log(error)
        })
    }
    return handleRegister
}

export default SetRegister