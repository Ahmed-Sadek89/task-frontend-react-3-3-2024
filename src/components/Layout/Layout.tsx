import * as React from 'react';
import { Outlet } from 'react-router-dom';
import CustomAppBar from './CustomAppBar';
import { Box, styled } from '@mui/material';
import CustomDrawer from './CustomDrawer';


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Layout = () => {
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    
    return (
        <Box sx={{ display: 'flex' }} >
            <CustomAppBar open={open} handleDrawerOpen={handleDrawerOpen} />
            <CustomDrawer open={open} anchor={'right'} display={{ xs: "block", md: "none" }} handleDrawerClose={handleDrawerClose} />
            <CustomDrawer open={open} anchor={'left'} display={{ xs: "none", md: "block" }} handleDrawerClose={handleDrawerClose} />
            <Main>
                <DrawerHeader />
                <Outlet />
            </Main>
        </Box>
    );
}

export default Layout