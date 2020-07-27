import {NUMBER_OF_SLIDE} from "../../types"
import {NEXT_SLIDE} from "../../types";
import {PREV_SLIDE} from "../../types";

export function showHideMenu(typeText) {
    return {
        type: typeText
    }
}


export function nextSlide(num) {
    return {
        type: NEXT_SLIDE,
    }
}
export function prevSlide(num) {
    return {
        type: PREV_SLIDE,
    }
}

// export function countOfSlide(num) {
//     return {
//         type: NUMBER_OF_SLIDE,
//         payload: num
//     }
// }