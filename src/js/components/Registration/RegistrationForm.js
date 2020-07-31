import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {connect} from "react-redux";
import {sliderInfo} from "../../db/dataBase";
import set from "@babel/runtime/helpers/esm/set";
import {isEmail, isLowerWord, isNumber, isUpperWord} from "./validationForm";


class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            registration: {
                firstName: "",
                secondName: "",
                email: "",
                newPassword: "",
                repeatPassword: ""
            },
            login: {
                password: "",
                passwordRepeat: ""
            },
            validation: {
                email: false,
                password: false
            }
        }
    }

    changeValue = (e) => {
        e.preventDefault()
        let {name, value} = e.target;
        let newAccount = Object.assign(this.state.registration, {});
        newAccount[name] = value;
        this.setState({registration: newAccount})
    };


    validationForm = () => {
        const { email, newPassword, repeatPassword} = this.state.registration
        const emailForm = document.getElementById("email")
        const newPass = document.getElementById("newPassword")
        let emailInvalid = document.getElementById("emailError")
        let passwordInvalid = document.getElementById("passError")
        let errorTextPass = []
        let secondPassInvalid = document.getElementById("secondPassError")

        if (!isEmail(email)) {
            emailInvalid.innerText = "incorrect email"
            emailForm.style.border = "1px solid red"

        } else {
            emailInvalid.innerText = ""
            emailForm.style.border = "1px solid transparent"
        }

        if (!isLowerWord(newPassword)) {
            errorTextPass.push(" Please enter a-z")
        }
        if (!isUpperWord(newPassword)) {
            errorTextPass.push(" Please enter A-Z")
        }
        if (!isNumber(newPassword)) {
            errorTextPass.push(" Please enter 0-9")
        }
        if (!isNumber(newPassword) || !isUpperWord(newPassword) || isLowerWord(newPassword)) {
            newPass.style.border = "1px solid red"
        } else {
            newPass.style.border = "1px solid transparent"
        }
        passwordInvalid.innerText = errorTextPass

        if (repeatPassword != newPassword) {
            secondPassInvalid.innerText = "incorrect"
        } else {
            secondPassInvalid.innerText = ""
        }
    }


    createNewAccount = (e) => {
        e.preventDefault()
        this.validationForm()
    }


    render() {
        return (

            <form onSubmit={this.createNewAccount} id="registration_block"
                  className="registration_block registration_panel">
                <span className="name_of_block">REGISTRATION</span>
                <label htmlFor="firstName"> First Name </label>
                <input onChange={this.changeValue} type="text" className="input_panel" name="firstName"
                       type="text"/>
                <label htmlFor="secondName">Second Name</label>
                <input onChange={this.changeValue} type="text" className="input_panel" name="secondName"
                       type="text"/>
                <label htmlFor="email">
                    <span id="emailError" className="text_error"></span>
                    Email</label>
                <input onChange={this.changeValue} type="email" className="input_panel" id="email" name="email"
                       type="text"/>
                <label htmlFor="newPassword">
                    <span id="passError" className="text_error"></span>
                    New Password</label>
                <input onChange={this.changeValue} type="password" className="input_panel" id="newPassword"
                       name="newPassword"
                       type="text"/>
                <label htmlFor="repeatPassword">
                    <span id="secondPassError" className="text_error"></span>
                    Repeat Password</label>
                <input onChange={this.changeValue} type="password" value={this.state.registration.repeatPassword}
                       className="input_panel" id="repeatPassword"
                       name="repeatPassword"
                       />

                <button type="submit" className="btn_form btn_registration">SUBMIT</button>
            </form>
        )
    }
}

export default RegistrationForm

