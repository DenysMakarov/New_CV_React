import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RegistrationPanel from "./components/Registration/RegistrationPanel";
import SliderBlock from "./components/SliderBlock/SliderBlock";
import Test from "./Test";
import ContactsBlock from "./components/Contacts/ContactsBlock";



const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={SliderBlock} />
            <Route path="/login" component={RegistrationPanel}/>
            <Route path="/contacts" component={ContactsBlock} />
        </Switch>
    )
}

export default Routes