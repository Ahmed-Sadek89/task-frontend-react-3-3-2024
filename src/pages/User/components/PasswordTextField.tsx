import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, FormControl, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import React from 'react'
import { userTextField } from '../styles'

type props = {
    name: 'password' | 'confirmPassword',
    value: string | undefined,
    handleUserInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    showPassword: boolean, 
    handleClickShowPassword: (inputType: 'password' | 'confirmPassword') => void,
    errors: any
}
const PasswordTextField = ({ name, value, handleUserInputChange, showPassword, handleClickShowPassword, errors }: props) => {
    return (
        <Box>
            <Typography variant='subtitle2'>
                Password*
            </Typography>
            <FormControl sx={userTextField} variant="outlined">
                <OutlinedInput
                    type={showPassword ? 'text' : 'password'}
                    name={name}
                    value={value}
                    onChange={handleUserInputChange}
                    autoComplete="new-password"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                sx={{ color: 'secondary.contrastText' }}
                                onClick={() => handleClickShowPassword(name)}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            {
                (errors && errors[name] !== '') &&
                <Typography variant='subtitle2' color="error" sx={{ fontStyle: "italic" }}>
                    {errors[name]}
                </Typography>
            }
        </Box>
    )
}

export default PasswordTextField