import { useSelector } from 'react-redux'
import { rootState } from '../../../store/store'
import { userState } from '../../../store/async_slices/interfaces/user.interface'

const RequiredSelectors = () => {
    const user_register_state: userState = useSelector((state: rootState) => state.user_register)
    const user_login_state: userState = useSelector((state: rootState) => state.userLogin)
    return {user_register_state, user_login_state}
}

export default RequiredSelectors