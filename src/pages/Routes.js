import React from 'react'
import {
    Route, Switch
} from 'react-router-dom'
import { HomePage } from './Home'
import { DetailPage } from './Detail'
import { BookingPage } from './Booking'

export const Routes = () => (
    <Switch>
        <Route path="/" exact component={ HomePage}/>
        <Route path="/detail/:id" component={ DetailPage}/>
        <Route path="/booking/:id" component={ BookingPage}/>
    </Switch>
)