import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter as RouterHash} from "react-router-dom";


export default (position, link, text) => {
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

{/*<div className="nav_link">*/}
{/*    <Link to='/events' className=""><p className='number_menu'>01</p>Events</Link>*/}
{/*    {this.createSubMenu(subMenu.events)}*/}
{/*</div>*/}