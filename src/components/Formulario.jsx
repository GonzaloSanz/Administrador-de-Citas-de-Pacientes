import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fechaAlta, setFechaAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  // Cada vez que el estado del paciente a editar cambie
  useEffect(() => {
    // Si no está vacío
    if (Object.keys(paciente).length > 0) {

      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFechaAlta(paciente.fechaAlta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del formulario
    if ([nombre, propietario, email, fechaAlta, sintomas].includes('')) {
      setError(true);
      return;
    }

    setError(false);

    // Objeto de Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fechaAlta,
      sintomas
    }

    if (paciente.id) {
      // Editando el registro
      objetoPaciente.id = paciente.id;

      // Identificar el paciente que tenga el mismo id, y retorna el actualizado
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);

      setPacientes(pacientesActualizados);

      // Limpiar el paciente a modificar
      setPaciente({});

      Swal.fire({
        icon: 'success',
        title: '¡Paciente modificado con éxito!',
        showConfirmButton: false,
        timer: 2500
      });

    } else {
      // Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);

      Swal.fire({
        icon: 'success',
        title: '¡Paciente agregado con éxito!',
        showConfirmButton: false,
        timer: 2500
      });
    }

    // Reiniciar el formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setFechaAlta('');
    setSintomas('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 p-5 md:p-0">
      <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        method="POST"
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >

        {error && <Error mensaje='Todos los campos son obligatorios' />}

        <div className="mb-6">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Mascota
          </label>

          <input
            id="mascota"
            name="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Propietario
          </label>

          <input
            id="propietario"
            name="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="fecha_alta" className="block text-gray-700 uppercase font-bold">
            Fecha de Alta
          </label>

          <input
            id="fecha_alta"
            name="fecha_alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fechaAlta}
            onChange={(e) => setFechaAlta(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Síntomas
          </label>

          <textarea
            id="sintomas"
            name="sintomas"
            rows="5"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas aquí..."
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="rounded-sm bg-indigo-600 hover:bg-indigo-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-all"
          value={paciente.id ? 'Modificar Paciente' : 'Agregar Paciente'}
        />

      </form>
    </div>
  )
}

export default Formulario;
