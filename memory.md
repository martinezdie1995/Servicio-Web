# memory.md

## Arquitectura tomada
- Proyecto desarrollado en React + TypeScript + Vite con Tailwind CSS.
- El contenido principal vive en archivos de datos locales tipados para mantener el landing page Comercial y reutilizable.
- La interfaz está organizada en secciones con foco comercial: hero, problema, beneficios, demostraciones, proceso y cierre con CTA.

## Preferencias de diseño confirmadas
- Enfoque comercial sobre técnico.
- Mensajes dirigidos a dueños de comercios, no a desarrolladores.
- CTA claros para WhatsApp y consulta de presupuesto.
- Identidad general coherente en verde petróleo, coral, crema cálido y dorado; color de acento específico por rubro en las demostraciones.
- Evitar combinar acentos saturados sin relación cromática.
- Las muestras de productos deben usar fotografías reales y alojadas localmente.
- La galería de demos debe enseñar variedad real de composición y estructura por rubro; la identidad de cada comercio debe ser el foco.
- Peluquerías deben mostrar estilos de corte en una galería visual, sin mostrar precios.

## Requisitos que no deben modificarse
- El sitio sigue siendo una landing para servicios frontend, no una tienda ni panel.
- Se mantiene el foco en comercios locales de Argentina.
- El contenido es estático y local, con datos ficticios de ejemplo.
- Debe priorizar conversión, claridad y usabilidad móvil.

## Estado actual
- Landing page con paleta general verde petróleo/coral/crema/dorado.
- Cada rubro tiene paleta y tratamiento visual propios: interiorismo editorial, panadería cálida, mascotas lúdica, floristería botánica y peluquería de estética editorial.
- Cinco previews enlazan a páginas completas de demostración.

## Funcionalidades implementadas
- Hero principal con CTA principal y secundario.
- Sección de problema y oportunidad con cards representativas.
- Sección de beneficios comerciales con visual clara y orientada a conversión.
- Cinco demostraciones tipadas con catálogos, galerías editoriales y estilos de peluquería.
- Cinco páginas de demostración navegables con marca destacada y dirección de arte propia por rubro.
- Fotografías de Unsplash guardadas en `public/images/products/` y usadas localmente en vistas y catálogos.
- Fotografías de cortes alojadas en `public/images/haircuts/` con créditos visibles de Wikimedia Commons.
- Marca principal identificada con icono de comercio y subtítulo explicativo.
- Proceso de trabajo en 3 etapas.
- CTA final y footer comercial.

## Problemas conocidos y soluciones aplicadas
- Se evitó contenido técnico innecesario para mantener foco comercial.
- Se usa contenido y fotos locales para garantizar que no dependa de backend ni recursos externos en runtime.
- Se centralizó la información en `src/data/siteContent.ts` para facilitar mantenimiento y reutilización.
- Los previews de la galería muestran una página tipo navegador legible y llevan a su sitio de muestra al tocarlos.
- La peluquería presenta cortes bob, pixie y rulos naturales como referencias visuales, sin precios.
- Muebles e interiorismo, floristería y peluquería se presentan como galerías visuales, no como tiendas online.
- Las fotos se publican bajo la licencia de Unsplash, que permite uso comercial; se mantienen como recursos locales.
- Referencias consultadas: [Shopify, color theory](https://www.shopify.com/blog/color-theory), [Interaction Design Foundation, color theory](https://ixdf.org/literature/topics/color-theory), [Unsplash License](https://unsplash.com/license).
- Créditos de peluquería: Alex Neman (CC BY-SA 4.0) y Maria Morri (CC BY-SA 2.0), enlaces por imagen a Wikimedia Commons.

## Errores pendientes
- No hay errores funcionales pendientes detectados en la compilación actual.

## Casos límite detectados
- Debe responder bien en móvil, desktop y con textos claros para perfiles no técnicos.
- Los CTA deben mantenerse visibles y legibles incluso en pantallas compactas.

## Próximas tareas
- Confirmar el número comercial y reemplazar teléfonos y enlaces de WhatsApp ficticios.
- Revisar ajustes finos visuales si se requieren luego de feedback.
- Preparar una versión final para despliegue estático en Cloudflare Pages si corresponde.

## Decisiones pendientes de confirmar
- El contenido exacto del WhatsApp y teléfono comercial final.
- El número comercial definitivo de WhatsApp.
