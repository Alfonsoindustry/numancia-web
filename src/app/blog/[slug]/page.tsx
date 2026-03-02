import { notFound } from "next/navigation";
import { getBlogPost, getAllSlugs } from "@/lib/blog-posts";
import BlogPostClient from "@/components/blog/BlogPostClient";
import { constructMetadata } from "@/lib/utils";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) return {};
    return {
        ...constructMetadata({ title: post.title, description: post.excerpt }),
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://www.numanciadigital.es/blog/${slug}`,
            siteName: "Numancia Digital",
            locale: "es_ES",
            type: "article",
            images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
        },
        twitter: {
            card: "summary_large_image" as const,
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) notFound();
    return <BlogPostClient post={post} />;
}
