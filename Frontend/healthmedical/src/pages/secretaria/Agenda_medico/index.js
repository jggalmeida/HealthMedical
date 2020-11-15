import React, { useContext, useState, useEffect, useMemo } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom'
import { format, subDays, addDays, setHours, setMinutes, setSeconds, isBefore, isEqual, parseISO } from 'date-fns';
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
  UserNameLink,
  ConteudoDiv,
  ConteudoHeader,
  AgendamentoDiv,
  Time


} from './styles';
import AuthContext from '../../../contexts/Auth'

import logo from '../../../assets/Image/Logo_Dashboard.png'


export default function Agenda_medica() {
  // const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [date, setDate] = useState(new Date());
  let history = useHistory();
  const [dados, setDados] = useState([])
  const [range] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20]);
  // const [range] = useState([ 22, 23 ]);

  const [response] = useState(
    [
      {
        id: 2,
        nome: 'Samuel Rodrigues de Melo',
        data: '2020-11-14T22:00:00.000',
        medico: 'Jorge Amado',
        status: false
      },
      {
        id: 1,
        nome: null,
        data: null,
        medico: null,
        status: true
      }
    ]
  )

  useEffect(() => {
    function loadDados() {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const teste = range.map(hour => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.find(function (a) {
            if (parseISO(a.data) == compareDate) {
              return a
            } else {
              console.log('entrei');
              return null
            }
          })
        };
      });
      setDados(teste);
      // console.log(teste);
    }

    loadDados();
  }, [date])

  const dateFormated = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }), [date]
  );

  function handlePrevDat() {
    setDate(subDays(date, 1));
  }
  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <HeaderDiv>
        <Link to={"/dashboard_secretaria"} >
          <Logo src={logo} />
        </Link>
        <UserNameLink href={"/dashboard_secretaria"}>{user.nome}</UserNameLink>
      </HeaderDiv>

      <BodyDiv>
        <MenuDiv>
          <BtnMenuHome>
            <Link to={"/dashboard_secretaria"}>Dashboard</Link>
          </BtnMenuHome>
          <BtnMenuAgenda>
            <Link to={"/agenda_medica"}>Agendas</Link>
          </BtnMenuAgenda>
          <BtnMenuRedeCredenciada>
            <Link to={"/rede_Credenciada"}>Rede Credenciada</Link>
          </BtnMenuRedeCredenciada>
          <BtnMenuConsulta>
            <Link to={"/agenda_medica"}>Agendar Consulta</Link>
          </BtnMenuConsulta>
          <BtnMenuSair>
            <Link to={"/signin"}>Sair</Link>
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
                    <span>{time.appointment ? time.appointment.nome : 'em aberto'}</span>
                    <button onClick={() => history.push(`/agendar_Consulta`)}>{time.appointment ? null : 'Agendar'}</button>

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
