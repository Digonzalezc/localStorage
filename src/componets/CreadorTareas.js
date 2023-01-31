import { useState } from "react";

export const CreadorTareas = (props) => {
  const [tarea, setTarea] = useState("")

  const hundleSubmit = (e) => {
    e.preventDefault();
    props.crearTareas(tarea)
    setTarea("")
  }

  return (
    <form classname='my-2 row' onSubmit={hundleSubmit}>
      <div className='col-9'>
        <input
          className="form-control"
          type='text'
          placeholder='ingresa una nueva tarea'
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        ></input></div><div className='col-9'>
          <button className='btn btn-primary btn-sm'>Guardar tarea</button>
      </div>
    </form>
  );
}