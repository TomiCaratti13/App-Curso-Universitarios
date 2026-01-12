import '../assets/css/header.css'
import { Link, useLocation } from "react-router-dom"
import { Menu } from './Menu';

export const Header = () => {
  const location = useLocation();
  const titulo = location.pathname.split('/').pop().toUpperCase();
  const isHome = location.pathname === '/2025' || location.pathname === '/2025/';
  
  return (
    <header>
      <nav className="navbar bg-body-tertiary fixed-top">
        {isHome ?
          (
            <div className="container-fluid justify-content-space-beteen inicio">
              <Link to={'/2025'} className="navbar-brand">
                <h1 className="m-0"><b>Curso IVE</b></h1>
              </Link>
              <Menu />
            </div>
          ) : (
            <div className="container justify-content-space-beteen text-end">
              <div className="col-1 text-center">
                <Link to={'/2025'} className="back">
                  <i className="fa-solid fa-chevron-left fa-lg"></i>
                </Link>
              </div>
              <div className="col-11">
                <h5 className="m-0"><b className="funcion">{titulo}</b></h5>
              </div>
            </div>
          )
        }
      </nav>
    </header>
  )
}
