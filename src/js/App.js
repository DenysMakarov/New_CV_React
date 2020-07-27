import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"; // метод позволяющий дипатчить акшины и получать state

//----------------------------
import Nav from "./components/Navigation/Nav"
import MenuBtn from "./components/Navigation/MenuBTN";
import MenuList from "./components/Navigation/MenuList";
import SliderBlock from "./components/SliderBlock/SliderBlock";


class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Router>
                <div className="App" style={{"textAlign": "center"}}>

                    <MenuBtn/>

                    <div className="main_container" >
                        <Nav/>
                        <SliderBlock/>
                    </div>

                    <MenuList/>

                </div>
            </Router>
        );
    }
}

export default App;


