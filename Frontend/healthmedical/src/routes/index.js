import React from 'react'
import { Switch, Route,  } from 'react-router-dom'

import SignIn from '../pages/signIn';
import SignUn from '../pages/signUp';


export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/signUp" component={SignUn} />
        </Switch>
    );
}