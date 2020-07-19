import {combineReducers} from "redux";
import {mainMenuReducer} from "./mainMenuReducer";

export const rootReducer = combineReducers({
    mainMenu: mainMenuReducer
})