import {combineReducers} from "redux";
import {mainMenuReducer} from "./mainMenuReducer";
import {numberOfSlideReducer} from "./numberOfSlideReducer"
import {usersReducer} from "./usersReducer";
import {validationFormReducer} from "./validationFormReducer"
import {loginReducer} from "./loginReducer";
import {ticketsReducer} from "./ticketsReducer";

export const rootReducer = combineReducers({
    mainMenu: mainMenuReducer,
    numberOfSlideReducer,
    usersReducer,
    validationFormReducer,
    loginReducer,
    ticketsReducer
})