import { constructMetadata } from "@/lib/utils";
import ContactoClient from "@/components/contacto/ContactoClient";

export const metadata = constructMetadata({
    title: "Contacto | Numancia Digital en toda Soria",
    description: "¿Hablamos? Expertos en digitalización que se desplazan a tu negocio en Soria. Solicita tu auditoría gratuita hoy mismo.",
});

export default function ContactoPage() {
    return <ContactoClient />;
}
