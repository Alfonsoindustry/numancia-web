import { constructMetadata } from "@/lib/utils";
import OfficeServiceClient from "@/components/servicios/OfficeClient";

export const metadata = constructMetadata({
    title: "Ofimática y Automatización Soria | Gestión Eficiente",
    description: "Ahorra tiempo y costes en tu negocio. Automatización de facturas, digitalización de procesos y soporte técnico especializado en Soria.",
});

export default function OfficeService() {
    return <OfficeServiceClient />;
}
