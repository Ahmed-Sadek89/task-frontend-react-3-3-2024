import { useNavigate } from 'react-router-dom';
import { signOutAlert } from '../../global/sweetAlert';

const HandleSignOut = ({handleDrawerClose}: {handleDrawerClose: () => void}) => {
    const navigate = useNavigate();
    const handleSignOut = () => {
        handleDrawerClose();
        signOutAlert().then((result) => {
            if (result.isConfirmed) {
                navigate('/login')
            }
        });
    };
    return handleSignOut
}

export default HandleSignOut