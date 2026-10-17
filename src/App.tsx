import { benefitCards, demoBusinesses, problemCards, processSteps } from './data/siteContent'
import DemoPage from './components/DemoPage'

const whatsappLink =
  'https://wa.me/5491121858308?text=Hola%2C+me+interesa+una+p%C3%A1gina+web+para+mi+comercio.'

const demoMatch = window.location.pathname.match(/^\/demos\/([^/]+)\/?$/)
const activeDemo = demoBusinesses.find((business) => business.id === demoMatch?.[1])

const navigation = [
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Demostraciones', href: '#demostraciones' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

const problemAccents = [
  'bg-[#fff1d4] text-[#765714] border-t-4 border-t-[#e5ad39]',
  'bg-[#e8f1f7] text-[#315f85] border-t-4 border-t-[#5d91b7]',
  'bg-[#e6f2ec] text-[#28634b] border-t-4 border-t-[#5c9b76]',
  'bg-[#f3eaf4] text-[#704b76] border-t-4 border-t-[#a477aa]',
]

const benefitAccents = [
  'bg-[#f7c65d]/25 ring-1 ring-[#f7c65d]/35',
  'bg-[#66a6cf]/25 ring-1 ring-[#66a6cf]/35',
  'bg-[#df8064]/25 ring-1 ring-[#df8064]/35',
  'bg-[#79b58c]/25 ring-1 ring-[#79b58c]/35',
  'bg-[#a78bc1]/25 ring-1 ring-[#a78bc1]/35',
]

const processAccents = [
  'border-t-[#df8064] bg-[#faece7]',
  'border-t-[#5d91b7] bg-[#e8f1f7]',
  'border-t-[#5c9b76] bg-[#e6f2ec]',
]

function App() {
  if (demoMatch) {
    return activeDemo ? <DemoPage business={activeDemo} /> : <DemoPage />
  }

  return (
    <div className="min-h-screen bg-[#fffaf2] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-[#e9e3d8] bg-[#fffaf2]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-slate-900 uppercase">
            <span className="flex h-10 w-10 items-center justify-center rounded-[0.9rem] bg-gradient-to-br from-[#173f3f] via-[#205451] to-[#31596a] text-[#f7c65d] shadow-lg shadow-[#173f3f]/25 ring-1 ring-white/30" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6.25 13.25h19.5v13.5H6.25z" />
                <path d="m5 13.25 2.2-6h17.6l2.2 6" />
                <path d="M5 13.25c0 2 1.25 3.25 3 3.25s3-1.25 3-3.25c0 2 1.25 3.25 3 3.25s3-1.25 3-3.25c0 2 1.25 3.25 3 3.25s3-1.25 3-3.25c0 2 1.25 3.25 3 3.25s3-1.25 3-3.25" />
                <path d="M11 26.75v-6.5h5.5v6.5M20.5 21h2.25" />
                <path d="m22.75 3 .85 2.4L26 6.25l-2.4.85-.85 2.4-.85-2.4-2.4-.85 2.4-.85.85-2.4Z" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <span>
              <span className="block">WebLocal</span>
              <span className="mt-0.5 block text-[9px] font-semibold tracking-[0.14em] text-slate-600">WEB PARA COMERCIOS</span>
            </span>
          </a>

          <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-slate-950">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#173f3f] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#173f3f]/20 transition hover:-translate-y-0.5 hover:bg-[#225656]"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 -z-10 h-[540px] bg-[radial-gradient(ellipse_at_78%_16%,_rgba(223,101,69,0.18),_transparent_38%),radial-gradient(ellipse_at_18%_5%,_rgba(226,186,91,0.25),_transparent_36%),radial-gradient(ellipse_at_92%_72%,_rgba(93,145,183,0.14),_transparent_32%),radial-gradient(ellipse_at_4%_68%,_rgba(92,155,118,0.12),_transparent_32%)]" />

          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#df6545]/25 bg-[#f9e5db] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#9f422c]">
                <span aria-hidden="true">⚡</span>
                Web para comercios locales
              </span>

              <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Tu negocio merece algo más que publicaciones en redes sociales.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
                Diseñamos páginas web claras, modernas y adaptadas a celulares para que clientes encuentren tus productos,
                conozcan tu negocio y te escriban directo por WhatsApp.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#f0c86e] px-6 py-3.5 text-base font-bold text-[#173f3f] shadow-lg shadow-[#f0c86e]/40 ring-2 ring-[#173f3f]/10 transition hover:-translate-y-0.5 hover:bg-[#f5d88e]"
                >
                  Solicitar información
                </a>

                <a
                  href="#demostraciones"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-base font-bold text-slate-800 transition hover:border-slate-400 hover:bg-slate-100"
                >
                  Ver demostraciones
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
                  <span aria-hidden="true">📱</span>
                  Mobile first
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
                  <span aria-hidden="true">🛍️</span>
                  Catálogo claro
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
                  <span aria-hidden="true">💬</span>
                  Contacto directo
                </span>
              </div>
            </div>

            <aside className="relative mx-auto w-full max-w-lg rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.45)] sm:p-7">
              <div className="flex items-start justify-between gap-4 rounded-2xl bg-[#173f3f] p-5 text-white sm:p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f0c86e]">Lo esencial, en un solo lugar</p>
                  <h2 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">Tu negocio, bien presentado.</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-200">Información clara para que te encuentren y te consulten.</p>
                </div>
                <span className="hidden shrink-0 rounded-full bg-[#f0c86e] px-3 py-1 text-xs font-bold text-[#173f3f] sm:inline-flex">
                  A tu medida
                </span>
              </div>

              <div className="mt-5 space-y-4">
                {[
                  ['▦', 'Productos y servicios', 'Mostrá lo que ofrecés de forma ordenada.', 'bg-[#faece7] text-[#9f422c]'],
                  ['⌖', 'Horarios y ubicación', 'Dejá los datos importantes siempre a mano.', 'bg-[#e8f1f7] text-[#315f85]'],
                  ['↗', 'WhatsApp directo', 'Facilitá el contacto desde cualquier página.', 'bg-[#e6f2ec] text-[#28634b]'],
                ].map(([icon, title, description, accent]) => (
                  <div key={title} className="flex items-center gap-4">
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl font-bold ${accent}`} aria-hidden="true">
                      {icon}
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900">{title}</h3>
                      <p className="mt-0.5 text-sm leading-5 text-slate-600">{description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#demostraciones"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f0c86e] px-5 py-3.5 text-sm font-bold text-[#173f3f] shadow-md shadow-[#f0c86e]/30 ring-2 ring-[#173f3f]/10 transition hover:-translate-y-0.5 hover:bg-[#f5d88e]"
              >
                Mirá ejemplos para distintos rubros <span aria-hidden="true">→</span>
              </a>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-600">Problema y oportunidad</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Muchos comercios tienen buena atención, pero su presencia digital no acompaña.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {problemCards.map((card, index) => (
              <article key={card.title} className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${problemAccents[index]}`}>
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-xl ${problemAccents[index].split(' ').slice(0, 2).join(' ')}`}>⚠️</div>
                <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600">{card.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="beneficios" className="bg-[linear-gradient(118deg,#173f3f_0%,#205451_52%,#31596a_100%)] py-16 text-white lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f0c86e]">Beneficios del servicio</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Una web que ayuda a que tu cliente decida con más confianza.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {benefitCards.map((benefit, index) => (
                <article key={benefit.title} className="rounded-3xl border border-white/15 bg-white/[0.08] p-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/[0.12]">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ${benefitAccents[index]}`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="demostraciones" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-600">Demostraciones</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Ejemplos de páginas para distintos tipos de comercio.
            </h2>
          </div>

          <div className="grid gap-8">
            {demoBusinesses.map((business) => (
              <article key={business.id} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
                <a
                  href={`/demos/${business.id}`}
                  aria-label={`Abrir la página de demostración de ${business.name}`}
                  className="group block p-3 pb-0 focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#df6545] sm:p-5 sm:pb-0"
                >
                  <div className="overflow-hidden rounded-t-2xl border border-slate-200 bg-slate-100 shadow-lg transition group-hover:shadow-xl">
                    <div className="flex h-9 items-center gap-1.5 border-b border-slate-200 bg-white px-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      <span className="ml-3 hidden rounded-md bg-slate-100 px-3 py-1 text-[10px] text-slate-600 sm:block">
                        {business.id}.com.ar
                      </span>
                      <span className="ml-auto rounded-full px-2 py-1 text-[10px] font-bold" style={{ backgroundColor: business.softAccent, color: business.accent }}>
                        Vista previa
                      </span>
                    </div>

                    <div className="bg-white p-4 sm:p-7">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <div className="min-w-0">
                          <div className="truncate text-lg font-black tracking-tight text-slate-950 sm:text-2xl" style={{ color: business.accent }}>{business.name}</div>
                          <div className="truncate text-[9px] font-semibold tracking-wide text-slate-600 sm:text-xs">{business.tagline}</div>
                        </div>
                        <div className="hidden gap-4 text-[10px] font-semibold text-slate-600 sm:flex">
                          {business.badges.slice(0, 3).map((badge) => <span key={badge}>{badge}</span>)}
                        </div>
                        <span className="rounded-full px-3 py-1 text-[10px] font-bold text-white" style={{ backgroundColor: business.accent }}>WhatsApp</span>
                      </div>

                      <div className="grid min-h-44 grid-cols-[1fr_0.8fr] items-center gap-3 py-4 sm:min-h-56 sm:gap-8 sm:py-6">
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[0.2em] sm:text-[10px]" style={{ color: business.accent }}>{business.category}</p>
                          <p className="mt-2 text-lg font-black leading-tight text-slate-900 sm:text-3xl">{business.highlight}</p>
                          <p className="mt-2 hidden max-w-sm text-xs leading-5 text-slate-600 sm:block">{business.description}</p>
                          <span className="mt-3 inline-flex rounded-full px-3 py-1.5 text-[10px] font-bold text-white sm:mt-4 sm:px-4 sm:py-2 sm:text-xs" style={{ backgroundColor: business.accent }}>
                            {business.showcaseKind === 'haircuts' ? 'Ver estilos' : business.showcaseKind === 'gallery' ? 'Ver trabajos' : 'Ver productos'}
                          </span>
                        </div>
                        <div className="relative aspect-[1.1] overflow-hidden rounded-2xl sm:aspect-[1.3]">
                          <img
                            src={business.heroImage}
                            alt={business.showcase[0]?.name ?? business.name}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                          <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2 py-1 text-[9px] font-bold text-slate-700 sm:bottom-3 sm:left-3 sm:px-3 sm:text-[10px]">
                            {business.showcase[0]?.name}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-3 sm:gap-4 sm:pt-4">
                        {business.showcase.slice(0, 3).map((product) => (
                          <div key={product.name} className="min-w-0">
                            <div className="mb-1.5 aspect-[1.6] overflow-hidden rounded-lg sm:mb-2 sm:aspect-[2.2]">
                              <img src={product.image} alt={product.name} className="h-full w-full object-cover" loading="lazy" />
                            </div>
                            <p className="truncate text-[9px] font-semibold text-slate-800 sm:text-xs">{product.name}</p>
                            {product.price && <p className="text-[9px] font-bold sm:text-[11px]" style={{ color: business.accent }}>{product.price}</p>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="flex items-center justify-center gap-2 rounded-b-2xl py-3 text-xs font-bold text-slate-600 transition group-hover:text-[#173f3f] sm:text-sm">
                    Abrir página de ejemplo <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
                  </span>
                </a>

                <div className="flex flex-wrap items-center justify-between gap-3 px-5 pb-5 sm:px-6 sm:pb-6">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 sm:text-xl">{business.name}</h3>
                    <p className="mt-1 text-xs text-slate-600 sm:text-sm">{business.category} · {business.location}</p>
                  </div>
                  <a href={`/demos/${business.id}`} className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-bold text-white transition hover:brightness-110 sm:px-5 sm:py-2.5 sm:text-sm" style={{ backgroundColor: business.accent }}>
                    Ver sitio completo
                  </a>
                </div>
                {business.showcaseKind === 'haircuts' && (
                  <p className="px-5 pb-5 text-center text-[10px] text-slate-600 sm:px-6">
                    Fotos de <a href="https://unsplash.com/license" target="_blank" rel="noreferrer" className="font-semibold underline">Unsplash</a> · uso comercial permitido.
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="proceso" className="bg-[#f2f5ee] py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-600">Proceso</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Un camino sencillo para dejar tu comercio listo para vender online.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <article key={step.title} className={`rounded-3xl border border-slate-200 border-t-4 bg-white p-6 shadow-sm ${processAccents[index]}`}>
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ${processAccents[index].split(' ').slice(1).join(' ')}`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="rounded-[2rem] bg-[#173f3f] px-6 py-10 text-white shadow-[0_30px_80px_-20px_rgba(23,63,63,0.4)] sm:px-10 lg:px-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f0c86e]">Empezá hoy</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Querés que tu negocio se vea mejor y sea más fácil de comprar?
                </h2>
                <p className="mt-4 text-lg text-slate-300">
                  Hablamos de tu rubro, tus productos y la forma en que querés presentarlo online para empezar con una propuesta clara.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#f0c86e] px-6 py-3.5 text-base font-bold text-[#173f3f] shadow-lg shadow-[#f0c86e]/40 ring-2 ring-white/20 transition hover:-translate-y-0.5 hover:bg-[#f5d88e]"
                >
                  Pedir presupuesto
                </a>
                <a
                  href="#inicio"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-800 px-6 py-3.5 text-base font-bold text-white transition hover:border-slate-600 hover:bg-slate-700"
                >
                  Volver arriba
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/60 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-600 sm:px-6 lg:flex-row lg:px-8">
          <p>© 2026 WebLocal</p>
          <p className="text-center lg:text-right">
            Páginas web para comercios locales de Argentina. ·{' '}
            <a href="https://unsplash.com/license" target="_blank" rel="noreferrer" className="underline decoration-slate-400 underline-offset-2 hover:text-slate-900">
              Fotos de Unsplash
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
