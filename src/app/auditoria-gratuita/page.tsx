import { constructMetadata } from "@/lib/utils";
import AuditoriaClient from "./AuditoriaClient";

export const metadata = constructMetadata({
    title: "Auditoría Digital Gratuita para tu Negocio en Soria | Numancia Digital",
    description: "Descubre en 3 días por qué tu negocio no aparece en Google. Análisis gratuito y sin compromiso para negocios de Soria. Solo 5 plazas al mes.",
    noIndex: false,
});

export default function AuditoriaGratuitaPage() {
    return <AuditoriaClient />;
}
