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
    'src',
    'src/components',
    'src/layouts',
    'src/pages',
    'src/pages/blog',
    'src/content',
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
const today = new Date();
---

<footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="mb-4 md:mb-0">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          &copy; {today.getFullYear()} {siteConfig.name}. Todos los derechos reservados.
        </p>
      </div>
      <div class="flex space-x-6">
        <a
          href="/admin/nuevo-post"
          class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          title="Panel de Administración"
        >
          <span class="sr-only">Admin</span>
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            ></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </a>
        <a
          href="#"
          class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <span class="sr-only">Twitter</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
          </svg>
        </a>
        <a
          href="#"
          class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <span class="sr-only">GitHub</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
          </svg>
        </a>
      </div>
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

  // Componente SocialShare
  const socialShare = `---
// src/components/SocialShare.astro
interface Props {
  url: string;
  title: string;
  description?: string;
}

const { url, title, description = title } = Astro.props;

// Codificar los parámetros para URLs
const encodedUrl = encodeURIComponent(url);
const encodedTitle = encodeURIComponent(title);
const encodedDescription = encodeURIComponent(description);

// URLs de redes sociales
const twitterUrl = \`https://twitter.com/intent/tweet?url=\${encodedUrl}&text=\${encodedTitle}\`;
const facebookUrl = \`https://www.facebook.com/sharer/sharer.php?u=\${encodedUrl}\`;
const linkedinUrl = \`https://www.linkedin.com/sharing/share-offsite/?url=\${encodedUrl}\`;
const whatsappUrl = \`https://wa.me/?text=\${encodedTitle}%20\${encodedUrl}\`;
---

<div class="social-share">
  <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Compartir</h4>
  <div class="flex space-x-2">
    <!-- Twitter -->
    <a
      href={twitterUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center justify-center w-10 h-10 bg-blue-400 hover:bg-blue-500 text-white rounded-full transition-colors"
      aria-label="Compartir en Twitter"
    >
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    </a>

    <!-- Facebook -->
    <a
      href={facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
      aria-label="Compartir en Facebook"
    >
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    </a>

    <!-- WhatsApp -->
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors"
      aria-label="Compartir en WhatsApp"
    >
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
      </svg>
    </a>
  </div>
</div>

<style>
  .social-share {
    @apply border-t border-gray-200 dark:border-gray-700 pt-6 mt-8;
  }
</style>`;

  fs.writeFileSync('src/components/SocialShare.astro', socialShare);

  // Componente Newsletter
  const newsletter = `---
// src/components/Newsletter.astro
interface Props {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
}

const {
  title = "Suscríbete a nuestro newsletter",
  description = "Recibe las últimas actualizaciones y artículos directamente en tu email.",
  placeholder = "Tu email aquí...",
  buttonText = "Suscribirme"
} = Astro.props;
---

<section class="newsletter bg-gray-50 dark:bg-gray-800 py-12">
  <div class="container mx-auto px-4">
    <div class="max-w-2xl mx-auto text-center">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <p class="text-gray-600 dark:text-gray-300 mb-8">
        {description}
      </p>

      <form
        id="newsletter-form"
        class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
      >
        <input
          type="email"
          name="email"
          placeholder={placeholder}
          required
          class="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {buttonText}
        </button>
      </form>

      <p class="text-sm text-gray-500 dark:text-gray-400 mt-4">
        Sin spam, solo contenido de calidad.
      </p>
    </div>
  </div>
</section>

<script>
  document.addEventListener('astro:page-load', () => {
    const form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const button = form.querySelector('button[type="submit"]');
      const originalText = button.textContent;
      button.textContent = 'Enviando...';
      button.disabled = true;

      try {
        // Simular suscripción exitosa
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Mostrar mensaje de éxito
        showMessage('¡Gracias por suscribirte!', 'success');
        form.reset();

      } catch (error) {
        showMessage('Error al suscribirse', 'error');
      } finally {
        button.textContent = originalText;
        button.disabled = false;
      }
    });

    function showMessage(message, type) {
      const existingMessage = document.querySelector('.newsletter-message');
      if (existingMessage) existingMessage.remove();

      const messageDiv = document.createElement('div');
      messageDiv.className = \`newsletter-message mt-4 p-3 rounded-lg text-sm \${
        type === 'success'
          ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200'
          : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-200'
      }\`;
      messageDiv.textContent = message;

      form.parentNode.insertBefore(messageDiv, form.nextSibling);

      setTimeout(() => {
        if (messageDiv.parentNode) messageDiv.remove();
      }, 5000);
    }
  });
</script>

<style>
  .newsletter {
    @apply border-t border-gray-200 dark:border-gray-700;
  }

  .newsletter-message {
    animation: slideIn 0.3s ease-out;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>`;

  fs.writeFileSync('src/components/Newsletter.astro', newsletter);

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
