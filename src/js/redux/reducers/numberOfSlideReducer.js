import {NEXT_SLIDE} from "../../types";
import {PREV_SLIDE} from "../../types";
import {SET_SLIDE} from "../../types";
import {NUMBER_OF_SLIDE} from "../../types"
import {sliderInfo} from "../../db/dataBase";


const initiallyState = {
    numberOfSlide: 0,
    sliderInfo: sliderInfo
}

export const numberOfSlideReducer = (state = initiallyState, action) => {
    switch (action.type) {
        case NEXT_SLIDE :
            if (state.numberOfSlide < sliderInfo.length - 1){
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
                    ...state, numberOfSlide : sliderInfo.length - 1
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
