import { constructMetadata } from "@/lib/utils";
import BlogClient from "@/components/blog/BlogClient";

export const metadata = constructMetadata({
    title: "Blog | Digitalización y Marketing para negocios en Soria",
    description: "Guías, consejos y noticias sobre diseño web, SEO local, redes sociales y automatización para negocios en Soria. Escrito por Numancia Digital.",
});

export default function BlogPage() {
    return <BlogClient />;
}
