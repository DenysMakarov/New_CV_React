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
            registration: {
                firstName: "",
                secondName: "qw",
                email: "",
                newPassword: "",
                repeatPassword: ""
            },
            login: {
                password: "",
                passwordRepead: ""
            },
            validation: {
                email: false,
                password: false
            }

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

                {/*<form onSubmit={this.createNewAccount} id="registration_block"*/}
                {/*      className="registration_block registration_panel">*/}
                {/*    <span className="name_of_block">REGISTRATION</span>*/}
                {/*    <label htmlFor="firstName"> First Name </label>*/}
                {/*    <input onChange={this.changeValue} type="text" className="input_panel" name="firstName"*/}
                {/*           type="text"/>*/}
                {/*    <label htmlFor="secondName">Second Name</label>*/}
                {/*    <input onChange={this.changeValue} type="text" className="input_panel" name="secondName"*/}
                {/*           type="text"/>*/}
                {/*    <label htmlFor="email">*/}
                {/*        <span className="text_error">error</span>*/}
                {/*        Email</label>*/}
                {/*    <input onChange={this.changeValue} type="email" className="input_panel" name="email" type="text"/>*/}
                {/*    /!*<label htmlFor="phoneNumber">Phone Number</label>*!/*/}
                {/*    /!*<input className="input_panel" name="phoneNumber" type="text"/>*!/*/}
                {/*    <label htmlFor="newPassword">*/}
                {/*        <span className="text_error">error</span>*/}
                {/*        New Password</label>*/}
                {/*    <input onChange={this.changeValue} type="password" className="input_panel" name="newPassword"*/}
                {/*           type="text"/>*/}
                {/*    <label htmlFor="repeatPassword">*/}
                {/*        <span className="text_error">error</span>*/}
                {/*        Repeat Password</label>*/}
                {/*    <input onChange={this.changeValue} type="password" className="input_panel" name="repeatPassword"*/}
                {/*           type="text"/>*/}

                {/*    <button type="submit" className="btn_form btn_registration">SUBMIT</button>*/}
                {/*</form>*/}

                {/*<form className="registration_block login_panel">*/}
                {/*    <span className="name_of_block">ACCOUNT</span>*/}
                {/*    <label htmlFor="email">Email</label>*/}
                {/*    <input className="input_panel" name="email" type="text"/>*/}
                {/*    <label htmlFor="password">Password</label>*/}
                {/*    <input className="input_panel" name="password" type="text"/>*/}

                {/*    <button type="submit" className="btn_form btn_login ">SUBMIT</button>*/}
                {/*</form>*/}
                <div className="registration_block_cover"></div>
            </div>
        )
    }
}

export default RegistrationPanel