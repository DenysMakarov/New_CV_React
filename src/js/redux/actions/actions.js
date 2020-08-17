import {
    GET_USERS,
    NUMBER_OF_SLIDE,
    SET_USERS,
    VALID,
    INVALID,
    LOGIN,
    LOGOUT,
    ADD_TICKET,
    REMOVE_TICKET
} from "../../types"
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

export function logIn() {
    return {
        type: LOGIN,
    }
}

export function logOut() {
    return {
        type:LOGOUT,
    }
}

export function addTicket(ticket) {
    return {
        type: ADD_TICKET,
        payload: ticket
    }
}

export function removeTicket() {
    return {
        type: REMOVE_TICKET,
    }
}
