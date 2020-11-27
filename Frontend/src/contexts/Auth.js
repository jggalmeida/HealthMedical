import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';
// import { useHistory } from 'react-router-dom'

const AuthContext = createContext({ signed: Boolean, tipo_usuario: String, token: String, user: Object, AuthLogin: Function, SignOut: Function });

export function AuthProvider({ children }) {
    // let history = useHistory();
    const [user, setUser] = useState({});
    const [token, setToken] = useState(null);
    const [tipo_usuario, setTipo_Usuario] = useState(null);
    const [signed, setSigned] = useState(false);

    useEffect(() => {
        loadData();
    }, []);
    const loadData = async () => {
        const storageToken = await localStorage.getItem("token");
        const storageUser = await JSON.parse(localStorage.getItem("user"));
        if (storageToken && storageUser) {
            setToken(storageToken);
            setUser(storageUser);
            setTipo_Usuario(storageUser.user_type);
            setSigned(true);
        }
    }

    async function AuthLogin({ email, password }) {
        if (email.length !== 0 && password.length !== 0) {
            //setLoading(true);
            const response = await api.post("/sessions", {
                email: `${email}`,
                password: `${password}`
            });
            //setLoading(false);
            setToken(response.data.token);
            localStorage.setItem("token", token);
            setUser(response.data.user);
            setTipo_Usuario(user.user_type);
            localStorage.setItem("user", JSON.stringify(user));
            if (token != null) {
                setSigned(true);
            }
            console.log(tipo_usuario);
        }
    }

    function SignOut() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setToken(null);
        setUser({});
        setSigned(false);
    }

    return (
        <AuthContext.Provider value={{ signed, tipo_usuario, token, user, AuthLogin, SignOut }} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;