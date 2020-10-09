import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  background: #f3f3f3;
`;

export const HeaderDiv = styled.div`
    flex-direction: row;
    height: 18%;
`;

export const Logo = styled.img`
    margin-top: 3%;
    margin-left: 5%;
`;

export const UserNameLink = styled.a`
    font-size: 24px;
    margin-left: 55%;
    margin-top: 3%;
    position: absolute;
    color: #EE4131;
`;

export const BodyDiv = styled.div`
    /* background: #999; */
    flex: 1;
    width: 100%;
    height: 82%;
    flex-direction: row;
`;

export const MenuDiv = styled.div`
    width: 20%;
    height: 82%;
    background: rgba(238, 65, 49, 0.7);
    border-top-right-radius: 40px;
    position: absolute;
    flex-direction: column;
`;

export const BtnMenuHome = styled.a`
    text-decoration: none;
    font-size: 20px;
    color: #FFF;
    margin-top: 10%;
    position: absolute;
    width: 100%;
    height: 10%;
    padding: 10px 80px; 
`;

export const BtnMenuAgenda = styled.a`
    text-decoration: none;
    font-size: 20px;
    color: #FFF;
    margin-top: 30%;
    position: absolute;
    width: 100%;
    height: 10%;
    padding: 10px 80px;
    
`;
export const BtnMenuRedeCredenciada = styled.a`
    text-decoration: none;
    font-size: 20px;
    color: #FFF;
    margin-top: 50%;
    position: absolute;
    width: 100%;
    height: 10%;
    padding: 10px 80px;
`;

export const BtnMenuConsulta = styled.a`
     text-decoration: none;
    font-size: 20px;
    color: #FFF;
    margin-top: 80%;
    position: absolute;
    width: 100%;
    height: 10%;
    padding: 10px 80px;  
`;

export const BtnMenuSair = styled.a`
    text-decoration: none;
    font-size: 20px;
    color: #FFF;
    margin-top: 185%;
    position: absolute;
    width: 100%;
    height: 10%;
    padding: 10px 100px;  
`;

export const WelcomeDiv = styled.div`
    position: absolute;
    width: 45%;
    height: 18%;
    margin-left: 26%;
    background: rgba(238, 65, 49, 0.4);
    border-radius: 35px;

    h2{
        color: #FFF;
        font: 22px 'roboto', sans-serif;
        padding: 10px 40px;
    }

    h3{
        color: #FFF;
        font: 20px 'roboto', sans-serif;
        padding: 10px 40px;
    }
`;

export const DadosClienteDiv = styled.div`
    position: absolute;
    width: 45%;
    height: 50%;
    margin-left: 26%;
    margin-top: 14%;
    background: rgba(238, 65, 49, 0.4);
    border-radius: 35px;

    h2{
        color: #FFF;
        font: 22px 'roboto', sans-serif;
        margin-left: 8%;
        margin-top: 5%;
    }

    h3{
        color: #fff;
        font: 18px 'roboto', sans-serif;
        margin-left: 10%;
        margin-top: 2%;
    }
`;
