import {useState, useEffect} from 'react'
import Error from './Error';

//function expresion - rafce

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    
    const [nombre, setNombre] = useState('')
    const [propietario, setPropitario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    useEffect(() => {
        if(Object.keys(paciente).length > 0) {//Comprueba si el objeto tiene algo
            setNombre(paciente.nombre)
            setPropitario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])


    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        //Validacion del formulario
        if([nombre, propietario, email, fecha, sintomas] .includes('')) {
            setError(true)
            return;
        }
        setError(false)
        
        //Objeto de paciente para almacenar
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
        }

        //Validacion para el boton editar
        if(paciente.id) {
            //Editando el Registro, pacienteState nueva variable q esta en el state consola
            //recorre con .map en todos los pacientes, seleccionamos pacState q esta en memoria y vemos si es igual
            //al q esta en el formulario y si es así retorna el objeto nuevo del form (si no ubiera : pacientestate eliminaria los demas)
            objetoPaciente.id = paciente.id
            const pacienteActualizado = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacienteActualizado)
            setPaciente({})
        } else{
            //Nuevo Registro
            objetoPaciente.id = generarId()
            setPacientes([...pacientes, objetoPaciente])
        }

        //reiniciar el form limpia
        setNombre('')
        setPropitario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }


    /* error ? 'Complete los campos' : 'No hay error'} ternario similar al if*/
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-3">
            <h2 className="font-black text-center text-3xl">Seguimiento Pacientes</h2>

            <p className="text-xl mt-5 text-center mb-10">
                Añade Pacientes y <span className="text-indigo-600 font-bold">Administrelos</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                
                {error && <Error><p>TODOS LOS CAMPOS SON OBLIGATORIOS</p></Error> }

                <div className="mb-5">
                    
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    
                    <input id="mascota" type="text" placeholder="Nombre de la Mascota" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                    value={nombre} onChange={ (e) => setNombre(e.target.value) } />
                
                </div>

                <div className="mb-5">
                    
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                    
                    <input id="propietario" type="text" placeholder="Nombre del Propietario" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={propietario} onChange={ (e) => setPropitario(e.target.value) } />
                
                </div>

                <div className="mb-5">
                    
                    <label htmlFor="Email" className="block text-gray-700 uppercase font-bold">Email</label>
                    
                    <input id="Email" type="email" placeholder="Email Contacto Propietario" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={email} onChange={ (e) => setEmail(e.target.value) } />
                
                </div>

                <div className="mb-5">
                    
                    <label htmlFor="Alta" className="block text-gray-700 uppercase font-bold">Alta</label>
                    
                    <input id="Alta" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={fecha} onChange={ (e) => setFecha(e.target.value) } />
                
                </div>

                <div className="mb-5">
                    
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                    
                    <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Describe los Síntomas" value={sintomas} onChange={ (e) => setSintomas(e.target.value) } />
                </div>

                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" 
                value={paciente.id ? 'Editar paciente' : 'Agregar Paciente' } />
            </form>

        </div>
    )
}

export default Formulario
