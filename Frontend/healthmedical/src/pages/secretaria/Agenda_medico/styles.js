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

export const MenuDiv = styled.div`
    width: 20%;
    height: 82%;
    background: rgba(238, 65, 49, 0.7);
    border-top-right-radius: 40px;
    position: absolute;
    flex-direction: column;
`;

export const ConteudoDiv = styled.div`
    margin-left: 20%;
    position: absolute;
    max-height: 82%;
    width: 78%;
`;

export const ConteudoHeader = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 35%;
    margin-bottom: 0%;

    button{
        background: none;
        border: none;
        padding-top: 1%;
        text-decoration: none;
        border-color: none;
    }

    strong{
        padding-top: 1.5%;
        color: #EE4131;
        margin: 0 20px;
        font-size: 25px;
    }
`;

export const AgendamentoDiv = styled.div`
    flex-direction: row;
    display: flex;
    
    ul{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 20px; 
        margin-top: 30px;
        
    }
`;


export const Time = styled.li`
    list-style: none;
    padding: 15px;
    border-radius: 20px;
    background-color: ${props => props.available ?  'rgba(238, 65, 49, 0.7)' : 'rgba(238, 65, 49, 0.2)'};
    opacity: ${props => props.past ? 0.5 : 1}

    strong{
        display: block;
        color: ${props => props.available ? '#fff' : '#999'};
        font-size: 15px;
    }
    span{
        font-size: 14px;
        display: block;
        margin-top: 2px;
        color: ${props => props.available ? '#fff' : '#999' };
    }
    button{
        background: none;
        border: none;
        margin-top: 13%;
        margin-left: 20%;
        text-decoration: none;
        color: #fff;
    }
`;