import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter as RouterHash} from "react-router-dom";
import {showHideMenu} from "../../redux/actions/navigations";
import {connect} from "react-redux";
import PropTypes from "prop-types"


const mapToProps = (state) => {
    return {
        menuApear: state
    }
}

const mapDispatch = {
    showHideMenu
}



class MenuBtn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            typeOfMenu: "HIDE_MENU",
            // menuListClass: "menu_list_hide"
        }
    }


    operatorMenu = () => {
        const {menu} = this.props.menuApear.mainMenu
        const {showHideMenu} = this.props
        const menuLinks = Array.from(document.getElementsByClassName("nav_link_menu_list"))
        menuLinks.map((el) => {
            (!menu) ? el.style.marginTop = "0" : el.style.marginTop = "30px"

        })

        const menuList = document.getElementById("menu_list")
        return new Promise((res, rej) => {
            menu == false ?
                this.setState({
                    typeOfMenu: "SHOW_MENU",
                    menuListClass: "menu_list_show"
                }) :
                this.setState({
                    typeOfMenu: "HIDE_MENU",
                    menuListClass: "menu_list_hide"
                })
            res(menu)
        })
            .then((menu) => {
                showHideMenu(this.state.typeOfMenu)
                menuList.className=`menu_list ${this.state.menuListClass}`
            })
    }


    render() {
        return (
            <div className="btn_menu_block">
                <input onClick={this.operatorMenu} type='checkbox' defaultChecked={false} id="btn_menu"
                       className="btn_menu"></input>
                <label htmlFor="btn_menu" className="label_btn_menu"></label>
            </div>
        )
    }
}


// MenuBtn.propTypes = {
//     menuApear: PropTypes.shape({
//         mainMenu: PropTypes.shape({
//             menu: PropTypes.bool.isRequired
//         })
//     })
// }

export default connect(mapToProps, mapDispatch)(MenuBtn)