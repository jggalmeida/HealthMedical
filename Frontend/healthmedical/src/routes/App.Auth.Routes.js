import React  from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import SignIn from '../pages/Auth/signIn'
import SignUp from '../pages/Auth/signUp';

export default function Routes(){
   

    return(
         <BrowserRouter>
            <Switch>
                <Route path="/" exact component={SignIn} />
                <Route path="/SignUp"  component={SignUp} />
                {/* <Route path="/" component={() => <h1>Not Found 404</h1>} /> */}
            </Switch>
        </BrowserRouter>
    );
}

