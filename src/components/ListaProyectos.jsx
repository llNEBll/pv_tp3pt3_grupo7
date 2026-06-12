// src/components/ListaProyectos.jsx
import proyectoService from "../services/proyectoService";
import { useState, useEffect, useRef } from "react";
import ProyectoCard from "./ProyectoCard";
import DetalleProyecto from "./DetalleProyecto";
import FormularioProyecto from "./FormularioProyecto";
import RegistroActividad from "./RegistroActividad";

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos()
  );

  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const [ultimaActualizacion, setUltimaActualizacion] = useState(null);

  const primeraVez = useRef(true);

  useEffect(() => {
    if (primeraVez.current) {
      primeraVez.current = false;
      return;
    }

    const ahora = new Date();
    const fecha = `${ahora.getDate().toString().padStart(2, '0')}/${(ahora.getMonth() + 1)
      .toString()
      .padStart(2, '0')}/${ahora.getFullYear()} a las ${ahora.getHours().toString().padStart(2, '0')}:${ahora
      .getMinutes()
      .toString()
      .padStart(2, '0')} hs.`;

    setUltimaActualizacion(fecha);
  }, [proyectos]);

  const proyectosFiltrados =
    textoBusqueda === ""
      ? proyectos
      : proyectoService.buscarProyecto(textoBusqueda);

  const handleBuscar = (e) => {
    setTextoBusqueda(e.target.value);
  };

  const handleVerDetalle = (proyecto) => {
    setProyectoSeleccionado(proyecto);
  };

  const handleAgregarProyecto = (nuevoProyecto) => {
    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
  };

  const handleEliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
  };

  return (
    <div id="listado-proyectos">
      <h2>Lista de Proyectos Educativos</h2>

      <input
        className="input-busqueda"
        type="text"
        placeholder="Buscar proyecto..."
        value={textoBusqueda}
        onChange={handleBuscar}
      />

      <FormularioProyecto onAgregarProyecto={handleAgregarProyecto} />

      <div className="contenedor-proyectos">
        {proyectosFiltrados.map((proyecto) => (
          <ProyectoCard
            key={proyecto.id}
            proyecto={proyecto}
            onEliminar={handleEliminar}
            onVerDetalle={handleVerDetalle}
          />
        ))}
      </div>

      <DetalleProyecto proyecto={proyectoSeleccionado} />

      <RegistroActividad fechaHora={ultimaActualizacion} />
    </div>
  );
};

export default ListaProyectos;