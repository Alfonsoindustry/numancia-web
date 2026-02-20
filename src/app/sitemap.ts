import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://numancia.digital'

    const routes = [
        '',
        '/servicios',
        '/servicios/web',
        '/servicios/seo',
        '/servicios/redes',
        '/servicios/ofimatica',
        '/sobre-nosotros',
        '/precios',
        '/contacto',
        '/aviso-legal',
        '/privacidad',
        '/legal/cookies',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return routes
}
