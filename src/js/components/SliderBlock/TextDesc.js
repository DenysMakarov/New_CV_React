import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {connect} from "react-redux";
import Arrows from "./ArrowsBlock";
import {sliderInfo} from "../../db/dataBase";
import SlidePagination from "./SlidePagination";
import set from "@babel/runtime/helpers/esm/set";


const mapStateToProps = (state) => {
    return {
        numberOfSlide: state.numberOfSlideReducer.numberOfSlide
    }
}

function FunDate() {
    const dateNew = new Date()
    const dateInfo = `${dateNew.getDate()} ${(<span>/</span>)}  ${dateNew.getMonth()} / ${dateNew.getFullYear()}`

    return (
        <span>
            {dateInfo}
        </span>
    )
}

class TextDesc extends React.Component {
    constructor(props) {
        super(props);
    }


    UNSAFE_componentWillUpdate(nextProps, nextState) {
        const arrTextSlide = Array.from(document.getElementsByClassName("text_description_slide"))
        arrTextSlide.map(el => el.style.animationName = " none")
        setTimeout(()=>{
            arrTextSlide.map((el) => {
                el.style.animationDelay = "0 !important"
                el.style.animationName = "text_slider_apear"
            })
        }, 10)
     }

    render() {
        const {numberOfSlide} = this.props
        const dateNew = new Date()

        return (
            <Fragment>
                <FunDate/>
                <div className="text_description_block">
                    <h5 className="text_description_slide text_description_slide_top">{sliderInfo[numberOfSlide].textTop}</h5>
                    <h5 className="text_description_slide text_description_slide_center">Strategy
                        decision <br/>
                        {dateNew.getDate()} <span style={{color: "red"}}> / </span> {dateNew.getMonth() + 1} <span style={{color: "red"}}> / </span> {dateNew.getFullYear()} <br/>
                    </h5>
                    <h1 className="text_description_slide text_description_slide_bottom">{sliderInfo[numberOfSlide].textBottom}</h1>
                </div>
                <h1 id="text_description_slide_behind" className="text_description_slide_behind">{sliderInfo[numberOfSlide].textBottom}</h1>
            </Fragment>

        )
    }
}

export default connect(mapStateToProps, null)(TextDesc)