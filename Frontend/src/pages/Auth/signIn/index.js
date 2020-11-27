import React, { useContext } from 'react';
import { Form, Input } from '@rocketseat/unform';
import AuthContext from '../../../contexts/Auth';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Imagem,
  DivInput,
  LogoImg,
  Title,
  TextInput,
  DivImage
} from './styles';

import logo from '../../../assets/Image/Logo.png';
import img1 from '../../../assets/Image/image.png';
import api from '../../../services/api';

export default function SignIn() {
  let history = useHistory();
  const { AuthLogin } = useContext(AuthContext);

  async function handleSubmit({ email, password }) {
    AuthLogin({ email, password });
  }

  async function Primeiro_Acesso(){

    const response = await api.post('/users', {
      "name": 'Andre Breda Carneiro',
      "email": `breda@teste.com`,
      "password": `123456`,
      "user_type": `Secretaria`,
      "endereco": `Rua Teste nº 20`,
      "cidade": `Sorocaba`,
      "bairro": `Campolim`,
      "cep": `18072-831`,
      "telefone": `15123456789`
    });

    if (response.status === 200) {
      window.alert(`Email: breda@teste.com /  Senha: 123456 `);

    }
  }

  return (
    <Container>
      <DivInput>
        <LogoImg src={logo} />

        <Title>Sign In</Title>

        <Form onSubmit={handleSubmit}>
          <TextInput>Email: </TextInput>
          <Input name="email" placeholder="Insira seu E-mail" type="email" />

          <TextInput>Senha: </TextInput>
          <Input name="password" placeholder="Insira sua Senha" type="password" />

          <button type="submit" >Entrar</button>
          <button onClick={() => history.push('/SignUp')} >Sign Up</button>
          <button onClick={() => Primeiro_Acesso()} >Breda Clique Aqui !!!</button>


        </Form>
      </DivInput>
      <DivImage>
        <Imagem src={img1} />
      </DivImage>

    </Container>
  );
}
