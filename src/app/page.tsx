import { constructMetadata } from "@/lib/utils";
import HomeClient from "@/components/home/HomeClient";

export const metadata = constructMetadata({
  title: "Numancia Digital | Diseño Web y SEO en Soria",
  description: "Especialistas en digitalización para empresas en Soria. Páginas web rápidas, SEO local y gestión de redes sociales con enfoque Kilómetro Cero.",
});

export default function Home() {
  return <HomeClient />;
}
