import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import CustomLists from './CustomLists';
import { Drawer, IconButton, styled } from '@mui/material';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
const drawerWidth = '100%';

const DrawerContent = ({ handleDrawerClose }: { handleDrawerClose: () => void }) => {
    return (
        <>
            <DrawerHeader >
                <IconButton onClick={handleDrawerClose} sx={{ color: "secondary.light" }}>
                    <ChevronLeftOutlinedIcon sx={{ display: { xs: 'none', md: "block" }, color: "secondary.light" }} />
                    <ChevronRightOutlinedIcon sx={{ display: { xs: 'block', md: "none" }, color: "secondary.light" }} />
                </IconButton>
            </DrawerHeader>
            <CustomLists handleDrawerClose={handleDrawerClose}/>
        </>
    )
}

type props = { 
    open: boolean, 
    anchor: "left" | "right", 
    display: {xs: string, md: string},
    handleDrawerClose: () => void 
}
const CustomDrawer = ({ open, anchor, display, handleDrawerClose }: props) => {
    return (
        <Drawer
            sx={{
                display,
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="temporary"
            anchor={anchor}
            open={open}
        >
            <DrawerContent handleDrawerClose={handleDrawerClose} />
        </Drawer>
    )
}

export default CustomDrawer