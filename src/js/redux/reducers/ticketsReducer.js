import {ADD_TICKET, REMOVE_TICKET} from "../../types";


const initiallyState = {
    arrTickets: [
        {
            nameTicket: "test_1",
            firstName: "test_1",
            secondName: "test_1",
            phoneNumber: "test_1",
            id: "1"
        },
        {
            nameTicket: "test_2",
            firstName: "test_2",
            secondName: "test_2",
            phoneNumber: "test_2",
            id: "3"
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