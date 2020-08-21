import {ADD_TICKET, REMOVE_TICKET} from "../../types";


const initiallyState = {
    arrTickets: [
        {
            dateOfEvent: "18 July, 2020",
            nameTicket: "FIA WRC",
            firstName: "Denys",
            secondName: "Makarov",
            phoneNumber: "0507222855",
            placeOfEvent: "OAE",
            price: "400 EUR",
            passed: true,
            month: "July",
            id: 0
        }
    ]
}

export const ticketsReducer = (state = initiallyState, action) => {

    switch (action.type) {
        case ADD_TICKET :
            return {...state, arrTickets: state.arrTickets.concat(action.payload)}
        case REMOVE_TICKET:
            return state
        default:
            return state
    }
}