import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

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
  CadastroDiv,
  TextInput,
  TitleBody,


} from './styles';
import AuthContext from '../../../contexts/Auth';


import logo from '../../../assets/Image/Logo_Dashboard.png'


export default function Agendamento_consulta() {
  const { user } = useContext(AuthContext);


  function handleSubmit({}){

  }

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

        <CadastroDiv>
            <TitleBody>Geração de Consulta</TitleBody>
            <Form onSubmit={handleSubmit}>
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