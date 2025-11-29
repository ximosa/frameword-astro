// config/content.config.ts
import { z } from 'zod';

// Tipos base para esquemas de contenido
export interface ContentField {
  type: 'string' | 'text' | 'date' | 'number' | 'boolean' | 'array' | 'object';
  required?: boolean;
  default?: any;
  options?: string[]; // Para campos con opciones predefinidas
}

export interface ContentSchema {
  [key: string]: ContentField;
}

export interface ContentCollectionConfig {
  name: string;
  label: string;
  description?: string;
  route: string;
  slug?: string; // Campo para generar slugs automáticamente
  template?: string;
  schema: ContentSchema;
  pagination?: {
    enabled: boolean;
    perPage: number;
  };
  sorting?: {
    field: string;
    order: 'asc' | 'desc';
  };
  filters?: {
    categories?: boolean;
    tags?: boolean;
    date?: boolean;
  };
}

// Esquemas predefinidos comunes
export const commonSchemas = {
  // Schema básico para páginas estáticas
  page: {
    title: { type: 'string' as const, required: true },
    description: { type: 'string' as const, required: true },
    published: { type: 'boolean' as const, required: false, default: true },
  },

  // Schema para blog posts
  blogPost: {
    title: { type: 'string' as const, required: true },
    description: { type: 'string' as const, required: true },
    date: { type: 'date' as const, required: true },
    author: { type: 'string' as const, required: true },
    image: { type: 'string' as const, required: false },
    category: { type: 'string' as const, required: true },
    tags: { type: 'array' as const, required: false },
    published: { type: 'boolean' as const, required: false, default: true },
  },

  // Schema para portfolio/projects
  project: {
    title: { type: 'string' as const, required: true },
    description: { type: 'string' as const, required: true },
    date: { type: 'date' as const, required: true },
    image: { type: 'string' as const, required: false },
    demoUrl: { type: 'string' as const, required: false },
    repoUrl: { type: 'string' as const, required: false },
    technologies: { type: 'array' as const, required: false },
    featured: { type: 'boolean' as const, required: false, default: false },
  },

  // Schema para productos/servicios
  service: {
    title: { type: 'string' as const, required: true },
    description: { type: 'string' as const, required: true },
    price: { type: 'number' as const, required: false },
    currency: { type: 'string' as const, required: false, default: 'EUR' },
    image: { type: 'string' as const, required: false },
    features: { type: 'array' as const, required: false },
    category: { type: 'string' as const, required: false },
    available: { type: 'boolean' as const, required: false, default: true },
  },

  // Schema para testimonios
  testimonial: {
    name: { type: 'string' as const, required: true },
    company: { type: 'string' as const, required: false },
    role: { type: 'string' as const, required: false },
    content: { type: 'text' as const, required: true },
    image: { type: 'string' as const, required: false },
    rating: { type: 'number' as const, required: false },
    featured: { type: 'boolean' as const, required: false, default: false },
  },
};

// Configuraciones de colección por defecto
export const defaultCollections: ContentCollectionConfig[] = [
  {
    name: 'blog',
    label: 'Blog',
    description: 'Artículos y posts del blog',
    route: '/blog',
    slug: 'title',
    schema: commonSchemas.blogPost,
    pagination: {
      enabled: true,
      perPage: 9,
    },
    sorting: {
      field: 'date',
      order: 'desc',
    },
    filters: {
      categories: true,
      tags: true,
      date: true,
    },
  },
  {
    name: 'projects',
    label: 'Proyectos',
    description: 'Portafolio de proyectos',
    route: '/proyectos',
    slug: 'title',
    schema: commonSchemas.project,
    pagination: {
      enabled: true,
      perPage: 12,
    },
    sorting: {
      field: 'date',
      order: 'desc',
    },
    filters: {
      categories: false,
      tags: true,
      date: true,
    },
  },
  {
    name: 'services',
    label: 'Servicios',
    description: 'Servicios ofrecidos',
    route: '/servicios',
    slug: 'title',
    schema: commonSchemas.service,
    pagination: {
      enabled: false,
      perPage: 0,
    },
  },
  {
    name: 'testimonials',
    label: 'Testimonios',
    description: 'Opiniones de clientes',
    route: '/testimonios',
    schema: commonSchemas.testimonial,
    pagination: {
      enabled: false,
      perPage: 0,
    },
  },
];

// Función para convertir schema personalizado a Zod schema
export function createZodSchema(schema: ContentSchema) {
  const zodSchema: any = {};

  Object.entries(schema).forEach(([fieldName, fieldConfig]) => {
    let fieldSchema: any;

    switch (fieldConfig.type) {
      case 'string':
        fieldSchema = z.string();
        break;
      case 'text':
        fieldSchema = z.string();
        break;
      case 'date':
        fieldSchema = z.coerce.date();
        break;
      case 'number':
        fieldSchema = z.number();
        break;
      case 'boolean':
        fieldSchema = z.boolean();
        break;
      case 'array':
        fieldSchema = z.array(z.string());
        break;
      case 'object':
        fieldSchema = z.object({});
        break;
      default:
        fieldSchema = z.any();
    }

    if (!fieldConfig.required) {
      fieldSchema = fieldSchema.optional();
    }

    if (fieldConfig.default !== undefined) {
      fieldSchema = fieldSchema.default(fieldConfig.default);
    }

    zodSchema[fieldName] = fieldSchema;
  });

  return z.object(zodSchema);
}

// Función para obtener configuración de colección
export function getCollectionConfig(name: string): ContentCollectionConfig | undefined {
  return defaultCollections.find(collection => collection.name === name);
}

// Función para obtener todas las colecciones activas
export function getActiveCollections(): ContentCollectionConfig[] {
  return defaultCollections; // En el futuro podría filtrar por configuración
}

// Alias para compatibilidad con páginas dinámicas
export const getCollectionsConfig = getActiveCollections;

// Función helper para crear nueva colección
export function createCollection(
  name: string,
  config: Partial<ContentCollectionConfig>
): ContentCollectionConfig {
  return {
    name,
    label: config.label || name.charAt(0).toUpperCase() + name.slice(1),
    route: config.route || `/${name}`,
    schema: config.schema || commonSchemas.page,
    ...config,
  };
}
