import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {connect} from "react-redux";


class FooterInfo extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="footer_contacts_block">

            </div>
        )
    }
}

export default FooterInfo