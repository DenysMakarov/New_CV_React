import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter as RouterHash} from "react-router-dom";
import {subMenu} from "../../db/dataBase";

const changeColorNavLinks = (e) => {
    const arrayNavLinks = Array.from(document.getElementsByClassName("text_of_headers_menu"))
    arrayNavLinks.map((el)=>{
        el.style.color = "#807f81"
        e.target.style.color = "white"
    })
}
const changeColorSubMenu = (e) => {
    const arraySubMenu = Array.from(document.getElementsByClassName("header_of_submenu"))
    arraySubMenu.map((el)=>{
        el.style.color = "#807f81"
        e.target.style.color = "white"
    })
}

export const createSubMenu = (position, link, text, number, classN) => {
    return (
        <Fragment>
            <div className={classN}>
                <div className=""><p className='number_menu'>{number}</p><Link to={link} onMouseOver={changeColorNavLinks}  className="text_of_headers_menu">{text}</Link></div>
                <ul className="submenu">
                    {position.map((el)=>(
                        <li key={el.id}>
                            <Link onMouseOver={changeColorSubMenu} className="header_of_submenu" to={el.link}>{el.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    )
}


class SubNavigation extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {home, events, tickets, portfolio, contacts} = subMenu

        return (
            <div className="nav_elements">
                <div className="nav_links_block">
                    {/*<div className="nav_link">*/}
                    {/*    <div onMouseOver={changeColorNavLinks} className=""><p className='number_menu'>01</p><Link to='/' className="text_of_headers_menu">Home</Link></div>*/}
                    {/*</div>*/}
                    {createSubMenu(home, '/', "Home", "01", "nav_link")}
                    {createSubMenu(events, '/events', "Events", "02",  "nav_link")}
                    {createSubMenu(tickets, '/tickets', "Tickets", "03", "nav_link")}
                    {createSubMenu(portfolio, '/portfolio', "Portfolio", "04", "nav_link")}
                    {createSubMenu(contacts, '/contacts', "Contacts", "05", "nav_link")}

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