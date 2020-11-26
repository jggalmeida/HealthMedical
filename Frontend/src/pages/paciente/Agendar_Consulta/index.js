import React, { useContext, useState, useEffect, useMemo } from 'react';
import api from '../../../services/api';
import { useParams, Link } from 'react-router-dom'
import { format, subDays, addDays, setHours, setMinutes, setSeconds, isBefore } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import pt from 'date-fns/locale/pt';

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
  ConteudoDiv,
  ConteudoHeader,
  AgendamentoDiv,
  Time


} from './styles';
import AuthContext from '../../../contexts/Auth'

import logo from '../../../assets/Image/Logo_Dashboard.png'


export default function Agendar_Consulta() {
  const { id } = useParams();
  const { user, token, SignOut } = useContext(AuthContext);
  const [date, setDate] = useState(new Date());
  // let history = useHistory();
  const [dados, setDados] = useState([])
  const [range] = useState([7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]);



  useEffect(() => {
    async function loadDados() {
      const response = await api.get('/appointments', {headers: { Authorization: `bearer ${token}`}});
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const teste = range.map(hour => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find( function(a){
              if(a.date.substr(1,10) === compareDate.toISOString().substr(1,10)){
                if (a.date.substr(11, 8) === compareDate.toISOString().substr(11, 8)){
                  return a
                }
              }
          })

        };
      });
      // console.log(teste);
      setDados(teste);
    }

    loadDados();
  }, [date])


  function signout(){
    SignOut();
}

  const dateFormated = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }), [date]
  );
  const dateFormated2 = useMemo(
    () => format(date, "yyyy'-'MM'-'dd", { locale: pt }), [date]
  );
  function handlePrevDat() {
    setDate(subDays(date, 1));
  }
  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  async function Agendar_Consulta(time){
    const data = dateFormated2+'T'+time+':00.000'
    const response =  await api.post('/appointments',{
      "medico_id": `${id}`,
      "date": `${data}`
    }, {headers: { Authorization: `bearer ${token}`}})

    console.log(response);
  }

  return (
    <Container>
      <HeaderDiv>
        <Link to={"/dashboard_Paciente"} >
          <Logo src={logo} />
        </Link>
        <BtnUser>
          <Link to={"/dashboard_Paciente"}>{user.name}</Link>
        </BtnUser>
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

        <ConteudoDiv>
          <ConteudoHeader>
            <button onClick={handlePrevDat} >
              <MdChevronLeft size={36} color="#EE4131" />
            </button>
            <strong>
              {dateFormated}
            </strong>
            <button onClick={handleNextDay} >
              <MdChevronRight size={36} color="#EE4131" />
            </button>
          </ConteudoHeader>

          <AgendamentoDiv>
            <ul>
              {
                dados.map(time => (
                  <Time key={time.time} past={time.past} available={!time.appointment}>
                    <strong>{time.time}</strong>
                    <span>{time.appointment ? `Paciente: ${time.appointment.user.name }`: 'em aberto'}</span>
                    <span>{time.appointment ? `Médico: ${time.appointment.medico.name }`: ''}</span>
                    <button onClick={() => Agendar_Consulta(time.time)}>{time.appointment ? null : 'Agendar'}</button>

                  </Time>
                ))
              }
            </ul>
          </AgendamentoDiv>

        </ConteudoDiv>
      </BodyDiv>
    </Container>
  );
}
