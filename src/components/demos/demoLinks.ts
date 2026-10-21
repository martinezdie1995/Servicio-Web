export const demoHomeHref = `${import.meta.env.BASE_URL}#demostraciones`
export const demoWhatsappHref =
  'https://wa.me/5491136046700?text=Hola%2C+vi+la+demostraci%C3%B3n+y+quiero+consultar.'

export function demoHref(id: string) {
  return `${import.meta.env.BASE_URL}?demo=${encodeURIComponent(id)}`
}
