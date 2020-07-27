import {combineReducers} from "redux";
import {mainMenuReducer} from "./mainMenuReducer";
import {numberOfSlideReducer} from "./numberOfSlideReducer"

export const rootReducer = combineReducers({
    mainMenu: mainMenuReducer,
    numberOfSlideReducer
})