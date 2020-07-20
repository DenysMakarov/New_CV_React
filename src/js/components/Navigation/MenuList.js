import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter as RouterHash} from "react-router-dom";
import {subMenu} from "../../db/db";
import {createSubMenu} from './SubNav'

class MenuList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    CreateSubMenu = (position, link, text, number) => {
        return (
            <Fragment>
                <div className="nav_link">
                    <div className="name_menu"><p className='number_menu'>number</p><Link to={link} className="text_of_headers_menu">{text}</Link></div>
                    <ul className="submenu">
                        {position.map((el) => (
                            <li key={el.id}>
                                <Link to={el.link}>{el.name}</Link>
                            </li>
                        ))}
                    </ul>
                    {/*<div className="sub_menu_cover"></div>*/}
                </div>
                {/*<div className="sub_menu_cover"></div>*/}
            </Fragment>
        )
    }


    render() {
        const {events, tickets, portfolio, contacts} = subMenu

        return (
            <div className="menu_list">

                <div className="menu_list_block">
                    <div className="nav_link">
                        <div className=""><p className='number_menu'>01</p><Link to='/'>Home</Link></div>
                    </div>
                    {createSubMenu(events, '/events', "Events", "02")}
                    {createSubMenu(tickets, '/tickets', "Tickets", "03")}
                    {createSubMenu(portfolio, '/portfolio', "Portfolio", "04")}
                    {createSubMenu(contacts, '/contacts', "Contacts", "05")}
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

export default MenuList