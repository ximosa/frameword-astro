// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', // 'content' para archivos .md, .mdx; 'data' para .json, .yaml
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    image: z.string().optional(),
    category: z.string(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
