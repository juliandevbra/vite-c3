import './App.css'
import ClassComponent, { ChildComponent } from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'

function App() {

  const titulo1 = 'Inicio'
  const titulo2 = 'Búsqueda'
  const salario = 150000
  return (
    <>
      {/* <ClassComponent/>
      <ChildComponent/> */}
      <FuncComponent titulo={titulo1} salario={salario}/>
      <FuncComponent titulo={titulo2} />
    </>
  )
}

export default App
