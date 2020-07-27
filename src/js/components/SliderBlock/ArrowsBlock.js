import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {nextSlide, prevSlide} from "../../redux/actions/actions";
import {sliderInfo} from "../../db/dataBase";

import {CSSTransitionGroup} from 'react-transition-group'
import set from "@babel/runtime/helpers/esm/set"; // ES6


const mapStateToProps = (state) => {
    return {
        numberOfSlide: state.numberOfSlideReducer.numberOfSlide
    }
}

const mapDispatchToProps = {
    nextSlide: nextSlide,
    prevSlide: prevSlide
}



export const changeAnimationSlide = () => {
    let getMainSlide = document.getElementById("main_slide")
    let getBeforeSlide = document.getElementById("slide_before")

    getMainSlide.style.animationName = "none"
    getBeforeSlide.classList.remove("slider_before_appear")
    getBeforeSlide.classList.add("slider_block_hide")
    getMainSlide.classList.remove("slider_block_appear")
    getMainSlide.classList.add("slider_block_hide")
    setTimeout(() => {
        getBeforeSlide.classList.remove("slider_block_hide")
        getBeforeSlide.classList.add("slider_before_appear")
        getMainSlide.classList.remove("slider_block_hide")
        getMainSlide.classList.add("slider_block_appear")
    }, 200)
}

class Arrows extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slideNumber: 0,
            sliderInfo: sliderInfo
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(prevProps)
    }

    prevSlide = () => {
        this.props.prevSlide()
        changeAnimationSlide()
    }

    nextSlide = () => {
        this.props.nextSlide()
        changeAnimationSlide()
    }

    render() {
        const {numberOfSlide} = this.props
        return (
            <Fragment>
                {/*<div style={{top: "25px"}} className="test">{"props : " + numberOfSlide}</div>*/}
                <div onClick={this.prevSlide} className="arrow arrow_left">
                    <i className="fas fa-arrow-left"></i></div>
                <div onClick={this.nextSlide} className="arrow arrow_right">
                    <i className="fas fa-arrow-right"></i></div>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Arrows)