import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {connect} from "react-redux";
import Arrows from "./ArrowsBlock";
import {sliderInfo} from "../../db/dataBase";
import SlidePagination from "./SlidePagination";



const mapStateToProps = (state) => {
    return {
        state: state
    }
}

class TextDesc extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="text_description_block">
                <h5 className="text_description_slide text_description_slide_top">Hello</h5>
                <h5 className="text_description_slide text_description_slide_center">React</h5>
                <h1 className="text_description_slide text_description_slide_bottom">Redux</h1>
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(TextDesc)