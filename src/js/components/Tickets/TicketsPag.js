import React from 'react';
import {sliderInfo} from "../../db/dataBase";


class TicketsPag extends React.Component {
    constructor(props) {
        super(props);
    }

    setAnimationAndGetInformOfTicket = (e) => {
        this.setState({
            nameTicket: e.target.innerText,
            numberOfSlide: e.target.dataset.number,
            date: sliderInfo[this.state.numberOfSlide - 1].date,
            place: sliderInfo[this.state.numberOfSlide - 1].place,
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
            <div>
                <div className="tickets_events">
                    {sliderInfo.map((el) => (
                        <div data-name={el.textBottom} key={el.imgPath} className="tickets_option_cover">
                            <div className="tickets_option">
                                <h5 onClick={this.setAnimationAndGetInformOfTicket} data-number={el.numberId}
                                    className="tickets_option_text">{el.textBottom}</h5>
                            </div>
                            <p className="tickets_option_title">{el.textBottom}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default TicketsPag