import React, {useContext} from 'react';
import { Form, Input } from '@rocketseat/unform';
import AuthContext from '../../../contexts/Auth';
import { Link, useHistory } from 'react-router-dom';

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

export default function SignIn() {
  let history = useHistory();
  const { AuthLogin } = useContext(AuthContext);

  async function handleSubmit({email, password}){
      AuthLogin({email, password}); 
  }
  
  return (
    <Container>
      <DivInput>
      <LogoImg src={logo} />
        
          <Title>Sign In</Title>
         
        <Form onSubmit={handleSubmit}>
          <TextInput>Email: </TextInput>
          <Input name="email" placeholder="Insira seu E-mail" type="email"/>
        
          <TextInput>Senha: </TextInput>
          <Input name="password" placeholder="Insira sua Senha" type="password"/>
        
          <button type="submit" >Entrar</button>
          <button onClick={() => history.push('/SignUp')} >Sign Up</button>
          
        </Form>       
      </DivInput>
      <DivImage>
        <Imagem src={img1} />
      </DivImage>

    </Container>
  );
}
