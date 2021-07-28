import React,{ useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';
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
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false);

  useEffect(() =>{
    
    const cotizarCriptomoneda = async () => {
        //si el dato viene vacio interrumpimos la primera ejecucion
      if (moneda === '') return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultados = await axios.get(url);
      //mostramos el spinner
      guardarCargando(true);

      //ocultar spinner y mostrar informacion con un time out
      setTimeout(()=>{
        guardarCargando(false);
        guardarResultado(resultados.data.DISPLAY[criptomoneda][moneda]);
      },3000)
    }
    cotizarCriptomoneda();

  },[moneda,criptomoneda]);

  const componente = (cargando) ? <Spinner/> : <Cotizacion resultado={resultado} />



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
        {componente}
      </div>
    </Container>
  );
}

export default App;
