import {SHOW_MENU} from "../../types";
import {HIDE_MENU} from "../../types";


const initialyState = {
    menu: false
}

export const mainMenuReducer = (state= initialyState, action) => {
    switch (action.type) {
        case HIDE_MENU :
            return {...state, menu: false};
        case SHOW_MENU :
            return {...state, menu: true};
        default:
            return state
    }
}