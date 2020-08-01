import {GET_USERS, NUMBER_OF_SLIDE, SET_USERS, VALID, INVALID} from "../../types"
import {NEXT_SLIDE} from "../../types";
import {PREV_SLIDE} from "../../types";
import {SET_SLIDE} from "../../types";

export function showHideMenu(typeText) {
    return {
        type: typeText
    }
}

export function nextSlide() {
    return {
        type: NEXT_SLIDE,
    }
}

export function prevSlide() {
    return {
        type: PREV_SLIDE,
    }
}

export function setSlide(num) {
    return {
        type: SET_SLIDE,
        payload: num
    }
}

export function validForm() {
    return {
        type: VALID,
    }
}
export function inValidForm() {
    return {
        type: INVALID,
    }
}

export function setUsers(user) {
    return {
        type:SET_USERS,
        payload: user
    }
}

// export function countOfSlide(num) {
//     return {
//         type: NUMBER_OF_SLIDE,
//         payload: num
//     }
// }