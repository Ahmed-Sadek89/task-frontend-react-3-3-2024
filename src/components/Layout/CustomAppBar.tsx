import { Avatar, Box, IconButton, Toolbar, Typography, styled } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CustomDropDown from "./CustomDropDown";
import { appbarStyle, toolbarLeftStyle, toolbarRightStyle, toolbarStyle } from "./CustomStyles";
import Cookies from "js-cookie";
import { getDecodedToken } from "../../global/getDecodedToken";

type props = {
    open: boolean,
    handleDrawerOpen: () => void,
    handleDrawerClose: () => void
}
const CustomAppBar = ({ open, handleDrawerOpen, handleDrawerClose }: props) => {
    interface AppBarProps extends MuiAppBarProps {
        open?: boolean;
    }
    const AppBar = styled(MuiAppBar)<AppBarProps>(() => ({}));
    const navigate = useNavigate();
    const token = Cookies.get('authorization') || ''
    let decoded = getDecodedToken(token);
    const imageNameArray = decoded?.user?.username.split(" ")
    const username = (imageNameArray[0][0] + imageNameArray[1][0]).toUpperCase();
    return (
        <AppBar position="fixed" open={open} sx={appbarStyle}>
            <Toolbar sx={toolbarStyle}>
                <Box sx={toolbarLeftStyle}>
                    <IconButton
                        color="inherit"
                        sx={{ mr: 2, ...(open && { display: 'none' }), display: { xs: "none", md: "flex" } }}
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" onClick={() => navigate('/')} sx={{ cursor: "pointer" }}>
                        Task Manegement
                    </Typography>
                </Box>
                <Box sx={toolbarRightStyle}>
                    {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                    <Avatar sx={{ bgcolor: 'secondary.dark' }}>{username}</Avatar>
                    <CustomDropDown handleDrawerClose={handleDrawerClose} />
                </Box>
                <IconButton
                    color="inherit"
                    onClick={handleDrawerOpen}
                    sx={{ mr: 2, ...(open && { display: 'none' }), display: { xs: "flex", md: "none" } }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default CustomAppBar