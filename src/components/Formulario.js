import React,{ useEffect, useState } from 'react';
import styled from '@emotion/styled';

import Error from './Error';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';
const Boton = styled.input`
    margin-top: 20px;
    font-weigth: bold;
    font-size: 20px;
    padding:10px;
    background-color: #66a2fe;
    border:none;
    width: 100%;
    border-radius: 10px;
    color:#ffffff;
    transition:background-color .3s ease;

    &:hover{
        background-color: #336AC0 ;
        cursor:pointer;
    }
`;
const Formulario = ({guardarMoneda,guardarCriptomoneda}) => {

    //state del listado de criptomonedas para
    const [listacripto, guardarCriptomonedas] = useState([]);
    const [error, guardarError] = useState(false);
    const MONEDAS = [
        { codigo:'USD', nombre: 'Dolar Estadounidense' },
        { codigo:'COP', nombre: 'Peso Colombiano' },
        { codigo:'MXN', nombre: 'Peso Mexicano' },
        { codigo:'EUR', nombre: 'Euro' }
    ]
    //utilizar useMoneda
    const [moneda, SelectMonedas] = useMoneda('Elige Tu Moneda','',MONEDAS); 

    //useCriptomoneda
    const[criptomoneda, SelectCriptomoneda] = useCriptomoneda('Elige tu Criptomoneda','',listacripto);

    //Ejecutar el llamado de la API
    useEffect(()=>{
        const consultarAPI = async () => {

            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado  = await axios.get(url);
            //console.log(resultado.data.Data);
            guardarCriptomonedas(resultado.data.Data);
        }
        consultarAPI();
    },[])

    //cuando el usuario hace submit
    const cotizarMoneda = e =>{
        e.preventDefault();

        if(moneda === '' || criptomoneda === '') {
            guardarError(true);
            return;
        }
        //pasar los datos al componente principal
        guardarError(false);
        guardarMoneda(moneda);
        guardarCriptomoneda(criptomoneda);
    }

    return ( 
        <form
            onSubmit={cotizarMoneda}
        >
            {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}
            <SelectMonedas/>
            <SelectCriptomoneda/>
            <Boton
               type="submit" 
               value="Calcular"
            />
        </form>
     );
}
 
export default Formulario;