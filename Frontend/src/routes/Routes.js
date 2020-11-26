import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom'
import AuthContext from '../contexts/Auth';

//pages
import Appauth from './App.Auth.Routes';
import AppPaciente from './App.Paciente.Routes';
import AppSecretaria from './App.Secretaria.Routes';
import AppMedico from './App.Medico.Routes';


export default function Router() {
    const {signed, tipo_usuario} = useContext(AuthContext);
    let history = useHistory();
    if(signed === true && tipo_usuario === 'Paciente' ){
        history.push("/dashboard_Paciente");
        return <AppPaciente />
    }
    if(signed === true && tipo_usuario === 'Secretaria' ){
        history.push("/dashboard_secretaria");
        return <AppSecretaria />
    } 
    if(signed === true && tipo_usuario === 'Medico' ){
        history.push("/dashboard_Medico");
        return <AppMedico />
    }if(signed === false){
        return <Appauth />
    }
}