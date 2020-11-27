import React, { useContext } from 'react';
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
  const { user, token, SignOut } = useContext(AuthContext);

  function signout() {
    SignOut();
  }

  return (
    <Container>
      <HeaderDiv>
        <Link to={"/dashboard_secretaria"} >
          <Logo src={logo} />
        </Link>
        <UserNameLink href={"/dashboard_secretaria"}>{user.name}</UserNameLink>
      </HeaderDiv>

      <BodyDiv>
        <MenuDiv>
          <BtnMenuHome>
            <Link to={"/dashboard_secretaria"}>Dashboard</Link>
          </BtnMenuHome>
          <BtnMenuAgenda>
            <Link to={"/cadastro_usuario"}>Cadastrar Usuário</Link>
          </BtnMenuAgenda>
          <BtnMenuRedeCredenciada>
            <Link to={"/cadastro_medico"}>Cadastrar Medico </Link>
          </BtnMenuRedeCredenciada>
          <BtnMenuSair onClick={() => signout()}>
            <Link to={"/"} >Sair</Link>
          </BtnMenuSair>
        </MenuDiv>

        <CadastroDiv>
          <TitleBody>Geração de Consulta</TitleBody>
          <Form>
            <TextInput>Código Beneficiário: </TextInput>
            <Input name="Codtit" placeholder="Codigo do Beneficiário" type="text" />

            <TextInput>Código Médico: </TextInput>
            <Input name="codMedico" placeholder="Codigo do Médico" type="text" />

            <TextInput>Especialidade: </TextInput>
            <Input name="codEspecialidade" placeholder="Codigo da Especialidade" type="text" />


            <button type="submit" >Agendar Consulta</button>

          </Form>
        </CadastroDiv>

      </BodyDiv>

    </Container>
  );
}