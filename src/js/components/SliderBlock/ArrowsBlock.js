import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {nextSlide, prevSlide} from "../../redux/actions/actions";
import {sliderInfo} from "../../db/dataBase";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";



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

    prevSlide = () => {
        this.props.prevSlide()
        changeAnimationSlide()
    }

    nextSlide = () => {
        this.props.nextSlide()
        changeAnimationSlide()
    }

    render() {
        return (
            <Fragment>
                <div id="arrow_left"  className="arrow arrow_left">
                    <div onClick={this.prevSlide} id="arrow_left_cover" className="arrow_left_cover"/>
                    {/*<i className="fas fa-arrow-left"></i>*/}
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </div>
                <div id="arrow_right" className="arrow arrow_right">
                    <div onClick={this.nextSlide} id="arrow_right_cover" className="arrow_right_cover"/>
                    {/*<i className="fas fa-arrow-right"></i>*/}
                    <FontAwesomeIcon icon={faArrowRight}/>
                </div>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Arrows)