import { constructMetadata } from "@/lib/utils";
import SeoServiceClient from "@/components/servicios/SeoClient";

export const metadata = constructMetadata({
    title: "SEO Local Soria | Posicionamiento en Google Maps",
    description: "Aparece el primero cuando tus clientes busquen en Soria. Especialistas en SEO Local, Google Business Profile y posicionamiento orgánico en la provincia.",
});

export default function SeoService() {
    return <SeoServiceClient />;
}
