import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {useDispatch, useSelector} from "react-redux";

import {sliderInfo} from "../../db/dataBase";
import {setSlide, showHideMenu} from "../../redux/actions/actions";
import {connect} from "react-redux";



const mapPropsToState = (state) => {
    return {
        num: state.numberOfSlideReducer.numberOfSlide
    }
}

const mapDispatch = {
    setSlide
}

class SlidePagination extends React.Component{
    constructor(props) {
        super(props);
    }

    setCount = () => {
        // this.props.setSlide
        console.log("asd")
    }

    render() {
        // console.log(this.props.num)
        return (
            <ul className="slide_pagination_panel">
                {sliderInfo.map((el) => (
                    <li
                        key={el.id}
                        data-id={el.id}
                        style={{height: 100 / sliderInfo.length + "%"}}
                        // onClick={this.setCount}
                        className="pagination_panel_number">{"0" + el.id}
                    </li>
                ))}
            </ul>
        )
    }

}

export default connect(mapPropsToState, null)(SlidePagination)

// export default () => {
//
//     const number = useSelector(state => state.numberOfSlideReducer.numberOfSlide)
//     const numberDispatch = useDispatch()
//     console.log(number)
//
//     const x = () => {
//
//     }
//
//     return (
//         <ul className="slide_pagination_panel">
//             {sliderInfo.map((el) => (
//                 <li key={el.imgPath} onClick={() => numberDispatch(setSlide())} data-id={el.id} style={{height: 100/sliderInfo.length + "%"}} className="pagination_panel_number">{"0" + el.id}</li>
//             ))}
//         </ul>
//     )
// }

