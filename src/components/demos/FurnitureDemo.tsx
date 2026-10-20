import type { DemoBusiness } from '../../data/siteContent'
import { demoHomeHref, demoWhatsappHref } from './demoLinks'
import './furniture-demo.css'

type FurnitureDemoProps = { business: DemoBusiness }

function FurnitureDemo({ business }: FurnitureDemoProps) {
  return (
    <div className="furniture-demo">
      <p className="furniture-demo__notice">Proyecto de muestra — marca y datos ficticios</p>
      <header className="furniture-demo__header">
        <a className="furniture-demo__wordmark" href={demoHomeHref} aria-label="Casa Norte, volver a las demostraciones">
          CASA NORTE<span>objetos para habitar</span>
        </a>
        <nav aria-label="Navegación de Casa Norte">
          <a href="#ambientes">Ambientes</a>
          <a href="#estudio">El estudio</a>
        </nav>
        <a className="furniture-demo__header-link" href={demoWhatsappHref} target="_blank" rel="noreferrer">Consultar una pieza</a>
      </header>

      <main>
        <section className="furniture-demo__opening" aria-labelledby="furniture-title">
          <div className="furniture-demo__intro">
            <p className="furniture-demo__eyebrow">Diseño local · Villa Crespo</p>
            <h1 id="furniture-title">La casa se arma de a poco.</h1>
            <p>Objetos nobles, madera a la vista y piezas hechas para quedarse. Una colección para vivirla, no solo mirarla.</p>
            <a className="furniture-demo__text-link" href="#ambientes">Recorrer los ambientes <span aria-hidden="true">↘</span></a>
          </div>
          <figure className="furniture-demo__cover">
            <img src={business.heroImage} alt="Living sereno con muebles de madera y textiles naturales" />
            <figcaption>Una pausa en medio de la ciudad.</figcaption>
          </figure>
          <p className="furniture-demo__vertical-note" aria-hidden="true">Hecho para quedarse · Desde 2018</p>
        </section>

        <section className="furniture-demo__collection" id="ambientes" aria-labelledby="furniture-collection-title">
          <div className="furniture-demo__collection-heading">
            <p>Una mirada distinta para cada rincón</p>
            <h2 id="furniture-collection-title">Ambientes con vida propia</h2>
          </div>
          <div className="furniture-demo__gallery">
            {business.showcase.map((item, index) => (
              <figure className={`furniture-demo__room furniture-demo__room--${index + 1}`} key={item.name}>
                <img src={item.image} alt={item.name} loading="lazy" />
                <figcaption><span>{item.name}</span><small>{item.description}</small></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="furniture-demo__studio" id="estudio">
          <p className="furniture-demo__eyebrow">Casa Norte, Villa Crespo</p>
          <div>
            <h2>Venite a probarlos.</h2>
            <p>El showroom está en {business.location}. Abrimos {business.hours}. Las piezas y los datos de contacto son ficticios y forman parte de esta demostración.</p>
          </div>
          <a href={demoWhatsappHref} target="_blank" rel="noreferrer">Coordinar una visita</a>
        </section>
      </main>

      <footer className="furniture-demo__footer">
        <a href={demoHomeHref}>← Volver a WebLocal</a>
        <span>Imágenes de Unsplash · <a href="https://unsplash.com/license" target="_blank" rel="noreferrer">licencia</a></span>
      </footer>
    </div>
  )
}

export default FurnitureDemo
