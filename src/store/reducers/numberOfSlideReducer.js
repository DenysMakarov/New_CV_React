import {NEXT_SLIDE} from "../../utils/types";
import {PREV_SLIDE} from "../../utils/types";
import {SET_SLIDE} from "../../utils/types";
import {NUMBER_OF_SLIDE} from "../../utils/types"
import {eventInfo} from "../../utils/const";


const initiallyState = {
    numberOfSlide: 0,
    sliderInfo: eventInfo
}

export const numberOfSlideReducer = (state = initiallyState, action) => {
    switch (action.type) {
        case NEXT_SLIDE :
            if (state.numberOfSlide < eventInfo.length - 1){
                return {
                    ...state, numberOfSlide : state.numberOfSlide + 1
                };
            } else {
                return {
                    ...state, numberOfSlide : 0
                };
            }

        case PREV_SLIDE :
            if (state.numberOfSlide > 0){
                return {
                    ...state, numberOfSlide : state.numberOfSlide - 1
                };
            } else {
                return {
                    ...state, numberOfSlide : eventInfo.length - 1
                };
            }
        case SET_SLIDE :
            return {
                ...state, numberOfSlide : action.payload
            }
        default :
            return state

    }
}
