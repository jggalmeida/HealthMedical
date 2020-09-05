import styled from 'styled-components';

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
    margin-left: 30%;
    margin-top: 13%;
`;

export const DivInput = styled.div`
    flex: 1;
    flex-direction: row;
    position: absolute;
    background: rgba(255,255,255, 0.5);
    margin-top: 3%;
    margin-left: 10%;
    width: 23%;
    height: 85%;
    border-radius: 30px;
`;

export const Title = styled.h1`
    margin-left: 30%;
    margin-top: 5%;
`;

export const TextInput = styled.h3`
    margin-left: 16%;
    margin-top: 10%;
    font-size: 16px;
`;

export const InputEmail = styled.input`
    margin-left: 15%;
    margin-top: 3%;
    width: 70%;
    height: 7%;
    padding-left: 10px;
    border: none;
    border-radius: 10px;
    background: rgba(255,255,255,0.8);
`;
export const ButtonDiv = styled.div`
    height: 15%;
`;

export const ButtonSignIn = styled.button`
    margin-top: 9%;
    margin-left: 35%;
    background: #EE4131;
    width: 30%;
    height: 50%;
    border-radius: 10px;
    border: none;
`;
export const ButtonLinkDiv = styled.div`
    flex: 1;
    text-align: center;
    a{
        color: #EE4131;
        margin-top: 3%;
    }
`;
