import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route';

import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import Dashboard_Secretaria from '../pages/Dashboard_Secretaria';
import Dashboard_Paciente from '../pages/Dashboard_Paciente';


export default function Routes(){
    return(
        <Switch>
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" component={SignUp} />

            <Route path="/dashboard_secretaria" component={Dashboard_Secretaria} />
            <Route path="/" component={Dashboard_Paciente} />
            <Route path="/" component={() => <h1>Not Found 404</h1>} />
        </Switch>
    );
}