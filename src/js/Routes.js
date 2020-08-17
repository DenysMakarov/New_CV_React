import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RegistrationPanel from "./components/Registration/RegistrationPanel";
import SliderBlock from "./components/SliderBlock/SliderBlock";
import ContactsBlock from "./components/Contacts/ContactsBlock";
import TicketsBlock from "./components/Tickets/TicketsBlock";



const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={SliderBlock} />
            <Route path="/login" component={RegistrationPanel}/>
            <Route path="/contacts" component={ContactsBlock} />
            <Route path="/tickets" component={TicketsBlock} />

        </Switch>
    )
}

export default Routes