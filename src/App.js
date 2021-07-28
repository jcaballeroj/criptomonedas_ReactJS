import React,{ useState, useEffect } from 'react';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';

import Formulario from './components/Formulario';
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px){
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Imagen = styled.img`
  max-width: 100%;
  margin-top:2rem;

`;

const Heading = styled.h1`
  font-family: 'Bebas Neue',cursive;
  color: #ffff;
  text-aling: left;
  font-weigth:650;
  font-size:40px;
  margin-bottom: 40px;
  margin-top:40px;
  
    &::after {
      content: '';
      width: 100px;
      height: 6px;
      background-color: #66A2FE;
      display:block;
    }

`;

function App() {

  const [moneda,guardarMoneda]= useState('');
  const [criptomoneda,guardarCriptomoneda] = useState('');

  useEffect(() =>{
    //si el dato viene vacio interrumpimos la primera ejecucion
    if (moneda === '') return;
    console.log('cotizando...');

  },[moneda,criptomoneda])
  return (
    <Container>
      <div>
        <Imagen 
          src={imagen}
          alt="imagen Cripto"
        />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario 
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />
      </div>
    </Container>
  );
}

export default App;
