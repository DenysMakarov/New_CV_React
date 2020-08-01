import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {connect} from "react-redux";
import {sliderInfo} from "../../db/dataBase";
import set from "@babel/runtime/helpers/esm/set";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";


class RegistrationPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }


    // possible this =>
    // onChange = (e) => {
    //     const {name, type, value} = e.target
    //     this.setState({[name]: value})
    // }

    // possible this =>
    // onSubmit = (e) => {
    //     e.preventDefault()
    //     const formRegistrationBlock = document.getElementById("registration_block")
    //     let newForm = new FormData(formRegistrationBlock)
    //     let obj = {}
    //     newForm.forEach((el, key) => {
    //         if (obj.hasOwnProperty(key)) {
    //             obj[key] = el
    //         }
    //     })
    //     let registrationForm = Object.assign({obj}, this.state.registration)
    //     // console.log(registrationForm)
    // }

    // possible this  =>
    // changeValue = (e) => {
    //     e.preventDefault()
    //     let {name, value} = e.target;
    //     let newAccount = Object.assign(this.state.registration, {});
    //     newAccount[name] = value;
    //     this.setState({registration: newAccount})
    //     console.log(this.state)
    //
    // };
    //
    // createNewAccount = (e) => {
    //     e.preventDefault()
    //     // console.log(this.state.registration)
    //     const {firstName, secondName, email, newPassword, repeatPassword} = this.state.registration
    //     if (firstName == "MDA" && secondName == "Makarov") {
    //         console.log("Ok")
    //     } else {
    //         console.log("No")
    //     }
    //     // console.log(firstName)
    // }


    render() {

        return (
            <div id="registration_container" className="registration_container">
                <RegistrationForm/>
                <LoginForm/>
                <div className="registration_block_cover"></div>
            </div>
        )
    }
}

export default RegistrationPanel