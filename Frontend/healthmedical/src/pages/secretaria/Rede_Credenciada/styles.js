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
    flex-direction: row;
`;

export const MenuDiv = styled.div`
    width: 20%;
    height: 85%;
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

export const List = styled.div`
    flex: 1;
    background-color: rgba(238, 65, 49, 0.4);
    width: 60%;
    height: 73%;
    margin-left: 30%;
    position: absolute;
    border-radius: 40px;
    border-color: rgba(238, 65, 49, 0.8);
    border-width: 1px;
    padding-top: 3%;
`;

export const ListItens = styled.ul`
    background-color: rgba(255, 255, 255,0.5);
    border-radius: 40px;
    margin-bottom: 3%;
    margin-left: 25%;
`;

export const LiItens = styled.li`
    list-style: none;
    margin-left: 10%;
    margin-top: 2%;
    font-size: 18px;
    color: #EE4131;
`;

export const Title = styled.h2`
    margin-left: 40%;
    padding: 0px;
    margin-top: -20px;
    height: 20px;
    color: rgba(0,0,0,0.4);
`;