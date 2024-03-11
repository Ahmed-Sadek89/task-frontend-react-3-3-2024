import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ORAccount, linkedInContent, linkedinButton } from '../styles'
import { Box, Button, Typography } from '@mui/material'

const LinkedInLayout = () => {
    return (
        <Box sx={linkedInContent}>
            <Typography sx={ORAccount}>
                OR
            </Typography>
            <Button variant="contained" sx={linkedinButton}>
                <LinkedInIcon />
                <Typography>
                    LinkedIn
                </Typography>
            </Button>
        </Box>
    )
}

export default LinkedInLayout