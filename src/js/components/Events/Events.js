import React from 'react'

import {sliderInfo} from "../../db/dataBase";
import {Link} from "react-router-dom";
import PilotBlock from "./PilotBlock";

class Events extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="main_container_event_cover">
                <div className="main_container_event_filter"/>

                <div className="main_container_event">
                    {sliderInfo.map((el) => (
                            <div key={el.numberId} className="event_block">
                                <div className="event_block_desc">
                                    <h1 className="header_description">Description:</h1>
                                    <h4 className="text_description">{el.roadDescription}</h4>
                                    <div className="date_block">
                                        <h1 className="header_description">Date:</h1>
                                        <h4 className="text_description">{el.date}</h4>
                                    </div>
                                    <div className="place_block">
                                        <h1 className="header_description">Place:</h1>
                                        <h4 className="text_description">{el.place}</h4>
                                    </div>
                                    <div className="clearfix"/>

                                    <h1 className="header_description">Favorites:</h1>

                                    <PilotBlock el={el}/>

                                    <button className="btn_events_go_to_buy_tickets">
                                        <Link to="/tickets">Buy ticket</Link>
                                    </button>

                                </div>

                                <div className="event_block_map" style={{backgroundImage: `url(${el.mapImg})`}}></div>
                            </div>
                        )
                    )}
                </div>


            </div>
        )
    }
}

export default Events