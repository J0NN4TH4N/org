import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import { useState } from "react";

const Formulario = (props) => {
  const [nombre, atualizarNombre] = useState("");
  const [puesto, atualizarPuesto] = useState("");
  const [foto, atualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const [titulo, actualizarTitulo] = useState("")
  const [color, actualizarColor] = useState("")

  //event o evento se puede simplificar con la letra "e"

  const { registrarColaborador, crearEquipo } = props

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log('Manejar el envio')
    let datosAEnviar = {
        Nombre: nombre,
        Puesto: puesto,
        Foto: foto,
        Equipo: equipo,
      }
      registrarColaborador(datosAEnviar)
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault()
    crearEquipo({titulo, colorPrimario: color})
  }

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo 
        titulo="Nombre" 
        placeholder="Ingresar nombre" 
        required
        valor={nombre}
        atualizarValor={atualizarNombre}
        />

        <Campo 
        titulo="Puesto" 
        placeholder="Ingresar puesto" 
        required 
        valor={puesto}
        atualizarValor={atualizarPuesto}
        />

        <Campo
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          atualizarValor={atualizarFoto}
        />

        <ListaOpciones 
        valor={equipo}
        actualizarEquipo={actualizarEquipo}
        equipos={props.equipos}
        />
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo 
        titulo="Titulo" 
        placeholder="Ingresar titulo" 
        required
        valor={titulo}
        atualizarValor={actualizarTitulo}
        />

        <Campo 
        titulo="Color" 
        placeholder="Ingresar el color en Hex" 
        required 
        valor={color}
        atualizarValor={actualizarColor}
        type="color"
        />
        <Boton>
          Registrar equipo
        </Boton>
        </form>
    </section>
  );
};

export default Formulario;
