import '../assets/css/galeria.css'

export const Galeria = () => {
  return (
    <section className="galeria">
      <div className="foto">
        <h4>Fotos del Curso - Link</h4>
        <div className="linck">
          <a href="https://photos.app.goo.gl/oKhXdhJozpBQNPwYA"
            target="_blank" rel="noreferrer">
            ¡Click aquí!
          </a>
        </div>
        <p>¡Algunas fotos especiales!</p>
      </div>
      <div className="imagenes text-white text-center">
        <div className="imagen">
          <i className="fa-solid fa-image"></i>
          <p className="mt-3">Nada aún</p>
        </div>
        <div className="imagen">
          <i className="fa-solid fa-image"></i>
          <p className="mt-3">Nada aún</p>
        </div>
        <div className="imagen">
          <i className="fa-solid fa-image"></i>
          <p className="mt-3">Nada aún</p>
        </div>
        <div className="imagen">
          <i className="fa-solid fa-image"></i>
          <p className="mt-3">Nada aún</p>
        </div>
      </div>

    </section>
  )
}
