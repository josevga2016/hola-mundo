import React from 'react';
import PropTypes from 'prop-types';
import { clase_Contacto } from '../components/class/clase_Contacto.class';
import ComponenteB from './componenteB';

function componenteA({ clase_Contacto }) {
    return (
    <div>
    <h2>Nombre: {clase_Contacto.nombre}</h2>
    <h3>Apellidos: {clase_Contacto.apellido}</h3>
    <h3>Email: {clase_Contacto.email}</h3>
    <ComponenteB estado={true} />
    </div>
);
}

componenteA.propTypes = {
clase_Contacto: PropTypes.instanceOf(clase_Contacto),
};

export default componenteA;