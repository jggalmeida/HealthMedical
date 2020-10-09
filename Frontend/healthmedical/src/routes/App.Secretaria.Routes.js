import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

//import Agendas_Paciente from '../pages/paciente/Agenda';
//import Rede_Credenciada from '../pages/paciente/Rede_Credenciada';
//import Agendar_Consulta from '../pages/paciente/Agendar_Consulta';
import Dashboard_Secretaria from '../pages/secretaria/Dashboard_Secretaria'


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard_secretaria" exact component={Dashboard_Secretaria} />
            </Switch>
        </BrowserRouter>
    );
}

//<Route path="/Agendas_Paciente" exact component={Agendas_Paciente} />
//<Route path="/Rede_Credenciada" component={Rede_Credenciada} />
//<Route path="/Agendar_Consulta" component={Agendar_Consulta} />