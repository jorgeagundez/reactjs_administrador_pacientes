import React from 'react';

const Cita = ({cita}) => {
    return (
        <div className="cita">
            <p>mascota: <span>{cita.mascota}</span></p>
            <p>propietario: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Síntomas: <span>{cita.sintomas}</span></p>
        </div>
    )
}

export default Cita;