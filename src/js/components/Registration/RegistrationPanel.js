import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {connect} from "react-redux";
import {sliderInfo} from "../../db/dataBase";
import set from "@babel/runtime/helpers/esm/set";


class RegistrationPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            secondName: "",
            email: "",
            firstPassword: "",
            secondPassword: ""
        }
    }

    createAccaunt = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    // onChange = ({target: {value}}) => {
    //     console.log(value)
    //     this.setState({})
    // }

    onChange = (e) => {
        const {name, type, value} = e.target
        this.setState({[name]: value})
    }


    onSubmit = (e) => {
        e.preventDefault()
        const formRegistrationBlock = document.getElementById("registration_block")
        let newForm = new FormData(formRegistrationBlock)
        let obj = {}
        newForm.forEach((el, key) => {
            if (obj.hasOwnProperty(key)) {
                obj[key] = el
            }
        })
        console.log(obj)
    }

    componentDidMount() {
        const formRegistrationBlock = document.getElementById("registration_block")
        formRegistrationBlock.onsubmit = (e) => {
            e.preventDefault()
            let newForm = new FormData(formRegistrationBlock)
            let obj = {}
            newForm.forEach((el, key) => {
                    obj[key] = el
                // console.log()
            })
            console.log(obj)
        }
    }


    render() {

        return (
            <div id="registration_container" className="registration_container">

                <form id="registration_block" className="registration_block registration_panel">
                    <span className="name_of_block">REGISTRATION</span>
                    <label htmlFor="firstName">
                        <span className="text_error">Hello</span>
                        First Name
                    </label>
                    <input type="text" className="input_panel" name="firstName" type="text"/>
                    <label htmlFor="secondName">Second Name</label>
                    <input type="text" className="input_panel" name="secondName" type="text"/>
                    <label htmlFor="Email">Email</label>
                    <input type="email" className="input_panel" name="Email" type="text"/>
                    {/*<label htmlFor="phoneNumber">Phone Number</label>*/}
                    {/*<input className="input_panel" name="phoneNumber" type="text"/>*/}
                    <label htmlFor="newPassword">New Password</label>
                    <input type="password" className="input_panel" name="newPassword" type="text"/>
                    <label htmlFor="repeatPassword">Repeat Password</label>
                    <input type="password" className="input_panel" name="repeatPassword" type="text"/>

                    <button type="submit" onSubmit={this.onSubmit} className="btn_form btn_registration">SUBMIT</button>
                </form>

                <form className="registration_block login_panel">
                    <span className="name_of_block">ACCOUNT</span>
                    <label htmlFor="email">Email</label>
                    <input className="input_panel" name="email" type="text"/>
                    <label htmlFor="password">Password</label>
                    <input className="input_panel" name="password" type="text"/>

                    <button type="submit" className="btn_form btn_login ">SUBMIT</button>
                </form>
                <div className="registration_block_cover"></div>
            </div>
        )
    }
}

export default RegistrationPanel