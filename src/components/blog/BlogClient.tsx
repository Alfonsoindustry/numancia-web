"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog-posts";

const categoryColors: Record<string, string> = {
    "Diseño Web": "text-blue-400 bg-blue-400/10 border-blue-400/20",
    "SEO Local": "text-green-400 bg-green-400/10 border-green-400/20",
    "Redes Sociales": "text-pink-400 bg-pink-400/10 border-pink-400/20",
    "Automatización": "text-purple-400 bg-purple-400/10 border-purple-400/20",
};

export default function BlogClient() {
    const featured = blogPosts[0];
    const rest = blogPosts.slice(1);

    return (
        <div className="min-h-screen bg-[#0B1120] text-white selection:bg-neon-orange/30 selection:text-neon-orange">
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-outfit text-5xl md:text-7xl font-bold mb-6"
                        >
                            Blog de <span className="text-neon-orange neon-glow">Numancia Digital</span>
                        </motion.h1>
                        <p className="text-text-slate text-lg max-w-2xl mx-auto">
                            Guías, consejos y noticias sobre digitalización para negocios en Soria. Sin tecnicismos, con resultados reales.
                        </p>
                    </div>

                    {/* Artículo destacado */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-16"
                    >
                        <Link href={`/blog/${featured.slug}`} className="group block">
                            <div className="glass rounded-[3rem] border border-white/5 group-hover:border-neon-orange/20 transition-all p-10 md:p-14 relative overflow-hidden">
                                <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon-orange/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                                    <div>
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${categoryColors[featured.category] || "text-neon-orange bg-neon-orange/10 border-neon-orange/20"}`}>
                                                {featured.category}
                                            </span>
                                            <span className="text-text-slate text-xs flex items-center gap-1">
                                                <Clock size={12} /> {featured.readTime} de lectura
                                            </span>
                                            <span className="text-text-slate text-xs">· {featured.date}</span>
                                        </div>
                                        <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6 group-hover:text-neon-orange transition-colors leading-tight">
                                            {featured.title}
                                        </h2>
                                        <p className="text-text-slate text-lg leading-relaxed mb-8">
                                            {featured.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-neon-orange font-bold group-hover:gap-4 transition-all">
                                            Leer artículo <ArrowRight size={18} />
                                        </div>
                                    </div>
                                    {/* Visual decorativo */}
                                    <div className="hidden lg:flex items-center justify-center">
                                        <div className="relative w-full aspect-square max-w-xs">
                                            <div className="absolute inset-0 bg-neon-orange/10 rounded-3xl blur-[40px]" />
                                            <div className="relative glass rounded-3xl border border-white/10 p-8 h-full flex flex-col justify-center gap-4">
                                                <div className="font-outfit text-5xl font-bold text-neon-orange/20">01</div>
                                                <div className="w-3/4 h-3 rounded-full bg-neon-orange/30" />
                                                <div className="w-full h-2 rounded-full bg-white/10" />
                                                <div className="w-4/5 h-2 rounded-full bg-white/8" />
                                                <div className="w-2/3 h-2 rounded-full bg-white/6" />
                                                <div className="mt-4 w-28 h-10 rounded-xl bg-neon-orange/20 border border-neon-orange/30 flex items-center justify-center">
                                                    <span className="text-neon-orange text-xs font-bold">{featured.category}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Grid de artículos */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {rest.map((post, i) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link href={`/blog/${post.slug}`} className="group block h-full">
                                    <div className="glass h-full rounded-3xl border border-white/5 group-hover:border-neon-orange/20 transition-all p-8 flex flex-col relative overflow-hidden">
                                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon-orange/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${categoryColors[post.category] || "text-neon-orange bg-neon-orange/10 border-neon-orange/20"}`}>
                                                {post.category}
                                            </span>
                                            <span className="text-text-slate text-xs flex items-center gap-1">
                                                <Clock size={12} /> {post.readTime}
                                            </span>
                                        </div>
                                        <h3 className="font-outfit text-xl font-bold mb-4 group-hover:text-neon-orange transition-colors leading-tight flex-grow">
                                            {post.title}
                                        </h3>
                                        <p className="text-text-slate text-sm leading-relaxed mb-6 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between mt-auto">
                                            <span className="text-text-slate text-xs">{post.date}</span>
                                            <div className="flex items-center gap-1 text-neon-orange text-sm font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                                                Leer <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA newsletter / auditoría */}
                    <div className="mt-24 text-center glass p-12 rounded-[3rem] border border-neon-orange/20 bg-gradient-to-br from-neon-orange/5 to-transparent">
                        <h3 className="font-outfit text-3xl font-bold mb-4">¿Tu negocio en Soria necesita acción, no más artículos?</h3>
                        <p className="text-text-slate text-lg mb-8 max-w-xl mx-auto">
                            Analizamos tu presencia digital de forma gratuita y te damos un plan concreto para mejorarla.
                        </p>
                        <Link href="/contacto" className="inline-flex items-center gap-2 bg-neon-orange text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-secondary-orange transition-all neon-border">
                            Solicitar Auditoría Gratuita <ArrowRight size={22} />
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
