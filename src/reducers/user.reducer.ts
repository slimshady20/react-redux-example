import {userConstants} from "../constants/user.constants";

let user = JSON.parse(<string>sessionStorage.getItem('user'))
const initialState = user ? {loggedIn: true, user}:{}
export function userReducers(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            }
        case userConstants.LOGIN_SUCCESS:
            return {
                loggingIn: true,
                user: action.user
            }
        case userConstants.LOGIN_FAIL:
            return {}
        default:
            return state
    }

}