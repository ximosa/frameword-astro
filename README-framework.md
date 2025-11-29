# Frameword Astro - Framework para Sitios Web

Un framework moderno y flexible construido sobre Astro para crear sitios web rápidos, escalables y personalizables.

## 🚀 Características

- ⚡ **Rendimiento Optimizado**: Basado en Astro para máxima velocidad
- 🎨 **Temas Configurables**: Sistema de temas completo con variables CSS
- 📝 **Contenido Extensible**: Múltiples tipos de contenido (blog, portfolio, servicios, etc.)
- 🛠️ **Configuración Centralizada**: Todo configurable desde archivos TypeScript
- 📱 **Responsive**: Diseño mobile-first
- 🌙 **Modo Oscuro**: Soporte nativo para temas claros y oscuros

## 📁 Estructura del Framework

```
config/
├── index.ts              # Punto de entrada central
├── site.config.ts        # Configuración general del sitio
├── themes.config.ts      # Configuración de temas y colores
└── content.config.ts     # Configuración de tipos de contenido

src/
├── components/           # Componentes reutilizables
├── layouts/             # Layouts de página
├── pages/               # Páginas del sitio
├── content/             # Contenido estructurado
└── styles/              # Estilos globales
```

## ⚙️ Configuración

### Configuración Básica del Sitio

Edita `config/site.config.ts` para personalizar tu sitio:

```typescript
export const siteConfig: SiteConfig = {
  name: "Mi Sitio Web",
  description: "Descripción de mi sitio",
  url: "https://misitio.com",

  navigation: {
    main: [
      { label: "Inicio", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "Contacto", href: "/contacto" }
    ]
  },

  theme: {
    default: "system",
    colors: {
      primary: "#3B82F6",
      secondary: "#6B7280",
    }
  },

  seo: {
    title: "Mi Sitio Web",
    description: "Descripción SEO",
    keywords: ["palabra", "clave"],
    author: "Tu Nombre"
  }
}
```

### Componentes Dinámicos

Los componentes principales usan la configuración automáticamente:

#### Header Dinámico
```astro
<!-- src/components/Header.astro -->
---
import { getSiteConfig } from '../../config';
const siteConfig = getSiteConfig();
---

<header>
  <a href="/">{siteConfig.name}</a>
  {siteConfig.navigation.main.map(item => (
    <a href={item.href}>{item.label}</a>
  ))}
</header>
```

#### SEO Automático
```astro
<!-- src/components/SEO.astro -->
---
import { getSiteConfig } from '../../config';
const siteConfig = getSiteConfig();
---

<meta name="description" content={siteConfig.seo.description} />
<meta name="keywords" content={siteConfig.seo.keywords.join(', ')} />
```

### Configuración de Temas

Los temas se definen en `config/themes.config.ts`. Cada tema incluye una paleta completa de colores:

```typescript
export const miTema: ThemeConfig = {
  name: "mi-tema",
  colors: {
    primary: { /* colores del 50 al 900 */ },
    secondary: { /* colores del 50 al 900 */ },
    gray: { /* escala de grises */ }
  }
}
```

### Tipos de Contenido

Configura colecciones de contenido en `config/content.config.ts`:

```typescript
// Crear una nueva colección
const miColeccion = createCollection('productos', {
  label: 'Productos',
  route: '/productos',
  schema: commonSchemas.service,
  pagination: { enabled: true, perPage: 12 }
});
```

## 🎨 Uso de Temas

### En CSS
```css
/* Usar variables CSS generadas automáticamente */
.btn-primary {
  background-color: var(--color-primary-500);
  color: var(--color-primary-50);
}

.btn-primary:hover {
  background-color: var(--color-primary-600);
}
```

### En Tailwind CSS
```javascript
// tailwind.config.mjs
import { getTheme } from './config';

const theme = getTheme('default');

export default {
  theme: {
    extend: {
      colors: {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        gray: theme.colors.gray,
      }
    }
  }
}
```

