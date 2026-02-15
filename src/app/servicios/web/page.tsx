import { constructMetadata } from "@/lib/utils";
import WebServiceClient from "@/components/servicios/WebClient";

export const metadata = constructMetadata({
    title: "Diseño Web Soria | Páginas Web de Alto Rendimiento",
    description: "Desarrollo de páginas web rápidas, seguras y optimizadas para el comercio de Soria. Usamos Next.js 15 para garantizar la mejor experiencia de usuario.",
});

export default function WebService() {
    return <WebServiceClient />;
}
