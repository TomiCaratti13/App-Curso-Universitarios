import { useNavigate } from "react-router-dom";

export const Boton = ({ icon, nombre, link }) => {
  const navigate = useNavigate();

  return (
    <div className="boton">
      <div className="icono"
        onClick={() => navigate(link)}
      >
        <i className={`${icon}`}></i>
      </div>
      <p className="nombre">{nombre}</p>
    </div>
  );
};
