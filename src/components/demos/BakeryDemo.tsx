import type { DemoBusiness } from '../../data/siteContent'
import { demoHomeHref, demoWhatsappHref } from './demoLinks'
import './bakery-demo.css'

type BakeryDemoProps = { business: DemoBusiness }

function BakeryDemo({ business }: BakeryDemoProps) {
  return (
    <div className="bakery-demo">
      <div className="bakery-demo__sample">Sitio de muestra · precios, horarios y datos ficticios</div>
      <header className="bakery-demo__header">
        <a href={demoHomeHref} className="bakery-demo__back">← Todos los ejemplos</a>
        <a href="#horno" className="bakery-demo__logo" aria-label="Miga, inicio">miga<span>panadería de barrio</span></a>
        <a className="bakery-demo__order" href={demoWhatsappHref} target="_blank" rel="noreferrer">Hacer un pedido</a>
      </header>

      <main>
        <section className="bakery-demo__hero" id="horno">
          <div className="bakery-demo__hero-copy">
            <p className="bakery-demo__crumb">PALERMO · HECHO CON TIEMPO</p>
            <h1>Pan lento,<br />días mejores.</h1>
            <p>Fermentos largos, manteca de verdad y algo rico para compartir. Lo de todos los días, recién salido del horno.</p>
            <a href="#mostrador">Pasá por el mostrador <span aria-hidden="true">↓</span></a>
          </div>
          <figure className="bakery-demo__hero-photo">
            <img src={business.heroImage} alt="Croissant dorado recién horneado" />
            <figcaption>Un ratito más y está.</figcaption>
            <span className="bakery-demo__seal" aria-hidden="true">masa<br />lenta</span>
          </figure>
        </section>

        <section className="bakery-demo__counter" id="mostrador" aria-labelledby="bakery-menu-title">
          <div className="bakery-demo__counter-heading">
            <span>Sale del horno</span>
            <h2 id="bakery-menu-title">El mostrador de hoy</h2>
            <p>Una pequeña selección de la casa. Los precios que ves son ilustrativos.</p>
          </div>
          <ul className="bakery-demo__menu">
            {business.showcase.map((item) => (
              <li className="bakery-demo__menu-item" key={item.name}>
                <img src={item.image} alt="" loading="lazy" />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.tag} · Preparado en el día</p>
                </div>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
          <a className="bakery-demo__menu-cta" href={demoWhatsappHref} target="_blank" rel="noreferrer">Preguntar qué queda</a>
        </section>

        <section className="bakery-demo__visit">
          <p className="bakery-demo__crumb">LA PUERTA ESTÁ ABIERTA</p>
          <h2>El café lo ponemos nosotros.</h2>
          <div className="bakery-demo__visit-details">
            <p><strong>Encontranos</strong>{business.location}</p>
            <p><strong>Horneamos</strong>{business.hours}</p>
            <a href={demoWhatsappHref} target="_blank" rel="noreferrer">Escribinos antes de venir</a>
          </div>
        </section>
      </main>
      <footer className="bakery-demo__footer">
        <a href={demoHomeHref}>WebLocal · Volver a las demostraciones</a>
        <span>Negocio y precios de ficción · Fotografía de <a href="https://unsplash.com/license" target="_blank" rel="noreferrer">Unsplash</a></span>
      </footer>
    </div>
  )
}

export default BakeryDemo
