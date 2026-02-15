import { constructMetadata } from "@/lib/utils";
import AvisoLegalClient from "@/components/legal/AvisoLegalClient";

export const metadata = constructMetadata({
    title: "Aviso Legal | Numancia Digital",
    description: "Información legal y términos de uso de la web oficial de Numancia Digital.",
    noIndex: true,
});

export default function AvisoLegal() {
    return <AvisoLegalClient />;
}
