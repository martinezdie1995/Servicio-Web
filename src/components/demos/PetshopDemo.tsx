import type { DemoBusiness } from '../../data/siteContent'
import { demoHomeHref, demoWhatsappHref } from './demoLinks'
import './petshop-demo.css'

type PetshopDemoProps = { business: DemoBusiness }

function PetshopDemo({ business }: PetshopDemoProps) {
  return (
    <div className="petshop-demo">
      <div className="petshop-demo__fiction">Pata Club es una marca ficticia · productos, precios y contacto de ejemplo</div>
      <header className="petshop-demo__header">
        <a className="petshop-demo__mark" href={demoHomeHref} aria-label="Pata Club, volver a las demostraciones">
          <span className="petshop-demo__paw" aria-hidden="true">✳</span><span>PATA CLUB<small>la vida con ellos</small></span>
        </a>
        <nav aria-label="Navegación de Pata Club">
          <a href="#favoritos">Favoritos</a>
          <a href="#visitanos">El local</a>
        </nav>
        <a className="petshop-demo__message" href={demoWhatsappHref} target="_blank" rel="noreferrer">Hablemos</a>
      </header>

      <main>
        <section className="petshop-demo__welcome" aria-labelledby="petshop-title">
          <div className="petshop-demo__welcome-copy">
            <span className="petshop-demo__hello">¡Hola, familias!</span>
            <h1 id="petshop-title">Lo que les hace bien, <em>también te hace feliz.</em></h1>
            <p>Comida rica, paseos largos y una cama mullida. Encontrá pequeñas cosas para compartir una vida enorme.</p>
            <a href="#favoritos">Descubrir el club <span aria-hidden="true">↗</span></a>
            <div className="petshop-demo__bubble petshop-demo__bubble--one" aria-hidden="true">cola<br />feliz</div>
            <div className="petshop-demo__bubble petshop-demo__bubble--two" aria-hidden="true">guau!</div>
          </div>
          <figure className="petshop-demo__portrait">
            <img src={business.heroImage} alt="Perro con expresión curiosa, listo para salir a pasear" />
            <figcaption>Un club para todos los hocicos.</figcaption>
          </figure>
        </section>

        <section className="petshop-demo__favorites" id="favoritos" aria-labelledby="petshop-favorites-title">
          <div className="petshop-demo__favorites-intro">
            <div>
              <span>Probado con patitas</span>
              <h2 id="petshop-favorites-title">Los favoritos del club</h2>
            </div>
            <p>Una selección de juego, descanso y nutrición. Los precios son ficticios, solo para esta demo.</p>
          </div>
          <div className="petshop-demo__shelf">
            {business.showcase.map((item, index) => (
              <article className={`petshop-demo__item petshop-demo__item--${index + 1}`} key={item.name}>
                <div className="petshop-demo__item-photo"><img src={item.image} alt={item.name} loading="lazy" /></div>
                <p>{item.tag}</p>
                <h3>{item.name}</h3>
                <div className="petshop-demo__item-bottom"><span>{item.price}</span><a href={demoWhatsappHref} target="_blank" rel="noreferrer" aria-label={`Consultar por ${item.name}`}>Consultar ↗</a></div>
              </article>
            ))}
          </div>
        </section>

        <section className="petshop-demo__local" id="visitanos">
          <div className="petshop-demo__local-stamp" aria-hidden="true">buenos<br />momentos<br />acá cerca</div>
          <div>
            <p>Pasá a saludar</p>
            <h2>El club queda a la vuelta.</h2>
          </div>
          <div className="petshop-demo__address">
            <span>{business.location}</span>
            <span>{business.hours}</span>
            <a href={demoWhatsappHref} target="_blank" rel="noreferrer">Preguntanos por WhatsApp</a>
          </div>
        </section>
      </main>
      <footer className="petshop-demo__footer">
        <a href={demoHomeHref}>WebLocal / volver a ejemplos</a>
        <span>Contenido ficticio · Imágenes de <a href="https://unsplash.com/license" target="_blank" rel="noreferrer">Unsplash</a></span>
      </footer>
    </div>
  )
}

export default PetshopDemo
