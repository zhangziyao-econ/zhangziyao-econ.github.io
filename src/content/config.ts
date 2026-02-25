import { z, defineCollection } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    lang: z.enum(["en", "zh"]),
    updatedAt: z.string().optional()
  })
});

const publications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    journal: z.string(),
    issue: z.string(),
    year: z.number().int(),
    abstract: z.string().optional(),
    lang: z.enum(["en", "zh"]),
    links: z
      .object({
        pdf: z.string().optional(),
        doi: z.string().optional(),
        code: z.string().optional(),
        cnki: z.string().optional()
      })
      .default({}),
    featured: z.boolean().optional()
  })
});

const writing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    lang: z.enum(["en", "zh"]),
    summary: z.string().optional(),
    type: z.enum(["note", "essay", "column"]),
    links: z
      .object({
        code: z.string().optional(),
        pdf: z.string().optional()
      })
      .default({}),
    order: z.number().int().optional()
  })
});

const workingPapers = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number().int(),
    status: z.string(),
    abstract: z.string().optional(),
    lang: z.enum(["en", "zh"]),
    links: z
      .object({
        pdf: z.string().optional(),
        doi: z.string().optional(),
        code: z.string().optional()
      })
      .default({}),
    order: z.number().int().optional()
  })
});

const research = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    citation: z.string(),
    lang: z.enum(["en", "zh"]),
    image: z.string(),
    imageAlt: z.string().optional(),
    order: z.number().int().optional()
  })
});

export const collections = {
  pages,
  publications,
  writing,
  workingPapers,
  research
};
