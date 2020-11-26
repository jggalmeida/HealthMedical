import React, {useContext, useEffect, useMemo, useState} from 'react';
import {Link} from 'react-router-dom';
import pt from 'date-fns/locale/pt';
import { format, setHours, setMinutes, setSeconds } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz'


import AuthContext from '../../../contexts/Auth'
import api from '../../../services/api';
import { 
  Container,
  HeaderDiv,
  Logo,
  BtnUser,
  BtnMenuHome,
  BtnMenuAgenda,
  BtnMenuRedeCredenciada,
  BtnMenuConsulta,
  BtnMenuSair,
  BodyDiv,
  MenuDiv,
  WelcomeDiv,
  DadosClienteDiv

} from './styles';

import logo from '../../../assets/Image/Logo_Dashboard.png'

export default function Dashboard() {
  const { user, token, SignOut } = useContext(AuthContext)
  const [dados, setDados] = useState([]);
  const [date] = useState(new Date());

  const [range] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);


  const dateFormated = useMemo(
    () => format(date, "d' de 'MMMM", {locale: pt}),[date]
  );

  useEffect(() => {
    async function loadDados(){
      const response = await api.get('/appointments', {headers: { Authorization: `bearer ${token}`}});
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const teste = range.map(hour => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00`,
          // past: isBefore(compareDate, new Date()),
          appointment: response.data.find( function(a){
              if(a.date.substr(1,10) === compareDate.toISOString().substr(1,10)){
                if (a.date.substr(11, 8) === compareDate.toISOString().substr(11, 8)){

                  if(date.toISOString().substr(11,2) === hour){
        
                    console.log(a);
                    return 
                  }
                  // console.log(a);

                  return
                }

              }
          })

        };
      });
      // console.log(teste);
      setDados(teste);
    }
    loadDados();
  }, [token]);


  function signout(){
      SignOut();
  }
  return (
    <Container>
      <HeaderDiv>
        <Link to={"/dashboard_Paciente"} >
          <Logo src={logo} />
        </Link>
        <BtnMenuSair onClick={() => signout()}>
            <Link to={"/"} >Sair</Link>
          </BtnMenuSair>
      </HeaderDiv>

      <BodyDiv>
      <MenuDiv>
          <BtnMenuHome>
            <Link to={"/dashboard_Paciente"}>Dashboard</Link>
          </BtnMenuHome>
          <BtnMenuAgenda>
            <Link to={"/agendas_Paciente"}>Agendas</Link>
          </BtnMenuAgenda>
          <BtnMenuRedeCredenciada>
            <Link to={"/rede_Credenciada"}>Rede Credenciada</Link>
          </BtnMenuRedeCredenciada>
          <BtnMenuConsulta>
            <Link to={"/agendas_Paciente"}>Agendar Consulta</Link>
          </BtnMenuConsulta>
          <BtnMenuSair onClick={() => signout()}>
            <Link to={"/"} >Sair</Link>
          </BtnMenuSair>
      </MenuDiv>

        <WelcomeDiv>
          <h2>Bem Vindo(a) {user.name}</h2>
 
          <h3>{`você não possui ${dados.length} consultas para hoje ${dateFormated}`}</h3>

        </WelcomeDiv>
        <DadosClienteDiv>
          {
            // dados.find(function(data){
            //   console.log(data);
            // })
            //  dados.map(data => ( <>
            //   <h2>Dados do Médico da Próxima Consulta</h2>
            //   <h2>{`Consultas`}</h2>
            //   <h3>{`Médico: ${data}`}</h3>
            //   <h3>{`Data Consulta: 20/03/2020 - Hora: 08:30`}</h3>
            //   </>
            //  ))
          }
            
        </DadosClienteDiv>
      
      </BodyDiv>
    </Container>
    );
}