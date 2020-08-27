import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter as RouterHash} from "react-router-dom";
import {showHideMenu} from "../../redux/actions/actions";
import {connect} from "react-redux";
import PropTypes from "prop-types"
import MenuList from "./MenuList";


const mapToProps = (state) => {
    return {
        menuAppear: state
    }
}

const mapDispatch = {
    showHideMenu
}


class MenuBtn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            typeOfMenu: "HIDE_MENU",
        }
    }

    operatorMenu = () => {
        const {menu} = this.props.menuAppear.mainMenu
        const {showHideMenu} = this.props
        const menuLinks = Array.from(document.getElementsByClassName("nav_link_menu_list"))
        const lineInBtnTop = document.getElementById("line_in_btn_top")
        const lineInBtnBottom = document.getElementById("line_in_btn_bottom")


        menuLinks.map((el) => {
            (!menu) ? el.style.marginTop = "0" : el.style.marginTop = "30px"
        })

        if (menu) {
            lineInBtnTop.classList.remove("line_in_btn_top_active");
            lineInBtnBottom.classList.remove("line_in_btn_bottom_active")

        } else {
            lineInBtnTop.classList.add("line_in_btn_top_active");
            lineInBtnBottom.classList.add("line_in_btn_bottom_active")
        }


        const menuList = document.getElementById("menu_list")
        return new Promise((res, rej) => {
            menu == false ?
                this.setState({
                    typeOfMenu: "SHOW_MENU",
                    menuListClass: "menu_list_show"
                }) :
                this.setState({
                    typeOfMenu: "HIDE_MENU",
                    menuListClass: "menu_list_hide"
                })
            res(menu)
        })
            .then((menu) => {
                showHideMenu(this.state.typeOfMenu)
                menuList.className = `menu_list ${this.state.menuListClass}`
            })
    }


    render() {
        return (
            <div id="btn_menu_block" className="btn_menu_block">
                <input onClick={this.operatorMenu} type='checkbox' defaultChecked={false} id="btn_menu"
                       className="btn_menu"></input>

                <label id="label_btn_menu" htmlFor="btn_menu" className="label_btn_menu">
                    <div id="line_in_btn_top" className="line_in_btn line_in_btn_top"></div>
                    <div id="line_in_btn_bottom" className="line_in_btn line_in_btn_bottom"></div>
                </label>
            </div>
        )
    }
}


MenuBtn.propTypes = {
    menuAppear: PropTypes.shape({
        mainMenu: PropTypes.shape({
            menu: PropTypes.bool.isRequired
        })
    })
}

export default connect(mapToProps, mapDispatch)(MenuBtn)