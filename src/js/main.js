import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import App from "./App";
import Nav from "./Nav";


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
