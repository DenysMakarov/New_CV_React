import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter as RouterHash} from "react-router-dom";
import {subMenu} from "../../db/db";


const createSubMenu = (position, link, text) => {
    return (
        <div className="nav_link">
            <Link to={link} className=""><p className='number_menu'>01</p>{text}</Link>
            <ul className="submenu">
                {position.map((el)=>(
                    <li key={el.id}>
                        <Link to={el.link}>{el.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

class SubNavigation extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {events, tickets, portfolio, contacts} = subMenu

        return (
            <div className="nav_elements">
                <div className="nav_links_block">
                    <div className="nav_link">
                        <Link to='/' className=""><p className='number_menu'>01</p>Home</Link>
                    </div>
                    {createSubMenu(events, '/events', "Events")}
                    {createSubMenu(tickets, '/tickets', "Tickets")}
                    {createSubMenu(portfolio, '/portfolio', "Portfolio")}
                    {createSubMenu(contacts, '/contacts', "Contacts")}

                </div>
            </div>
        )
    }
}
export default SubNavigation

{/*<div className="nav_link">*/}
{/*    <Link to='/events' className=""><p className='number_menu'>01</p>Events</Link>*/}
{/*    {this.createSubMenu(subMenu.events)}*/}
{/*</div>*/}