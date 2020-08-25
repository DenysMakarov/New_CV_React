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


class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const loginBtn = document.getElementById("btnLogin");
        (this.props.login == false) ? loginBtn.innerText = "SIGN IN" : loginBtn.innerText = "SIGN OUT"
    }


    getValueInput = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
        // console.log(this.state)
    }

    logIn = (e) => {
        const {users} = this.props
        const loginInformText = document.getElementById("login_inform_text")
        e.preventDefault()

        if (this.props.login == false && this.state.email != "" && this.state.password != "") {

           // check email and password in db
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == this.state.email && users[i].newPassword == this.state.password) {
                    console.log(users[i].name)
                    // add to local storage
                    let setPerson = {
                        name: users[i].name,
                        email: users[i].email,
                        password: users[i].newPassword,
                    }
                    localStorage.user = JSON.stringify(setPerson)
                    this.props.logIn()
                    this.setState({
                        email: "",
                        password: ""
                    })
                    loginInformText.innerText = `${users[i].name}, Thank you for visited us!`
                    Array.from(document.getElementsByClassName("input_login")).map(el=>el.style.border = "2px solid transparent")
                    break
                } else {
                    document.getElementById("login_inform_text").innerText = "There is no account with this email. Please try again"
                    Array.from(document.getElementsByClassName("input_login")).map(el=>el.style.border = "2px solid red")
                }
                // if (document.getElementById("")){
                //
                // }
            }
        } else if (this.props.login == true){
            this.props.logOut()
            loginInformText.innerText = "By! See you soon!"
            setTimeout(()=>{
                loginInformText.innerText = "You can sign in your personal account if you have"
            }, 3000)
        }


        console.log(this.props.login)
    }

    render() {
        return (
            <form onSubmit={this.logIn} className="registration_block login_panel">
                <span className="name_of_block">ACCOUNT</span>
                <label htmlFor="email">Email</label>
                <input id="login_email" onChange={this.getValueInput} value={this.state.email} className="input_panel input_login" name="email" type="text"/>
                <label htmlFor="password">Password</label>
                <input id="login_password" onChange={this.getValueInput} value={this.state.password}  className="input_panel input_login" name="password" type="text"/>
                <div id="logInform" className="logInform"> <h5 id="login_inform_text">You can sign in your personal account if you have</h5> </div>
                <button  id="btnLogin" type="submit" className="btn_form btn_login ">SIGN IN</button>
            </form>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)