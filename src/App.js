import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form.js';
import Cita from './components/Cita.js';

function App() {

  // Citas en local Storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if (!citasIniciales) {
    citasIniciales = [];
  }

  // Agrupación de todas las citas
  const [citas, guardarCitas] = useState(citasIniciales);

  // Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', []);
    }
  }, [citas])

  // Función que agrege la nueva cita a las actuales
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  // Función que elimina una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas)
  }

  // Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

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
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
