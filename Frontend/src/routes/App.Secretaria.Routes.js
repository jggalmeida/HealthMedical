import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Dashboard_Secretaria from '../pages/secretaria/Dashboard_Secretaria'
import Rede_Credenciada from '../pages/secretaria/Rede_Credenciada';
import Agenda_medico from '../pages/secretaria/Agenda_medico'
import Agendar_Consulta from '../pages/secretaria/Agendar_Consulta';
import cadastro_Usuario from '../pages/secretaria/CadastroUsuario';
import cadastro_Medico from '../pages/secretaria/cadastroMedico';



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard_secretaria" exact component={Dashboard_Secretaria} />
                <Route path="/rede_Credenciada" exact component={Rede_Credenciada} />
                <Route path="/agenda_medico/:id" exact component={Agenda_medico} />
                <Route path="/agendar_Consulta" exact component={Agendar_Consulta} />
                <Route path="/cadastro_usuario" exact component={cadastro_Usuario} />
                <Route path="/cadastro_medico" exact component={cadastro_Medico} />
            </Switch>
        </BrowserRouter>
    );
}