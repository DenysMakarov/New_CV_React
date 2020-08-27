import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter, withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"; // метод позволяющий дипатчить акшины и получать state

//----------------------------
import Nav from "./components/Navigation/Nav"
import MenuBtn from "./components/Navigation/MenuBTN";
import MenuList from "./components/Navigation/MenuList";
import SliderBlock from "./components/SliderBlock/SliderBlock";
import RegistrationPanel from "./components/Registration/RegistrationPanel";
import Routes from "./Routes";
import Test from "./Test";
import RoundAnimation from "./components/RoundAnimation";


class App extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            posX: "1",
            posY: "1"
        }
    }

    moveRound = (e) => {
        this.setState({
            posX:e.clientX,
            posY: e.clientY
        })
    }

    componentDidMount() {

    }


    render() {
        return (
            <HashRouter>
                <div onMouseMove={this.moveRound} className="App" style={{"textAlign": "center"}}>
                    <MenuBtn/>
                    <div className="main_container">
                        <Nav/>
                        <Routes/>
                    </div>
                    <MenuList/>
                </div>
           </HashRouter>
        );
    }
}

export default App;


