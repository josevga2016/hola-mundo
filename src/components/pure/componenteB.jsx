import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { clase_Contacto } from '../components/class/clase_Contacto.class';

function ComponenteB(estado) {
    const [conectado, setConectado] = useState(estado);
    return (
    <div>
    <h1> {conectado === true ? 'Contacto en Linea' : 'Contacto no disponible'}</h1>
    <button onClick={() => setConectado(!conectado)}>{conectado === false ? 'Conectado' : 'Desconectado'}</button>
    </div>
);
}

ComponenteB.propTypes = {
estado: PropTypes.bool,
};

export default ComponenteB;