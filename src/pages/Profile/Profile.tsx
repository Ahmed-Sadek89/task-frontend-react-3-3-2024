import { Avatar, Box, Container, Typography } from '@mui/material'
import { profileContainerStyle, profileImageStyle } from './styles'
import Cookies from 'js-cookie';
import { getDecodedToken } from '../../global/getDecodedToken';

const Profile = () => {
  const token = Cookies.get('authorization') || ''
  let decoded = getDecodedToken(token);
  const imageNameArray = decoded?.user.username.split(" ")
  const username = (imageNameArray[0][0] + imageNameArray[1][0]).toUpperCase();
  return (
    <Container>
      <Box sx={profileContainerStyle}>
        <Avatar sx={profileImageStyle} >{username}</Avatar>
        <Typography variant='h6'>{decoded?.user.username}</Typography>
        <Typography variant='body2'>https://www.linkedin.com/in/ahmed-sadek-2b27541b9/</Typography>
      </Box>
    </Container>
  )
}

export default Profile