import { signOutAlert } from '../../../global/sweetAlert';
import Cookies from 'js-cookie';

const HandleSignOut = ({ handleDrawerClose }: { handleDrawerClose: () => void }) => {
    const handleSignOut = () => {
        handleDrawerClose();
        signOutAlert().then((result) => {
            if (result.isConfirmed) {
                Cookies.remove("authorization");
                window.location.href = "/login";
            }
        });
    };
    return handleSignOut
}

export default HandleSignOut