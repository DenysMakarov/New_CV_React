import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter as RouterHash} from "react-router-dom";
import {connect} from "react-redux"
import {hideMenu, showMenu, showHideMenu} from "../../redux/actions/navigations";
import MenuList from "./MenuList";

const mapToProps = (state) => {
    return {
        menuApear: state
    }
}

const mapDispatch = {
    showHideMenu
}

const X = ({state}) => {
    return (
        <h5>{state}</h5>
    )
}

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            typeOfMenu: "HIDE_MENU"
        }
    }

    operatorMenu = () => {
        const {menu} = this.props.menuApear.mainMenu
        const {showHideMenu} = this.props
        return new Promise((res, rej) => {
            menu == false ? this.setState({typeOfMenu: "SHOW_MENU"}) : this.setState({typeOfMenu: "HIDE_MENU"})
            res(menu)
        }).then((menu) => {
            showHideMenu(this.state.typeOfMenu)
        })
    }

    render() {
        const {menu} = this.props.menuApear.mainMenu
        return (
            <div className="nav_menu">
                <div className="btn_block">

                    {menu == true ? null  : <MenuList/>}

                    <input onClick={this.operatorMenu} type='checkbox' defaultChecked={false} id="btn_menu"
                           className="btn_menu"></input>
                    <label htmlFor="btn_menu" className="label_btn_menu"></label>
                    <p className="text_btn_menu">MENU</p>
                </div>
            </div>
        )
    }
}

export default connect(mapToProps, mapDispatch)(Menu)