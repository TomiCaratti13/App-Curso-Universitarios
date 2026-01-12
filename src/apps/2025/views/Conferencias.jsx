import ReactPlayer from 'react-player';
import '../assets/css/conferencia.css';
import { useState } from "react";

export const Conferencias = () => {

  const videos2024 = [
    "https://www.youtube.com/embed/fPtuOeVDQZc?si=X86qhd_LOc03Ppgj",
    "https://www.youtube.com/embed/bXNYXWdvwFA?si=_Xq6QYIvRj3tnWjp",
    "https://www.youtube.com/embed/o_nzfHRi-v4?si=i2x3jZRLh6PzgoB_",
    "https://www.youtube.com/embed/QRICtJM_D4Y?si=AlrqeDuPN_iQ-pL7",
    "https://www.youtube.com/embed/r8OAcbvgsvc?si=pVijAe2SOYrp9KU7",
    "https://www.youtube.com/embed/TzrDKwovrnw?si=EXFJqxncscLfsBOd",
    "https://www.youtube.com/embed/uJkg1dmSY3o?si=7cC50_7jix4LJybY",
    "https://www.youtube.com/embed/04k7srqEEYE?si=GlCZY_q_6QaMToZv",
    "https://www.youtube.com/embed/Oqiq5UFIpeA?si=SAc-ZpQj0piX439D",
    "https://www.youtube.com/embed/c6DZvTgXtm8?si=IweJG2gRdgc8M6Kf"
  ];

  const videos2025 = [];

  const [selectedYear, setSelectedYear] = useState("2025");
  const videos = selectedYear === "2024" ? videos2024 : videos2025;

  return (
    <section className="conferencias">
      <div className="info-title">
        <p>20° CURSO PARA</p>
        <h3>UNIVERSITARIOS</h3>
        <p>IVE - Enero 2025</p>
      </div>
      <div className="year-selector">
        <label htmlFor="year">Año:</label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
      <div className="videos">
        {videos.length !== 0
          ? videos.map((video, index) => (
            <div key={index} className='player-container'>
              <ReactPlayer
                url={videos[index]}
                controls
                width="100%"
                height="100%"
              />
            </div>
          ))
          : <p>Aún no hay videos disponibles</p>
        }
      </div>
    </section>
  );
}
