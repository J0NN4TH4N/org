import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./componentes/Header/Header.js";
import Formulario from "./componentes/Formulario/Formulario.js";
import MiOrg from "./componentes/MiOrg";
import Equipo from "./componentes/Equipo";
import Footer from "./componentes/Footer";

function App() {
  const [mostrarFormulario, actualizarFormulario] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      Equipo: "Front End",
      Foto: "https://github.com/harlandlohora.png",
      Nombre: "Harland Lohora",
      Puesto: "Instructor",
      fav: true,
    },
    {
      id: uuid(),
      Equipo: "Programación",
      Foto: "https://github.com/genesysaluralatam.png",
      Nombre: "Genesys Rondon",
      Puesto: "Desarrolladora de software e instructora",
      fav: false,
    },
    {
      id: uuid(),
      Equipo: "UX y Diseño",
      Foto: "https://github.com/JeanmarieAluraLatam.png",
      Nombre: "Jeanmarie Quijada",
      Puesto: "Instructora en Alura Latam",
      fav: false,
    },
    {
      id: uuid(),
      Equipo: "Programación",
      Foto: "https://github.com/christianpva.png",
      Nombre: "Christian Velasco",
      Puesto: "Head de Alura e Instructor",
      fav: false,
    },
    {
      id: uuid(),
      Equipo: "Innovación y Gestión",
      Foto: "https://github.com/JoseDarioGonzalezCha.png",
      Nombre: "Jose Gonzalez",
      Puesto: "Dev FullStack",
      fav: true,
    }
  ]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ])

  const cambiarFormulario = () => {
    actualizarFormulario(!mostrarFormulario);
  };

  //Ternario ---> condicion ? seMuestra : noSeMuestra
  // "<></>" nos muestra algo vacio en nuestro HTML

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log('actualizar : ',color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }


  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Colaborador", colaborador);
    //Spread Operator
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  //Elminar colaborador
  const eliminarColaborador = (id) => {
    console.log('eliminar colaborador', id)
    const nuevosColaboradores = colaboradores.filter( (colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    console.log("Like----", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {mostrarFormulario === true ? (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      ) : (
        <></>
      )}
      {/*mostrarFormulario && <Formulario/>*/}
      <MiOrg cambiarFormulario={cambiarFormulario} />

      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter((colaborador) => colaborador.Equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
