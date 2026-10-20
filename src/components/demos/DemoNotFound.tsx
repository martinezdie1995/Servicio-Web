import { demoHomeHref } from './demoLinks'
import './demo-not-found.css'

function DemoNotFound() {
  return (
    <main className="demo-not-found">
      <p>WebLocal / demostraciones</p>
      <h1>No encontramos esa página de muestra.</h1>
      <a href={demoHomeHref}>Volver a todos los ejemplos</a>
    </main>
  )
}

export default DemoNotFound
