import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {connect} from "react-redux";
import {nextSlide, prevSlide} from "../../redux/actions/actions";
import {sliderInfo} from "../../db/dataBase";

import {CSSTransitionGroup} from 'react-transition-group' // ES6


const mapStateToProps = (state) => {
    return {
        numberOfSlide: state.numberOfSlideReducer.numberOfSlide
    }
}

const mapDispatchToProps = {
    nextSlide: nextSlide,
    prevSlide: prevSlide
}


class Arrows extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slideNumber: 0,
            sliderInfo: sliderInfo
        }
    }

    prevSlide = () => {
        this.props.prevSlide()
    }

    nextSlide = () => {
        this.props.nextSlide()
    }

    render() {
        const {numberOfSlide} = this.props
        return (
            <Fragment>
                <div style={{top: "25px"}} className="test">{"props : " + numberOfSlide}</div>
                <div onClick={this.prevSlide} className="arrow arrow_left">
                    <i className="fas fa-arrow-left"></i></div>
                <div onClick={this.nextSlide} className="arrow arrow_right">
                    <i className="fas fa-arrow-right"></i></div>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Arrows)