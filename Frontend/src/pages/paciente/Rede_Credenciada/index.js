import React, { useContext, useState, useEffect } from 'react';

import api from '../../../services/api';
import { Link } from 'react-router-dom';
import { GridList } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {
  Container,
  HeaderDiv,
  Logo,
  BtnUser,
  BodyDiv,
  MenuDiv,
  BtnMenuHome,
  BtnMenuAgenda,
  BtnMenuRedeCredenciada,
  BtnMenuConsulta,
  BtnMenuSair,
  List,
  ListItens,
  LiItens,
  Title,


} from './styles';
import AuthContext from '../../../contexts/Auth';


import logo from '../../../assets/Image/Logo_Dashboard.png'

const useStyles = makeStyles((theme) => ({
  gridList: {
    height: 650,
  },
}));

export default function Rede_Credenciada() {
  const classes = useStyles();
  const { user, token, SignOut } = useContext(AuthContext);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function loadDados() {
      const response = await api.get('/medicos', { headers: { Authorization: `bearer ${token}` } });
      setDados(response.data);
    }

    loadDados()
  }, [token])

  function signout() {
    SignOut();
  }

  return (
    <Container>
      <HeaderDiv>
        <Link to={"/dashboard_Paciente"} >
          <Logo src={logo} />
        </Link>
        <BtnMenuSair onClick={() => signout()}>
          <Link to={"/"} >Sair</Link>
        </BtnMenuSair>
      </HeaderDiv>

      <BodyDiv>
        <MenuDiv>
          <BtnMenuHome>
            <Link to={"/dashboard_Paciente"}>Dashboard</Link>
          </BtnMenuHome>
          <BtnMenuAgenda>
            <Link to={"/agendas_Paciente"}>Agendas</Link>
          </BtnMenuAgenda>
          <BtnMenuRedeCredenciada>
            <Link to={"/rede_Credenciada"}>Rede Credenciada</Link>
          </BtnMenuRedeCredenciada>
          <BtnMenuConsulta>
            <Link to={"/agendas_Paciente"}>Agendar Consulta</Link>
          </BtnMenuConsulta>
          <BtnMenuSair>
            <Link to={"/signin"}>Sair</Link>
          </BtnMenuSair>
        </MenuDiv>
        <List>
          <Title>Rede Credenciada</Title>
          <GridList className={classes.gridList} >
            {
              dados.map(function (data) {
                return (
                  <ListItens key={data.id} >
                    <LiItens>Clínica: {data.name}</LiItens>
                    <LiItens>Endereço: {data.endereco}</LiItens>
                    <LiItens>Bairro: {data.bairro} - {data.cidade} - {data.cep} </LiItens>
                    <LiItens>Telefone: {data.telefone}</LiItens>
                    <LiItens>E-mail: {data.email}</LiItens>
                  </ListItens>
                )
              })
            }
          </GridList>
        </List>

      </BodyDiv>

    </Container>
  );
}