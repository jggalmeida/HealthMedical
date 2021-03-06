import React, { useContext, useMemo, useState } from 'react';
import { Link, useHistory} from 'react-router-dom';

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
  BtnMenuConsulta,
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
  const [date] = useState(new Date());
  const { user, SignOut } = useContext(AuthContext);
  let history = useHistory();

  const dateFormated = useMemo(
    () => format(date, "d' de 'MMMM", { locale: pt }), [date]
  );
  const dateFormated2 = useMemo(
    () => format(date, "d' / 'MM", { locale: pt }), [date]
  );
  function signout() {
    SignOut();
  }

  return (
    <Container>
      <HeaderDiv>
        <Link to={"/Dashboard_Medico"} >
          <Logo src={logo} />
        </Link>
        <UserNameLink href={"/Dashboard_Medico"}>{user.name}</UserNameLink>
      </HeaderDiv>

      <BodyDiv>
        <MenuDiv>
          <BtnMenuHome>
            <Link to={"/Dashboard_Medico"}>Dashboard</Link>
          </BtnMenuHome>
          <BtnMenuConsulta>
            <Link to={"/Agendar_Consulta"}>Agendar Consulta</Link>
          </BtnMenuConsulta>
          <BtnMenuSair onClick={() => signout()}>
            <Link to={"/"} >Sair</Link>
          </BtnMenuSair>
        </MenuDiv>

        <WelcomeDiv>
          <h2>Bem Vindo(a) {user.nome}</h2>
          <h3>{`você possuí 10 consultas para hoje: ${dateFormated}`}</h3>

        </WelcomeDiv>
        <button onClick={() => history.push('/SignUp')} >Sign Up</button>

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