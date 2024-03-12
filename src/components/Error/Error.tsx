import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { backHomeText, errorHeadingLayout, errorLayout, text404 } from './styles';

const Error = () => {
    const navigate = useNavigate();
    
    return (
        <Box sx={errorLayout}>
            <Box sx={errorHeadingLayout}>
                <Typography variant="h1" sx={text404}>404</Typography>
                <Box sx={{flex: 1}}>
                    <Typography variant="h2">SORRY!</Typography>
                    <Typography variant="body1">
                        The page you’re looking for was not found.
                    </Typography>
                </Box>
            </Box>
            <Typography sx={backHomeText} onClick={()=> navigate('/')}>
                Back to home
            </Typography>
            <Typography>
                Copyright © 2024 All rights reserved.
            </Typography>
        </Box>
    )
}

export default Error