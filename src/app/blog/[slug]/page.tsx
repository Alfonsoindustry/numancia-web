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
    return constructMetadata({
        title: post.title,
        description: post.excerpt,
    });
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) notFound();
    return <BlogPostClient post={post} />;
}
