import { Box, Button, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { formButtonContent, formContent, pageTitle, userContainerStyle, userLayoutStyle } from './styles'
import React, { useCallback } from 'react'
import { userDataInput } from '../../Types/userDataInput'
import { checkRegisterValidation } from './checkRegisterValidation'
import UsernameTextField from './NormalTextField'
import PasswordTextField from './PasswordTextField'
import LinkedInLayout from './LinkedInLayout'
import CheckRouteName from './CheckRouteName'

const User = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const handleClickShowPassword = (inputType: 'password' | 'confirmPassword') => {
        inputType === 'password' ?
            setShowPassword((show) => !show)
            : setShowConfirmPassword((show) => !show);
    }
    const userInput = {
        username: '',
        email: "",
        password: "",
        confirmPassword: ""
    }
    const [userDataInput, setUserDataInput] = React.useState<userDataInput>(userInput)
    const [errors, setErrors] = React.useState<any>();

    const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUserDataInput({
            ...userDataInput,
            [name]: value
        })
    }
    const isValidRegistration = useCallback(() => checkRegisterValidation({ pathname: location.pathname, userDataInput, setErrors }), [userDataInput, location.pathname, setErrors])
    const handleUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isValidRegistration()) {
            if (location.pathname === '/register') {
                console.log("success registration")
            } else {
                console.log("success login")
            }
            navigate('/')
            setUserDataInput({ username: "", email: "", password: "", confirmPassword: "" })
        } else {
            console.log("invalid registration", errors)
        }

    }
    return (
        <Box sx={{ ...userContainerStyle, margin: location.pathname === '/register' ? "50px 10px" : "0px 10px" }}>
            <Box sx={userLayoutStyle}>
                <Typography variant='h6' sx={pageTitle}>
                    {location.pathname === '/register' ? "Register": "Login"}
                </Typography>
                <Box component='form' sx={formContent} onSubmit={handleUserSubmit}>
                    {
                        location.pathname === '/register' &&
                        <UsernameTextField 
                            name='username' 
                            value={userDataInput.username} 
                            handleUserInputChange={handleUserInputChange} 
                            errors={errors} 
                        />
                    }
                    <UsernameTextField 
                        name='email' 
                        value={userDataInput.email} 
                        handleUserInputChange={handleUserInputChange} 
                        errors={errors} 
                    />
                    <PasswordTextField 
                        name='password' 
                        value={userDataInput.password} 
                        handleUserInputChange={handleUserInputChange} 
                        showPassword={showPassword} 
                        handleClickShowPassword={handleClickShowPassword} 
                        errors={errors} 
                    />
                    {
                        location.pathname === '/register' &&
                        <PasswordTextField 
                            name='confirmPassword' 
                            value={userDataInput.confirmPassword} 
                            handleUserInputChange={handleUserInputChange} 
                            showPassword={showConfirmPassword} 
                            handleClickShowPassword={handleClickShowPassword} 
                            errors={errors} 
                        />
                    }
                    <Box sx={formButtonContent}>
                        <Button type='submit' color='success' variant="contained">
                            {location.pathname === '/register' ? "Register" : "Login"}
                        </Button>
                    </Box>
                </Box>
                <LinkedInLayout />
                <CheckRouteName />
            </Box>
        </Box>
    )
}

export default User