// src/components/RegistroActividad.jsx
const RegistroActividad = ({ fechaHora }) => {
  if (!fechaHora) return null;

  return (
    <div className="registro-actividad">
      <p>
        <strong>Última actualización de la lista:</strong> {fechaHora}
      </p>
    </div>
  );
};

export default RegistroActividad;