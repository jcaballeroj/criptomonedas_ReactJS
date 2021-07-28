import React from 'react';
import styled from '@emotion/styled';

import useMoneda from '../hooks/useMoneda';

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
const Formulario = () => {

    const MONEDAS = [
        { codigo:'USD', nombre: 'Dolar Estadounidense' },
        { codigo:'COP', nombre: 'Peso Colombiano' },
        { codigo:'MXN', nombre: 'Peso Mexicano' },
        { codigo:'EUR', nombre: 'Euro' }
    ]
    //utilizar useMoneda
    const [moneda, SelectMonedas] = useMoneda('Elige Tu Moneda','',MONEDAS); 

    return ( 
        <form>
            <SelectMonedas/>
            <Boton
               type="submit" 
               value="Calcular"
            />
        </form>
     );
}
 
export default Formulario;