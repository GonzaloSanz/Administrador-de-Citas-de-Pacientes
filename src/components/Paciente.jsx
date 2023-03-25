const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    const { nombre, propietario, email, fechaAlta, sintomas, id } = paciente;

    const cambiarFormatofecha = (fecha) => fecha.split('-').reverse().join('-');

    const handleEliminar = () => {
        Swal.fire({
            title: '¿Deseas eliminar este paciente?',
            text: "No podrás revertir los cambios",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarPaciente(id)
                Swal.fire({
                    icon: 'success',
                    title: '¡Paciente eliminado con éxito!',
                    showConfirmButton: false,
                    timer: 2500
                });
            }
        });
    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md py-8 px-5 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {''}
                <span className="font-normal normal-case">{cambiarFormatofecha(fechaAlta)}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex gap-4 justify-center md:justify-start mt-8">
                <button
                    type="button"
                    className="text-sm py-2 px-6 bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white font-bold uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)}
                >Modificar</button>

                <button
                    type="button"
                    className="text-sm py-2 px-6 bg-red-600 hover:bg-red-700 cursor-pointer text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente;