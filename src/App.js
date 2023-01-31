import { CreadorTareas } from './componets/CreadorTareas';
import './App.css';
import { useEffect, useState } from 'react';
import ListaTareas from './componets/ListaTareas';
import { ControlVisibilidad } from './componets/ControlVisibilidad';
import { Contenedor } from './componets/Contenedor';

function App() {
  const [tareas, setTareas] = useState([])
  const [realizada, setRealizadas] = useState(false)
  function crearTareas(tareaNueva) {
    if (!tareas.find(tarea => tarea.nombre === tareaNueva)) {
      setTareas([...tareas, { nombre: tareaNueva, hecha: false }])
    }
  }

  const editarTarea = tarea => {
    setTareas(
      tareas.map(t => (t.nombre === tarea.nombre) ? { ...t, hecha: !t.hecha } : t)
    )
  }

  useEffect(() => {
    let dato = localStorage.getItem('tareas')
    if (dato) {
      setTareas(JSON.parse(dato))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

  const eliminarTarea = () => {
    setTareas(tareas.filter(t => !t.hecha))
    setRealizadas(false)
  }

  return (
    <main className="bg-dark vh-100 text-white">
      <Contenedor>
        <CreadorTareas crearTareas={crearTareas}></CreadorTareas>
        <ListaTareas tareas={tareas} editarTarea={editarTarea} realizada={false} name="por hacer"></ListaTareas>
        <ControlVisibilidad realizada={realizada} setRealizadas={(realizada) => setRealizadas(realizada)} eliminarTarea={eliminarTarea}></ControlVisibilidad>
        {
          realizada && (<ListaTareas tareas={tareas} editarTarea={editarTarea} realizada={true} name=" realizadas"></ListaTareas>)
        }
      </Contenedor>
    </main>
  );
}

export default App;
