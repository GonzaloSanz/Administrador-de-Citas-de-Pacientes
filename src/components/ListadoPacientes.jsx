import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">

      {/* Comprobar si existen pacientes */}
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-2xl text-center">Listado de Pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Gestiona tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-2xl text-center">No hay pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregándolos {''}
            <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
          </p>
        </>
      )}

    </div>
  )
}

export default ListadoPacientes;