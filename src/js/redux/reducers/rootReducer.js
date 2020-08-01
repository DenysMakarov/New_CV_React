import {combineReducers} from "redux";
import {mainMenuReducer} from "./mainMenuReducer";
import {numberOfSlideReducer} from "./numberOfSlideReducer"
import {usersReducer} from "./usersReducer";
import {validationFormReducer} from "./validationFormReducer"

export const rootReducer = combineReducers({
    mainMenu: mainMenuReducer,
    numberOfSlideReducer,
    usersReducer : usersReducer,
    validationFormReducer
})