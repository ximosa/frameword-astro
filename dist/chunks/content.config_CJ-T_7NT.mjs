const commonSchemas = {
  // Schema para blog posts
  blogPost: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    author: { type: "string", required: true },
    image: { type: "string", required: false },
    category: { type: "string", required: true },
    tags: { type: "array", required: false },
    published: { type: "boolean", required: false, default: true }
  },
  // Schema para portfolio/projects
  project: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    image: { type: "string", required: false },
    demoUrl: { type: "string", required: false },
    repoUrl: { type: "string", required: false },
    technologies: { type: "array", required: false },
    featured: { type: "boolean", required: false, default: false }
  },
  // Schema para productos/servicios
  service: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    price: { type: "number", required: false },
    currency: { type: "string", required: false, default: "EUR" },
    image: { type: "string", required: false },
    features: { type: "array", required: false },
    category: { type: "string", required: false },
    available: { type: "boolean", required: false, default: true }
  },
  // Schema para testimonios
  testimonial: {
    name: { type: "string", required: true },
    company: { type: "string", required: false },
    role: { type: "string", required: false },
    content: { type: "text", required: true },
    image: { type: "string", required: false },
    rating: { type: "number", required: false },
    featured: { type: "boolean", required: false, default: false }
  }
};
const defaultCollections = [
  {
    name: "blog",
    label: "Blog",
    description: "Artículos y posts del blog",
    route: "/blog",
    slug: "title",
    schema: commonSchemas.blogPost,
    pagination: {
      enabled: true,
      perPage: 9
    },
    sorting: {
      field: "date",
      order: "desc"
    },
    filters: {
      categories: true,
      tags: true,
      date: true
    }
  },
  {
    name: "projects",
    label: "Proyectos",
    description: "Portafolio de proyectos",
    route: "/proyectos",
    slug: "title",
    schema: commonSchemas.project,
    pagination: {
      enabled: true,
      perPage: 12
    },
    sorting: {
      field: "date",
      order: "desc"
    },
    filters: {
      categories: false,
      tags: true,
      date: true
    }
  },
  {
    name: "services",
    label: "Servicios",
    description: "Servicios ofrecidos",
    route: "/servicios",
    slug: "title",
    schema: commonSchemas.service,
    pagination: {
      enabled: false,
      perPage: 0
    }
  },
  {
    name: "testimonials",
    label: "Testimonios",
    description: "Opiniones de clientes",
    route: "/testimonios",
    schema: commonSchemas.testimonial,
    pagination: {
      enabled: false,
      perPage: 0
    }
  }
];
function getActiveCollections() {
  return defaultCollections;
}
const getCollectionsConfig = getActiveCollections;

export { getCollectionsConfig as g };
