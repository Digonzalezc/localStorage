export const FilaTarea = ({ tarea, editarTarea }) => {
    return (
        <tr>
            <td className='d-flex justify-content-between'>{tarea.nombre}
                <input type='checkbox' checked={tarea.hecha} onChange={() => editarTarea(tarea)}></input>
            </td>
        </tr>
    );
};