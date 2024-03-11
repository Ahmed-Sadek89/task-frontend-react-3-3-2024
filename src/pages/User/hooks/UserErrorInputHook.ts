import { useCallback, useState } from 'react'
import { userDataInput } from '../../../Types/userDataInput';
import { checkUserValidation } from './checkUserValidation';
import { useLocation } from 'react-router-dom';

const UserErrorInputHook = (userDataInput: userDataInput) => {
    const location = useLocation()
    const [errors, setErrors] = useState<userDataInput>();
    const isValid = useCallback(() => checkUserValidation({
        pathname: location.pathname, userDataInput, setErrors
    }), [userDataInput, location.pathname, setErrors])

    return { errors, isValid }
}

export default UserErrorInputHook