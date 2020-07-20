import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter as RouterHash} from "react-router-dom";
import {subMenu} from "../../db/db";
import {createSubMenu} from './SubNav'
import {showHideMenu} from "../../redux/actions/navigations";
import {connect} from "react-redux";

const mapToProps = (state) => {
    return {
        menu: state.mainMenu.menu
    }
}

class MenuList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuZIndex: 1
        }
    }


    render() {
        const {events, tickets, portfolio, contacts} = subMenu
        return (
            <div className={`menu_list`} id="menu_list">

                <div className="menu_list_block">
                    <div className="nav_link">
                        <div className=""><p className='number_menu'>01</p><Link to='/'>Home</Link></div>
                    </div>
                    {createSubMenu(events, '/events', "Events", "02")}
                    {createSubMenu(tickets, '/tickets', "Tickets", "03")}
                    {createSubMenu(portfolio, '/portfolio', "Portfolio", "04")}
                    {createSubMenu(contacts, '/contacts', "Contacts", "05")}
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

export default connect(mapToProps, null)(MenuList)
