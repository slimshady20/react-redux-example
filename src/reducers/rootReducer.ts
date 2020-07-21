import {combineReducers} from "redux";
import counterReducer from "../containers/counter.reducer";
const rootReducer = combineReducers({
    counterReducer
})
export default rootReducer