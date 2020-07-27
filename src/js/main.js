import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Provider} from 'react-redux';
import {compose, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

//------------------------------
import {rootReducer} from "./redux/reducers/rootReducer";
import App from "./App";
import Test from "./Test";

// WAS
const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

// BECAME for Safari => разобраться
// const middleware = applyMiddleware(
//     routerMiddleware(browserHistory),
//     thunkMiddleware,
//     authStateMiddleware
// );
//
// const composeEnhancers =
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
// const store = createStore(
//     rootReducer,
//     composeEnhancers(middleware)
// );

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(
    app,
    document.getElementById('root')
);

