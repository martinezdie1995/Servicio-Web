import type { DemoBusiness } from '../data/siteContent'

type DemoPageProps = {
  business?: DemoBusiness
}

const whatsappLink =
  'https://wa.me/5491121858308?text=Hola%2C+vi+la+demostraci%C3%B3n+y+quiero+consultar.'

const themes = {
  furniture: {
    page: 'bg-[#f3f1e9]',
    header: 'border-[#344b41] bg-[#20392f] text-white',
    hero: 'bg-[#20392f] text-white',
    description: 'text-[#e0e6df]',
    section: 'bg-[#f3f1e9]',
    shape: 'rounded-[0.5rem]',
  },
  bakery: {
    page: 'bg-[#fffaf0]',
    header: 'border-[#f2e4c8] bg-[#fffaf0] text-[#492d21]',
    hero: 'bg-[#f6e9cf] text-[#492d21]',
    description: 'text-[#755d4b]',
    section: 'bg-[#fffaf0]',
    shape: 'rounded-[2rem]',
  },
  petshop: {
    page: 'bg-[#f5faf6]',
    header: 'border-[#d9ebe2] bg-[#f5faf6] text-[#164c46]',
    hero: 'bg-[#e3f1e9] text-[#164c46]',
    description: 'text-[#49675e]',
    section: 'bg-[#f5faf6]',
    shape: 'rounded-[3rem_1rem_3rem_1rem]',
  },
  florist: {
    page: 'bg-[#fff8f7]',
    header: 'border-[#512d3c] bg-[#512d3c] text-[#fff8f7]',
    hero: 'bg-[#512d3c] text-[#fff8f7]',
    description: 'text-[#ead9df]',
    section: 'bg-[#fff8f7]',
    shape: 'rounded-[50%_50%_1.5rem_1.5rem]',
  },
  salon: {
    page: 'bg-[#f4f0ec]',
    header: 'border-[#322c29] bg-[#322c29] text-white',
    hero: 'bg-[#322c29] text-white',
    description: 'text-[#e5ddd6]',
    section: 'bg-[#f4f0ec]',
    shape: 'rounded-[48%_48%_1rem_1rem]',
  },
} as const

