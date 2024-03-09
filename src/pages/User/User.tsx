import { Box, Button, Container, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { fetchDataTextError, formButtonContent, formContent, pageTitle, userContainerStyle, userLayoutStyle } from './styles'
import React, { useCallback } from 'react'
import { userDataInput } from '../../Types/userDataInput'
import { checkRegisterValidation } from './checkRegisterValidation'
import UsernameTextField from './NormalTextField'
import PasswordTextField from './PasswordTextField'
import LinkedInLayout from './LinkedInLayout'
import CheckRouteName from './CheckRouteName'
import { useSelector } from 'react-redux'
import { rootState } from '../../store/store'
import SetLogin from './SetLogin'
import SetRegister from './SetRegister'
import CheckAuth from '../../global/CheckAuth'


const User = () => {
    CheckAuth() // if user has token -> navigate to :/
    const location = useLocation();
    const user_register_state = useSelector((state: rootState) => state.user_register)
    const user_login_state = useSelector((state: rootState) => state.userLogin)
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

    const handleRegister = SetRegister({ userDataInput, setUserDataInput })
    const handleLogin = SetLogin({ userDataInput, setUserDataInput });
    const handleUserSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isValidRegistration()) {
            if (location.pathname === '/register') {
                await handleRegister()
            } else {
                await handleLogin()
            }
        } else {
            console.log("invalid registration", errors)
        }
    }
    return (
        <Box sx={{ ...userContainerStyle, margin: location.pathname === '/register' ? "50px 10px" : "20px 10px" }}>
            <Box sx={userLayoutStyle}>
                <Typography variant='h6' sx={pageTitle}>
                    {location.pathname === '/register' ? "Register" : "Login"}
                </Typography>
                <Container>
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
                            <Button
                                type='submit'
                                color='success'
                                variant="contained"
                                disabled={
                                    user_register_state.loading === true || user_login_state.loading === true ?
                                        true :
                                        false
                                }
                            >
                                {location.pathname === '/register' ? "Register" : "Login"}
                            </Button>
                        </Box>
                    </Box>
                    {
                        (user_register_state.loading === true || user_login_state.loading === true) &&
                        <Typography
                            sx={fetchDataTextError}
                            color="error"
                        >
                            {user_register_state.data?.message || user_login_state.data?.message}
                        </Typography>
                    }
                </Container>
                <LinkedInLayout />
                <CheckRouteName />
            </Box>
        </Box>
    )
}

export default User