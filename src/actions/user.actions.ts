import {userConstants} from '../constants/user.constants'
import {userService} from "../apls"
const userActions = {
    login, join
}
function join(userid, password, name) {
    alert(`ID: ${userid}, PW: ${password}, Name: ${name}`)

}

function login(userid, password) {
    alert(`ID: ${userid}, PW: ${password}`)
    userService.loginService(userid, password)

    return dispatch =>{
        dispatch(request(userid))
    }

    const request = user => { return { type: userConstants.LOGIN_REQUEST, user}}
    const success = user => { return { type: userConstants.LOGIN_SUCCESS, user}}
    const failure = user => { return { type: userConstants.LOGIN_FAIL, user}}
}
export default userActions