function DemoPage({ business }: DemoPageProps) {
  if (!business) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fffaf2] px-6 text-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#173f3f]">Página no encontrada</p>
          <h1 className="mt-3 text-3xl font-black text-slate-900">No encontramos esta demostración.</h1>
          <a href="/#demostraciones" className="mt-6 inline-flex rounded-full bg-[#173f3f] px-5 py-3 font-bold text-white hover:bg-[#225656]">
            Volver a las demostraciones
          </a>
        </div>
      </main>
    )
  }

  const theme = themes[business.layout]
  const showcaseTitle = business.showcaseKind === 'haircuts'
    ? 'Encontrá tu próximo corte'
    : business.showcaseKind === 'gallery'
      ? business.layout === 'furniture' ? 'Espacios con identidad' : 'Flores que cuentan historias'
      : business.layout === 'bakery' ? 'Recién salido del horno' : 'Favoritos de la manada'

  return (
    <div className={`min-h-screen ${theme.page} text-slate-900`}>
      <div className="bg-[#df6545] px-4 py-2 text-center text-xs font-bold text-[#2d1b14]">
        Sitio de ejemplo · Marca y contenido ilustrativos
      </div>

      <header className={`border-b ${theme.header}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="/#demostraciones" className="inline-flex items-center gap-2 text-xs font-semibold opacity-75 transition hover:opacity-100 sm:text-sm">
            <span aria-hidden="true">←</span><span className="hidden sm:inline">Ver otros estilos</span><span className="sm:hidden">Ejemplos</span>
          </a>
          <a href="#" className={`text-center text-xl font-black tracking-[0.08em] sm:text-3xl ${business.layout === 'bakery' || business.layout === 'florist' ? 'font-serif' : ''}`} style={{ color: business.layout === 'bakery' || business.layout === 'petshop' ? business.accent : undefined }}>
            <span className="block">{business.name}</span>
            <span className="mt-0.5 block text-[8px] font-semibold tracking-[0.2em] opacity-75 sm:text-[10px]">{business.tagline}</span>
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-3 py-2 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:brightness-110 sm:px-5 sm:py-2.5 sm:text-sm"
            style={{ backgroundColor: business.accent }}
          >
            {business.showcaseKind === 'haircuts' ? 'Agendar turno' : business.showcaseKind === 'gallery' ? 'Hablemos' : 'WhatsApp'}
          </a>
        </div>
      </header>

      <main>
        <section className={`overflow-hidden ${theme.hero}`}>
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: business.layout === 'salon' ? '#d8ad8e' : business.layout === 'furniture' ? '#d9c18b' : business.layout === 'florist' ? '#f1b5c8' : business.accent }}>
                {business.category}
              </p>
              <p className={`mt-5 text-sm font-bold uppercase tracking-[0.18em] sm:text-base ${business.layout === 'bakery' || business.layout === 'florist' ? 'font-serif' : ''}`} style={{ color: business.layout === 'salon' ? '#f2d2b9' : undefined }}>
                {business.tagline}
              </p>
              <h1 className={`mt-3 max-w-xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl ${business.layout === 'bakery' || business.layout === 'florist' ? 'font-serif font-medium' : ''}`}>
                {business.highlight}
              </h1>
              <p className={`mt-5 max-w-lg text-base leading-7 sm:text-lg sm:leading-8 ${theme.description}`}>
                {business.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#catalogo"
                  className="rounded-full px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110"
                  style={{ backgroundColor: business.accent }}
                >
                  {business.showcaseKind === 'haircuts' ? 'Ver estilos de corte' : business.showcaseKind === 'gallery' ? 'Ver trabajos' : 'Explorar selección'}
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border-2 bg-white/70 px-5 py-3 text-sm font-bold transition hover:bg-white"
                  style={{ borderColor: `${business.accent}55`, color: business.accent }}
                >
                  {business.showcaseKind === 'haircuts' ? 'Consultar por un estilo' : 'Consultar por WhatsApp'}
                </a>
              </div>
              <div className={`mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold sm:text-sm ${['furniture', 'florist', 'salon'].includes(business.layout) ? 'text-white/85' : 'text-slate-700'}`}>
                <span>📍 {business.location}</span>
                <span>🕒 {business.hours}</span>
              </div>
            </div>

            <div className={`relative mx-auto aspect-[1.18] w-full max-w-xl overflow-hidden shadow-2xl ${theme.shape}`}>
              <img
                src={business.heroImage}
                alt={business.showcase[0]?.name ?? business.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/95 p-4 shadow-lg sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">{business.showcaseKind === 'haircuts' ? 'Inspiración de corte' : business.showcaseKind === 'gallery' ? 'Una idea para tu espacio' : 'Favorito de la casa'}</p>
                  <p className="mt-1 text-lg font-black text-slate-900 sm:text-xl">{business.showcase[0]?.name}</p>
                </div>
                {business.showcaseKind === 'products' && business.showcase[0]?.price && (
                  <span className="rounded-full px-3 py-1.5 text-sm font-black text-white" style={{ backgroundColor: business.accent }}>
                    {business.showcase[0].price}
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="catalogo" className={`mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 ${theme.section}`}>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: business.accent }}>
                {business.showcaseKind === 'haircuts' ? 'Galería de estilos' : business.showcaseKind === 'gallery' ? business.tagline : 'Elegidos para vos'}
              </p>
              <h2 className={`mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl ${business.layout === 'bakery' || business.layout === 'florist' ? 'font-serif' : ''}`}>
                {showcaseTitle}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600 sm:text-right">
              {business.showcaseKind === 'haircuts'
                ? 'Elegí las referencias que más te gusten y conversemos sobre el corte ideal para vos. Sin listas de precios: cada visita empieza con una consulta.'
                : business.showcaseKind === 'gallery'
                  ? 'Una selección de ideas e inspiración que pone el trabajo, la sensibilidad y la identidad de la marca en primer plano.'
                  : 'Una selección clara y fácil de recorrer para descubrir los favoritos de la casa.'}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {business.badges.map((badge, index) => (
              <span
                key={badge}
                className={`px-4 py-2 text-xs font-bold sm:text-sm ${business.layout === 'salon' ? 'rounded-none border-b-2 bg-transparent px-2' : business.layout === 'florist' ? 'rounded-full' : business.layout === 'furniture' ? 'rounded-none border border-[#34594b]/20' : 'rounded-full'}`}
                style={{
                  backgroundColor: index === 0 ? business.accent : business.softAccent,
                  color: index === 0 ? '#ffffff' : business.accent,
                  borderColor: business.layout === 'salon' ? business.accent : undefined,
                }}
              >
                {badge}
              </span>
            ))}
          </div>

          {business.showcaseKind === 'products' ? (
            <div className={`mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${business.layout === 'bakery' ? 'items-start' : ''}`}>
              {business.showcase.map((item) => (
                <article key={item.name} className={`group overflow-hidden border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${business.layout === 'bakery' ? 'rounded-2xl border-[#eadcc5]' : 'rounded-[2rem] border-[#d9ebe2]'}`}>
                  <div className="relative aspect-[1.2] overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-700">
                      {item.tag}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3 p-5">
                    <div>
                      <h3 className="font-bold text-slate-900">{item.name}</h3>
                      <p className="mt-1 text-sm text-slate-600">Consultá disponibilidad</p>
                    </div>
                    {item.price && <span className="shrink-0 text-lg font-black" style={{ color: business.accent }}>{item.price}</span>}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className={`mt-8 grid gap-5 sm:grid-cols-2 ${business.layout === 'furniture' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
              {business.showcase.map((item, index) => (
                <article
                  key={item.name}
                  className={`group relative isolate overflow-hidden bg-slate-200 ${
                    business.layout === 'furniture'
                      ? index === 0 ? 'min-h-[360px] lg:col-span-2 lg:row-span-2 lg:min-h-[600px]' : 'min-h-[280px] lg:min-h-[290px]'
                      : business.layout === 'salon'
                        ? 'min-h-[400px] rounded-2xl'
                        : 'min-h-[380px] rounded-[48%_48%_1.25rem_1.25rem]'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 -z-10 ${business.layout === 'furniture' ? 'bg-gradient-to-t from-[#172820]/75 via-[#172820]/10 to-transparent' : business.layout === 'salon' ? 'bg-gradient-to-t from-black/75 via-black/10 to-transparent' : 'bg-gradient-to-t from-[#341d29]/75 via-[#341d29]/10 to-transparent'}`} />
                  <div className={`absolute inset-x-0 bottom-0 p-5 sm:p-6 ${business.layout === 'furniture' && index === 0 ? 'sm:p-9' : ''}`}>
                    <h3 className={`text-2xl font-bold text-white sm:text-3xl ${business.layout === 'furniture' ? 'font-serif' : ''}`}>{item.name}</h3>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className={`border-y border-slate-100 ${business.layout === 'furniture' ? 'bg-[#e8e5dc]' : business.layout === 'florist' ? 'bg-[#f4e9eb]' : business.layout === 'salon' ? 'bg-[#e7ded6]' : business.layout === 'petshop' ? 'bg-[#eaf4ed]' : 'bg-[#fff3da]'}`}>
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:items-center lg:px-8 lg:py-16">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: business.accent }}>
                {business.showcaseKind === 'haircuts' ? 'Un turno para vos' : business.showcaseKind === 'gallery' ? 'Hablemos de tu idea' : 'Estamos para ayudarte'}
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              {business.showcaseKind === 'haircuts' ? '¿Qué estilo te gustaría probar?' : business.showcaseKind === 'gallery' ? `Conocé ${business.name}` : '¿Tenés una consulta?'}
              </h2>
              <p className="mt-3 max-w-lg leading-7 text-slate-600">
              {business.showcaseKind === 'haircuts'
                ? 'Contanos qué referencia te gustó y coordinamos una consulta para encontrar el corte que mejor vaya con vos.'
                : business.showcaseKind === 'gallery'
                  ? 'Cada espacio y cada ocasión es distinta. Contanos qué tenés en mente y lo pensamos juntos.'
                  : 'Escribinos y te ayudamos a encontrar lo que necesitás. También podés visitarnos en el local.'}
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <div className="space-y-4 text-sm text-slate-700">
                <p><span className="mr-2">📍</span><strong>Encontranos:</strong> {business.location}</p>
                <p><span className="mr-2">🕒</span><strong>Horarios:</strong> {business.hours}</p>
                <p><span className="mr-2">☎️</span><strong>Teléfono:</strong> {business.phone}</p>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 font-bold text-white transition hover:brightness-110"
                style={{ backgroundColor: business.accent }}
              >
                {business.showcaseKind === 'haircuts' ? 'Reservar un turno' : 'Escribinos por WhatsApp'}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-4 py-7 text-center text-xs text-slate-600">
        <p className="font-semibold">{business.name} · Sitio de muestra</p>
        <p className="mt-1">
          {business.showcaseKind === 'haircuts'
            ? 'Los estilos y los datos de contacto son ilustrativos. Fotografías de '
            : 'Las marcas, los productos y los datos de contacto son ilustrativos. Fotografías de '}
          <a href="https://unsplash.com/license" target="_blank" rel="noreferrer" className="font-semibold underline">
            Unsplash (licencia)
          </a>
        </p>
        <a href="/#demostraciones" className="mt-3 inline-block font-bold hover:underline" style={{ color: business.accent }}>
          ← Volver a WebLocal
        </a>
      </footer>
    </div>
  )
}

export default DemoPage
