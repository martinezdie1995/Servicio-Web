import type { DemoBusiness } from '../../data/siteContent'
import { demoHomeHref, demoWhatsappHref } from './demoLinks'
import './florist-demo.css'

type FloristDemoProps = { business: DemoBusiness }

function FloristDemo({ business }: FloristDemoProps) {
  return (
    <div className="florist-demo">
      <div className="florist-demo__notice">VERDE MÍO · comercio y datos de contacto ficticios</div>
      <header className="florist-demo__header">
        <a className="florist-demo__return" href={demoHomeHref}>Volver a WebLocal</a>
        <a className="florist-demo__name" href="#inicio">verde mío<span>flores de estación</span></a>
        <a className="florist-demo__inquiry" href={demoWhatsappHref} target="_blank" rel="noreferrer">Encargar un ramo</a>
      </header>

      <main>
        <section className="florist-demo__hero" id="inicio" aria-labelledby="florist-title">
          <div className="florist-demo__hero-type">
            <p>Pequeños gestos, grandes jardines</p>
            <h1 id="florist-title">Flores para decirlo todo.</h1>
            <span className="florist-demo__hero-rule" aria-hidden="true" />
            <a href="#ramos">Mirar la colección</a>
            <small>San Telmo · Buenos Aires</small>
          </div>
          <figure className="florist-demo__hero-still">
            <img src={business.heroImage} alt="Ramo de flores de estación preparado a mano" />
            <figcaption>Un gesto inesperado<br /><i>flores frescas, sin apuro</i></figcaption>
          </figure>
          <span className="florist-demo__hero-ornament" aria-hidden="true">❧</span>
        </section>

        <section className="florist-demo__selection" id="ramos" aria-labelledby="florist-selection-title">
          <header>
            <p>Un poco de color para cada día</p>
            <h2 id="florist-selection-title">Del taller, con cariño</h2>
          </header>
          <div className="florist-demo__stems">
            {business.showcase.map((item, index) => (
              <figure className={`florist-demo__stem florist-demo__stem--${index + 1}`} key={item.name}>
                <div><img src={item.image} alt={item.name} loading="lazy" /></div>
                <figcaption><span>{item.name}</span><small>{item.description}</small></figcaption>
              </figure>
            ))}
          </div>
          <p className="florist-demo__caption">Ramos, flores de estación y arreglos para momentos que merecen quedarse.</p>
        </section>

        <section className="florist-demo__note">
          <p>Nos encontramos en</p>
          <address>{business.location}</address>
          <span>{business.hours}</span>
          <a href={demoWhatsappHref} target="_blank" rel="noreferrer">Contanos qué querés celebrar</a>
          <small>Los arreglos, el local y los datos son ilustrativos y ficticios.</small>
        </section>
      </main>
      <footer className="florist-demo__footer">
        <a href={demoHomeHref}>WebLocal · ejemplos de páginas</a>
        <span>Fotografías de <a href="https://unsplash.com/license" target="_blank" rel="noreferrer">Unsplash</a></span>
      </footer>
    </div>
  )
}

export default FloristDemo
