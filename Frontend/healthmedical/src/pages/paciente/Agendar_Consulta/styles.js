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
        padding: 10px ;
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
        padding: 10px 0px; 
    }
`;
export const MenuDiv = styled.div`
    width: 20%;
    height: 85%;
    background: rgba(238, 65, 49, 0.7);
    border-top-right-radius: 40px;
    position: absolute;
    flex-direction: column;
`;