import { useNavigate } from 'react-router-dom';
import { ListItemText, ListItemButton, ListItem, Divider, List, Box, Avatar } from '@mui/material';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import CustomDropDown from './CustomDropDown';

const CustomLists = ({ handleDrawerClose }: { handleDrawerClose: () => void }) => {
    const navigate = useNavigate();

    return (
        <>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => { handleDrawerClose(); navigate('/') }}>
                        <AssignmentOutlinedIcon />
                        <ListItemText primary={"Tasks"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => { handleDrawerClose(); navigate('/task/add') }}>
                        <PlaylistAddOutlinedIcon />
                        <ListItemText primary={"Add tasks"} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <Box sx={{ display: { xs: 'none', md: "block" } }}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
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
                            <CustomDropDown />

                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </>
    )
}

export default CustomLists