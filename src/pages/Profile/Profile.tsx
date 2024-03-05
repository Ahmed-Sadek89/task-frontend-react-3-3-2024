import { Avatar, Box, Container, Typography } from '@mui/material'
import { profileContainerStyle, profileImageStyle } from './styles'

const Profile = () => {
  return (
    <Container>
      <Box sx={profileContainerStyle}>
        <Avatar sx={profileImageStyle} >AS</Avatar>
        <Typography variant='h6'>Ahmed Sadek</Typography>
        <Typography variant='body2'>https://www.linkedin.com/in/ahmed-sadek-2b27541b9/</Typography>
      </Box>
    </Container>
  )
}

export default Profile