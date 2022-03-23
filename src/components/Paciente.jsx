import usePacientes from "../hooks/usePacientes";

const Paciente = ({paciente}) => {

    const { setEdicion, eliminarPaciente } = usePacientes();

    const { _id, nombre, propietario, email, fecha, sintomas } = paciente;

    const formatearFecha = (fecha) => {
        const nuevaFecha = new Date(fecha);
        nuevaFecha.setDate(nuevaFecha.getDate() + 1);

        return new Intl.DateTimeFormat("es-AR", {dateStyle: "long"}).format(nuevaFecha);
    }

    return (
        <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="mb-1 text-indigo-700 font-bold uppercase">Nombre: <span className="text-black font-normal normal-case">{nombre}</span></p>
            <p className="mb-1 text-indigo-700 font-bold uppercase">Propietario: <span className="text-black font-normal normal-case">{propietario}</span></p>
            <p className="mb-1 text-indigo-700 font-bold uppercase">Email de contacto: <span className="text-black font-normal normal-case">{email}</span></p>
            <p className="mb-1 text-indigo-700 font-bold uppercase">Fecha de Alta: <span className="text-black font-normal normal-case">{formatearFecha(fecha)}</span></p>
            <p className="mb-1 text-indigo-700 font-bold uppercase">Sintomas: <span className="text-black font-normal normal-case">{sintomas}</span></p>

            <div className="flex justify-between my-5">
                <button
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
                    onClick={() => setEdicion(paciente)}
                >
                    Editar
                </button>
                <button
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
                    onClick={() => eliminarPaciente(_id)}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente;