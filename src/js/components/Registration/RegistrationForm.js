import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {connect} from "react-redux";
import {sliderInfo} from "../../db/dataBase";
import set from "@babel/runtime/helpers/esm/set";
import {isEmail, isLowerWord, isNumber, isUpperWord} from "./validationForm";
import {setUsers, validForm, inValidForm} from "../../redux/actions/actions";
import awaitAsyncGenerator from "@babel/runtime/helpers/esm/awaitAsyncGenerator";

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        validation: state.validationFormReducer
    }
}

const mapDispatchToProps = {
    setUsers,
    validForm,
    inValidForm
}


class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            registration: {
                id: "",
                name: "",
                username: "",
                email: "",
                newPassword: "",
                repeatPassword: ""
            },
            login: {
                password: "",
                passwordRepeat: ""
            },
            validation: false,
            users: ""
        }
    }

    componentDidMount() {
        const {setUsers} = this.props
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }


    changeValue = (e) => {
        e.preventDefault()
        let {name, value} = e.target;
        return new Promise((res, rej) => {
            let newAccount = Object.assign(this.state.registration, {});
            newAccount[name] = value;
            this.setState({registration: newAccount})
            res()
        })
            .then(() => {
                this.validationForm()
            })
            .catch((err) => console.error(err))
    };


    validationForm = () => {
        const {name, username, email, newPassword, repeatPassword} = this.state.registration
        const nameInput = document.getElementById("name")
        const usernameInput = document.getElementById("username")
        const nameError = document.getElementById("nameError")
        const usernameError = document.getElementById("usernameError")

        const emailForm = document.getElementById("email")
        const newPass = document.getElementById("newPassword")
        const emailInvalid = document.getElementById("emailError")
        const passwordInvalid = document.getElementById("passError")
        const passwordRepeatInput = document.getElementById("repeatPassword")

        let errorTextPass = []
        let secondPassInvalid = document.getElementById("secondPassError")

        const styleError = {
            color : "red",
            border: "1px solid red"
        }
        const styleValid = {
            color : "green",
            border: "2px solid green"
        }

        if (name == ""){
            nameError.innerText = "Please write your`s name"
            nameInput.style.border = styleError.border
        } else {
            nameError.innerText = ""
            nameInput.style.border = styleValid.border
        }

        if (username == ""){
            usernameError.innerText = "Please write your`s second name"
            usernameInput.style.border = styleError.border
        } else {
            usernameError.innerText = ""
            usernameInput.style.border = styleValid.border
        }

        if (!isEmail(email)) {
            emailInvalid.innerText = "Incorrect email"
            emailForm.style.border = styleError.border

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
        if (!isNumber(newPassword) || !isUpperWord(newPassword) || !isLowerWord(newPassword)) {
            newPass.style.border = styleError.border
        } else {
            newPass.style.border = styleValid.border
        }
        passwordInvalid.innerText = errorTextPass
        if (repeatPassword != newPassword || repeatPassword == "") {
            secondPassInvalid.innerText = "Password is not the same as above"
            passwordRepeatInput.style.border = styleError.border
        } else {
            secondPassInvalid.innerText = ""
            passwordRepeatInput.style.border = styleValid.border
        }

        const {inValidForm, validForm} = this.props
        if (isLowerWord(newPassword) && isUpperWord(newPassword) && isNumber(newPassword) && repeatPassword === newPassword) {
            validForm()
        } else {
            inValidForm()
        }
    }

    addUser = () => {
        const {setUsers} = this.props
        setUsers(this.state.registration)
        setTimeout(() => {
            console.log(this.props)
        }, 100)
    }


    createNewAccount = (e) => {
        const {validation} = this.props.validation
        e.preventDefault()
        this.validationForm()

        if (!validation){
            this.props.setUsers(this.state.return)
            console.log(this.props)
        }
    }


    render() {
        return (
            <form onSubmit={this.createNewAccount}
                  id="registration_block"
                  className="registration_block registration_panel">
                <span className="name_of_block">REGISTRATION</span>
                <label htmlFor="name">
                    <span id="nameError" className="text_error"></span>
                    First Name </label>
                <input onChange={this.changeValue}
                       id="name"
                       className="input_panel"
                       name="name"
                       type="text"/>
                <label htmlFor="username">
                    <span id="usernameError" className="text_error"></span>
                    Second Name</label>
                <input onChange={this.changeValue}
                       id="username"
                       className="input_panel"
                       name="username"
                       type="text"/>
                <label htmlFor="email">
                    <span id="emailError" className="text_error"></span>
                    Email</label>
                <input onChange={this.changeValue}
                       type="text"
                       className="input_panel"
                       id="email"
                       name="email"/>
                <label htmlFor="newPassword">
                    <span id="passError" className="text_error"></span>
                    New Password</label>
                <input onChange={this.changeValue}
                       type="password"
                       className="input_panel"
                       id="newPassword"
                       name="newPassword"
                       type="text"/>
                <label htmlFor="repeatPassword">
                    <span id="secondPassError" className="text_error"></span>
                    Repeat Password</label>
                <input onChange={this.changeValue}
                       value={this.state.registration.repeatPassword}
                       className="input_panel"
                       id="repeatPassword"
                       name="repeatPassword"
                       type="password"
                />
                <button type="submit" className="btn_form btn_registration">SUBMIT</button>
            </form>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)

