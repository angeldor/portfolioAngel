

const HomeSection = () => {
  return (
    <section>
      <h2>Hola! Soy Ángel, un desarrollador web full stack y diseñador web</h2>
      <p>Me dedico a la creacion de sitios web responsivos con enfoque mobile first</p>
      <button><a href="/contact">Contacto</a></button>
      <div>
        <img src="/fotoportfolio.jpg" alt="foto portfolio" className=" w-[300px]"/>
        <div>
          <div className="icon"></div>
          <p>Actualmente trabajando en el mi <strong>portfolio</strong></p>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
