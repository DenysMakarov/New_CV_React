import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {connect} from "react-redux";
import {sliderInfo} from "../../db/dataBase";
import set from "@babel/runtime/helpers/esm/set";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import InformPage from "./InformPage";


class RegistrationPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }




    render() {

        return (
            <div id="registration_container" className="registration_container">
                <RegistrationForm/>
                <LoginForm/>
                <InformPage/>
                <div className="registration_block_cover"></div>
            </div>
        )
    }
}

export default RegistrationPanel