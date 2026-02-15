import { type Metadata } from "next"

export function constructMetadata({
    title = "Numancia Digital | Soluciones Digitales en Soria",
    description = "Digitalizamos el corazón de Soria. Tecnología punta a precios Km 0 para el negocio local.",
    image = "/brand/logo_redes_sociales_800x800.png",
    icons = "/icon.png",
    noIndex = false
}: {
    title?: string
    description?: string
    image?: string
    icons?: string
    noIndex?: boolean
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@numancia_digital"
        },
        icons,
        metadataBase: new URL('https://numancia.digital'),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false
            }
        })
    }
}
