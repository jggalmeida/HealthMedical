import React from 'react';
import {Link} from 'react-router-dom'

import { 
  Container,
  Imagem,
  DivInput,
  LogoImg,
  Title,
  TextInput,
  InputEmail,
  ButtonDiv,
  ButtonSignIn,
  ButtonLinkDiv
 } from './styles';

 import logo from '../../assets/Image/Logo.png';
 import img1 from '../../assets/Image/image.png';

export default function signIn() {
  return (
    <Container>
      <DivInput>
        <LogoImg src={logo} />
        
        <Title>Sign Up</Title>
        
        <TextInput>Email: </TextInput>
        <InputEmail placeholder="Insira seu Email"/>
        
        <TextInput>Senha: </TextInput>
        <InputEmail placeholder="Insira sua Senha"/>
        
        <ButtonDiv>
          <ButtonSignIn>
              Entrar
          </ButtonSignIn>
        </ButtonDiv>
        <ButtonLinkDiv>
          <Link to={"/signup"}>Inscrever-se</Link>
        </ButtonLinkDiv>
      </DivInput>
      <Imagem src={img1} />
    </Container>
  );
}
