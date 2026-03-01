"use client";

import { motion } from "framer-motion";
import {
    Instagram, Heart, Share2, ArrowRight, TrendingUp,
    Users, MessageCircle, CheckCircle2, Video, Palette
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const features = [
    { title: "Contenido Local", desc: "Fotos y vídeos que celebran la esencia de Soria y la historia de tu negocio.", icon: Heart },
    { title: "Gestión de Mensajes", desc: "Ninguna consulta sin responder. Atención inmediata en todos tus perfiles.", icon: MessageCircle },
    { title: "Crecimiento Orgánico", desc: "Estrategias para que tus seguidores sean clientes potenciales reales.", icon: TrendingUp },
    { title: "Comunidad Fiel", desc: "Construimos audiencias que eligen tu negocio una y otra vez.", icon: Users },
    { title: "Reels & Stories", desc: "Vídeo corto nativo que dispara el alcance en Instagram y Facebook.", icon: Video },
    { title: "Diseño de Marca", desc: "Feed coherente, paleta de colores y estilo visual adaptado a tu identidad.", icon: Palette },
];

const process = [
    {
        step: "01",
        title: "Diagnóstico & Estrategia",
        desc: "Auditamos tus perfiles actuales, analizamos tu competencia en Soria y diseñamos un plan de contenidos mensual alineado con tus objetivos de negocio.",
        icon: Share2,
    },
    {
        step: "02",
        title: "Creación & Publicación",
        desc: "Producimos 12-16 publicaciones mensuales: fotos, textos, hashtags locales y Stories. Todo diseñado para conectar con el público soriano.",
        icon: Instagram,
    },
    {
        step: "03",
        title: "Gestión & Reportes",
        desc: "Respondemos comentarios y mensajes, optimizamos el calendario editorial y te enviamos un informe mensual con métricas reales de crecimiento.",
        icon: TrendingUp,
    },
];

const incluidos = [
    "12-16 publicaciones mensuales en Instagram y Facebook",
    "Diseño gráfico profesional adaptado a tu marca",
    "Estrategia de hashtags y menciones locales",
    "Gestión de comentarios y mensajes directos",
    "Informe mensual de métricas y crecimiento",
    "Stories y Reels con contenido de tu negocio",
];

export default function SocialServiceClient() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-neon-orange/30 selection:text-neon-orange">
            <Navbar />

            {/* ── HERO con imagen real ── */}
            <section className="relative min-h-[92vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1400&q=85&auto=format&fit=crop"
                        alt="Gestión de redes sociales profesional"
                        fill
                        className="object-cover object-center opacity-20"
                        priority
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
                </div>

                <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-neon-orange/8 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-orange/30 text-neon-orange text-sm font-bold mb-8"
                        >
                            <Instagram size={15} />
                            REDES SOCIALES
                        </motion.div>

                        <h1 className="font-outfit text-5xl md:text-7xl font-bold mb-8 leading-[1.05]">
                            Redes que{" "}
                            <span className="block text-neon-orange neon-glow">generan clientes</span>
                        </h1>

                        <p className="text-text-slate text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                            En Soria, el boca a boca es digital. Gestionamos tus perfiles de Instagram y Facebook para que tu negocio sea el que más «ruido» haga en la provincia. Contenido real para gente real.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link
                                href="/contacto"
                                className="inline-flex items-center gap-2 bg-neon-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-orange transition-all neon-border"
                            >
                                Comenzar plan social <ArrowRight size={20} />
                            </Link>
                            <Link
                                href="/precios"
                                className="inline-flex items-center gap-2 glass text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all border border-white/10"
                            >
                                Ver planes
                            </Link>
                        </div>

                        {/* Stats rápidos */}
                        <div className="flex flex-wrap gap-8">
                            {[
                                { value: "+127", label: "Seguidores nuevos/mes" },
                                { value: "x3", label: "Interacciones de media" },
                                { value: "16", label: "Publicaciones al mes" },
                            ].map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + i * 0.15 }}
                                >
                                    <div className="font-outfit text-3xl font-bold text-neon-orange">{s.value}</div>
                                    <div className="text-text-slate text-sm">{s.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Panel visual derecha */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute inset-0 bg-neon-orange/10 rounded-3xl blur-[60px]" />
                        <div className="relative glass rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=85&auto=format&fit=crop"
                                alt="Redes sociales Soria"
                                width={900}
                                height={560}
                                className="w-full h-full object-cover opacity-60 rounded-3xl"
                                unoptimized
                            />
                            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4 border border-white/10 flex items-center gap-4">
                                <div className="w-10 h-10 bg-neon-orange/20 rounded-xl flex items-center justify-center shrink-0">
                                    <Heart className="text-neon-orange" size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold">Alcance mensual</div>
                                    <div className="text-neon-orange font-outfit font-bold text-lg">+2.400 personas</div>
                                </div>
                                <div className="ml-auto text-green-400 font-bold text-sm">▲ 34%</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <main className="pb-20 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* ── PROCESO ── */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mb-32"
                    >
                        <div className="text-center mb-16">
                            <span className="text-neon-orange text-sm font-bold tracking-widest uppercase">Metodología</span>
                            <h2 className="font-outfit text-4xl md:text-5xl font-bold mt-3">
                                Cómo gestionamos tus <span className="text-neon-orange">redes</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {process.map((p, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="relative group"
                                >
                                    {i < process.length - 1 && (
                                        <div className="hidden md:block absolute top-12 left-full w-full h-[1px] bg-gradient-to-r from-neon-orange/40 to-transparent z-0" />
                                    )}
                                    <div className="glass p-8 rounded-2xl border border-white/5 hover:border-neon-orange/30 transition-all relative z-10 h-full">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-14 h-14 bg-neon-orange/10 rounded-xl flex items-center justify-center group-hover:bg-neon-orange/20 transition-all border border-neon-orange/20">
                                                <p.icon className="text-neon-orange" size={26} />
                                            </div>
                                            <span className="font-outfit text-5xl font-bold text-neon-orange/15">{p.step}</span>
                                        </div>
                                        <h3 className="font-outfit text-xl font-bold mb-3">{p.title}</h3>
                                        <p className="text-text-slate text-sm leading-relaxed">{p.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* ── QUÉ INCLUYE ── */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mb-32 glass rounded-[3rem] border border-white/5 overflow-hidden relative"
                    >
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-orange/5 rounded-full blur-[80px]" />
                        </div>
                        <div className="relative z-10 grid lg:grid-cols-2 gap-0">
                            <div className="relative h-72 lg:h-auto">
                                <Image
                                    src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=700&q=80&auto=format&fit=crop"
                                    alt="Humanizamos tu marca"
                                    fill
                                    className="object-cover object-center opacity-40"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0A]/90" />
                            </div>
                            <div className="p-10 lg:p-14 flex flex-col justify-center">
                                <h2 className="font-outfit text-4xl font-bold mb-4">
                                    Humanizamos
                                    <span className="text-neon-orange"> tu marca</span>
                                </h2>
                                <p className="text-text-slate text-lg leading-relaxed mb-8">
                                    Las redes sociales no son un catálogo; son un canal de comunicación. Creamos contenido que resuena con la gente de Soria, resaltando tus valores, tu equipo y lo que te hace único. No buscamos «likes», construimos comunidad fiel.
                                </p>
                                <div className="space-y-3">
                                    {incluidos.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-white/80">
                                            <CheckCircle2 size={16} className="text-neon-orange shrink-0" />
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* ── FEATURES ── */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mb-32"
                    >
                        <div className="text-center mb-16">
                            <span className="text-neon-orange text-sm font-bold tracking-widest uppercase">Servicios</span>
                            <h2 className="font-outfit text-4xl md:text-5xl font-bold mt-3">
                                Todo lo que <span className="text-neon-orange">incluye</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="glass p-8 rounded-2xl border border-white/5 hover:border-neon-orange/25 transition-all group"
                                >
                                    <div className="w-12 h-12 bg-neon-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neon-orange/20 transition-all">
                                        <f.icon className="text-neon-orange" size={24} />
                                    </div>
                                    <h3 className="font-outfit text-xl font-bold mb-3">{f.title}</h3>
                                    <p className="text-text-slate text-sm leading-relaxed">{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* ── CTA ── */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center glass p-12 md:p-16 rounded-[3rem] border border-neon-orange/20 bg-gradient-to-br from-neon-orange/5 via-transparent to-transparent relative overflow-hidden"
                    >
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neon-orange/8 rounded-full blur-[80px]" />
                        </div>
                        <div className="relative z-10">
                            <span className="text-neon-orange text-sm font-bold tracking-widest uppercase block mb-4">Redes sin excusas</span>
                            <h3 className="font-outfit text-4xl md:text-5xl font-bold mb-6">
                                ¿Tus redes llevan meses<br />sin actividad?
                            </h3>
                            <p className="text-text-slate text-lg mb-10 max-w-xl mx-auto">
                                Las redes sin contenido no ayudan, perjudican. Hablemos sobre tu estrategia en Soria.
                            </p>
                            <Link
                                href="/contacto"
                                className="inline-flex items-center gap-2 bg-neon-orange text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-secondary-orange transition-all neon-border"
                            >
                                Reactivar mis redes <ArrowRight size={22} />
                            </Link>
                            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-text-slate">
                                {["Sin compromiso", "Contenido desde el mes 1", "Equipo local en Soria"].map((item) => (
                                    <span key={item} className="flex items-center gap-2">
                                        <CheckCircle2 size={14} className="text-neon-orange" /> {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                </div>
            </main>
            <Footer />
        </div>
    );
}
