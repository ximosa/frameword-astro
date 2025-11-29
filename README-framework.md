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

## 🚀 Generación Automática de Páginas desde la Configuración ⭐ **POTENTE**

El framework incluye un sistema revolucionario que **genera automáticamente todas las páginas necesarias** basándose únicamente en la configuración de contenido. ¡Ya no necesitas crear páginas manualmente para cada tipo de contenido nuevo!

### El Problema Tradicional
Anteriormente, cuando definías una nueva colección de contenido en `config/content.config.ts` (como "proyectos"), tenías que:
- ❌ Crear manualmente `src/pages/proyectos/index.astro`
- ❌ Crear manualmente `src/pages/proyectos/[slug].astro`
- ❌ Escribir código repetitivo para listar y mostrar contenido

### La Solución Automática ✨
Ahora, con las **rutas dinámicas universales**, el framework lee automáticamente tu `content.config.ts` y genera todas las páginas necesarias:

#### Página de Listado Genérica (`src/pages/[collection]/index.astro`)
```astro
---
// src/pages/[collection]/index.astro
import { getCollection } from 'astro:content';
import Layout from '../../layouts/Layout.astro';
import { getCollectionsConfig } from '../../../config/content.config';

const { collection: collectionParam } = Astro.params;

// 1. Encontrar la configuración de la colección actual
const collectionsConfig = getCollectionsConfig();
const collectionConfig = collectionsConfig.find(c => c.name === collectionParam);

// 2. Si la colección no está en el config, mostrar 404
if (!collectionConfig) {
  return new Response(null, { status: 404, statusText: 'Not Found' });
}

// 3. Obtener todas las entradas para esa colección
const entries = await getCollection(collectionParam);
---

<Layout
  title={collectionConfig.label || `Archivo de ${collectionParam}`}
  description={`Explora todas las entradas en la categoría de ${collectionConfig.label}`}
>
  <main class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-6">
      {collectionConfig.label || `Archivo de ${collectionParam}`}
    </h1>
    <ul class="space-y-4">
      {entries.map(entry => (
        <li>
          <a href={`/${collectionParam}/${entry.slug}`} class="text-2xl font-semibold text-primary-600 hover:underline">
            {entry.data.title}
          </a>
          {entry.data.description && <p class="text-gray-600 mt-1">{entry.data.description}</p>}
        </li>
      ))}
    </ul>
  </main>
</Layout>
```

#### Página de Detalle Genérica (`src/pages/[collection]/[slug].astro`)
```astro
---
// src/pages/[collection]/[slug].astro
import { getCollection } from 'astro:content';
import Layout from '../../layouts/Layout.astro';

// 1. Generar todas las rutas posibles para todas las colecciones
export async function getStaticPaths() {
  const collectionsConfig = getCollectionsConfig();
  const paths = [];

  for (const collection of collectionsConfig) {
    const entries = await getCollection(collection.name);
    for (const entry of entries) {
      paths.push({
        params: { collection: collection.name, slug: entry.slug },
        props: { entry },
      });
    }
  }

  return paths;
}

const { entry } = Astro.props;
const { Content } = await entry.render();
---

<Layout
  title={entry.data.title}
  description={entry.data.description}
>
  <main class="container mx-auto px-4 py-8 prose lg:prose-xl">
    <h1 class="text-4xl font-bold mb-4">{entry.data.title}</h1>
    {entry.data.pubDate && (
      <p class="text-gray-500 mb-6">
        Publicado el: {entry.data.pubDate.toLocaleDateString()}
      </p>
    )}
    <article>
      <Content />
    </article>
  </main>
</Layout>
```

### Cómo Funciona

1. **Define tu colección** en `config/content.config.ts`:
```typescript
// Ejemplo: Agregar colección de proyectos
{
  name: 'proyectos',
  label: 'Proyectos',
  description: 'Portafolio de proyectos',
  route: '/proyectos',
  slug: 'title',
  schema: commonSchemas.project,
}
```

2. **Crea el directorio de contenido** en `src/content/proyectos/`:
```
src/content/proyectos/
├── proyecto-1.mdx
├── proyecto-2.mdx
└── proyecto-3.mdx
```

3. **¡Listo!** Las páginas se generan automáticamente:
- 📄 `/proyectos/` - Lista todos los proyectos
- 📄 `/proyectos/proyecto-1` - Página detalle del proyecto 1
- 📄 `/proyectos/proyecto-2` - Página detalle del proyecto 2
- etc.

### Beneficios

