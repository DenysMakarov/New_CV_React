import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter as RouterHash} from "react-router-dom";

//------------------------------
import Menu from "./MenuTextBtn";
import SubNavigation from "./SubNav";

class Nav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RouterHash>
                <div className="navigation_block" id="navigation_block">
                    <Menu/>
                    <SubNavigation/>
                </div>
            </RouterHash>
        )
    }
}
export default Nav
