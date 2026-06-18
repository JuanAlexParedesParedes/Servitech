# Servitech — Sesión de Trabajo

## Reglas del proyecto

1. Mostrar antes/después antes de ejecutar cualquier cambio
2. Se requiere "sí" explícito para autorizar cambios
3. Una afirmación NO cuenta como "sí" — debe ser la palabra "sí"
4. Generar commit git con comentario del cambio efectuado
5. El `.gitignore` NO se commitea — intencional para evitar que los clones hereden las reglas de exclusión locales
6. [ABSOLUTA] Cambios visuales (HTML, CSS, imágenes) → branch `fronted-creador`
7. [ABSOLUTA] Cambios de lógica (`core.js`) → branch `backend-creador`
8. Explicar cada cambio antes de aplicarlo

---

## Estructura de branches

- `main` → todos los cambios se mergean aquí
- `fronted-creador` → todos los cambios de diseño
- `backend-creador` → todo lo relacionado al backend

---

## Estado actual

- Branch activo: main
- Último commit main: e64300b — Merge branch 'backend-creador'
- Último commit fronted-creador: 7b508a9 — feat: cards con filtro por categoria, modal dinamico y hover CSS
- Último commit backend-creador: 0cc8f92 — feat: core.js — filtro de cards por categoria y modal dinamico con jQuery
- GitHub Pages: activo en juanalexparedesparedes.github.io/Servitech

### Secciones implementadas

| Sección | Estado | Contenido |
| ------- | ------ | --------- |
| Home | completo | Carrusel Bootstrap (Redes / DevOps / CCTV) |
| Sobre nosotros | parcial | Lorem ipsum, layout 2 columnas |
| Proyectos | completo | 3 cards con filtro, modal y hover |
| Login | completo | Formulario Bootstrap con validación jQuery |

---

## Paleta de colores

| Hex | Rol |
| --- | --- |
| `#353839` | Background body (negro ónix) |
| `#ffffff` | Texto principal |
| `#1c1c1c` | Background footer, cards y modal |
| `#111111` | Background card-footer |
| `#444444` | Bordes (cards, modal, footer divider) |
| `#cccccc` | Texto footer |
| `#aaaaaa` | Texto secundario (meta, footer links) |
| `#4a9eff` | Azul — SVG Redes |
| `#2ea44f` | Verde — SVG DevOps |
| `#cc2200` | Rojo — SVG CCTV |

---

## Componentes Bootstrap 4

| Componente | Usado en |
| ---------- | -------- |
| Navbar + Collapse | Header responsive con hamburger |
| Carousel | Sección Home — 3 slides |
| Card | Sección Proyectos — 3 cards |
| Modal | Detalle de proyecto al hacer click |
| Badge | Categoría y estado en cards |
| Button | Filtros, login, footer y modales |
| Grid (row/col) | Layout Sobre nosotros, Proyectos, Footer |
| Form + Form-group | Sección Login |

---

## Componentes jQuery

| Función | Descripción |
| ------- | ----------- |
| Switching de secciones | Click en nav-link → muestra sección target, oculta las demás |
| Cierre de hamburger | `collapse('hide')` al navegar en móvil |
| Filtro de cards | Botones Todos/Redes/DevOps/CCTV muestran u ocultan `.proyecto-item` |
| Modal dinámico | Click en card → inyecta `data-*` de la card en el modal y lo abre |
| Submit login | Previene recarga del formulario |

---

## Mejoras posibles

| # | Mejora | Prioridad |
| - | ------ | --------- |
| 1 | Contenido real en Sobre nosotros (misión, equipo, historia) | Alta |
| 2 | Formulario de contacto funcional (emailjs o backend) | Alta |
| 3 | Validación visual del login con mensajes de error | Media |
| 4 | Animación fade-in al cargar las cards | Media |
| 5 | Animación de transición entre secciones | Media |
| 6 | Toggle modo claro / oscuro | Baja |
| 7 | Paginación o carga dinámica de proyectos | Baja |
| 8 | Internacionalización (ES / EN) | Baja |
| 9 | Backend para gestionar proyectos desde panel | Futura |

---

## Carpetas de referencia (solo análisis local)

- `f:\xampp\htdocs\proyectos\billetera` — análisis y referencias, NO subir a GitHub
