// config/site.config.ts
export interface SiteConfig {
  // Información básica del sitio
  name: string;
  description: string;
  url: string;
  ogImage?: string;

  // Configuración de navegación
  navigation: {
    main: NavItem[];
    footer?: NavItem[];
  };

  // Configuración de temas
  theme: {
    default: 'light' | 'dark' | 'system';
    colors: {
      primary: string;
      secondary: string;
      accent?: string;
    };
  };

  // Configuración de contenido
  content: {
    collections: ContentCollection[];
    pagination: {
      postsPerPage: number;
    };
  };

  // Configuración de SEO
  seo: {
    title: string;
    description: string;
    keywords: string[];
    author: string;
    twitter?: string;
    linkedin?: string;
  };

  // Configuración social
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export interface ContentCollection {
  name: string;
  label: string;
  schema: Record<string, any>;
  route: string;
  template?: string;
}

// Configuración por defecto del sitio
export const siteConfig: SiteConfig = {
  name: "Mi Sitio Webgae",
  description: "Un sitio web moderno construido con Astro",
  url: "https://misitio.com",

  navigation: {
    main: [
      { label: "Inicio", href: "/" },
      { label: "Servicios", href: "/servicios" },
      { label: "Blog", href: "/blog" },
      { label: "Contacto", href: "/contacto" }
    ]
  },

  theme: {
    default: "system",
    colors: {
      primary: "#3B82F6", // blue-500
      secondary: "#6B7280", // gray-500
    }
  },

  content: {
    collections: [
      {
        name: "blog",
        label: "Blog",
        route: "/blog",
        schema: {
          title: { type: "string", required: true },
          description: { type: "string", required: true },
          date: { type: "date", required: true },
          author: { type: "string", required: true },
          image: { type: "string", optional: true },
          category: { type: "string", required: true },
        }
      }
    ],
    pagination: {
      postsPerPage: 9
    }
  },

  seo: {
    title: "Mi Sitio Web",
    description: "Un sitio web moderno construido con Astro",
    keywords: ["astro", "web", "desarrollo"],
    author: "Tu Nombre",
  },

  social: {
    email: "contacto@misitio.com"
  }
};

// Función helper para obtener configuración
export function getSiteConfig(): SiteConfig {
  return siteConfig;
}

// Función para validar configuración
export function validateConfig(config: SiteConfig): boolean {
  // Validaciones básicas
  if (!config.name || !config.description || !config.url) {
    throw new Error("Configuración básica del sitio incompleta");
  }

  if (!config.navigation.main.length) {
    throw new Error("Debe definir al menos un elemento de navegación principal");
  }

  return true;
}
