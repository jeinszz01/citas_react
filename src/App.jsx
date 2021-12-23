
import {useState, useEffect} from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([])//arreglo
  const [paciente, setPaciente] = useState({})

  //localStorage para no perder inf al actualizar ,JSON.parse combierte de un string a un arreglo.(objeto)
  useEffect(() => {
    const obtenerLs = () => {
      const pacientesLs = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLs)
    }
    obtenerLs()
  }, [])

  //cada vez q haya un cambio en pacientes, se ejecutara el codig de useEffect 
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  //filter para sacar un elemento del arreglo
  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes = {pacientes}
          setPacientes =  {setPacientes}
          paciente = {paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
      
    </div>
  )
}

export default App
