import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
`;

export const HeaderDiv = styled.div`
    flex-direction: row;
    height: 12%;
`;

export const Logo = styled.img`
    margin-top: 1%;
    margin-left: 3%;
    margin-bottom: 2%;
`;

export const BtnUser = styled.button`
   text-decoration: none;
   font-size: 20px;
   margin-left: 55%;
   margin-top: 3%;
   position: absolute;
   height: 35px;
   width: 20%;
   background: none;
   border: none;
   color: #EE4131;

    a{
        color: #EE4131;
        text-decoration: none;
    }
`;

export const BodyDiv = styled.div`
    flex-direction: row;
`;

export const MenuDiv = styled.div`
    width: 20%;
    height: 84.5%;
    background: rgba(238, 65, 49, 0.7);
    border-top-right-radius: 40px;
    position: absolute;
    flex-direction: column;
`;

export const BtnMenuHome = styled.button`
    margin-top: 10%;
    position: absolute;
    width: 100%;
    height: 8%;
    background: none;
    border: none;
    a{
        text-decoration: none;
        color: #FFF;
        font: 14px 'roboto', sans-serif;
        font-size: 20px;
        padding: 10px; 
    }
`;

export const BtnMenuAgenda = styled.button`
    margin-top: 30%;
    position: absolute;
    width: 100%;
    height: 8%;
    background: none;
    border: none;
    a{
        text-decoration: none;
        color: #FFF;
        font: 14px 'roboto', sans-serif;
        font-size: 20px;
        padding: 10px; 
    }
`;
export const BtnMenuRedeCredenciada = styled.button`
    margin-top: 50%;
    position: absolute;
    width: 100%;
    height: 8%;
    background: none;
    border: none;
    a{
        text-decoration: none;
        color: #FFF;
        font: 14px 'roboto', sans-serif;
        font-size: 20px;
        padding: 10px; 
    }
`;

export const BtnMenuConsulta = styled.button`
    margin-top: 70%;
    position: absolute;
    width: 100%;
    height: 8%;
    background: none;
    border: none;
    a{
        text-decoration: none;
        color: #FFF;
        font: 14px 'roboto', sans-serif;
        font-size: 20px;
        padding: 10px; 
    }
`;

export const BtnMenuSair = styled.button`
    margin-top: 190%;
    position: absolute;
    width: 100%;
    height: 8%;
    background: none;
    border: none;
    a{
        text-decoration: none;
        color: #FFF;
        font: 14px 'roboto', sans-serif;
        font-size: 20px;
        padding: 10px; 
    }
`;

export const CadastroDiv = styled.div`
    position: absolute;
    width: 60%;
    height: 77%;
    margin-left: 28%;
    margin-top: 2%;
    background: rgba(238, 65, 49, 0.4);
    border-radius: 35px;

    Input{
        color: #fff;
        margin-left: 35%;
        background: none;
        border-top: none;
        border-left: none;
        border-right: none;
        border-color: #fff;
        height: 35px;
        padding-left: 10px;
        width: 30%;
        font: 15px 'roboto', sans-serif;

        &::placeholder{
            color: rgba(255,255,255,0.5);
        }
    }
    button{
        border: 0;
        height: 40px;
        width: 25%;
        background: #EE4131;
        margin-left: 38%;
        margin-top: 14%;
        border-radius: 10px;
        font: 15px 'roboto', sans-serif;
        font-weight: bold;
        color: #FFF;
        transition: background 0.3s;
        &:hover{
            background: ${darken(0.05, `#EE4131`)}
        }

    }
`;

export const TextInput = styled.h3`
    margin-left: 35%;
    margin-top: 3%;
    font: 16px 'roboto', sans-serif;
    color: #333;

`;

export const TitleBody = styled.h3`
    color: #fff;
    margin-left: 36%;
    font: 25px 'roboto', sans-serif;
`;