## 📝 Tipos de Contenido Soportados

### Blog Posts
- Artículos con metadata completa
- Categorías y tags
- Paginación automática

### Proyectos/Portfolio
- Descripciones detalladas
- Enlaces a demo y repositorio
- Tecnologías utilizadas

### Servicios/Productos
- Precios y características
- Categorización
- Estados de disponibilidad

### Testimonios
- Opiniones de clientes
- Ratings y reseñas
- Información de la empresa

## 🛠️ Desarrollo

### Instalación
```bash
npm install
```

### Desarrollo Local
```bash
npm run dev
```

### Build de Producción
```bash
npm run build
```

### Preview
```bash
npm run preview
```

## 📖 Uso Avanzado

### Crear Nuevo Tipo de Contenido

1. Define el schema en `config/content.config.ts`
2. Agrega la colección a `defaultCollections`
3. Crea las páginas correspondientes en `src/pages/`
4. Actualiza la configuración de contenido en `src/content/config.ts`

### Personalizar Tema

1. Crea un nuevo tema en `config/themes.config.ts`
2. Actualiza `siteConfig.theme.default`
3. Regenera las variables CSS si es necesario

### Agregar Nueva Página

1. Crea el archivo en `src/pages/`
2. Usa el layout apropiado
3. Importa la configuración necesaria desde `config/`

## 🔧 Componentes del Framework

### Componentes Actualizados

#### Header (`src/components/Header.astro`)
- ✅ Navegación dinámica desde configuración
- ✅ Nombre del sitio configurable
- ✅ Soporte para enlaces externos
- ✅ Menú responsive

#### SEO (`src/components/SEO.astro`)
- ✅ Meta tags dinámicos
- ✅ Open Graph automático
- ✅ Twitter Cards
- ✅ Keywords y autor configurables

#### Layout (`src/layouts/Layout.astro`)
- ✅ Importación automática de estilos de tema
- ✅ Variables CSS disponibles globalmente

#### SocialShare (`src/components/SocialShare.astro`) ⭐ **NUEVO**
- ✅ Compartir en Twitter, Facebook, LinkedIn y WhatsApp
- ✅ URLs codificadas automáticamente
- ✅ Diseño responsive con iconos
- ✅ Accesibilidad completa

#### Newsletter (`src/components/Newsletter.astro`) ⭐ **NUEVO**
- ✅ Formulario de suscripción con validación
- ✅ Estados de loading y mensajes de éxito/error
- ✅ Diseño responsive y accesible
- ✅ Animaciones suaves

#### Footer Mejorado (`src/components/Footer.astro`) ⭐ **ACTUALIZADO**
- ✅ Icono de admin con enlace a `/admin/nuevo-post`
- ✅ Tooltip descriptivo "Panel de Administración"
- ✅ Enlaces a redes sociales (Twitter, GitHub)
- ✅ Diseño responsive y accesible

### Sistema de Estilos

#### Variables CSS (`src/styles/theme.css`)
```css
/* Variables disponibles globalmente */
--color-primary-500: #3b82f6;
--color-secondary-200: #e5e7eb;
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);

/* Clases utilitarias */
.btn-primary { /* Estilos automáticos */ }
.card { /* Componentes preconstruidos */ }
```

#### Tailwind Integration (`tailwind.config.mjs`)
```javascript
// Colores del tema integrados automáticamente
colors: {
  primary: theme.colors.primary,
  secondary: theme.colors.secondary,
  gray: theme.colors.gray,
}
```

## 🎯 Ejemplos de Uso

### Cambiar el Tema del Sitio

1. Edita `config/site.config.ts`:
```typescript
theme: {
  default: "business", // Cambia a tema empresarial
}
```

2. Los colores se actualizan automáticamente en toda la aplicación

### Agregar Nuevo Elemento de Navegación

1. Edita `config/site.config.ts`:
```typescript
navigation: {
  main: [
    // ... elementos existentes
    { label: "Portfolio", href: "/portfolio" }
  ]
}
```

2. El header se actualiza automáticamente

### Crear Nueva Página con Configuración

```astro
---
// src/pages/acerca.astro
import Layout from '../layouts/Layout.astro';
import { getSiteConfig } from '../../config';

const siteConfig = getSiteConfig();
---

<Layout
  title={`Acerca de | ${siteConfig.name}`}
  description="Conoce más sobre nosotros"
>
  <h1>Acerca de {siteConfig.name}</h1>
  <p>{siteConfig.description}</p>
</Layout>
```

### Usar Componentes en Posts del Blog

```astro
---
// src/content/blog/mi-articulo.mdx
---
title: "Mi Artículo Increíble"
description: "Un artículo sobre desarrollo web"
---

import SocialShare from '../../components/SocialShare.astro';
import Newsletter from '../../components/Newsletter.astro';

# Mi Artículo Increíble

Contenido del artículo...

<!-- Compartir en redes sociales -->
<SocialShare
  url={Astro.url.href}
  title={frontmatter.title}
  description={frontmatter.description}
/>

<!-- Capturar emails -->
<Newsletter
  title="¿Te gustó este artículo?"
  description="Suscríbete para recibir más contenido como este"
/>
```

### Personalizar Newsletter

```astro
---
// src/pages/index.astro
import Newsletter from '../components/Newsletter.astro';
---

<Newsletter
  title="Únete a nuestra comunidad"
  description="Recibe tips semanales sobre desarrollo web"
  placeholder="tu@email.com"
  buttonText="¡Comenzar ahora!"
/>
```

### Footer con Icono de Admin

El footer incluye automáticamente:
- ✅ **Icono de admin** (engranaje) enlazando a `/admin/nuevo-post`
- ✅ **Enlaces sociales** a Twitter y GitHub
- ✅ **Copyright dinámico** con el nombre del sitio
- ✅ **Acceso rápido** al panel de administración desde cualquier página

## 🤝 Contribuir

Para contribuir al framework:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Realiza tus cambios
4. Envía un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🆘 Soporte

- 📧 Email: soporte@frameword.dev
- 📖 Docs: [Documentación Completa](https://docs.frameword.dev)
- 💬 Discord: [Comunidad Frameword](https://discord.gg/frameword)

---

## 🛠️ CLI de Setup ✅ COMPLETADO

El CLI está disponible y permite crear nuevos proyectos basados en Frameword:

```bash
# Crear un nuevo proyecto basado en Frameword
npx create-frameword-app my-site

# O usando el repositorio
npx degit frameword/frameword-astro my-site
```

### ¿Qué incluye el CLI?

Al ejecutar `npx create-frameword-app mi-proyecto`, se crea automáticamente:

- ✅ **Estructura completa** de directorios y archivos
- ✅ **Configuración inicial** con tu nombre de proyecto
- ✅ **Componentes básicos** (Header, Footer, SEO, Layout)
- ✅ **Páginas de inicio y blog** funcionales
- ✅ **Post de ejemplo** para empezar
- ✅ **Dependencias instaladas** automáticamente
- ✅ **Configuración de Tailwind** lista para usar

### Comandos disponibles:

```bash
# Crear proyecto
npx create-frameword-app <nombre-del-proyecto>

# Ver ayuda
npx create-frameword-app --help
```

### Próximas características del CLI (Roadmap):

- 🔄 **Generadores avanzados** de componentes y páginas
- 🎨 **Administrador visual** de temas
- 📝 **Validación automática** de configuración
- 🚀 **Deploy integrado** para Vercel, Netlify, etc.
- 📊 **Analytics** y monitoreo integrado

---

**Frameword Astro** - Construyendo el futuro de los sitios web, hoy. ✨
