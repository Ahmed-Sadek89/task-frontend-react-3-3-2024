import { Box, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { checkAcc, goToRoute } from '../styles'

const CheckRouteName = () => {
    const location = useLocation();
    const navigate = useNavigate()
    return (
        <Box sx={checkAcc}>
            <>
                <Typography>
                    {
                        location.pathname === '/register' ?
                            "Already have an account?" :
                            "Don't have an account?"
                    }
                </Typography>
                <Typography
                    sx={goToRoute}
                    onClick={() => navigate(
                        location.pathname === '/register' ? '/login' : "/register"
                    )}
                >
                    {location.pathname === '/register' ? 'Login' : "Register"}
                </Typography>
            </>
        </Box>
    )
}

export default CheckRouteName