import { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.numanciadigital.es'
    const today = new Date().toISOString().split('T')[0]

    const staticRoutes = [
        '',
        '/servicios',
        '/servicios/web',
        '/servicios/seo',
        '/servicios/redes',
        '/servicios/ofimatica',
        '/sobre-nosotros',
        '/precios',
        '/blog',
        '/contacto',
        '/aviso-legal',
        '/privacidad',
        '/legal/cookies',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: today,
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : route === '/blog' ? 0.9 : 0.8,
    }))

    const blogRoutes = getAllSlugs().map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: today,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...staticRoutes, ...blogRoutes]
}
