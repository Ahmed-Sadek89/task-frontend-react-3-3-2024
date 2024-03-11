import React from 'react'
import SetRegister from './SetRegister';
import SetLogin from './SetLogin';
import { userDataInput } from '../../../Types/userDataInput';
import { useLocation } from 'react-router-dom';

type props = {
    userDataInput: userDataInput,
    setUserDataInput: React.Dispatch<React.SetStateAction<userDataInput>>,
    isValid: () => boolean
}
const HandleUserSubmit = ({ userDataInput, setUserDataInput, isValid }: props) => {
    const location = useLocation()

    const handleRegister = SetRegister({ userDataInput, setUserDataInput })
    const handleLogin = SetLogin({ userDataInput, setUserDataInput });


    const handleUserSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isValid()) {
            if (location.pathname === '/register') {
                await handleRegister()
            } else {
                await handleLogin()
            }
        } else {
            console.log("invalid registration or login")
        }
    }
    return { handleUserSubmit }
}

export default HandleUserSubmit