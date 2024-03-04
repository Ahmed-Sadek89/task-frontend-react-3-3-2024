import { Avatar, Box, IconButton, Toolbar, Typography, styled } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CustomDropDown from "./CustomDropDown";

type props = {
    open: boolean,
    drawerWidth: number,
    handleDrawerOpen: () => void
}
const CustomAppBar = ({ open, drawerWidth, handleDrawerOpen }: props) => {
    interface AppBarProps extends MuiAppBarProps {
        open?: boolean;
    }
    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })<AppBarProps>(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));
    const navigate = useNavigate()
    return (
        <AppBar position="fixed" open={open} sx={{ color: "primary.light" }}>
            <Toolbar sx={{display: 'flex',justifyContent: "space-between", alignItems: 'center'}}>
                <Box sx={{flex: '1', display: 'flex', alignItems: 'center'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" onClick={() => navigate('/')} sx={{ cursor: "pointer" }}>
                        Task Magegment
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
                    {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                    <Avatar sx={{ bgcolor: 'primary.dark' }}>AS</Avatar>
                    <CustomDropDown />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default CustomAppBar