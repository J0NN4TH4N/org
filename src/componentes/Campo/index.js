import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {

    // Agregamos "..." a nuestro props.placeholder atravez de placeholderModificado
    const placeholderModificado = `${props.placeholder}...`

    //Destructuracion
    const { type = "text" } = props

    const manejarCambio = (e) => {
        props.atualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label> { props.titulo } </label>
        <input 
            placeholder={ placeholderModificado } 
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo;