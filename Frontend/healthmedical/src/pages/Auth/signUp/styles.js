import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  flex: 1;
  flex-direction: row;
  background: rgba(	238, 65, 49, 0.6);
  height: 100%;
  width: 100%;
`;

export const Imagem = styled.img`
    margin-left: 43%;
    margin-top: 3%;
`;

export const LogoImg = styled.img`
    margin-left: 33%;
    margin-top: 13%;
`;

export const DivInput = styled.div`
    flex: 1;
    position: absolute;
    background: rgba(255,255,255, 0.5);
    margin-top: 3%;
    margin-left: 10%;
    width: 23%;
    height: 87%;
    border-radius: 30px;

    Form{
        display: flex;
        flex-direction: column;
        color: rgba(0,0,0,0.7);
    }

    Input{
        color: rgba(0, 0, 0, 0.8);
        margin-left: 10%;
        margin-top: 2%;
        background: rgba(255, 255, 255, 0.7);
        border: 0;
        border-radius: 10px;
        height: 35px;
        width: 80%;
        padding-left: 10px;

        &::placeholder{
            color: rgba(0, 0, 0, 0.5);
        }
    }
    button{
        border: 0;
        height: 40px;
        width: 30%;
        background: #EE4131;
        margin-left: 35%;
        margin-top: 8%;
        border-radius: 10px;
        font-size: 16px;
        font-weight: bold;
        color: #FFF;
        transition: background 0.3s;
        &:hover{
            background: ${darken(0.05, `#EE4131`)}
        }
    }
    a{
        color: #EE4131;
        margin-top: 7%;
        opacity: 0.6;
        margin-left: 43%;
        font-size: 16px;
        transition: opacity 0.3s;
        &:hover{
            opacity: 1;
        }
    }
`;

export const Title = styled.h1`
    margin-left: 35%;
    margin-top: 5%;
`;

export const TextInput = styled.h3`
    margin-left: 16%;
    margin-top: 6%;
    font-size: 16px;
`;


export const ButtonLinkDiv = styled.div`
    flex: 1;
    margin-top: 5%;
    text-align: center;
   
`;
