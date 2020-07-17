import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter as RouterHash} from "react-router-dom";

//------------------------------
import SubNav from "./SubNav";
import {subMenu} from "../db/db";

class Nav extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }


    render() {
        const {events, tickets, portfolio, contacts} = subMenu

        return (
            <RouterHash>
                <div className="navigation_block">

                    <div className="nav_menu">
                        <div className="btn_block">
                            <button name="btn_menu" className="btn_menu"></button>
                            <label htmlFor="btn_menu" className="label_btn_menu">MENU</label>
                        </div>
                    </div>

                    <div className="nav_elements">
                        <div className="nav_links_block">
                            <div className="nav_link">
                                <Link to='/' className=""><p className='number_menu'>01</p>Home</Link>
                            </div>

                            {SubNav(events, '/events', "Events")}
                            {SubNav(tickets, '/tickets', "Tickets")}
                            {SubNav(portfolio, '/portfolio', "Portfolio")}
                            {SubNav(contacts, '/contacts', "Contacts")}

                        </div>
                    </div>
                </div>

            </RouterHash>
        )
    }
}

export default Nav