import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter as RouterHash} from "react-router-dom";

//------------------------------
// import SubNav from "./SubNav";
import Menu from "./Menu";
import SubNavigation from "./SubNav";

class Nav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RouterHash>
                <div className="navigation_block">
                    <Menu store={this.props}/>
                    <SubNavigation/>
                </div>
            </RouterHash>
        )
    }
}
export default Nav
