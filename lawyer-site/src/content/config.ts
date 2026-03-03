import { defineCollection, z } from 'astro:content'

const hero = defineCollection({
    type: 'content',
    schema: z.object({
        title:         z.string(),
        badge:         z.string(),
        description:   z.string(),
        cta_primary:   z.string(),
        cta_secondary: z.string(),
    })
})

const about = defineCollection({
    type: 'content',
    schema: z.object({
        block1: z.string(),
        block2: z.string(),
        block3: z.string(),
        quote:  z.string(),
    })
})

const services = defineCollection({
    type: 'content',
    schema: z.object({
        items: z.array(z.object({
            title:       z.string(),
            description: z.string(),
            order:       z.number(),
        }))
    })
})

const reviews = defineCollection({
    type: 'content',
    schema: z.object({
        items: z.array(z.object({
            author: z.string(),
            text:   z.string(),
            order:  z.number(),
        }))
    })
})

const contact = defineCollection({
    type: 'content',
    schema: z.object({
        email:   z.string(),
        phone:   z.string(),
        address: z.string(),
        hours:   z.string(),
    })
})

const mascot = defineCollection({
    type: 'content',
    schema: z.object({
        message: z.string(),
    })
})

export const collections = { hero, about, services, reviews, contact, mascot }