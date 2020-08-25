import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter} from "react-router-dom";

//------------------------------
import MenuTextBtn from "./MenuTextBtn";
import SubNavigation from "./SubNavigation";

class Nav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <HashRouter>
                <div className="navigation_block" id="navigation_block">
                    <MenuTextBtn/>
                    <SubNavigation/>
                </div>
            // </HashRouter>
        )
    }
}
export default Nav
