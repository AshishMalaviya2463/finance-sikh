import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(10), description: z.string().min(30), pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(), authorName: z.string().min(1),
    relatedKeywords: z.array(z.string()).min(1),
    sources: z.array(z.object({ name: z.string(), url: z.string().url() })).min(1),
  }),
});
const pages = defineCollection({ type: 'content', schema: z.object({ title: z.string(), description: z.string() }) });
export const collections = { blog, pages };
