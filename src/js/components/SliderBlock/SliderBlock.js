import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {connect} from "react-redux";
import Arrows from "./ArrowsBlock";
import {sliderInfo} from "../../db/dataBase";
import {CSSTransitionGroup} from 'react-transition-group' // ES6


const mapStateToProps = (state) => {
    return {
        state: state
    }
}

// const style = {
//     // backgroundImage:
// }

class SliderBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sl: 0
        }
    }

    render() {
        const {numberOfSlide} = this.props.state.numberOfSlideReducer
        // console.log(sliderInfo[numberOfSlide])
        console.log(numberOfSlide)
        return (
            <div className="slider_block">

                <div className="right_pixel_decoration"></div>

                    {/*<div className="main_slide" style={{backgroundImage: sliderInfo[numberOfSlide].imgPath}}></div>*/}

                <div className="slide_before" style={{}}></div>
                <Arrows/>

            </div>
        )
    }
}

export default connect(mapStateToProps, null)(SliderBlock)