import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import { useNavigate } from 'react-router-dom';

const CustomListItems = ({handleDrawerClose}: {handleDrawerClose: () => void}) => {
    const navigate = useNavigate();
    const handleRouteNavigate = (route: string) => {
        handleDrawerClose();
        navigate(route)
    }
    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton onClick={() => handleRouteNavigate('/')}>
                    <AssignmentOutlinedIcon />
                    <ListItemText primary={"Tasks"} />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => handleRouteNavigate('/task/add')}>
                    <PlaylistAddOutlinedIcon />
                    <ListItemText primary={"Add tasks"} />
                </ListItemButton>
            </ListItem>
        </List>
    )
}

export default CustomListItems