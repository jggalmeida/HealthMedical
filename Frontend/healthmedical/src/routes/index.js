import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route';

import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import Dashboard from '../pages/Dashboard';


export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/signup" component={SignUp} />

            <Route path="/dashboard" component={Dashboard} isPrivate/>
            <Route path="/" component={() => <h1>Not Found 404</h1>} />
        </Switch>
    );
}