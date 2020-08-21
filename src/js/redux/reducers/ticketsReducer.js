import {ADD_TICKET, REMOVE_TICKET} from "../../types";


const initiallyState = {
    arrTickets: [
        {
            dateOfEvent: "05 November, 2019",
            nameTicket: "FIA WRC",
            firstName: "Jhon",
            secondName: "Richworth",
            phoneNumber: "9347629438",
            placeOfEvent: "OAE",
            price: "400 EUR",
            passed: true,
            month: "July",
            id: 0
        },
        {
            dateOfEvent: "11 October, 2019",
            nameTicket: "DACAR",
            firstName: "Sonya",
            secondName: "Velasces",
            phoneNumber: "8479470-02",
            placeOfEvent: "OAE",
            price: "400 EUR",
            passed: true,
            month: "July",
            id: 1
        },
        {
            dateOfEvent: "11 July, 2019",
            nameTicket: "F1",
            firstName: "Antonio",
            secondName: "Alecsa",
            phoneNumber: "8470374798",
            placeOfEvent: "OAE",
            price: "400 EUR",
            passed: true,
            month: "July",
            id: 2
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