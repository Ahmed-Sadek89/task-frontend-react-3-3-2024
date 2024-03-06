import { Box, Button, FormControl, IconButton, InputAdornment, OutlinedInput, TextField, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { ORAccount, checkAcc, formButtonContent, formContent, goToRoute, linkedInContent, pageTitle, userContainerStyle, userLayoutStyle, userTextField } from './styles'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import React from 'react'
import { userDataType } from '../../Types/userData'

const User = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const handleClickShowPassword = (inputType: 'password' | 'confirmPassword') => {
        inputType === 'password' ?
            setShowPassword((show) => !show)
            : setShowConfirmPassword((show) => !show);
    }
    const [userData, setUserData] = React.useState<userDataType>({
        username: '',
        email: "",
        password: "",
        confirmPassword: ""
    })

    return (
        <Box sx={{ ...userContainerStyle, margin: location.pathname === '/register' ? "50px 10px" : "0px 10px" }}>
            <Box sx={userLayoutStyle}>
                <Typography variant='h6' sx={pageTitle}>
                    {location.pathname === '/register' && "Register"}
                    {location.pathname === '/login' && "Login"}
                </Typography>
                <Box component={'form'} sx={formContent}>
                    {
                        location.pathname === '/register' &&
                        <Box>
                            <Typography variant='subtitle2'>
                                Username*
                            </Typography>
                            <TextField variant="outlined" required={true} type={'text'} sx={userTextField} />
                        </Box>
                    }
                    <Box>
                        <Typography variant='subtitle2'>
                            Email*
                        </Typography>
                        <TextField variant="outlined" required={true} type={'email'} sx={userTextField} />
                    </Box>
                    <Box>
                        <Typography variant='subtitle2'>
                            Password*
                        </Typography>
                        <FormControl sx={userTextField} variant="outlined">
                            <OutlinedInput
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            sx={{ color: 'secondary.contrastText' }}
                                            onClick={() => handleClickShowPassword('password')}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Box>
                    {
                        location.pathname === '/register' &&
                        <Box>
                            <Typography variant='subtitle2'>
                                Confirm password*
                            </Typography>
                            <FormControl sx={userTextField} variant="outlined">
                                <OutlinedInput
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                sx={{ color: 'secondary.contrastText' }}
                                                onClick={() => handleClickShowPassword('confirmPassword')}
                                                edge="end"
                                            >
                                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>                        </Box>
                    }
                    <Box sx={formButtonContent}>
                        <Button type='submit' color='success' variant="contained">
                            {location.pathname === '/register' && "Register"}
                            {location.pathname === '/login' && "Login"}
                        </Button>
                    </Box>
                </Box>
                <Box sx={linkedInContent}>
                    <Typography sx={ORAccount}>
                        OR
                    </Typography>
                    <Button color='info' variant="contained">
                        LinkedIn
                    </Button>
                </Box>
                <Box sx={checkAcc}>
                    {location.pathname === '/register' &&
                        <>
                            <Typography>
                                Already have an account?
                            </Typography>
                            <Typography
                                sx={{ cursor: "pointer", textDecoration: "underline", color: "secondary.contrastText" }}
                                onClick={() => navigate('/login')}
                            >
                                Login
                            </Typography>
                        </>
                    }
                    {location.pathname === '/login' &&
                        <>
                            <Typography>
                                Don't have an account?
                            </Typography>
                            <Typography
                                sx={goToRoute}
                                onClick={() => navigate('/register')}
                            >
                                Register
                            </Typography>
                        </>
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default User