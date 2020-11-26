import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Agendas_Paciente from '../pages/paciente/Agenda';
import Rede_Credenciada from '../pages/paciente/Rede_Credenciada';
import Dashboard_Paciente from '../pages/paciente/Dashboard_Paciente';
import Agendar_Consulta from '../pages/paciente/Agendar_Consulta';
import Agendamento_Consulta from '../pages/paciente/Agendamento_Consulta';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard_Paciente" exact component={Dashboard_Paciente} />
                <Route path="/rede_Credenciada" exact component={Rede_Credenciada} />
                <Route path="/agendas_Paciente" exact component={Agendas_Paciente} />
                <Route path="/agendar_Consulta/:id" exact component={Agendar_Consulta} />
                <Route path="/agendamento_Consulta" exact component={Agendamento_Consulta} />
            </Switch>
        </BrowserRouter>
    );
}