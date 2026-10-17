export type ShowcaseItem = {
  name: string
  price?: string
  tag: string
  image: string
  description?: string
}

export type DemoBusiness = {
  id: string
  layout: 'furniture' | 'bakery' | 'petshop' | 'florist' | 'salon'
  showcaseKind: 'products' | 'gallery' | 'haircuts'
  name: string
  tagline: string
  category: string
  description: string
  highlight: string
  location: string
  hours: string
  phone: string
  heroImage: string
  accent: string
  softAccent: string
  showcase: ShowcaseItem[]
  badges: string[]
}

export type ProblemItem = {
  title: string
  description: string
  detail: string
}

export type BenefitItem = {
  title: string
  description: string
  icon: string
}

export type ProcessStep = {
  title: string
  description: string
  icon: string
}

export const problemCards: ProblemItem[] = [
  {
    title: 'Productos dispersos',
    description: 'Tus mejores productos están escondidos entre historias, fotos viejas y mensajes directos.',
    detail: 'Los clientes gastan tiempo buscando y terminan preguntando lo mismo una y otra vez.',
  },
  {
    title: 'Información desordenada',
    description: 'Horarios, precios, ubicación y servicios no están claros ni disponibles en un solo lugar.',
    detail: 'La falta de orden genera dudas y hace más difícil decidir comprar o consultar.',
  },
  {
    title: 'Presencia poco confiable',
    description: 'Cuando la imagen digital no refleja la calidad del negocio, la confianza baja antes de hablar.',
    detail: 'Un comercio con buena atención merece una web que lo represente con claridad.',
  },
  {
    title: 'Atención manual repetida',
    description: 'Cada consulta exige volver a responder lo mismo: precios, categorías, horarios y ubicación.',
    detail: 'Una página ordenada ayuda a que el cliente encuentre la respuesta antes de escribirte.',
  },
]

export const benefitCards: BenefitItem[] = [
  {
    title: 'Catálogo claro',
    description: 'Agrupás tus productos por categoría para que cada cliente encuentre lo que busca sin perder tiempo.',
    icon: '🗂️',
  },
  {
    title: 'Presentación profesional',
    description: 'Mostrás tus productos con buena imagen, texto simple y una identidad visual alineada con tu marca.',
    icon: '✨',
  },
  {
    title: 'Contacto directo',
    description: 'Integrás WhatsApp para que los clientes te consulten desde la misma página sin abrir otra app.',
    icon: '💬',
  },
  {
    title: 'Experiencia móvil',
    description: 'Diseñás una web que se ve y funciona bien en celulares, donde la mayoría de tus clientes navegan.',
    icon: '📱',
  },
  {
    title: 'Información centralizada',
    description: 'Horarios, dirección, formas de contacto y servicio se mantienen en un solo lugar y siempre actualizados.',
    icon: '📍',
  },
]

export const processSteps: ProcessStep[] = [
  {
    title: '1. Analizamos tu negocio',
    description: 'Revisamos tu rubro, tus productos, tus clientes y la forma en que querés comunicarte con ellos.',
    icon: '🔎',
  },
  {
    title: '2. Diseñamos la propuesta',
    description: 'Armamos una estructura clara con catálogo, identidad visual y llamados a la acción pensados para vender.',
    icon: '🎨',
  },
  {
    title: '3. Publicamos y mejoramos',
    description: 'Dejamos lista una web móvil, clara y fácil de compartir para que puedas empezar a usarla con clientes reales.',
    icon: '🚀',
  },
]

