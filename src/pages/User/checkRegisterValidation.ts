import { userDataInput } from "../../Types/userDataInput";

type registrationPprops = {
    pathname: string,
    userDataInput: userDataInput,
    setErrors: React.Dispatch<React.SetStateAction<{}>>
}
export const checkRegisterValidation = ({ pathname, userDataInput, setErrors }: registrationPprops): boolean => {
    let valid = true;
    const newErrors: any = {};
    if (pathname === '/register' && !userDataInput.username?.trim()) {
        newErrors.username = 'username is required';
        valid = false;
    }
    if (!userDataInput.email.trim()) {
        newErrors.email = 'email is required';
        valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(userDataInput.email)) {
        newErrors.email = 'Invalid email address';
        valid = false;
    }

    if (!userDataInput.password.trim()) {
        newErrors.password = 'password is required';
        valid = false;
    } else if (userDataInput.password.length < 5) {
        newErrors.password = 'password must be not less than 5 characters';
        valid = false;
    } else if (userDataInput.password.length > 20) {
        newErrors.password = 'password must be not more than 20 characters';
        valid = false;
    }

    if (pathname === '/register' &&  userDataInput.confirmPassword !== userDataInput.password) {
        newErrors.confirmPassword = 'Password Do Not Match';
        valid = false;
    }

    setErrors(newErrors);

    return valid;
};

