import React, {useContext, useMemo, useState} from 'react';
import {Link} from 'react-router-dom';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

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
import AuthContext from '../../../contexts/Auth'

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  const dateFormated = useMemo(
    () => format(date, "d' de 'MMMM", {locale: pt}),[date]
  );
  const dateFormated2 = useMemo(
    () => format(date, "d' / 'MM", {locale: pt}),[date]
  );


  return (
    <Container>
      <HeaderDiv>
        <Link to={"/dashboard_secretaria"} >
          <Logo src={logo} />
        </Link>
        <UserNameLink href={"/dashboard_secretaria"}>{user.nome}</UserNameLink>
      </HeaderDiv>

      <BodyDiv>
      <MenuDiv>
          <BtnMenuHome>
            <Link to={"/dashboard_secretaria"}>Dashboard</Link>
          </BtnMenuHome>
          <BtnMenuAgenda>
            <Link to={"/agenda_medica"}>Agendas</Link>
          </BtnMenuAgenda>
          <BtnMenuRedeCredenciada>
            <Link to={"/rede_Credenciada"}>Rede Credenciada</Link>
          </BtnMenuRedeCredenciada>
          <BtnMenuConsulta>
            <Link to={"/agenda_medica"}>Agendar Consulta</Link>
          </BtnMenuConsulta>
          <BtnMenuSair>
            <Link to={"/signin"}>Sair</Link>
          </BtnMenuSair>
      </MenuDiv>

        <WelcomeDiv>
          <h2>Bem Vindo(a) {user.nome}</h2>
          <h3>{`você possuí 10 consultas para hoje: ${dateFormated}`}</h3>

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
          <h3>{`Ultima Consulta: 20/03/2020`}</h3>
          <h3>{`Data Consulta: ${dateFormated2} - Hora: 08:00`}</h3>
        </DadosClienteDiv>

      </BodyDiv>
    </Container>
    );
}