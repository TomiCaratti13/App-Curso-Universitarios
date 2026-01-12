import ReactPlayer from 'react-player';
import '../assets/css/extra.css'
import antropologia from '../assets/images/antropologia.png';

export const Extra = () => {

  return (
    <section className="extra">
      <div className="documento">
        <a href="https://drive.google.com/file/d/1S_bXViQaCKqHc2GpkeUf3ttE7vxB_0RX/view?usp=sharing" rel="noopener noreferrer">
          <img src={antropologia} alt="Antropología teológica - compendio" />
        </a>
        <button className="descarga">
          <a href="https://drive.google.com/file/d/1S_bXViQaCKqHc2GpkeUf3ttE7vxB_0RX/view?usp=sharing" download="Antropología teológica - compendio">
            <i className="fa-solid fa-download fa-xl"></i>
          </a>
        </button>
        <span>Antropología teológica - compendio</span>
      </div>
      <div className='player-container'>
        <ReactPlayer
          url="https://youtu.be/kk-gFEMYhXg?si=pFavZhFPtU42OB4p"
          controls
          width="100%"
          height="100%"
          />
      </div>
    </section>
  )
}
