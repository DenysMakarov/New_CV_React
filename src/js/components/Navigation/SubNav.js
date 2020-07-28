import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter as RouterHash} from "react-router-dom";
import {subMenu} from "../../db/dataBase";
import {createSubMenu} from "../Navigation/CreateSubMenu"

class SubNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    linkColorDisable = () => { // нужно будет изменить как активный класс
        const arrTextHeaderOfMenu = Array.from(document.getElementsByClassName("text_of_headers_menu"))
        arrTextHeaderOfMenu.map(el=>el.style.color = "#ffffff")
    }

    render() {
        const {home, events, tickets, portfolio, contacts} = subMenu
        // const arrTextHeaderOfMenu = Array.from(document.getElementsByClassName("text_of_headers_menu"))
        // arrTextHeaderOfMenu.map(el => el.addEventListener(""))

        return (
            <div className="nav_elements">
                <div onMouseLeave={this.linkColorDisable} id="nav_links_block" className="nav_links_block">
                    {/*<div className="nav_link">*/}
                    {/*    <div onMouseOver={changeColorNavLinks} className=""><p className='number_menu'>01</p><Link to='/' className="text_of_headers_menu">Home</Link></div>*/}
                    {/*</div>*/}
                    {createSubMenu(home, '/', "Home", "01", "nav_link")}
                    {createSubMenu(events, '/events', "Events", "02", "nav_link")}
                    {createSubMenu(tickets, '/tickets', "Tickets", "03", "nav_link")}
                    {createSubMenu(portfolio, '/portfolio', "Portfolio", "04", "nav_link")}
                    {createSubMenu(contacts, '/contacts', "Contacts", "05", "nav_link")}

                </div>
            </div>
        )
    }
}

export default SubNavigation

{/*<div className="nav_link">*/
}
{/*    <Link to='/events' className=""><p className='number_menu'>01</p>Events</Link>*/
}
{/*    {this.createSubMenu(subMenu.events)}*/
}
{/*</div>*/
}