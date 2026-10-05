# Registro de Decisiones de Diseño y Arquitectura (ADR)

## 1. Secciones del Sitio
- **Hero / Inicio:** Presentación directa, titular claro, llamado a la acción (CTA) a proyectos y contacto.
- **Sobre mí:** Resumen sobre formación técnica, enfoque de trabajo y pasión por el desarrollo web.
- **Habilidades:** Clasificación organizada por categorías (Frontend, Base de Datos, Herramientas / OS).
- **Proyectos:** Muestra de 3 a 4 proyectos destacados con descripción, tecnologías usadas y enlaces a código/demo.
- **Contacto:** Formulario funcional con validación JS y acceso directo a redes profesionales.

## 2. Paleta de Colores
- **Fondo Primario (`--color-fondo`):** `hsl(220, 20%, 98%)` — Blanco / gris muy claro para alta legibilidad.
- **Texto Principal (`--color-texto`):** `hsl(220, 25%, 12%)` — Azul oscuro / casi negro para evitar el fatiga visual del negro puro.
- **Color Primario / Marca (`--color-primario`):** `hsl(220, 75%, 45%)` — Azul técnico que transmite seriedad y profesionalismo.
- **Color Accent / Destacados (`--color-acento`):** `hsl(175, 75%, 40%)` — Verde turquesa de alto contraste para botones y detalles.
- *Verificación WebAIM:* Contraste mínimo de 4.5:1 superado en combinaciones de texto y fondo.

## 3. Tipografía
- **Familia Principal:** `'Inter', system-ui, sans-serif` — Tipografía moderna sin serifas, diseñada específicamente para pantallas y alta legibilidad UI.
- **Familia Monospaciada:** `'JetBrains Mono', monospace` — Utilizada en etiquetas de tecnologías y fragmentos de código para dar identidad técnica.

## 4. Estrategia Mobile-First
- El maquetado y estilos base se construyen pensando en pantallas móviles (320px+).
- Se implementan los breakpoints a través de `@media (min-width: ...)` para adaptar la vista progresivamente a tabletas y monitores de escritorio.