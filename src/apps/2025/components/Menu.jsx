import { Link } from 'react-router-dom';
import '../assets/css/menu.css';
import { useEffect, useState } from "react";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(!!document.fullscreenElement);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  const compartir = async () => {
    try {
      const url = window.location.href;
      const mensaje = `${url}\n¡Ingresá a la App del Curso!`;

      await navigator.clipboard.writeText(mensaje);
      alert(`La URL se ha copiado al portapapeles:\n${url}\nPuedes pegarla y compartirla por mensaje!`);
    } catch (error) {
      console.error("Error al copiar al portapapeles: ", error);
      alert("No se pudo copiar la URL al portapapeles. Por favor, intenta copiarla manualmente.");
    }
  };

  return (
    <div>
      <div className="navbar-brand menu" onClick={toggleSidebar}>
        <i className={`${isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}`}></i>
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className='actions'>
          <button onClick={compartir}><p>Comparte</p><i className="fa-solid fa-share-nodes fa-lg"></i></button>
          <button onClick={toggleFullScreen}>
            <p>Pantalla</p>
            <i className={`fa-solid ${isFullScreen ? "fa-compress" : "fa-expand"} fa-lg`}></i>
          </button>
        </div>
        <ul>
          <h6>Más contenido</h6>
          <hr />
          <li><a href="https://photos.app.goo.gl/oKhXdhJozpBQNPwYA" target='_blank' rel="noreferrer">Fotos del curso</a></li>
          <hr />
          <li><Link to="/2025/extra">Material extra</Link></li>
          <hr />
          <hr />
          <h6>Links IVE</h6>
          <hr />
          <li><a href="https://iveargentina.org/" target='_blank' rel="noreferrer">Nuestro instituto</a></li>
          <hr />
          <li><Link to={'/2025/redes'}>Nuestras redes</Link></li>
          <hr />
          <li><a href="https://institutobufano.org/niveles/superior/" target='_blank' rel="noreferrer">Nuestro profesorado</a></li>
          <hr />
          <li><a href="https://cursouniversitarioive.web.app" target='_blank' rel="noreferrer">App curso 2024</a></li>
          <hr />
        </ul>
      </div>
    </div>
  );
};
