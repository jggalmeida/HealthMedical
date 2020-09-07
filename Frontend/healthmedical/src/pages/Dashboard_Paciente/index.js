import React from 'react';
import {Link} from 'react-router-dom';
import { 
  Container,
  HeaderDiv,
  Logo,
  UserNameLink,
  BodyDiv,
  MenuDiv,
  BtnMenuHome,
  BtnMenuAgenda,
  BtnMenuRedeCredenciada,
  BtnMenuConsulta,
  BtnMenuSair,
  WelcomeDiv,
  DadosClienteDiv

} from './styles';

import logo from '../../assets/Image/Logo_Dashboard.png'

export default function Dashboard() {
  let now = new Date();
  return (
    <Container>
      <HeaderDiv>
        <Link to={"/"} >
          <Logo src={logo} />
        </Link>
        <UserNameLink href={"/"}>João Almeida</UserNameLink>
      </HeaderDiv>

      <BodyDiv>
        <MenuDiv>
            <BtnMenuHome href={"/"}>Home</BtnMenuHome>
            <BtnMenuAgenda to={"/"}>Agendas</BtnMenuAgenda>
            <BtnMenuRedeCredenciada to={"/"}>Rede Credenciada</BtnMenuRedeCredenciada>
            <BtnMenuConsulta to={"/"}>Agendar Consulta</BtnMenuConsulta>
            <BtnMenuSair href={"/signin"}>Sair</BtnMenuSair>
        </MenuDiv>

        <WelcomeDiv>
          <h2>Bem Vindo(a) João Almeida</h2>
          <h3>{`você possuí 1 consultas para hoje: ${now.getUTCDay()}/${now.getUTCMonth()}/${now.getUTCFullYear()}`}</h3>
        </WelcomeDiv>
        <DadosClienteDiv>
            <h2>Dados do Médico da Próxima Consulta</h2>
            <h2>{`Consultas `}</h2>
            <h3>{`Médico: Samuel Rodrigues de Melo`}</h3>
            <h3>{`especialidade: Oftalmologia`}</h3>
            <h3>{`Ultima Consulta: 20/03/2020`}</h3>
            <h3>{`Data Consulta: 20/03/2020 - Hora: 08:30`}</h3>
        </DadosClienteDiv>
      
      </BodyDiv>
    </Container>
    );
}