import React from 'react'
import '../Tarea.css'

const Tarea = (props) => {

    return (
        <li className='lista'>{props.status === true ?
            <s>{props.name}</s>
            :
            props.name}
            <input className='mycheck' type="checkbox" id='mycheck' checked={props.status} onChange={(e) => props.handleStatus(e.target.checked, props.index)} />
            <button onClick={(e) => props.handleDelete(props.index)} >Borrar</button>        
        </li>
    )
}

export default Tarea;