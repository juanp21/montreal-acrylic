# CF Montréal × Acrylic - Call for Music

Plataforma de envío de música para CF Montréal × Acrylic.

## Estructura del Proyecto

```
ACRYLICxMONTREAL/
├── src/
│   ├── index.html              # Archivo principal (títulos en Proxima Nova)
│   ├── fonts/                  # Tipografías
│   │   ├── Acrylic-Regular.otf         # Proxima Nova
│   │   ├── GlacialIndifference-Regular.otf
│   │   └── GlacialIndifference-Bold.otf
│   ├── img/                    # Imágenes y videos
│   │   ├── montreal_logo.png
│   │   ├── whitec_logo.png
│   │   ├── white_logo.png
│   │   ├── step-1.jpg
│   │   ├── step-2.jpg
│   │   ├── step-3.jpg
│   │   ├── mfc1.mp4
│   │   ├── mfc2.mp4
│   │   ├── mfc_video.mp4
│   │   └── montreal_city.mp4
│   ├── css/                    # (CSS integrado en index.html)
│   └── js/                     # (JavaScript integrado en index.html)
├── .git/                       # Control de versiones
└── README.md                   # Este archivo
```

## Cambios Realizados

### 1. **Tipografía Actualizada** ✓
- **Títulos (h1, h2, h3, h4)**: Cambiados a **Proxima Nova**
- **Cuerpo del texto**: Glacial Indifference
- Rutas actualizadas a `./fonts/Acrylic-Regular.otf`

### 2. **Estructura Mejorada** ✓
- Semántica HTML5: `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`
- Mejor organización de contenido
- Mejores atributos de accesibilidad
- Animaciones y transiciones optimizadas

### 3. **Carpetas Organizadas** ✓
- `src/fonts/` - Todas las tipografías
- `src/img/` - Todas las imágenes y videos
- `src/` - Archivo principal `index.html`

## Características

- **Bilingüe**: Soporte para Francés e Inglés
- **Responsive**: Diseño adaptable a móvil, tablet y desktop
- **Animaciones**: Scroll reveal, hero animations, FAQ interactivo
- **Moderno**: Gradientes, efectos parallax, transiciones suaves

## Secciones

1. **Hero** - Llamada principal con video de fondo
2. **How it works** - 3 pasos del proceso
3. **Selection criteria** - Criterios de selección
4. **Timeline** - Calendario del proyecto
5. **FAQ** - Preguntas frecuentes
6. **Legal note** - Términos de licencia
7. **Footer** - Enlaces y contacto

## Cómo Usar

1. Abre `src/index.html` en tu navegador
2. Usa el toggle de idioma (FR/EN) en la esquina superior derecha
3. Comprueba que los títulos usen Proxima Nova
4. Verifica que todos los recursos se carguen correctamente

## Color Palette

- **Primary Blue**: `#00205B` (CF Montréal Blue)
- **Light Blue**: `#8DC8E8` (Accent)
- **Secondary Orange**: `#FF6B35` (Accent secondary)
- **Background**: `#000000` (Black)
- **Text**: `#FFFFFF` (White)

## Desarrollo

Para actualizar el contenido o estilos:
- Edita `src/index.html`
- Los estilos están en la sección `<style>` dentro del `<head>`
- El JavaScript está al final antes de `</body>`

## Deploy

Para publicar el sitio:
1. Sube la carpeta `src/` a tu servidor
2. Configura `index.html` como el archivo por defecto
3. Asegúrate de que los archivos en `fonts/` e `img/` estén accesibles

---

**Última actualización**: 03/06/2026  
**Versión**: 2.0 (Restructurada con Proxima Nova)
