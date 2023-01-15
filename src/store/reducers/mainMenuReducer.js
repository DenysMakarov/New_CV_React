import {SHOW_MENU} from "../../utils/types";
import {HIDE_MENU} from "../../utils/types";


const initiallyState = {
    menu: false
}

export const mainMenuReducer = (state= initiallyState, action) => {
    switch (action.type) {
        case HIDE_MENU :
            return {menu: false};
        case SHOW_MENU :
            return {menu: true};
        default :
            return state
    }
}