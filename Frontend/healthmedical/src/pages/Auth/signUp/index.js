import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { 
  Container,
  Imagem,
  DivInput,
  LogoImg,
  Title,
  TextInput,
} from './styles';

 import logo from '../../../assets/Image/Logo.png';
 import img1 from '../../../assets/Image/image.png';

export default function signUp() {

  function handleSubmit(data){
    console.tron.log(data);
  }
  return (
    <Container>
      <DivInput>
        <LogoImg src={logo} />
        
        <Title>Sign Up</Title>
         
        <Form onSubmit={handleSubmit}>
          <TextInput>Nome Completo: </TextInput>
          <Input name="name" placeholder="Insira seu Nome Completo" type="email"/>

          <TextInput>Email: </TextInput>
          <Input name="email" placeholder="Insira seu E-mail" type="email"/>
        
          <TextInput>Senha: </TextInput>
          <Input name="password" placeholder="Insira sua Senha" type="password"/>
        
          <button type="submit">Cadastrar</button>
          <Link to={"/"}>Entrar</Link>
        </Form>       
      </DivInput>
      <Imagem src={img1} />
    </Container>
  );
}
