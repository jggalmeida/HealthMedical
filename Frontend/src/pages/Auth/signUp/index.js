import React, {useContext} from 'react'
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

export default function CadastroMedico(){
    const { user, SignOut } = useContext(AuthContext);
    let history = useHistory();
    
    function signout(){
      SignOut();
    }

    async function cadastro_usuario({name, email,  password, bairro, endereco, cidade, CEP, telefone }){
      console.log('entrei');
      const response = await api.post('/users', {
        "name": `${name}`,
        "email":`${email}`,
        "password":`${password}`,
        "user_type":`Medico`,
        "endereco":`${endereco}`,
        "cidade":`${cidade}`,
        "bairro":`${bairro}`,
        "cep":`${CEP}`,
        "telefone":`${telefone}`
      });

      if(response.status === 200){
        window.alert("usuário cadastrado com sucesso!!!");
        history.push('/dashboard_secretaria');

      }
    }

    return(
        <Container>
    
       <BodyDiv>
  
 
         <CadastroDiv>
             <TitleBody>Geração de Consulta</TitleBody>
             <Form onSubmit={cadastro_usuario} >
                 <TextInput>Nome do Beneficiário: </TextInput>
                 <Input name="name" placeholder="Nome do Beneficiário" type="text"/>
 
                 <TextInput>E-mail do Beneficiário: </TextInput>
                 <Input name="email" placeholder="E-mail do Médico" type="text"/>
 
                 <TextInput>Senha Provisória: </TextInput>
                 <Input name="password" placeholder="Senha Provisória" type="password"/>

                 <TextInput>Endereço: </TextInput>
                 <Input name="endereco" placeholder="Endereço do Usuário" type="text"/>

                 <TextInput>Cidade: </TextInput>
                 <Input name="cidade" placeholder="Cidade" type="text"/>

                 <TextInput>CEP: </TextInput>
                 <Input name="CEP" placeholder="CEP" type="text"/>

                 <TextInput>Bairro: </TextInput>
                 <Input name="bairro" placeholder="Bairro" type="text"/>

                 <TextInput>Telefone: </TextInput>
                 <Input name="telefone" placeholder="Telefone" type="text"/>

                 
                 <button type="submit" >Cadastrar</button>
                <button onClick={() => history.push('/')} >Login</button>

                 
             </Form>       
         </CadastroDiv>
 
       </BodyDiv>
 
     </Container>
    );
}