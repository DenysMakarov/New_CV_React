import React, {Fragment} from "react"
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        tickets: state.ticketsReducer
    }
}


class YourTicketsBlock extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {arrTickets} = this.props.tickets

        const NameOfDates = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ]
        const d = new Date()
        // if (NameOfDates[d.getMonth()] == 7){
        //     console.log("Yes")
        // } else {
        //     "no"
        // }

        // console.log(arrTickets[0])
        // console.log(NameOfDates[d.getMonth()])
        // console.log(d.getFullYear())
        // console.log(d.getMonth())



        const PassedCover = () => (
            <div className="passed_cover">

                <p>PASSED</p>
            </div>
        )

        return (
            <div className="tickets_which_already_exist_block">
                {arrTickets.map((el, index) => (
                    // <div key={el.id + d.getMilliseconds()}></div>
                    <div key={el.id + d.getMilliseconds()} className="your_tickets_array">
                        <h5 className="your_tickets your_tickets_firstName">{el.firstName}</h5>
                        <h5 className="your_tickets your_tickets_dateOfEvent">{el.dateOfEvent}</h5>
                        <h5 className="your_tickets your_tickets_secondName">{el.secondName}</h5>
                        <h5 className="your_tickets your_tickets_placeOfEvent">{el.placeOfEvent}</h5>
                        <h5 className="your_tickets your_tickets_nameTicket">{el.nameTicket}</h5>
                        <h5 className="your_tickets your_tickets_price">{el.price}</h5>
                        <div className="your_tickets qr_code"><p>{el.phoneNumber}</p></div>
                        {el.passed && <PassedCover/>}
                    </div>
                ))}
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(YourTicketsBlock)