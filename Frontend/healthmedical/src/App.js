import React from 'react';
import { Router } from 'react-router-dom'

import './config/ReactotronConfig'
// import GlobalStyle from './styles/global';

import Routes from './routes/Routes';
import history from './services/history';

import {AuthProvider} from './contexts/Auth';

function App() {
  return (
    <AuthProvider>
      <Router history={history} >
        <Routes />
        {/* <GlobalStyle /> */}
      </Router>
    </AuthProvider> 
   
  );
}

export default App;
