import { useState } from 'react';
import '../assets/css/info.css';
import horario_1 from '../assets/images/horario_1.svg';
import horario_2 from '../assets/images/horario_2.svg';
import temario from '../assets/images/temario.svg';

export const Info = () => {

  const [activeTab, setActiveTab] = useState('horario');

  return (
    <section className="info">
      <div className="info-title">
        <p>20° CURSO PARA</p>
        <h3>UNIVERSITARIOS</h3>
        <p>IVE - Enero 2025</p>
      </div>
      <div className='tab-panel'>
        <div className='tab-header'>
          <button
            className={activeTab === 'horario' ? 'active' : ''}
            onClick={() => setActiveTab('horario')}
          >
            Horario
          </button>
          <button
            className={activeTab === 'temario' ? 'active' : ''}
            onClick={() => setActiveTab('temario')}
          >
            Temario
          </button>
          <button
            className={activeTab === 'reglas' ? 'active' : ''}
            onClick={() => setActiveTab('reglas')}
          >
            Reglas
          </button>
        </div>
        <div className='tab-content'>
          {activeTab === 'horario' ? (
            <div className="info-img">
              <img src={horario_1} alt="" />
              <img src={horario_2} alt="" />
            </div>
          ) : activeTab === 'temario' ? (
            <div className="info-img">
              <img src={temario} alt="" />
            </div>
          ) : (
            <div className="info-txt">
              <h4>Reglamento del Curso</h4>
              <i>La experiencia de los cursos anteriores nos mueve a presentar este breve reglamento conteniendo normas mínimas de convivencia que juzgamos indispensables para que todos se lleven los frutos que esperamos saquen del curso.</i>
              <ul>
                <li>
                  <p>El Curso se realiza con la modalidad de convivencia, por lo cual solo excepcionalmente, con motivos fundados, se permitirá cursar como externo.</p>
                </li>
                <li>
                  <p>Se intenta que todos compartan un mismo espíritu, y estén atentos a las actividades propuestas por los organizadores y señaladas en el horario y cronograma que cada uno recibe al inicio del Curso. Se les pide a los cursantes que se ajusten a estas indicaciones y horarios, para sacar mayor provecho.</p>
                </li>
                <li>
                  <p>Se deberá asistir a todas las actividades académicas, religiosas y aquellas que se tienen en común. Los que tengan que salir por alguna dificultad deben hacerlo en orden, sin perturbar las exposiciones y avisando a un encargado.</p></li>
                <li>
                  <p>Durante las exposiciones está prohibido tener el celular encendido y, más aún, atender una llamada.</p></li>
                <li>
                  <p>No se puede salir del curso para comprar bebidas u otras cosas sin la debida autorización de los responsables.</p>
                </li>
                <li>
                  <p>Todos deben participar de las actividades recreativas, en la medida de sus posibilidades.</p>
                </li>
                <li>
                  <p>Se respetarán los tiempos de descanso de los cursantes, permitiendo a los demás el necesario reposo.</p>
                </li>
                <li>
                  <p>En los momentos libres, los cursantes pueden solicitar consultas con los profesores, como así también con los sacerdotes que estarán disponibles al efecto.</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