✅ **Cero código repetitivo** - Una sola página genérica maneja todos los tipos de contenido
✅ **Escalable infinitamente** - Agrega nuevas colecciones sin tocar código
✅ **Mantenimiento cero** - Las páginas se actualizan automáticamente con la config
✅ **SEO automático** - Cada página tiene meta tags apropiados
✅ **Rendimiento óptimo** - Generación estática para todas las rutas

### Ejemplo Práctico: Agregar "Proyectos"

Solo necesitas:

1. **Configurar la colección** en `config/content.config.ts`:
```typescript
// Ya está incluido en defaultCollections como 'projects'
// Pero puedes agregar cualquier colección personalizada
const proyectosCollection = createCollection('proyectos', {
  label: 'Proyectos',
  route: '/proyectos',
  schema: commonSchemas.project,
  pagination: { enabled: true, perPage: 12 }
});
```

2. **Crear contenido** en `src/content/proyectos/mi-proyecto.mdx`:
```mdx
---
title: "Mi Proyecto Increíble"
description: "Un proyecto que cambió mi vida"
date: 2024-01-15
image: "/images/proyecto.jpg"
demoUrl: "https://demo.com"
repoUrl: "https://github.com/user/repo"
technologies: ["React", "Node.js", "MongoDB"]
featured: true
---

# Mi Proyecto Increíble

Este es el contenido detallado de mi proyecto...
```

3. **¡Acceder automáticamente!**
- 🌐 `/proyectos/` - Lista todos los proyectos
- 🌐 `/proyectos/mi-proyecto-increible` - Página del proyecto (slug generado automáticamente)

### Personalización Avanzada

Puedes personalizar las páginas genéricas modificando `src/pages/[collection]/index.astro` y `src/pages/[collection]/[slug].astro` para agregar:

- 🎨 **Estilos personalizados** por colección
- 🔍 **Filtros y búsqueda** avanzada
- 📄 **Paginación** automática
- 🏷️ **Categorización** y tags
- 📊 **Ordenamiento** personalizado
- 🎯 **Componentes específicos** por tipo de contenido

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

#### SEO Mejorado (`src/components/SEO.astro`) ⭐ **MEJORADO**
- ✅ **Configuración automática** desde `site.config.ts`
- ✅ **Frontmatter inteligente** para posts del blog
- ✅ **Open Graph avanzado** con datos de artículos
- ✅ **Twitter Cards** completas
- ✅ **Structured Data (JSON-LD)** para SEO
- ✅ **URLs canónicas** automáticas
- ✅ **Keywords combinadas** (globales + tags + categoría)
- ✅ **Imágenes absolutas** para redes sociales
- ✅ **Detección automática** de tipo de contenido (website/article)

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

### SEO Inteligente Automático

El componente SEO mejorado se configura automáticamente según el contexto:

#### Para Posts del Blog (Automático)
```astro
---
// Las páginas dinámicas usan automáticamente el frontmatter
// src/pages/[collection]/[slug].astro
---
<SEO frontmatter={entry.data} type="article" />
```

#### Para Páginas Personalizadas
```astro
---
// src/pages/acerca.astro
---
<SEO
  title="Acerca de Nosotros"
  description="Conoce nuestro equipo y historia"
  image="/images/equipo.jpg"
  type="website"
/>
```

#### Para la Página Principal
```astro
---
// src/pages/index.astro
---
<SEO />  <!-- Usa configuración por defecto -->
```

#### Ejemplo de Frontmatter Completo
```mdx
---
title: "Cómo Optimizar tu Sitio Web"
description: "Guía completa para mejorar el rendimiento de tu web"
date: "2024-01-15"
author: "Juan Pérez"
image: "https://example.com/og-image.jpg"
category: "SEO"
tags: ["optimización", "rendimiento", "web"]
published: true
---

# Cómo Optimizar tu Sitio Web

Contenido del artículo...
```

**Resultado automático:**
- ✅ **Título**: "Cómo Optimizar tu Sitio Web | Mi Sitio Web"
- ✅ **Open Graph**: Tipo "article" con fecha, autor, categoría
- ✅ **Twitter Card**: Imagen y metadatos completos
- ✅ **Structured Data**: JSON-LD para motores de búsqueda
- ✅ **Keywords**: "astro, web, desarrollo, optimización, rendimiento, web"
- ✅ **URLs canónicas**: Generadas automáticamente

## 🤝 Contribuir

Para contribuir al framework:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Realiza tus cambios
4. Envía un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🆘 Soporte



---

## 🛠️ CLI de Setup ✅ COMPLETADO

El CLI está disponible y permite crear nuevos proyectos basados en Frameword:

```bash
# Crear un nuevo proyecto basado en Frameword
npx create-frameword-app my-site

# O usando el repositorio
npx degit ximosa/frameword-astro my-site
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
