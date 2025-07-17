# Print Web - Landing Page

Este proyecto es una landing page para serigrafía creada con HTML, CSS (Tailwind CSS V4.1) y JavaScript.

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/usuario/serigrafia-v3.git
```

2. Instala las dependencias (esto incluye Tailwind y shx):
```bash
npm install
```

## Dependencias de desarrollo

- [`tailwindcss`](https://tailwindcss.com/)  
  Framework CSS basado en utilidades. Permite escribir estilos directamente en las clases HTML.

- [`@tailwindcss/cli`](https://www.npmjs.com/package/@tailwindcss/cli)  
  Interfaz de línea de comandos para compilar archivos CSS usando Tailwind sin configurar PostCSS manualmente.

- [`shx`](https://www.npmjs.com/package/shx)  
  Provee comandos `sh` multiplataforma (`cp`, `mkdir`, etc.) que funcionan en todos los sistemas operativos sin problemas.

## Cómo compilar el proyecto

Para generar la versión final lista para producción, ejecuta los siguientes comandos en orden:

```bash
npm run build:css
npm run copy:dist
```
## Requisitos

- Node.js (versión LTS recomendada)

## Estructura del proyecto

- `src/` - Archivos fuente (HTML, CSS, JS)
- `dist/` - Archivos generados para producción (CSS compilado, HTML, JS)

## Scripts disponibles

- `build:css`: Compila CSS con Tailwind en modo producción.
- `copy:dist`: Copia los archivos HTML, CSS y JS a la carpeta `dist/`.


