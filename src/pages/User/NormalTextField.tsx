import { Box, TextField, Typography } from '@mui/material'
import React from 'react'
import { userTextField } from './styles'

type props = {
    name: string,
    value: string | undefined,
    handleUserInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    errors: any
}
const NormalTextField = ({ name, value, handleUserInputChange, errors }: props) => {
    return (
        <>
            <Box>
                <Typography variant='subtitle2' sx={{ textTransform: 'capitalize' }}>
                    {name}*
                </Typography>
                <TextField
                    variant="outlined"
                    type={'text'}
                    sx={userTextField}
                    name={name}
                    value={value}
                    onChange={handleUserInputChange}
                    autoComplete="new-username"
                />
                {
                    (errors && errors[name] !== '') &&
                    <Typography variant='subtitle2' color="error" sx={{ fontStyle: "italic" }}>
                        {errors[name]}
                    </Typography>
                }
            </Box>
        </>
    )
}

export default NormalTextField