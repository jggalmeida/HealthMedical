import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GridList } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import api from '../../../services/api'

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
  AgendaButton,
  Title


} from './styles';
import AuthContext from '../../../contexts/Auth';


import logo from '../../../assets/Image/Logo_Dashboard.png'

const useStyles = makeStyles((theme) => ({
  gridList: {
    height: 550,
  },
}));

export default function Rede_Credenciada() {
  let history = useHistory();
  const classes = useStyles();
  const { user, token, SignOut } = useContext(AuthContext)
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
        <BtnUser>
          <Link to={"/dashboard_Paciente"}>{user.name}</Link>
        </BtnUser>
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
          <BtnMenuSair onClick={() => signout()}>
            <Link to={"/"} >Sair</Link>
          </BtnMenuSair>
        </MenuDiv>

        <List>
          <Title>Agenda Médica</Title>
          <GridList className={classes.gridList} >
            {
              dados.map(function (data) {
                return (
                  <ListItens key={data.id} >
                    <LiItens>Clínica: {data.name}</LiItens>
                    <LiItens>Endereço: {data.endereco}</LiItens>
                    <LiItens>Bairro: {data.bairro} - {data.cidade} - {data.cep} </LiItens>
                    <LiItens>Telefone: {data.telefone}</LiItens>
                    <LiItens>Telefone: {data.email}</LiItens>
                    <AgendaButton onClick={() => history.push(`/agendar_Consulta/${data.id}`)}>Ver Agenda</AgendaButton>
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