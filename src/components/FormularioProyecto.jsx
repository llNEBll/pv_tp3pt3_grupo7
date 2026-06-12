// src/components/FormularioProyecto.jsx
import { useState } from "react";

const FormularioProyecto = ({ onAgregarProyecto }) => {
  const [formulario, setFormulario] = useState({
    titulo: "",
    categoria: "",
    estado: "En curso",
    descripcion: "",
    recursos: "",
    equipo: ""
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoProyecto = {
      id: Date.now(),
      titulo: formulario.titulo,
      categoria: formulario.categoria,
      estado: formulario.estado,
      descripcion: formulario.descripcion,
      recursos: formulario.recursos
        .split(",")
        .map((item) => item.trim()),
      equipo: formulario.equipo
        .split(",")
        .map((item) => {
          const [nombre, rol] = item.split("-");
          return {
            nombre: nombre?.trim(),
            rol: rol?.trim()
          };
        })
    };

    onAgregarProyecto(nuevoProyecto);

    setFormulario({
      titulo: "",
      categoria: "",
      estado: "En curso",
      descripcion: "",
      recursos: "",
      equipo: ""
    });
  };

  return (
    <form className="Barra-filtros" onSubmit={handleSubmit}>
      <div className="campo-inicial">
        <input
          type="text"
          name="titulo"
          placeholder="Título del proyecto"
          className="campo-titulo"
          value={formulario.titulo}
          onChange={handleChange}
        />

        <input
          type="text"
          name="categoria"
          placeholder="Categoría"
          className="campo-categoria"
          value={formulario.categoria}
          onChange={handleChange}
        />

        <input
          type="text"
          name="recursos"
          placeholder="PDF, Drive, GitHub"
          className="campo-recursos"
          value={formulario.recursos}
          onChange={handleChange}
        />

        <input
          type="text"
          name="equipo"
          placeholder="Nombre-Rol, Nombre-Rol"
          className="campo-equipo"
          value={formulario.equipo}
          onChange={handleChange}
        />

        <select
          name="estado"
          value={formulario.estado}
          onChange={handleChange}
        >
          <option value="En curso">En curso</option>
          <option value="Finalizado">Finalizado</option>
        </select>
      </div>

      <textarea
        name="descripcion"
        placeholder="Descripción"
        className="campo-descripcion"
        value={formulario.descripcion}
        onChange={handleChange}
      />

      <button type="submit" className="btn-crear">
        Agregar Proyecto
      </button>
    </form>
  );
};

export default FormularioProyecto;