import { ListItemText, ListItemButton, ListItem, Divider, List, Box, Avatar } from '@mui/material';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import CustomDropDown from './CustomDropDown';
import HandleSignOut from '../Hooks/HandleSignOut';
import CustomListItems from './CustomListItems';
import { signOutBtnStyle } from '../CustomStyles';

const CustomLists = ({ handleDrawerClose }: { handleDrawerClose: () => void }) => {
    const handleSignOut = HandleSignOut({ handleDrawerClose })
    return (
        <>
            <Divider />
            <CustomListItems handleDrawerClose={handleDrawerClose} />
            <Divider />
            <Box sx={{ display: { xs: 'none', md: "block" } }}>
                <List>
                    <ListItem disablePadding sx={{ ...signOutBtnStyle, width: '134px' }}>
                        <ListItemButton onClick={() => handleSignOut()}>
                            <ExitToAppOutlinedIcon />
                            <ListItemText primary={"Sign out"} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
            <Box sx={{ display: { xs: 'block', md: "none" } }}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                            <Avatar sx={{ bgcolor: 'secondary.dark' }}>AS</Avatar>
                            <CustomDropDown handleDrawerClose={handleDrawerClose} />

                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </>
    )
}

export default CustomLists