import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RegistrationPanel from "../js/components/Registration/RegistrationPanel";
import SliderBlock from "../js/components/SliderBlock/SliderBlock";
import Test from "../js/Test";



const Routes = () => {
    return (
        <Switch>
            {/*<Route exact path="/" component={SliderBlock} />*/}
            <Route path="/" component={RegistrationPanel}/>
            <Route path="*" component={Test} />
        </Switch>
    )
}

export default Routes