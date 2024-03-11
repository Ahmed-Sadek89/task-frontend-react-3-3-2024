import { useState } from 'react'

const HandleShowHidePassword = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const handleClickShowPassword = (inputType: 'password' | 'confirmPassword') => {
        inputType === 'password' ?
            setShowPassword((show) => !show)
            : setShowConfirmPassword((show) => !show);
    }
  return {showPassword, showConfirmPassword, handleClickShowPassword}
}

export default HandleShowHidePassword