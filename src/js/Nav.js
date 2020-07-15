import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import App from "./App";

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const subMenu = [
            {
                name: "Dakkar Rally",
                id: "Dakkar Rally"
            }, {
                name: "FIA WRC",
                id: "FIA WRC"
            }, {
                name: "Bamako rally",
                id: "Bamako rally"
            }
        ]

        return (
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
                            {/*    <ul className="submenu">*/}
                            {/*        <li> <Link to='/'>Dakkar Rally</Link> </li>*/}
                            {/*        <li> <Link to='/'>FIA WRC </Link></li>*/}
                            {/*        <li><Link to='/'>Bamako rally</Link></li>*/}
                            {/*    </ul>*/}
                        </div>


                        <div className="nav_link">
                            <Link to='/events' className=""><p className='number_menu'>01</p>Events</Link>
                            <ul className="submenu">
                                <li><Link to='/events/eve'> Dakkar Rally </Link></li>
                                <li><Link to='/'>FIA WRC </Link></li>
                                <li><Link to='/'>Bamako rally</Link></li>
                            </ul>
                            <Route exact path='/events' component={Header}/>

                        </div>


                        <Link to='/portfolio' className="nav_link"><p className='number_menu'>03</p>Buy tickets
                            {/*<ul className="submenu">*/}
                            {/*    <li>Dakkar Rally</li>*/}
                            {/*    <li>FIA WRC</li>*/}
                            {/*    <li>Bamako rally</li>*/}
                            {/*</ul>*/}
                        </Link>
                        <Link to='/tickets' className="nav_link"><p className='number_menu'>04</p>Portfolio</Link>
                        <Link to='/contacts' className="nav_link"><p className='number_menu'>05</p>Contacts</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav