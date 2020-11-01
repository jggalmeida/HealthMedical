import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'

// import { Container } from './styles';

export default function Agendar_Consulta() {
    const { id } = useParams();

  return (
    <h1>{id}</h1>
  );
}
