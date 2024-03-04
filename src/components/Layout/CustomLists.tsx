import { useNavigate } from 'react-router-dom';
import { ListItemText, ListItemButton, ListItem, Divider, List } from '@mui/material';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const CustomLists = () => {
    const navigate = useNavigate();
    return (
        <>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/')}>
                        <AssignmentOutlinedIcon />
                        <ListItemText primary={"Tasks"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/task/add')}>
                        <PlaylistAddOutlinedIcon />
                        <ListItemText primary={"Add tasks"} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ExitToAppOutlinedIcon />
                        <ListItemText primary={"Sign out"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </>
    )
}

export default CustomLists