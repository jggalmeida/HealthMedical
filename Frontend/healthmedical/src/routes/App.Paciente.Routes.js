import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom';

//import Agendas_Paciente from '../pages/paciente/Agenda';
//import Rede_Credenciada from '../pages/paciente/Rede_Credenciada';
//import Agendar_Consulta from '../pages/paciente/Agendar_Consulta';
import Dashboard_Paciente from '../pages/paciente/Dashboard_Paciente'


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard_Paciente" exact component={Dashboard_Paciente} />
            </Switch>
        </BrowserRouter>
    );
}

//<Route path="/Agendas_Paciente" exact component={Agendas_Paciente} />
//<Route path="/Rede_Credenciada" component={Rede_Credenciada} />
//<Route path="/Agendar_Consulta" component={Agendar_Consulta} />