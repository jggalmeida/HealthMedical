import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
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
  

} from './styles';
import AuthContext from '../../../contexts/Auth';


import logo from '../../../assets/Image/Logo_Dashboard.png'

const useStyles = makeStyles((theme) => ({
  gridList: {
    height: 850,
  },
}));

export default function Rede_Credenciada() {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  const [dados] = useState([
    {
      id: 1,
      medico: 'Clinica Popular Saúde da Família',
      endereco: 'R. Rodrigues Pacheco, 62',
      bairro: 'Centro',
      cidade: 'Sorocaba',
      cep: '18035-085',
      telefone: '(15) 3329-9849', 
    },
    {
      id: 2,
      medico: 'Clinica Popular Saúde da Família',
      endereco: 'R. Rodrigues Pacheco, 62',
      bairro: 'Centro',
      cidade: 'Sorocaba',
      cep: '18035-085',
      telefone: '(15) 3329-9849', 
    },
    {
      id: 3,
      medico: 'Clinica Popular Saúde da Família',
      endereco: 'R. Rodrigues Pacheco, 62',
      bairro: 'Centro',
      cidade: 'Sorocaba',
      cep: '18035-085',
      telefone: '(15) 3329-9849', 
    },
    {
      id: 4,
      medico: 'Clinica Popular Saúde da Família',
      endereco: 'R. Rodrigues Pacheco, 62',
      bairro: 'Centro',
      cidade: 'Sorocaba',
      cep: '18035-085',
      telefone: '(15) 3329-9849', 
    },
    {
      id: 5,
      medico: 'Clinica Popular Saúde da Família',
      endereco: 'R. Rodrigues Pacheco, 62',
      bairro: 'Centro',
      cidade: 'Sorocaba',
      cep: '18035-085',
      telefone: '(15) 3329-9849', 
    },
    {
      id: 6,
      medico: 'Clinica Popular Saúde da Família',
      endereco: 'R. Rodrigues Pacheco, 62',
      bairro: 'Centro',
      cidade: 'Sorocaba',
      cep: '18035-085',
      telefone: '(15) 3329-9849', 
    },
    {
      id: 7,
      medico: 'Clinica Popular Saúde da Família',
      endereco: 'R. Rodrigues Pacheco, 62',
      bairro: 'Centro',
      cidade: 'Sorocaba',
      cep: '18035-085',
      telefone: '(15) 3329-9849', 
    },
    {
      id: 8,
      medico: 'Clinica Popular Saúde da Família',
      endereco: 'R. Rodrigues Pacheco, 62',
      bairro: 'Centro',
      cidade: 'Sorocaba',
      cep: '18035-085',
      telefone: '(15) 3329-9849', 
    },
    {
      id: 9,
      medico: 'Clinica Popular Saúde da Família',
      endereco: 'R. Rodrigues Pacheco, 62',
      bairro: 'Centro',
      cidade: 'Sorocaba',
      cep: '18035-085',
      telefone: '(15) 3329-9849', 
    },
    {
      id: 10,
      medico: 'Clinica Popular Saúde da Família',
      endereco: 'R. Rodrigues Pacheco, 62',
      bairro: 'Centro',
      cidade: 'Sorocaba',
      cep: '18035-085',
      telefone: '(15) 3329-9849', 
    },
    {
      id: 11,
      medico: 'Clinica Popular Saúde da Família',
      endereco: 'R. Rodrigues Pacheco, 62',
      bairro: 'Centro',
      cidade: 'Sorocaba',
      cep: '18035-085',
      telefone: '(15) 3329-9849', 
    },
    {
      id: 10,
      medico: 'Clinica Popular Saúde da Família',
      endereco: 'R. Rodrigues Pacheco, 62',
      bairro: 'Centro',
      cidade: 'Sorocaba',
      cep: '18035-085',
      telefone: '(15) 3329-9849', 
    },


  ]);

  return(
    <Container>
      <HeaderDiv>
        <Link to={"/dashboard_Paciente"} >
          <Logo src={logo} />
        </Link>
        <BtnUser>
          <Link to={"/dashboard_Paciente"}>{user.nome}</Link>
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
          <BtnMenuSair>
            <Link to={"/signin"}>Sair</Link>
          </BtnMenuSair>
        </MenuDiv>
        <List>
        <br/>
        <GridList className={classes.gridList} >
        {
            dados.map(function(data){
              return(
                <ListItens key={data.id} >
                  <LiItens>Clínica: {data.medico}</LiItens>
                  <LiItens>Endereço: {data.endereco}</LiItens>
                  <LiItens>Bairro: {data.bairro} - {data.cidade} - {data.cep} </LiItens>
                  <LiItens>Telefone: {data.telefone}</LiItens>
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