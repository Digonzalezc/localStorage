import { FilaTarea } from "./FilaTarea"
export default function ListaTareas({ tareas, editarTarea, realizada, name}) {
  
  const filaTarea = (realizada)=>{
    return(
      tareas.filter(tarea=> tarea.hecha===realizada)
      .map(tarea => (
        <FilaTarea tarea={tarea} key={tarea.nombre} editarTarea={editarTarea}></FilaTarea>        
        ))
    )
  }
  
  return (
    <table className='table table-dark table-striped table-bordered border-secondary'>
      <thead>
        <tr className="table-primary"><th>tareas {name}</th></tr>
      </thead>
      <tbody>
        {
         filaTarea(realizada)
        }
      </tbody>
    </table>
  )
}