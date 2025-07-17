import { defineCollection, z } from 'astro:content'

import { POSTS_CONFIG } from '~/config'
import type { HeroImageAspectRatio, HeroImageLayout, PostType } from '~/types'

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    recommend: z.boolean().default(false),
    author: z.string().default(POSTS_CONFIG.author),
    heroImage: z
      .string()
      .transform((val) => {
        if (!val) return undefined
        return val.startsWith('http') ? val : `/hero-images/${val}`
      })
      .optional(),
    // Open Graph
    ogImage: z
      .string()
      .transform((val) => {
        if (!val) return undefined
        return val.startsWith('http') ? val : `/og-images/${val}`
      })
      .optional(),
    heroImageLayout: z.custom<HeroImageLayout>().optional(),
    heroImageAspectRatio: z.custom<HeroImageAspectRatio>().default(POSTS_CONFIG.defaultHeroImageAspectRatio),
    tags: z.array(z.string()),
    postType: z.custom<PostType>().optional(),
  }),
})

export const collections = { posts }
