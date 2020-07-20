import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter as RouterHash} from "react-router-dom";
import {subMenu} from "../../db/db";


export const createSubMenu = (position, link, text, number) => {
    return (
        <Fragment>
            <div className="nav_link">
                <div className=""><p className='number_menu'>{number}</p><Link to={link} className="text_of_headers_menu">{text}</Link></div>
                <ul className="submenu">
                    {position.map((el)=>(
                        <li key={el.id}>
                            <Link to={el.link}>{el.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="sub_menu_cover"></div>
        </Fragment>
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
                    {createSubMenu(events, '/events', "Events", "02")}
                    {createSubMenu(tickets, '/tickets', "Tickets", "03")}
                    {createSubMenu(portfolio, '/portfolio', "Portfolio", "04")}
                    {createSubMenu(contacts, '/contacts', "Contacts", "05")}

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