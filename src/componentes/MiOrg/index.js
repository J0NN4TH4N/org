import "./MiOrg.css"
import { useState } from "react"

const MiOrg = (props) => {
    console.log(props)
    //Estado -hooks
    //useState()
    //const [nombreVariable,funcionActualiza] = useSatate(valorInicial)

    //Concepto de un switch que al dar click cambia del valor inical "true" a "false"
    //Y viceversa al volver a dar click
    // const [mostrar, actualizarMostrar] = useState(true);
    // const manejarClick = () => {
    //     console.log('Mostrar/Ocultar elemento');
    //     actualizarMostrar(!mostrar);
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organización </h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarFormulario} />
    </section>
}

export default MiOrg;