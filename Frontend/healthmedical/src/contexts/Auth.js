import React, { createContext, useState } from 'react';
import { signIn } from '../services/api';
import { useHistory } from 'react-router-dom'

const AuthContext = createContext({ signed: Boolean, tipo_usuario: String, token: String, user: Object, AuthLogin: Function, SignOut: Function});

export function AuthProvider({children}){
    let history = useHistory();
    const [user, setUser] = useState({});
    const [token, setToken] = useState(); 
    const [tipo_usuario, setTipo_usuario] = useState(); 

    async function AuthLogin(email, password){
        const {token, user} = await signIn();
        setToken(token);
        setUser(user);
        setTipo_usuario(user.tipo_usuario);
               
    }

    function SignOut(){
        setToken(null);
        setUser({});
    }

    return (
        <AuthContext.Provider value={{ signed: !!token, tipo_usuario, token, user, AuthLogin, SignOut}} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;