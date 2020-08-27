import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter as RouterHash} from "react-router-dom";
import {subMenu} from "../../db/dataBase";
import {createSubMenu} from "../Navigation/CreateSubMenu"
import {showHideMenu} from "../../redux/actions/actions";
import {connect} from "react-redux";
import Test from "../../Test";

const mapStateToProps = (state) => {
    return {
        menu: state.mainMenu.menu
    }
}

const mapDispatch = {
    showHideMenu
}

class MenuList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuZIndex: 1
        }
    }


    render() {

        const {home, events, tickets, portfolio, contacts, Login} = subMenu
        return (
            <div className={`menu_list`} id="menu_list">

                <div className="menu_list_block">

                    {createSubMenu(home, '/', "Home", "01", "nav_link nav_link_menu_list")}
                    {createSubMenu(events, '/events', "Events", "02",  "nav_link nav_link_menu_list")}
                    {createSubMenu(tickets, '/tickets', "Tickets", "03", "nav_link nav_link_menu_list")}
                    {createSubMenu(portfolio, '/portfolio', "Portfolio", "04", "nav_link nav_link_menu_list")}
                    {createSubMenu(contacts, '/contacts', "Contacts", "05", "nav_link nav_link_menu_list")}
                    {/*{createSubMenu(Login, '/lonIn', "Login", "06", "nav_link")}*/}

                    <div id="sub_menu_cover"></div>

                </div>

                <div className="contacts_block">
                    <div className="get_in_touch">
                        <div className="social_network_icon_block"></div>
                    </div>
                    <div className="work_inquires"></div>
                </div>
            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatch)(MenuList)
