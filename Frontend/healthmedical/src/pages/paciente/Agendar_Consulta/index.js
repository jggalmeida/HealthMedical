import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom'

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
  MenuDiv

} from './styles';
import AuthContext from '../../../contexts/Auth'

import logo from '../../../assets/Image/Logo_Dashboard.png'


export default function Agendar_Consulta() {
  const { id } = useParams();
  const { user } = useContext(AuthContext)


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
      </BodyDiv>
    </Container>
  );
}
