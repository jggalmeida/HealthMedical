import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

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
  CadastroDiv,
  TextInput,
  TitleBody,


} from './styles';
import AuthContext from '../../../contexts/Auth';


import logo from '../../../assets/Image/Logo_Dashboard.png'


export default function Agendamento_consulta() {
  
  const { user, SignOut } = useContext(AuthContext)


 
  function signout(){
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
          <BtnMenuSair onClick={() => signout()}>
            <Link to={"/"} >Sair</Link>
          </BtnMenuSair>
        </MenuDiv>
        <CadastroDiv>
            <TitleBody>Geração de Consulta</TitleBody>
            <Form>
                <TextInput>Código Beneficiário: </TextInput>
                <Input name="Codtit" placeholder="Codigo do Beneficiário" type="text"/>

                <TextInput>Código Médico: </TextInput>
                <Input name="codMedico" placeholder="Codigo do Médico" type="text"/>

                <TextInput>Especialidade: </TextInput>
                <Input name="codEspecialidade" placeholder="Codigo da Especialidade" type="text"/>
                
                
                <button type="submit" >Agendar Consulta</button>
                
            </Form>       
        </CadastroDiv>

      </BodyDiv>

    </Container>
  );
}