import React from 'react';
import styled from '@emotion/styled';

const Resultado = styled.div`
    color: #fff;

    span{
        font-weight: bold;
    }
`;
const Info = styled.p`
 font-size:18px;
`;
const Precio = styled.p`
    font-size:30px;
`;
const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    console.log(resultado);
    return (  
        <Resultado>
            <Precio><span>El precio es: {resultado.PRICE}</span></Precio>
            <Info><span>Precio más alto del dia: {resultado.HIGHDAY}</span></Info>
            <Info><span>Precio más bajo del dia: {resultado.LOWDAY}</span></Info>
            <Info><span>Variación últimas 24 horas: {resultado.CHANGEPCT24HOUR} %</span></Info>
            <Info><span>Ultima actualizacion: {resultado.LASTUPDATE}</span></Info>
        </Resultado>

    );
}
 
export default Cotizacion;