import '../assets/css/inicio.css'
import { Boton } from "../components/Boton"

export const Inicio = () => {

  const botones = [
    {
      icon: 'fa-solid fa-info',
      nombre: 'INFO',
      link: '/2025/info'
    },
    {
      icon: 'fa-solid fa-folder-open',
      nombre: 'ARCHIVOS',
      link: '/2025/archivos'
    },
    {
      icon: 'fa-solid fa-book-bible',
      nombre: 'LITURGIA',
      link: '/2025/liturgia'
    },
    {
      icon: 'fa-solid fa-clapperboard',
      nombre: 'CHARLAS',
      link: '/2025/conferencias'
    }
  ]
 
  return (
    <section className="panel inicio">
      {botones.map((boton, index) => (
        <Boton key={index}
          icon={boton.icon}
          nombre={boton.nombre}
          link={boton.link}
        />
      ))}
    </section>
  )
}
