import '../assets/css/redes.css';

export const Redes = () => {

  const redes = [
    {
      red: 'WhatsApp',
      icon: 'fa-brands fa-whatsapp whp',
      link: 'https://api.whatsapp.com/send/?phone=5492604596879&amp;text=¡Hola!+Escribo+desde+la+app+del+curso+de+universitarios&amp;type=phone_number&amp;app_absent=0'
    },
    {
      red: 'Instagram',
      icon: 'fa-brands fa-instagram insta',
      link: 'https://www.instagram.com/iveargentina/'
    },
    {
      red: 'Facebook',
      icon: 'fa-brands fa-facebook-f face',
      link: 'https://www.facebook.com/profile.php?id=61556726987141'
    },
    {
      red: 'YouTube',
      icon: 'fa-solid fa-play you',
      link: 'https://www.youtube.com/@iveverboencarnado'
    },
    {
      red: 'Email',
      icon: 'fa-solid fa-envelope mail',
      link: 'mailto:infoargentina@ive.org?subject=Consulta%20sobre%20el%20curso&body=¡Hola!%20Quiero%20más%20información%20sobre...'
    },
    {
      red: 'Spotify',
      icon: 'fa-brands fa-spotify spot',
      link: 'https://open.spotify.com/intl-es/artist/5iRSDUa25Sio9mgngIcoHM?si=ykr5urGiQR2OjK6CoS7VSg'
    }
  ];

  return (
    <section className="redes">
      <div className="info-title">
        <h3>INSTITUTO DEL VERBO ENCARNADO</h3>
        <p>¡Seguinos en nuestras redes!</p>
      </div>
      <div className="redes-sociales">
        {redes.map((red, index) => (
          <a key={index}
            href={red.link}
            target="_blank"
            rel="noopener noreferrer">
            <i className={red.icon}></i>
            <p>{red.red}</p>
          </a>
        ))}
      </div>
      <div className="ubicacion">
        <div className="info-title">
          <h3>¿Dónde estamos?</h3>
          <p>El Chañaral 2699, San Rafael, Prov. de Mendoza, Argentina</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.628103243779!2d-68.35979812374657!3d-34.58827555668385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96790860997f0b29%3A0x8890bdf355686691!2sInstituto%20del%20Verbo%20Encarnado%20-%20Seminario%20Mayor%20%22Mar%C3%ADa%2C%20Madre%20del%20Verbo%20Encarnado%22!5e0!3m2!1ses-419!2sar!4v1738706703585!5m2!1ses-419!2sar"
          width="90%"
          height="200"
          style={{ border: 0, borderRadius: '15px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};
