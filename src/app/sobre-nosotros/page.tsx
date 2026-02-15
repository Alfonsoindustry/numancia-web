import { constructMetadata } from "@/lib/utils";
import SobreNosotrosClient from "@/components/sobre-nosotros/SobreNosotrosClient";

export const metadata = constructMetadata({
    title: "Sobre Nosotros | Numancia Digital Soria",
    description: "Conoce a la agencia que está liderando la transformación digital en Soria. Tradición numantina unida a la tecnología más avanzada de Silicon Valley.",
});

export default function SobreNosotrosPage() {
    return <SobreNosotrosClient />;
}
