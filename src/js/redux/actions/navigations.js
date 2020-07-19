import {HIDE_MENU, SHOW_MENU} from "../../types";


export function hideMenu(){
    return {
        type: HIDE_MENU
    }
}

export function showMenu(){
    return {
        type: SHOW_MENU
    }
}

export function showHideMenu(typeText) {
    return {
        type: typeText
    }
}