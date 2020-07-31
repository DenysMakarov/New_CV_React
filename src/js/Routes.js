import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RegistrationPanel from "./components/Registration/RegistrationPanel";
import SliderBlock from "./components/SliderBlock/SliderBlock";
import Test from "./Test";



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