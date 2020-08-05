import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {connect} from "react-redux";


class HeaderInfo extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="header_contacts_block">
                <h1 className="header_contacts_first_text">Contact: Blocks</h1>
                <h5 className="header_contacts_second_text">Leave us a little info, and we’ll be in touch</h5>
                <button  className="header_contacts_button"><a href="mailto:makarovdenys1985@gmail.com">Send Us an Email</a></button>
            </div>
        )
    }
}

export default HeaderInfo