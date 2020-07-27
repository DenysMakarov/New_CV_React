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

class SliderBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {numberOfSlide} = this.props.state.numberOfSlideReducer
        let appearancePrevSlide = sliderInfo.length - 1;
        numberOfSlide > 0 ? appearancePrevSlide = numberOfSlide - 1 : numberOfSlide == sliderInfo.length ? appearancePrevSlide = 0 : appearancePrevSlide

        return (
            <div className="slider_block">

                <div className="right_pixel_decoration"></div>

                <div id="main_slide" className="main_slide"
                     style={{backgroundImage: sliderInfo[numberOfSlide].imgPath}}></div>


                <div id="slide_before" className="slide_before" style={{backgroundImage: sliderInfo[appearancePrevSlide].imgPath}}></div>

                <SlidePagination/>
                <Arrows/>
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(SliderBlock)