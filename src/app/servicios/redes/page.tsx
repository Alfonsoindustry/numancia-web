import { constructMetadata } from "@/lib/utils";
import SocialServiceClient from "@/components/servicios/SocialClient";

export const metadata = constructMetadata({
    title: "Redes Sociales Soria | Gestión de Instagram y Facebook",
    description: "Conecta tu negocio con Soria a través de las redes sociales. Creamos contenido local, real y profesional para potenciar tu marca en la provincia.",
});

export default function SocialService() {
    return <SocialServiceClient />;
}
