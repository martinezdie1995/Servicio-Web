# AGENTS.md

## Objetivo comercial

Desarrollar una landing page comercial para servicios de creación de páginas web front-end para comercios locales de Argentina. El sitio debe posicionar la propuesta como una herramienta de crecimiento y diferenciación para negocios que hoy dependen de redes sociales, mensajes y catálogo improvisado, sin prometer resultados garantizados ni depender de métricas no verificables.

## Público objetivo

Pequeños y medianos comercios argentinos que:
- exhiben productos y servicios de forma dispersa en redes sociales;
- reciben preguntas repetidas sobre precios, horarios, ubicación o stock;
- tienen una presencia digital poco profesional, antigua o poco usable en celular;
- desean contar con una web propia para presentar catálogos organizados y facilitar contactos por WhatsApp;
- necesitan una identidad digital clara y confiable.

## Alcance y exclusiones

### Incluye
- landing page comercial y conversión orientada;
- secciones de problema, beneficio, demostraciones y contratación;
- contenido estático local con datos ficticios de ejemplo;
- proyectos de demostración para distintos rubros;
- diseño responsive, claro y enfocado en la acción comercial.

### Excluye
- e-commerce completo con pagos, stock real o gestión de usuarios;
- autenticación o backend;
- bases de datos o APIs externas;
- paneles administrativos;
- textos técnicos que no aporten claridad al comerciante.

## Stack tecnológico

- React con TypeScript en modo estricto.
- Vite como bundler.
- Tailwind CSS para estilos.
- HTML semántico y componentes funcionales.
- Datos locales mediante archivos TypeScript/JSON.
- npm para dependencias.
- Git/GitHub para versionado.
- Cloudflare Pages como despliegue estático posible.

## Principios de diseño

- Priorizar claridad comercial sobre estética técnica.
- Comunicar beneficios concretos para el negocio.
- Mantener un mensaje directo y fácil de entender para un comerciante no técnico.
- Usar CTA orientados a contacto, consulta y presupuesto.
- Construir una identidad visual profesional, moderna y memorable, pero no genérica.
- Usar lenguaje de negocio, no lenguaje de desarrollador.

## Arquitectura y convenciones de código

- Usar estructura modular por componentes y datos.
- Centralizar contenido y tipos en archivos locales con datos tipados.
- Preferir componentes reutilizables para cards, botones, secciones y galerías.
- Mantener separación clara entre contenido, datos y UI.
- Evitar lógica compleja dentro de componentes cuando puede encapsularse en utilidades pequeñas.
- Usar nombres descriptivos y consistentes en español/inglés según el contexto del proyecto.

## Reglas para crear componentes reutilizables

- Cada componente debe tener una responsabilidad concreta.
- Reevaluar si un bloque se reutiliza en más de una sección antes de duplicar código.
- Preferir props tipadas con interfaces explícitas.
- Evitar `any` en TypeScript.
- Mantener componentes pequeños y composables.
- No crear templates genéricos sin sentido para casos concretos del negocio.
- Las demostraciones deben mostrar variedad real de dirección de arte y estructura según el rubro, no solo cambiar textos, colores o productos en una misma plantilla.
- Dar protagonismo a la marca del comercio de muestra; presentar productos con precio solo cuando el rubro y el objetivo de la página lo pidan. Para peluquerías, priorizar galería de estilos y contacto sin precios.

## Reglas de TypeScript

- Usar `strict: true`.
- Definir interfaces explícitas para productos, categorías, negocios, servicios y casos de demostración.
- Evitar `any`.
- Preferir tipos literales y uniones cuando el valor está acotado.
- Mantener imports y exports limpios y consistentes.
- Resolver errores de tipado antes de mergear cambios importantes.

## Criterios de accesibilidad y responsive

- Usar HTML semántico (`header`, `main`, `section`, `footer`, etc.).
- Mantener contrastes adecuados y jerarquías visuales claras.
- Usar tamaños de fuente y espaciado que permitan lectura cómoda en celular.
- Garantizar que los CTA y enlaces sean visibles y accesibles en pantallas pequeñas.
- Asegurar foco visible para navegación por teclado.
- Evitar contenido solo visual cuando existe información que debe ser legible.

## Reglas para imágenes y recursos visuales

- Para productos y catálogos, priorizar fotografías reales y fieles al producto mostrado; evitar emojis, ilustraciones o degradados como sustituto de la foto.
- Usar imágenes con licencia adecuada y alojarlas localmente para no depender de servicios externos al desplegar.
- Registrar la fuente/licencia/autor de fotografías de terceros y usar texto alternativo descriptivo. Incluir los créditos requeridos en la interfaz o documentación correspondiente.
- Mantener los archivos visuales ligeros y optimizados.
- No presentar precios, productos, comercios ni teléfonos ficticios como información comercial real; identificarlos como contenido demostrativo.

## Criterios de calidad, pruebas y manejo de errores

- Verificar que la app compile sin errores antes de cerrar una tarea relevante.
- Ejecutar validaciones enfocadas en el cambio realizado.
- Manejar fallos de carga y contenido faltante con una UX robusta.
- Si un dato es obligatorio y no existe, usar un fallback claro y consistente.
- Mantener el proyecto estable y con un estado funcional en cada etapa importante.

## Cómo evaluar propuestas de mejora

- Analizar si la mejora responde a un beneficio comercial real o a un detalle técnico innecesario.
- Verificar si cumple el alcance del proyecto y no introduce complejidad no necesaria.
- Priorizar mejoras que incrementen claridad, conversión, usabilidad y mantenimiento.
- Descartar cambios que vuelvan el sitio genérico, poco comercial o difícil de mantener.

## Qué hacer antes de modificar una parte importante de la arquitectura

1. Revisar `AGENTS.md` y `memory.md`.
2. Analizar el impacto en componentes, datos y diseño general.
3. Confirmar que la propuesta no contradice requisitos ya establecidos.
4. Documentar cambios relevantes en `memory.md` cuando correspondan.

## Qué información nunca debe guardarse en la memoria

- contraseñas;
- tokens o claves API;
- secretos de infraestructura;
- información privada o personal no relevante;
- datos reales de clientes o referencias comerciales sensibles.

## Cómo mantener actualizada la documentación

- Actualizar `memory.md` después de cambios importantes, decisiones relevantes o hitos del proyecto.
- Incorporar reglas permanentes nuevas a `AGENTS.md` cuando sean aplicables a todas las futuras sesiones.
- Mantener los archivos breves, útiles y específicos al contexto del proyecto.

## Decisión de prioridad

Si aparece una contradicción entre una decisión previa y un requisito explícito del usuario, debe priorizarse el requisito explícito y documentarse el conflicto en `memory.md`.
