import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ComponenteA extends Component {
    constructor(props){
        super(props);
        this.state={
            Nombre:"jose"
        }
    }
    render() {
        return (
            <div>
                <h1>
                    Hola {this.props.Nombre}
                </h1>
                <h1>
                    Tu Apellido es {this.props.Apellido}
                </h1>
                <h1>
                    Tu Email es {this.props.Email}
                </h1>
                <h1>
                    Estas conectado: {this.props.Conectado}
                </h1>
            </div>
        );
    }
}


ComponenteA.propTypes = {
    Nombre: PropTypes.string,
    Apellido: PropTypes.string,
    Email: PropTypes.string,
    Conectado: PropTypes.bool,
};


export default ComponenteA;
