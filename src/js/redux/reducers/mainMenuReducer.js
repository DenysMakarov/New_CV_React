import {SHOW_MENU} from "../../types";
import {HIDE_MENU} from "../../types";


const initiallyState = {
    menu: false
}

export const mainMenuReducer = (state= initiallyState, action) => {
    switch (action.type) {
        case HIDE_MENU :
            return {...state, menu: false};
        case SHOW_MENU :
            return {...state, menu: true};
        default :
            return state
    }
}