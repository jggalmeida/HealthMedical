import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../../contexts/Auth'
import { 
  Container,
  HeaderDiv,
  Logo,
  BtnUser,
  BtnMenuHome,
  BtnMenuAgenda,
  BtnMenuRedeCredenciada,
  BtnMenuConsulta,
  BtnMenuSair,
  BodyDiv,
  MenuDiv,
  WelcomeDiv,
  DadosClienteDiv

} from './styles';

import logo from '../../../assets/Image/Logo_Dashboard.png'

export default function Dashboard() {
  const { user } = useContext(AuthContext)
  let now = new Date();
  // console.tron.log(user);
  return (
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

        <WelcomeDiv>
          <h2>Bem Vindo(a) {user.nome}</h2>
          <h3>{`você possuí 1 consultas para hoje: ${now.getUTCDay()+1}/${now.getUTCMonth()}/${now.getUTCFullYear()}`}</h3>
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