export const ControlVisibilidad = ({ setRealizadas, eliminarTarea, realizada }) => {
    function eliminar() {
        if (window.confirm("¿estas seguro de eliminar las tareas realizadas?")) {
            eliminarTarea()
        }
    }
    return (
        <div className="d-flex justify-content-between bg-secundary text-white text-center p-2 border-secondary">
            <div className="form-check form-switch">
                <input className="form-check-input" type='checkbox' onChange={e => setRealizadas(e.target.checked)} checked={realizada}></input>
                <label>mostrar tareas realizadas</label>
            </div>

            <button className="btn btn-danger btn-sm" onClick={eliminar}>Eliminar tareas realizadas</button>
        </div>
    )
}