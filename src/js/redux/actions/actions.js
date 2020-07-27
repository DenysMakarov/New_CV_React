import {NUMBER_OF_SLIDE} from "../../types"
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
export function setSlide() {
    return{
        type: SET_SLIDE,
        payLoad: 2
    }
}

// export function countOfSlide(num) {
//     return {
//         type: NUMBER_OF_SLIDE,
//         payload: num
//     }
// }