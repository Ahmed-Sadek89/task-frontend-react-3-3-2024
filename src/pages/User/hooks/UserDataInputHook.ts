import React, { useState } from 'react'
import { userDataInput } from '../../../Types/userDataInput';

const UserDataInputHook = () => {
    const userInput = {
        username: '',
        email: "",
        password: "",
        confirmPassword: ""
    }
    const [userDataInput, setUserDataInput] = useState<userDataInput>(userInput)

    const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUserDataInput({
            ...userDataInput,
            [name]: value
        })
    }

    return {userDataInput,setUserDataInput, handleUserInputChange}
}

export default UserDataInputHook