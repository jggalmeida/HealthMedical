import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
`;

export const HeaderDiv = styled.div`
    flex-direction: row;
    height: 15%;
`;

export const Logo = styled.img`
    margin-top: 2%;
    margin-bottom: 2%;
`;

export const UserNameLink = styled.a`
    font-size: 24px;
    margin-left: 48%;
    margin-top: 3%;
    position: absolute;
    color: #EE4131;
`;

export const BodyDiv = styled.div`
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
    margin-top: 180%;
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

export const WelcomeDiv = styled.div`
    position: absolute;
    width: 55%;
    height: 18%;
    margin-left: 26%;
    background: rgba(238, 65, 49, 0.4);
    border-radius: 35px;

    h2{
        color: #FFF;
        font: 22px 'roboto', sans-serif;
        padding: 0px 60px;
    }

    h3{
        color: #FFF;
        font: 20px 'roboto', sans-serif;
        padding: 5px 90px;
    }
`;

export const ConsultasOntem = styled.div`
    position: absolute;
    width: 16%;
    height: 15%;
    margin-left: 26%;
    margin-top: 12%;
    background: rgba(238, 65, 49, 0.4);
    border-radius: 35px;

    h2{
        color: #FFF;
        font: 16px 'roboto', sans-serif;
        padding: 0px 38px;
    }

    h3{
        color: #FFF;
        font: 25px 'roboto', sans-serif;
        padding: 0px 46%;
    }
`;

export const ConsultasHoje = styled.div`
    position: absolute;
    width: 16%;
    height: 15%;
    margin-left: 45.5%;
    margin-top: 12%;
    background: rgba(238, 65, 49, 0.4);
    border-radius: 35px;
    h2{
        color: #FFF;
        font: 16px 'roboto', sans-serif;
        padding: 0px 45px;
    }
    h3{
        color: #FFF;
        font: 25px 'roboto', sans-serif;
        padding: 0px 42%;
    }
`;

export const ConsultasAmanha = styled.div`
    position: absolute;
    width: 16%;
    height: 15%;
    margin-left: 65%;
    margin-top: 12%;
    background: rgba(238, 65, 49, 0.4);
    border-radius: 35px;
    h2{
        color: #FFF;
        font: 16px 'roboto', sans-serif;
        padding: 0px 33px;
    }
    h3{
        color: #FFF;
        font: 25px 'roboto', sans-serif;
        padding: 0px 48%;
    }
`;

export const DadosClienteDiv = styled.div`
    position: absolute;
    width: 55%;
    height: 38%;
    margin-left: 26%;
    margin-top: 22%;
    background: rgba(238, 65, 49, 0.4);
    border-radius: 35px;

    h2{
        color: #FFF;
        font: 22px 'roboto', sans-serif;
        margin-left: 8%;
        margin-top: 3%;
    }

    h3{
        color: #fff;
        font: 18px 'roboto', sans-serif;
        margin-left: 10%;
        margin-top: 1%;
    }
`;
