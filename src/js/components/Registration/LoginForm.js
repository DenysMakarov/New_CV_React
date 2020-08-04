import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {connect} from "react-redux";
import {sliderInfo} from "../../db/dataBase";
import set from "@babel/runtime/helpers/esm/set";
import {logIn, logOut} from "../../redux/actions/actions";

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        login: state.loginReducer.login
    }
}

const mapDispatchToProps = {
    logIn,
    logOut
}

class LoginForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    getValueInput = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
        // console.log(this.state)
    }

    logIn = (e) => {
        const {users} = this.props
        e.preventDefault()
        for(let i=0; i<users.length; i++ ) {
            if (users[i].email == this.state.email && users[i].newPassword == this.state.password) {
                console.log(users[i].name)
                // add to local storage
                let setPerson = {
                    name: users[i].name,
                    email: users[i].email,
                    password: users[i].newPassword,
                }
                localStorage.user = JSON.stringify(setPerson)
                break
            }
        }
        this.props.logIn()
    }

    render() {
        return (
            <form onClick={this.logIn} className="registration_block login_panel">
                <span className="name_of_block">ACCOUNT</span>
                <label htmlFor="email">Email</label>
                <input onChange={this.getValueInput} className="input_panel" name="email" type="text"/>
                <label htmlFor="password">Password</label>
                <input onChange={this.getValueInput} className="input_panel" name="password" type="text"/>

                <button type="submit" className="btn_form btn_login ">SUBMIT</button>
            </form>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)