import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {connect} from "react-redux";
import {sliderInfo} from "../../db/dataBase";
import set from "@babel/runtime/helpers/esm/set";

class LoginForm extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="registration_block login_panel">
                <span className="name_of_block">ACCOUNT</span>
                <label htmlFor="email">Email</label>
                <input className="input_panel" name="email" type="text"/>
                <label htmlFor="password">Password</label>
                <input className="input_panel" name="password" type="text"/>

                <button type="submit" className="btn_form btn_login ">SUBMIT</button>
            </form>
        )
    }
}

export default LoginForm