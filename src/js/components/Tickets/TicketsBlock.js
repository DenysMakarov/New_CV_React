import React from 'react';
// import ReactDOM from 'react-dom';
import {sliderInfo} from "../../db/dataBase";
import set from "@babel/runtime/helpers/esm/set";


class TicketsBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nameTicket: "CHOOSE THE TICKET",
            firstName: "",
            secondName: "",
            phoneNumber: "",
            numberOfSlide: 1,
            date: "You need to select event",
            place: ""
        }
    }

    setTitleTextOfTicket = (e) => {
        this.setState({
            nameTicket: e.target.innerText,
            numberOfSlide: e.target.dataset.number,
            date: sliderInfo[this.state.numberOfSlide-1].date,
            place: sliderInfo[this.state.numberOfSlide-1].place,
        })

        const informImg = document.getElementById("inform_img")
        const dateOfEvent = document.getElementById("date_of_event")
        const ticketFormTitle = document.getElementById("ticket_form_title")

        informImg.style.animationName = "none"
        dateOfEvent.style.animationName = "none"
        ticketFormTitle.style.animationName = "none"
        setTimeout(() => {
            informImg.style.animationName = "ticket_slide_appear"
            dateOfEvent.style.animationName = "ticket_date_appear"
            ticketFormTitle.style.animationName = "ticket_form_title_appear"
        }, 100)

    }


    render() {
        return (
            <div className="tickets_block_cover ">
                <div className="tickets_block">
                    <div className="left_pixel_decoration"/>
                    <div className="tickets_events">
                        {sliderInfo.map((el) => (
                            <div data-name={el.textBottom} key={el.imgPath} className="tickets_option_cover">
                                <div className="tickets_option">
                                    <h5 onClick={this.setTitleTextOfTicket} data-number={el.numberId}
                                        className="tickets_option_text">{el.textBottom}</h5>
                                </div>
                                <p className="tickets_option_title">{el.textBottom}</p>
                            </div>
                        ))}
                    </div>

                    <form id="ticket_form" className="ticket_form" action="">
                        <label htmlFor="firstName">First Name</label>
                        <input className="input_ticket input_ticket_first_name" name="firstName"
                               defaultValue={this.state.firstName}
                               type="text"/>
                        <label htmlFor="secondName">Second Name</label>
                        <input className="input_ticket input_ticket_second_name" name="secondName"
                               defaultValue={this.state.secondName}
                               type="text"/>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input className="input_ticket input_ticket_phoneNumber_name" name="phoneNumber"
                               defaultValue={this.state.phoneNumber}
                               type="text"/>


                        <h3 id="date_of_event" className="date_of_event">{sliderInfo[this.state.numberOfSlide-1].date} <br/> {sliderInfo[this.state.numberOfSlide-1].place}</h3>
                        <div id="inform_img" className="inform_img" style={{
                            backgroundImage: sliderInfo[this.state.numberOfSlide - 1].imgPath
                        }}></div>
                        <h1 id="ticket_form_title" className="ticket_form_title">{this.state.nameTicket}</h1>
                        <button id="btn_ticket_form" className="btn_ticket_form">Buy Ticket</button>
                    </form>


                    <div className="all_tickets_block">
                        {this.state.numberOfSlide}
                    </div>

                </div>
            </div>

        )
    }
}

export default TicketsBlock