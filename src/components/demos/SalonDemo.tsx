import type { DemoBusiness } from '../../data/siteContent'
import { demoHomeHref, demoWhatsappHref } from './demoLinks'
import './salon-demo.css'

type SalonDemoProps = { business: DemoBusiness }

function SalonDemo({ business }: SalonDemoProps) {
  return (
    <div className="salon-demo">
      <div className="salon-demo__sample">Estudio Lado B · marca, horarios y datos ficticios</div>
      <header className="salon-demo__header">
        <a className="salon-demo__brand" href={demoHomeHref}><span>ESTUDIO</span>LADO B</a>
        <nav aria-label="Navegación del estudio">
          <a href="#cortes">Cortes</a>
          <a href="#visita">El estudio</a>
        </nav>
        <a className="salon-demo__booking" href={demoWhatsappHref} target="_blank" rel="noreferrer">Pedir turno</a>
      </header>

      <main>
        <section className="salon-demo__cover" aria-labelledby="salon-title">
          <div className="salon-demo__cover-copy">
            <p className="salon-demo__issue">PELUQUERÍA · PALERMO, BUENOS AIRES</p>
            <h1 id="salon-title">Tu pelo.<br /><i>Tu manera.</i></h1>
            <p className="salon-demo__manifesto">Cortes con intención y tiempo para escuchar. Un espacio para encontrar algo que se sienta propio.</p>
            <a href="#cortes">Ver estilos <span aria-hidden="true">↓</span></a>
            <span className="salon-demo__cover-index" aria-hidden="true">L / B — ESTUDIO INDEPENDIENTE</span>
          </div>
          <figure className="salon-demo__cover-image">
            <img src={business.heroImage} alt="Corte bob texturizado con movimiento natural" />
            <figcaption>Forma, textura, movimiento.</figcaption>
          </figure>
        </section>

        <section className="salon-demo__gallery" id="cortes" aria-labelledby="salon-gallery-title">
          <div className="salon-demo__gallery-heading">
            <span>Una idea para empezar</span>
            <h2 id="salon-gallery-title">Encontrá tu próximo corte</h2>
            <p>Traé una referencia. La conversamos y buscamos juntas el largo y la forma que mejor te acompañen.</p>
          </div>
          <div className="salon-demo__looks">
            {business.showcase.map((item, index) => (
              <figure className={`salon-demo__look salon-demo__look--${index + 1}`} key={item.name}>
                <div className="salon-demo__look-photo"><img src={item.image} alt={item.name} loading="lazy" /></div>
                <figcaption><span>0{index + 1} / {item.tag}</span><h3>{item.name}</h3><p>{item.description}</p></figcaption>
              </figure>
            ))}
          </div>
          <p className="salon-demo__no-prices">No hay lista de precios: cada visita empieza con una consulta.</p>
        </section>

        <section className="salon-demo__appointment" id="visita">
          <div className="salon-demo__appointment-title">
            <p>Un lugar para bajar un cambio</p>
            <h2>Nos vemos en el estudio.</h2>
          </div>
          <div className="salon-demo__appointment-details">
            <p><span>Dirección</span>{business.location}</p>
            <p><span>Atendemos</span>{business.hours}</p>
            <a href={demoWhatsappHref} target="_blank" rel="noreferrer">Consultar disponibilidad</a>
          </div>
        </section>
      </main>

      <footer className="salon-demo__footer">
        <a href={demoHomeHref}>← Volver a WebLocal</a>
        <span>Estilos y datos ilustrativos · Fotografía de <a href="https://unsplash.com/license" target="_blank" rel="noreferrer">Unsplash</a></span>
      </footer>
    </div>
  )
}

export default SalonDemo
