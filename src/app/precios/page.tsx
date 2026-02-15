import { constructMetadata } from "@/lib/utils";
import PreciosClient from "@/components/precios/PreciosClient";

export const metadata = constructMetadata({
    title: "Precios y Planes | Digitalización en Soria",
    description: "Trasparencia total. Consulta nuestros planes de digitalización base y premium para negocios de Soria. Tecnología de alto nivel a precios locales.",
});

export default function PreciosPage() {
    return <PreciosClient />;
}
