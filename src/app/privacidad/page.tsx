import { constructMetadata } from "@/lib/utils";
import PrivacidadClient from "@/components/legal/PrivacidadClient";

export const metadata = constructMetadata({
    title: "Política de Privacidad | Numancia Digital",
    description: "Consulta cómo tratamos tus datos personales en Numancia Digital. Seguridad y privacidad garantizada.",
    noIndex: true,
});

export default function Privacidad() {
    return <PrivacidadClient />;
}
