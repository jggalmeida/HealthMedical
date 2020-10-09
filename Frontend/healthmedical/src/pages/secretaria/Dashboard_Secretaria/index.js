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
  ConsultasDiv,
  WelcomeDiv,
  ConsultasOntem,
  ConsultasHoje,
  ConsultasAmanha,
  DadosClienteDiv,
  BtnMenuSair,
} from './styles';

import logo from '../../../assets/Image/Logo_Dashboard.png'

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
          <h3>{`você possuí 10 consultas para hoje: ${now.getUTCDay()}/${now.getUTCMonth()}/${now.getUTCFullYear()}`}</h3>
        </WelcomeDiv>

        <ConsultasOntem>
          <h2>Consultas Ontem</h2>
          <h3>5</h3>
        </ConsultasOntem>
        <ConsultasHoje>
          <h2>Consultas Hoje</h2>
          <h3>10</h3>
        </ConsultasHoje>
        <ConsultasAmanha>
          <h2>Consultas Amanhã</h2>
          <h3>8</h3>
        </ConsultasAmanha>

        <DadosClienteDiv>
          <h2>Dados do Próximo Paciente</h2>
          <h2>{`Consultas: `}</h2>
          <h3>{`Paciente: Samuel Rodrigues de Melo`}</h3>
          <h3>{`Sintoma: Dor de cabeça`}</h3>
          <h3>{`Ultima Consulta: 20/03/2020`}</h3>
          <h3>{`Data Consulta: 20/03/2020 - Hora: 08:30`}</h3>
        </DadosClienteDiv>

        <ConsultasDiv>
          <h2>Consultas</h2>
        </ConsultasDiv>
      </BodyDiv>
    </Container>
    );
}