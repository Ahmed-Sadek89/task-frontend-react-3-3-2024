import { Box, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { checkAcc, goToRoute } from './styles'

const CheckRouteName = () => {
    const location = useLocation();
    const navigate = useNavigate()
    return (
        <Box sx={checkAcc}>
            {location.pathname === '/register' &&
                <>
                    <Typography>
                        Already have an account?
                    </Typography>
                    <Typography
                        sx={goToRoute}
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
    )
}

export default CheckRouteName