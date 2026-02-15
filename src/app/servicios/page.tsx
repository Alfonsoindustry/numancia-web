import { constructMetadata } from "@/lib/utils";
import ServiciosClient from "@/components/servicios/ServiciosClient";

export const metadata = constructMetadata({
    title: "Servicios Digitales Soria | Diseño, SEO y Social Media",
    description: "Descubre nuestro catálogo de servicios Km 0 para Soria. Diseño web, posicionamiento SEO, gestión de redes y automatización de oficinas.",
});

export default function ServiciosPage() {
    return <ServiciosClient />;
}
