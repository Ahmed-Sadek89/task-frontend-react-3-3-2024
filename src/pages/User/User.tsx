import { useLocation } from 'react-router-dom'
import CheckAuth from '../../global/CheckAuth'
import { Box, Button, Container, Typography } from '@mui/material'
import { fetchDataTextError, formButtonContent, formContent, pageTitle, userContainerStyle, userLayoutStyle } from './styles'
import UsernameTextField from './components/NormalTextField'
import PasswordTextField from './components/PasswordTextField'
import LinkedInLayout from './components/LinkedInLayout'
import CheckRouteName from './components/CheckRouteName'
import HandleShowHidePassword from './hooks/HandleShowHidePassword'
import UserDataInputHook from './hooks/UserDataInputHook'
import UserErrorInputHook from './hooks/UserErrorInputHook'
import HandleUserSubmit from './hooks/HandleUserSubmit'
import RequiredSelectors from './hooks/RequiredSelectors'

const User = () => {
    CheckAuth() // if user has token -> navigate to :/
    const location = useLocation();
    const { user_register_state, user_login_state } = RequiredSelectors()
    const { showPassword, showConfirmPassword, handleClickShowPassword } = HandleShowHidePassword()
    const { userDataInput, setUserDataInput, handleUserInputChange } = UserDataInputHook()
    const { errors, isValid } = UserErrorInputHook(userDataInput)
    const { handleUserSubmit } = HandleUserSubmit({ userDataInput, setUserDataInput, isValid })

    return (
        <Box sx={{
            ...userContainerStyle,
            margin: location.pathname === '/register' ? "50px 10px" : "20px 10px"
        }}>
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
                        (user_register_state.error === true || user_login_state.error === true) &&
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