export const demoBusinesses: DemoBusiness[] = [
  {
    id: 'muebleria',
    layout: 'furniture',
    showcaseKind: 'gallery',
    name: 'CASA NORTE',
    tagline: 'Diseño que se vive',
    category: 'Muebles y hogar',
    description: 'Un catálogo visual para destacar muebles de diseño, ambientes y piezas para el hogar con una navegación simple.',
    highlight: 'Remodelá la forma en que tus clientes descubren tus productos.',
    location: 'Villa Crespo, CABA',
    hours: 'Lun a Sab · 9:00 a 18:30',
    phone: '+54 9 11 5555-0123',
    heroImage: '/images/products/mueble-sofa.webp',
    accent: '#34594b',
    softAccent: '#f0eee5',
    badges: ['Colecciones', 'Espacios', 'Diseño a medida'],
    showcase: [
      { name: 'La calma del living', tag: 'Living', image: '/images/products/mueble-sofa.webp', description: 'Texturas naturales y líneas que invitan a quedarse.' },
      { name: 'Un espacio para compartir', tag: 'Ambientes', image: '/images/products/mueble-mesa.webp', description: 'Ideas para hacer de cada rincón un lugar propio.' },
      { name: 'Descanso con diseño', tag: 'Dormitorio', image: '/images/products/mueble-dormitorio.webp', description: 'Muebles pensados para acompañar tus momentos.' },
    ],
  },
  {
    id: 'bakery',
    layout: 'bakery',
    showcaseKind: 'products',
    name: 'MIGA',
    tagline: 'Pan lento, días mejores',
    category: 'Panadería y pastelería',
    description: 'Un sitio con productos destacados, precios claros y una ficha para potenciar ventas por pedido o consulta.',
    highlight: 'Mostrá tu variedad sin perder la confianza del cliente.',
    location: 'Palermo, CABA',
    hours: 'Lun a Dom · 8:00 a 20:00',
    phone: '+54 9 11 5555-0456',
    heroImage: '/images/products/pan-croissant.webp',
    accent: '#a34b31',
    softAccent: '#fff2d8',
    badges: ['Del horno', 'Pastelería', 'Masa madre'],
    showcase: [
      { name: 'Torta de chocolate', price: '$4.800', tag: 'Popular', image: '/images/products/pan-torta.webp' },
      { name: 'Factura clásica', price: '$1.200', tag: 'Frescura', image: '/images/products/pan-croissant.webp' },
      { name: 'Pan de masa madre', price: '$2.300', tag: 'Horneado hoy', image: '/images/products/pan-hogaza.webp' },
    ],
  },
  {
    id: 'petshop',
    layout: 'petshop',
    showcaseKind: 'products',
    name: 'PATA CLUB',
    tagline: 'Más juego, más mimos',
    category: 'Mascotas',
    description: 'Una web para mostrar alimentos, accesorios y servicios con una estructura clara para tutores y compradores.',
    highlight: 'Hacé más fácil que los clientes encuentren lo que necesita su mascota.',
    location: 'Belgrano, CABA',
    hours: 'Lun a Sáb · 9:00 a 19:00',
    phone: '+54 9 11 5555-0789',
    heroImage: '/images/products/mascota-perro.webp',
    accent: '#27766f',
    softAccent: '#e8f2ee',
    badges: ['Paseo', 'Descanso', 'Nutrición'],
    showcase: [
      { name: 'Alimento para mascotas', price: '$7.900', tag: 'Nutrición', image: '/images/products/mascota-alimento.webp' },
      { name: 'Ropa para perros', price: '$3.200', tag: 'Abrigo', image: '/images/products/mascota-perro.webp' },
      { name: 'Descanso para gatos', price: '$5.400', tag: 'Confort', image: '/images/products/mascota-gato.webp' },
    ],
  },
  {
    id: 'florist',
    layout: 'florist',
    showcaseKind: 'gallery',
    name: 'VERDE MÍO',
    tagline: 'Flores para decirlo todo',
    category: 'Floristería',
    description: 'Una presentación elegante para bouquets, regalos y servicios especiales con botón directo a consulta.',
    highlight: 'Mostrá tus arreglos con una estética que inspire confianza y compra.',
    location: 'San Telmo, CABA',
    hours: 'Lun a Dom · 10:00 a 20:00',
    phone: '+54 9 11 5555-0111',
    heroImage: '/images/products/flor-ramo.webp',
    accent: '#94556a',
    softAccent: '#f7e9ec',
    badges: ['Ramos', 'Eventos', 'Flores de estación'],
    showcase: [
      { name: 'Un gesto inesperado', tag: 'Ramos', image: '/images/products/flor-ramo.webp', description: 'Flores frescas, elegidas y armadas a mano.' },
      { name: 'Color para todos los días', tag: 'Estación', image: '/images/products/flor-tulipanes.webp', description: 'La belleza simple de las flores de temporada.' },
      { name: 'Celebrar en flores', tag: 'Eventos', image: '/images/products/flor-arreglo.webp', description: 'Diseños florales pensados para cada ocasión.' },
    ],
  },
  {
    id: 'salon',
    layout: 'salon',
    showcaseKind: 'haircuts',
    name: 'ESTUDIO LADO B',
    tagline: 'Tu pelo, tu manera',
    category: 'Peluquería y estilismo',
    description: 'Cortes con personalidad, asesoramiento uno a uno y una experiencia tranquila, hecha alrededor de tu estilo.',
    highlight: 'Un corte que se siente como vos.',
    location: 'Palermo, CABA',
    hours: 'Mar a Sáb · 10:00 a 20:00',
    phone: '+54 9 11 5555-0222',
    heroImage: '/images/haircuts/corte-bob-unsplash.jpg',
    accent: '#533c35',
    softAccent: '#f4eee8',
    badges: ['Cortes', 'Color', 'Textura natural'],
    showcase: [
      {
        name: 'Bob texturizado',
        tag: 'Medio',
        image: '/images/haircuts/corte-bob-unsplash.jpg',
        description: 'Un largo versátil con capas suaves y movimiento natural.',
      },
      {
        name: 'Corte pixie',
        tag: 'Corto',
        image: '/images/haircuts/corte-pixie-unsplash.jpg',
        description: 'Un corte corto con carácter, liviano y fácil de llevar.',
      },
      {
        name: 'Rulos con movimiento',
        tag: 'Natural',
        image: '/images/haircuts/corte-rulos-unsplash.jpg',
        description: 'Volumen y definición para acompañar la textura natural.',
      },
    ],
  },
]
