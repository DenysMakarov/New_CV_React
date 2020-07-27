import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {useDispatch, useSelector} from "react-redux";
import {connect} from "react-redux";


import {sliderInfo} from "../../db/dataBase";
import {setSlide} from "../../redux/actions/actions";
import {changeAnimationSlide} from "./ArrowsBlock"


//  =================  USES CLASS ================= //

const mapPropsToState = (state) => {
    return {
        num: state.numberOfSlideReducer.numberOfSlide
    }
}

const mapDispatchToProps = {
    setSlide
}


class SlidePagination extends React.Component {
    constructor(props) {
        super(props);
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        const arrPag = Array.from(document.getElementsByClassName("pagination_panel_number"))
        arrPag.map(el => el.classList.remove("pagination_panel_number_active"))
        arrPag[nextProps.num].classList.add("pagination_panel_number_active")
    }

    setSlider = (e) => {
        this.props.setSlide(e.target.dataset.id - 1)
        changeAnimationSlide()
    }

    render() {
        return (
            <div>
                <ul className="slide_pagination_panel">
                    {sliderInfo.map((el) => (
                        <li
                            key={el.id}
                            data-id={el.id}
                            onClick={this.setSlider}
                            style={{height: 100 / sliderInfo.length + "%"}}
                            className="pagination_panel_number">{"0" + el.id}
                        </li>
                    ))}
                </ul>
            </div>

        )
    }

}

export default connect(mapPropsToState, mapDispatchToProps)(SlidePagination)


//  =================  USES FUNCTION WITH HOOKS ================= //


// export default () => {
//     const number = useSelector(state => state.numberOfSlideReducer.numberOfSlide)
//     const slideDispatch = useDispatch()
//
//     const setSlider = (e) => {
//         slideDispatch(setSlide(e.target.dataset.id - 1))
//         changeAnimationSlide()
//         const arrPag = Array.from(document.getElementsByClassName("pagination_panel_number"))
//         arrPag.map(el => el.classList.remove("pagination_panel_number_active"))
//         e.target.classList.add("pagination_panel_number_active")
//     }
//
//     return (
//         <div>
//
//             <ul className="slide_pagination_panel">
//                 {sliderInfo.map((el) => (
//                     <li
//                         key={el.imgPath}
//                         onClick={setSlider}
//                         data-id={el.id}
//                         style={{height: 100 / sliderInfo.length + "%"}}
//                         className="pagination_panel_number">{"0" + el.id}</li>
//                 ))}
//             </ul>
//         </div>
//
//     )
// }

