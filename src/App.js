import React, { Fragment, useState } from 'react';
import Form from './components/Form.js';
import Cita from './components/Cita.js';

function App() {

  // Agrupación de todas las citas
  const [citas, guardarCitas] = useState([]);

  // Función que agrege la nueva cita a las actuales
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
