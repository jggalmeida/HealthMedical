import React, { useContext } from 'react'
import { Form, Input } from '@rocketseat/unform';
import { Link, useHistory } from 'react-router-dom';


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
  TitleBody

} from './styles';

import AuthContext from '../../../contexts/Auth';
import logo from '../../../assets/Image/Logo_Dashboard.png'
import api from '../../../services/api';

export default function CadastroUsuario() {
  const { user, SignOut } = useContext(AuthContext);
  let history = useHistory();

  function signout() {
    SignOut();
  }

  async function cadastro_usuario({ name, email, password, bairro, endereco, cidade, CEP, telefone }) {
    console.log('entrei');
    const response = await api.post('/users', {
      "name": `${name}`,
      "email": `${email}`,
      "password": `${password}`,
      "user_type": `Paciente`,
      "endereco": `${endereco}`,
      "cidade": `${cidade}`,
      "bairro": `${bairro}`,
      "cep": `${CEP}`,
      "telefone": `${telefone}`
    });

    if (response.status === 200) {
      window.alert("usuário cadastrado com sucesso!!!");
      history.push('/dashboard_secretaria');

    }
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
          <TitleBody>Cadastro de Paciente</TitleBody>
          <Form onSubmit={cadastro_usuario} >
            <TextInput>Nome do Beneficiário: </TextInput>
            <Input name="name" placeholder="Nome do Beneficiário" type="text" />

            <TextInput>E-mail do Beneficiário: </TextInput>
            <Input name="email" placeholder="E-mail do Médico" type="text" />

            <TextInput>Senha Provisória: </TextInput>
            <Input name="password" placeholder="Senha Provisória" type="password" />

            <TextInput>Endereço: </TextInput>
            <Input name="endereco" placeholder="Endereço do Usuário" type="text" />

            <TextInput>Cidade: </TextInput>
            <Input name="cidade" placeholder="Cidade" type="text" />

            <TextInput>CEP: </TextInput>
            <Input name="CEP" placeholder="CEP" type="text" />

            <TextInput>Bairro: </TextInput>
            <Input name="bairro" placeholder="Bairro" type="text" />

            <TextInput>Telefone: </TextInput>
            <Input name="telefone" placeholder="Telefone" type="text" />


            <button type="submit" >Cadastrar</button>

          </Form>
        </CadastroDiv>

      </BodyDiv>

    </Container>
  );
}