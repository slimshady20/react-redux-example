import { combineReducers } from 'redux'
import {userReducers} from './user.reducer'
import countReducer from "../containers/counter.reducer";
const rootReducer = combineReducers({
    userReducers,
    countReducer
})

export default rootReducer