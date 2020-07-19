import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";

//----------------------------
import Nav from "./components/Navigation/Nav"

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className={"App"} style={{"textAlign": "center"}}>
                    <div className="main_container">
                        <Nav/>
                        <div className="slider_block">

                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;


