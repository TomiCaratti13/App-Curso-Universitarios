import '../assets/css/archivo.css';
import nivelInicial from '../assets/images/nivel_1.svg';
import nivelAvanzado from '../assets/images/nivel_2.svg';
import antropologia from '../assets/images/antropologia.png';

export const Archivos = () => {

  const documentos = [
    {
      nombre: "Textos tomistas nivel inicial",
      enlace: "https://drive.google.com/file/d/14WTwAsbh5bYjeP0-6KIi0QRaxEMh-pd2/view?usp=sharing",
      imagen: nivelInicial
    },
    {
      nombre: "Textos tomistas nivel avanzado",
      enlace: "https://drive.google.com/file/d/1Mw1hysAIcWAWezp_RoMh80pZpID9mLJM/view?usp=sharing",
      imagen: nivelAvanzado
    },
    {
      nombre: "Antropologia teológica",
      enlace: "https://drive.google.com/file/d/1JZjCXT1yMrPhcjQzt0tOFsX9EFGFVbPu/view?usp=sharing",
      imagen: antropologia
    }
  ];

  return (
    <section className="archivos">
      {documentos.map((documento, index) => (
        <div className="documento" key={index}>
          {/* Enlace al archivo */}
          <a href={documento.enlace} rel="noopener noreferrer">
            <img src={documento.imagen} alt={documento.nombre} />
          </a>

          {/* Botón de descarga */}
          <button className="descarga">
            <a href={documento.enlace} download={documento.nombre}>
              <i className="fa-solid fa-download fa-xl"></i>
            </a>
          </button>

          {/* Nombre del documento */}
          <span>{documento.nombre}</span>
        </div>
      ))}
    </section>
  );
};
