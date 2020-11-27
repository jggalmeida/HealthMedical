import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'


import Agendar_Consulta from '../pages/medico/Agenda_medico';
import Dashboard_Medico from '../pages/medico/Dashboard_Medico';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard_Medico" exact component={Dashboard_Medico} />
                <Route path="/Agendar_Consulta" exact component={Agendar_Consulta} />
            </Switch>
        </BrowserRouter>

    );
}