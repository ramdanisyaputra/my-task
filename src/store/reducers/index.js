import { combineReducers } from "redux"
import listReducer from "./lists"

export default combineReducers({
    lists: listReducer
})
