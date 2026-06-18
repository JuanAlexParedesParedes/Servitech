# WalletNova — Sesión de Trabajo

## Reglas del proyecto
1. Mostrar antes/después antes de ejecutar cualquier cambio
2. Se requiere "sí" explícito para autorizar cambios
3. Una afirmación NO cuenta como "sí" — debe ser la palabra "sí"
4. Generar commit git con comentario del cambio efectuado
5. El `.gitignore` NO se commitea — intencional para evitar que los clones hereden las reglas de exclusión locales
6. [ABSOLUTA] Cambios visuales (HTML, CSS, imágenes) → branch `fronted-creador`
7. [ABSOLUTA] Cambios de lógica (`core.js`) → branch `backend-creador`

## Estructura de branches
- `main` → todos los cambios se mergean aquí
- `frontend-creador` → todos los cambios de diseño (ya existe)
- `backend-creador` → todo lo relacionado al backend

## Carpetas de referencia (solo análisis local)

- `f:\xampp\htdocs\proyectos\billetera` — análisis y referencias, NO subir a GitHub

## Estado actual

- Branch activo: fronted-creador
- Último commit fronted-creador: 8593923 - feat: dashboard con modales funcionales
- Último commit backend-creador: 6dbd553 - feat: agregar core.js logica de negocio y localStorage
- Pull Request #1: fronted-creador → main (abierto)
- Cumplimiento todo.md billetera: 100%
