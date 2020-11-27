import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  flex: 1;
  flex-direction: row;
  background-color: rgba(238, 65, 49, 0.6);
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const BodyDiv = styled.div`

`;


export const CadastroDiv = styled.div`
    position: absolute;
    width: 60%;
    height: 95%;
    margin-left: 20%;
    border-radius: 35px;
    margin-top: 1%;
    background-color: rgba(255,255,255,0.5);

    Input{
        color: #fff;
        margin-left: 35%;
        background: none;
        border-top: none;
        border-left: none;
        border-right: none;
        border-color: #fff;
        height: 20px;
        padding-bottom: 5px;
        width: 30%;
        font: 15px 'roboto', sans-serif;

        &::placeholder{
            color: rgba(0,0,0,0.5);
        }
    }
    button{
        border: 0;
        height: 40px;
        width: 25%;
        background: #EE4131;
        margin-left: 38%;
        margin-top: 1.5%;
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
    font: 16px 'roboto', sans-serif;
    color: #333;

`;

export const TitleBody = styled.h3`
    color: #fff;
    margin-left: 36%;
    font: 40px 'roboto', sans-serif;
`;