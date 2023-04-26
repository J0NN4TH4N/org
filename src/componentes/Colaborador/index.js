import "./Colaborador.css"
import { AiFillDelete, AiFillHeart, AiOutlineHeart } from "react-icons/ai"

const Colaborador = (props) => {
    const {Nombre, Puesto, Foto, Equipo, id, fav} = props.datos
    const {colorPrimario} = props
    const {eliminarColaborador, like} = props

    return <div className="colaborador">
        <AiFillDelete className="eliminar" onClick={ () => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={Foto} alt={Nombre}/>
        </div>
        <div className="info">
            <h4>{Nombre}</h4>
            <h5>{Puesto}</h5>
            {fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)} />}
        </div>
    </div>
}

export default Colaborador