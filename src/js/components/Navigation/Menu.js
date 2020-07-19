import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter as RouterHash} from "react-router-dom";
import {connect} from "react-redux"
import {hideMenu, showMenu, showHideMenu} from "../../redux/actions/navigations";


const mapToProps = (state) => {
    return {
        menuApear: state
    }
}

const mapDispatch = {
    showHideMenu
}

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            typeOfMenu: "HIDE_MENU"
        }
    }

    handler = () => {
        const {menu} = this.props.menuApear.mainMenu
        const {showHideMenu} = this.props

        if (this.state.typeOfMenu == "HIDE_MENU"){
            this.setState({typeOfMenu: "SHOW_MENU"})
        } else {
            this.setState({typeOfMenu: "HIDE_MENU"})
        }
        showHideMenu(this.state.typeOfMenu)


        // console.log(this.state.typeOfMenu)
        console.log(menu)
    }

    render() {
        return (
            <div className="nav_menu">
                <div className="btn_block">

                    { this.props.menuApear.mainMenu.menu == true ? <p>"False"</p> : <p>"True"</p> }

                    <input onClick={this.handler} type='checkbox' defaultChecked={false} id="btn_menu"
                           className="btn_menu"></input>
                    <label htmlFor="btn_menu" className="label_btn_menu"></label>
                    <p className="text_btn_menu">MENU</p>
                </div>
            </div>
        )
    }
}

export default connect(mapToProps, mapDispatch)(Menu)