"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock, Calendar, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogPost, blogPosts } from "@/lib/blog-posts";

// Escapa caracteres HTML peligrosos antes de procesar markdown
function escapeHtml(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Aplica formato inline (negritas, cursiva) a un fragmento de texto ya escapado
function applyInline(text: string): string {
    return text
        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-bold">$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

// Renderizado simple de Markdown a HTML (sin dependencias extra)
function renderMarkdown(content: string): string {
    const lines = escapeHtml(content).split('\n');
    const result: string[] = [];
    let inList = false;

    for (const raw of lines) {
        // Separador horizontal
        if (raw.trim() === '---') {
            if (inList) { result.push('</ul>'); inList = false; }
            result.push('<hr class="border-white/10 my-10" />');
            continue;
        }

        // Headings
        const h2 = raw.match(/^## (.+)$/);
        if (h2) {
            if (inList) { result.push('</ul>'); inList = false; }
            result.push(`<h2 class="font-outfit text-3xl font-bold mt-12 mb-6 text-white">${applyInline(h2[1])}</h2>`);
            continue;
        }
        const h3 = raw.match(/^### (.+)$/);
        if (h3) {
            if (inList) { result.push('</ul>'); inList = false; }
            result.push(`<h3 class="font-outfit text-2xl font-bold mt-8 mb-4 text-white">${applyInline(h3[1])}</h3>`);
            continue;
        }

        // Blockquote
        const bq = raw.match(/^> (.+)$/);
        if (bq) {
            if (inList) { result.push('</ul>'); inList = false; }
            result.push(`<blockquote class="border-l-4 border-neon-orange pl-6 py-2 my-8 italic text-xl text-white/80">${applyInline(bq[1])}</blockquote>`);
            continue;
        }

        // Lista no ordenada
        const li = raw.match(/^- (.+)$/);
        if (li) {
            if (!inList) { result.push('<ul class="my-6 space-y-1 text-white/80">'); inList = true; }
            result.push(`<li class="flex items-start gap-2 mb-2"><span class="text-neon-orange mt-1 shrink-0">▸</span><span>${applyInline(li[1])}</span></li>`);
            continue;
        }

        // Lista ordenada
        const ol = raw.match(/^\d+\. (.+)$/);
        if (ol) {
            if (!inList) { result.push('<ul class="my-6 space-y-1 text-white/80">'); inList = true; }
            result.push(`<li class="flex items-start gap-2 mb-2"><span class="text-neon-orange font-bold shrink-0">→</span><span>${applyInline(ol[1])}</span></li>`);
            continue;
        }

        // Párrafo normal
        if (inList) { result.push('</ul>'); inList = false; }
        const inline = applyInline(raw);
        if (inline.trim() !== '') {
            result.push(`<p class="text-white/75 leading-relaxed my-4">${inline}</p>`);
        } else {
            result.push('');
        }
    }

    if (inList) result.push('</ul>');
    return result.join('\n');
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
    const [readProgress, setReadProgress] = useState(0);

    useEffect(() => {
        const update = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setReadProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
        };
        window.addEventListener("scroll", update, { passive: true });
        return () => window.removeEventListener("scroll", update);
    }, []);

    const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
    const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
    const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
    const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);
    const otherPosts = relatedPosts.length > 0 ? relatedPosts : blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

    const categoryColors: Record<string, string> = {
        "Diseño Web": "text-blue-400 bg-blue-400/10 border-blue-400/20",
        "SEO Local": "text-green-400 bg-green-400/10 border-green-400/20",
        "Redes Sociales": "text-pink-400 bg-pink-400/10 border-pink-400/20",
        "Automatización": "text-purple-400 bg-purple-400/10 border-purple-400/20",
    };

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-neon-orange/30 selection:text-neon-orange">
            {/* Barra de progreso de lectura */}
            <div
                className="fixed top-0 left-0 z-[60] h-[3px] bg-neon-orange transition-[width] duration-75 ease-out"
                style={{ width: `${readProgress}%` }}
            />
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">

                    {/* Breadcrumb */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-text-slate text-sm mb-12">
                        <Link href="/blog" className="hover:text-neon-orange transition-colors flex items-center gap-1">
                            <ArrowLeft size={14} /> Blog
                        </Link>
                        <span>/</span>
                        <span className="text-white/40">{post.category}</span>
                    </motion.div>

                    {/* Header del artículo */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
                        <div className="flex flex-wrap items-center gap-3 mb-8">
                            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${categoryColors[post.category] || "text-neon-orange bg-neon-orange/10 border-neon-orange/20"}`}>
                                {post.category}
                            </span>
                            <span className="text-text-slate text-sm flex items-center gap-1.5">
                                <Clock size={14} /> {post.readTime} de lectura
                            </span>
                            <span className="text-text-slate text-sm flex items-center gap-1.5">
                                <Calendar size={14} /> {post.date}
                            </span>
                        </div>
                        <h1 className="font-outfit text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            {post.title}
                        </h1>
                        <p className="text-text-slate text-xl leading-relaxed">
                            {post.excerpt}
                        </p>
                    </motion.div>

                    {/* Foto hero del artículo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="relative aspect-video w-full overflow-hidden rounded-3xl mb-16"
                    >
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 896px"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>

                    {/* Separador */}
                    <div className="w-full h-[1px] bg-gradient-to-r from-neon-orange/50 via-neon-orange/20 to-transparent mb-16" />

                    {/* Contenido del artículo */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="prose prose-invert prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
                    />

                    {/* Separador */}
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                    {/* CTA inline */}
                    <div className="glass p-10 rounded-3xl border border-neon-orange/20 bg-gradient-to-br from-neon-orange/5 to-transparent text-center mb-20">
                        <h3 className="font-outfit text-2xl font-bold mb-4">¿Necesitas ayuda con esto para tu negocio en Soria?</h3>
                        <p className="text-text-slate mb-6">Hacemos una auditoría digital gratuita y te damos un plan de acción concreto.</p>
                        <Link href="/contacto" className="inline-flex items-center gap-2 bg-neon-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-orange transition-all neon-border">
                            Habla con nosotros <ArrowRight size={18} />
                        </Link>
                    </div>

                    {/* Navegación entre artículos */}
                    <div className="grid md:grid-cols-2 gap-6 mb-20">
                        {prevPost ? (
                            <Link href={`/blog/${prevPost.slug}`} className="group glass p-6 rounded-2xl border border-white/5 hover:border-neon-orange/20 transition-all">
                                <div className="text-text-slate text-sm mb-2 flex items-center gap-1">
                                    <ArrowLeft size={14} /> Anterior
                                </div>
                                <div className="font-bold group-hover:text-neon-orange transition-colors line-clamp-2">{prevPost.title}</div>
                            </Link>
                        ) : <div />}
                        {nextPost ? (
                            <Link href={`/blog/${nextPost.slug}`} className="group glass p-6 rounded-2xl border border-white/5 hover:border-neon-orange/20 transition-all text-right">
                                <div className="text-text-slate text-sm mb-2 flex items-center gap-1 justify-end">
                                    Siguiente <ArrowRight size={14} />
                                </div>
                                <div className="font-bold group-hover:text-neon-orange transition-colors line-clamp-2">{nextPost.title}</div>
                            </Link>
                        ) : <div />}
                    </div>

                    {/* Artículos relacionados */}
                    <div>
                        <h2 className="font-outfit text-2xl font-bold mb-8">También te puede interesar</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {otherPosts.map((related) => (
                                <Link key={related.slug} href={`/blog/${related.slug}`} className="group glass p-6 rounded-2xl border border-white/5 hover:border-neon-orange/20 transition-all">
                                    <div className="text-neon-orange text-xs font-bold mb-2">{related.category}</div>
                                    <h4 className="font-bold group-hover:text-neon-orange transition-colors leading-snug mb-2">{related.title}</h4>
                                    <div className="text-text-slate text-sm flex items-center gap-1">
                                        <Clock size={12} /> {related.readTime}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
