#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

function createProject(name, template = 'default') {
  console.log(`🚀 Creando nuevo proyecto Frameword: ${name}`);
  console.log('');

  // Crear directorio del proyecto
  if (fs.existsSync(name)) {
    console.error(`❌ El directorio "${name}" ya existe.`);
    process.exit(1);
  }

  fs.mkdirSync(name);
  process.chdir(name);

  console.log('📦 Inicializando proyecto...');

  // Inicializar npm
  execSync('npm init -y', { stdio: 'inherit' });

  // Instalar dependencias de Frameword
  console.log('📥 Instalando dependencias...');
  execSync('npm install astro @astrojs/mdx @astrojs/tailwind tailwindcss @tailwindcss/typography zod', { stdio: 'inherit' });

  // Crear estructura de directorios
  console.log('📁 Creando estructura de directorios...');
  const dirs = [
    'config',
    'src/components',
    'src/layouts',
    'src/pages',
    'src/content/blog',
    'src/styles'
  ];

  dirs.forEach(dir => {
    fs.mkdirSync(dir, { recursive: true });
  });

  // Copiar archivos de configuración
  console.log('⚙️ Configurando archivos...');

  // package.json básico
  const packageJson = {
    "name": name,
    "type": "module",
    "version": "0.0.1",
    "scripts": {
      "dev": "astro dev",
      "start": "astro dev",
      "build": "astro build",
      "preview": "astro preview",
      "astro": "astro"
    },
    "dependencies": {
      "astro": "^5.0.0",
      "@astrojs/mdx": "^4.3.12",
      "@astrojs/tailwind": "^5.0.0",
      "tailwindcss": "^3.4.0",
      "@tailwindcss/typography": "^0.5.19",
      "zod": "^3.25.76"
    }
  };

  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

  // astro.config.mjs
  const astroConfig = `// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [tailwind(), mdx()],
});`;

  fs.writeFileSync('astro.config.mjs', astroConfig);

  // Configuración del sitio
  const siteConfig = `// config/site.config.ts
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  navigation: {
    main: NavItem[];
  };
  theme: {
    default: 'light' | 'dark' | 'system';
    colors: {
      primary: string;
      secondary: string;
    };
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    author: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export const siteConfig: SiteConfig = {
  name: "${name}",
  description: "Un sitio web creado con Frameword Astro",
  url: "https://${name}.com",

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
    title: "${name}",
    description: "Un sitio web moderno construido con Astro",
    keywords: ["astro", "web", "desarrollo"],
    author: "Tu Nombre"
  }
};

export function getSiteConfig(): SiteConfig {
  return siteConfig;
}`;

  fs.writeFileSync('config/site.config.ts', siteConfig);

  // Layout básico
  const layout = `---
// src/layouts/Layout.astro
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import SEO from '../components/SEO.astro';
import '../styles/global.css';

interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<!doctype html>
<html lang="es">
  <head>
    <SEO title={title} description={description} />
    <meta name="generator" content={Astro.generator} />
  </head>
  <body class="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans flex flex-col min-h-screen">
    <Header />
    <main class="container mx-auto px-4 py-8 flex-grow">
      <slot />
    </main>
    <Footer />
  </body>
</html>`;

  fs.writeFileSync('src/layouts/Layout.astro', layout);

  // Header básico
  const header = `---
// src/components/Header.astro
import { getSiteConfig } from '../../config';

const siteConfig = getSiteConfig();
---

<header class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
  <div class="container mx-auto px-4">
    <nav class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <a href="/" class="text-xl font-bold text-gray-900 dark:text-white">{siteConfig.name}</a>
      </div>

      <div class="hidden md:flex items-center space-x-4">
        {siteConfig.navigation.main.map((item) => (
          <a
            href={item.href}
            class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  </div>
</header>`;

  fs.writeFileSync('src/components/Header.astro', header);

  // Footer básico
  const footer = `---
// src/components/Footer.astro
import { getSiteConfig } from '../../config';

const siteConfig = getSiteConfig();
---

<footer class="bg-gray-100 dark:bg-gray-800 mt-auto">
  <div class="container mx-auto px-4 py-8">
    <div class="text-center text-gray-600 dark:text-gray-400">
      <p>&copy; 2025 {siteConfig.name}. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>`;

  fs.writeFileSync('src/components/Footer.astro', footer);

  // SEO básico
  const seo = `---
// src/components/SEO.astro
interface Props {
  title?: string;
  description?: string;
}

const { title = "${name}", description = "Un sitio web moderno" } = Astro.props;

const fullTitle = title === "${name}" ? title : \`\${title} | ${name}\`;
---

<meta charset="utf-8" />
<meta name="viewport" content="width=device-width" />
<title>{fullTitle}</title>
{description && <meta name="description" content={description} />}

<meta property="og:title" content={fullTitle} />
<meta property="og:description" content={description} />
<meta property="og:type" content="website" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={fullTitle} />
<meta name="twitter:description" content={description} />`;

  fs.writeFileSync('src/components/SEO.astro', seo);

  // Página de inicio
  const indexPage = `---
// src/pages/index.astro
import Layout from '../layouts/Layout.astro';
import { getSiteConfig } from '../../config';

const siteConfig = getSiteConfig();
---

<Layout
  title={\`Inicio | \${siteConfig.name}\`}
  description={siteConfig.description}
>
  <section class="text-center">
    <h1 class="text-5xl font-bold mb-4">¡Bienvenido a ${name}!</h1>
    <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
      {siteConfig.description}
    </p>
    <a href="/blog" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
      Ver Blog
    </a>
  </section>
</Layout>`;

  fs.writeFileSync('src/pages/index.astro', indexPage);

  // Página de blog
  const blogPage = `---
// src/pages/blog/index.astro
import Layout from '../../layouts/Layout.astro';

const posts = await Astro.glob('../content/blog/*.md');
---

<Layout
  title="Blog"
  description="Artículos y noticias del blog"
>
  <h1 class="text-4xl font-bold mb-8">Blog</h1>

  {posts.length === 0 ? (
    <div class="text-center">
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        No se encontraron posts.
      </p>
      <p class="text-sm text-gray-500">
        Crea tu primer post en <code>src/content/blog/</code>
      </p>
    </div>
  ) : (
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <article class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-2">
              <a href={\`/blog/\${post.slug}/\`} class="text-gray-900 dark:text-white hover:text-blue-600">
                {post.data.title}
              </a>
            </h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              {post.data.description}
            </p>
            <div class="text-sm text-gray-500">
              {post.data.author} • {new Date(post.data.date).toLocaleDateString()}
            </div>
          </div>
        </article>
      ))}
    </div>
  )}
</Layout>`;

  fs.writeFileSync('src/pages/blog/index.astro', blogPage);

  // Estilos globales
  const globalCss = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

:root {
  --color-primary: #3b82f6;
  --color-secondary: #6b7280;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

html {
  font-family: 'Inter', system-ui, sans-serif;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}`;

  fs.writeFileSync('src/styles/global.css', globalCss);

  // Tailwind config
  const tailwindConfig = `/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}`;

  fs.writeFileSync('tailwind.config.mjs', tailwindConfig);

  // Post de ejemplo
  const examplePost = `---
title: "Bienvenido a ${name}"
description: "Este es tu primer post en el blog"
date: "2025-01-01"
author: "Tu Nombre"
---

# ¡Bienvenido a ${name}!

Este es tu primer post en el blog. ¡Felicitaciones por crear tu sitio web con Frameword Astro!

## ¿Qué puedes hacer ahora?

- Edita este post en \`src/content/blog/\`
- Crea nuevos posts con el mismo formato
- Personaliza la configuración en \`config/site.config.ts\`
- Modifica los estilos en \`src/styles/global.css\`

## Próximos pasos

1. **Configura tu sitio**: Edita \`config/site.config.ts\` con tu información
2. **Personaliza el diseño**: Modifica los colores y estilos
3. **Agrega contenido**: Crea más posts y páginas
4. **Despliega**: Sube tu sitio a producción

¡Disfruta creando con Frameword Astro! 🚀`;

  fs.writeFileSync('src/content/blog/bienvenido.md', examplePost);

  console.log('');
  console.log('✅ Proyecto creado exitosamente!');
  console.log('');
  console.log('🚀 Para empezar:');
  console.log(`   cd ${name}`);
  console.log('   npm run dev');
  console.log('');
  console.log('📖 Documentación: https://github.com/frameword/frameword-astro');
  console.log('');
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('🛠️ Frameword CLI - Crea sitios web con Astro');
    console.log('');
    console.log('Uso:');
    console.log('  npx create-frameword-app <nombre-del-proyecto>');
    console.log('');
    console.log('Ejemplo:');
    console.log('  npx create-frameword-app mi-sitio-web');
    console.log('');
    return;
  }

  const projectName = args[0];

  if (!projectName) {
    console.error('❌ Debes especificar un nombre para el proyecto');
    process.exit(1);
  }

  try {
    createProject(projectName);
  } catch (error) {
    console.error('❌ Error al crear el proyecto:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

main();
