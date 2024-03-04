import { useNavigate } from 'react-router-dom';
import { ListItemText, ListItemButton, ListItem, Divider, List } from '@mui/material';

const CustomLists = () => {
    const navigate = useNavigate();
    return (
        <>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/')}>
                        <ListItemText primary={"Tasks"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/task/add')}>
                        <ListItemText primary={"Add tasks"} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary={"Sign out"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </>
    )
}

export default CustomLists