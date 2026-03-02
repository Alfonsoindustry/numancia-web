import type { Metadata } from "next";
import CasosClient from "@/components/casos/CasosClient";

export const metadata: Metadata = {
    title: "Casos de Éxito | Numancia Digital",
    description: "Proyectos reales de digitalización para negocios en Soria. Webs, SEO local y automatización con resultados medibles.",
};

export default function CasosPage() {
    return <CasosClient />;
}
