import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
`;

export const HeaderDiv = styled.div`
    flex-direction: row;
    height: 18%;
`;

export const Logo = styled.img`
    margin-top: 2%;
    margin-left: 3%;
    margin-bottom: 2%;
`;

export const BtnUser = styled.button`
   text-decoration: none;
   font-size: 24px;
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
        font-size: 23px;
        padding: 10px 80px; 

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
        font-size: 23px;
        padding: 10px 80px; 
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
        font-size: 23px;
        padding: 10px 80px; 
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
        font-size: 23px;
        padding: 10px 80px; 
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
        font-size: 23px;
        padding: 10px 80px; 
    }
`;

export const List = styled.div`
    flex: 1;
    background-color: rgba(238, 65, 49, 0.4);
    width: 40%;
    margin-left: 30%;
    position: absolute;
    border-radius: 40px;
    border-color: rgba(238, 65, 49, 0.8);
    border-width: 1px;
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