import React, { createContext, useState } from 'react';
// import { signIn } from '../services/api';
// import { useHistory } from 'react-router-dom'

const AuthContext = createContext({ signed: Boolean, tipo_usuario: String, token: String, user: Object, AuthLogin: Function, SignOut: Function});

export function AuthProvider({children}){
    // let history = useHistory();
    const [user, setUser] = useState({
        nome: 'João Almeida Batata Silva',
        email: 'thiagomarinho@rockeseat.com.br',
        tipo_usuario: 'paciente',
      });
    const [token, setToken] = useState(null); 
    const [tipo_usuario] = useState('paciente'); 
    const [signed, setSigned] = useState(true);

    async function AuthLogin(email, password){
        // const {} = await signIn();
        // setToken(token);
        // setToken('ahuahuaksdgajshg');
        // setUser(user);
        // setTipo_usuario(user.tipo_usuario);
        // setTipo_usuario('paciente');
               
    }

    function SignOut(){
        setToken(null);
        setUser({});
        setSigned(false);
    }

    return (
        <AuthContext.Provider value={{ signed, tipo_usuario, token, user, AuthLogin, SignOut}} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;