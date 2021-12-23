import {useEffect} from 'react'
import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    //console.log(pacientes && pacientes.length) verifica si hay algun dato

    /*useEffect(() => {
        if(pacientes.length > 0){
            console.log('nuevo paciente')
        }
    }, [pacientes])*/

    return (

        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">Administra tus <span className="text-indigo-600 font-bold">Pacientes</span></p>
                    
                    {pacientes.map(paciente =>(//creando variable temporal paciente.(Arrow function 1parametro)
                            //<p>{paciente.nombre}</p>
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
                    <h2 className="font-black text-center text-3xl">No hay Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">Comienza agregando pacientes <span className="text-indigo-600 font-bold">y aparecerán en este lugar.</span></p>
                </>
            )}
        </div>
    )
}

export default ListadoPacientes
