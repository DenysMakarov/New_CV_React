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


class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <HashRouter>
                <div className="App" style={{"textAlign": "center"}}>

                    <MenuBtn/>

                    <div className="main_container">
                        <Nav/>
                        <Switch>
                            {/*<Route exact path="/" component={SliderBlock} />*/}
                            {/*<Route path="/events" component={RegistrationPanel}/>*/}
                            {/*<Route path="/tickets" component={Test}/>*/}
                            {/*<Route path="/tickets" render={()=>{console.log("jlkj")}}/>*/}
                            <Routes/>
                        </Switch>
                    </div>

                    <MenuList/>

                </div>
            </HashRouter>
        );
    }
}

export default App;


