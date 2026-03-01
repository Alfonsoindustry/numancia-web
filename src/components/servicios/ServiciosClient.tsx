"use client";

import { motion } from "framer-motion";
import {
    Monitor,
    Search,
    Instagram,
    Zap,
    ArrowRight,
    CheckCircle2,
    TrendingUp,
    Users,
    Clock,
    ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const allServices = [
    {
        title: "Diseño Web de Alto Rendimiento",
        desc: "Creamos escaparates digitales que cargan en menos de un segundo. Usamos Next.js 15 para garantizar la máxima velocidad y seguridad para tu negocio en Soria.",
        icon: Monitor,
        href: "/servicios/web",
        features: ["Carga ultra-rápida", "Diseño Adaptable", "SEO Integrado"],
        photo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80&auto=format&fit=crop",
        photoAlt: "Diseño web moderno en pantalla de ordenador",
        tag: "Más popular",
    },
    {
        title: "SEO Local Estratégico",
        desc: "Posicionamos tu negocio en los primeros resultados de Google Maps. Si te buscan en Soria, aparecerás el primero.",
        icon: Search,
        href: "/servicios/seo",
        features: ["Google Business Profile", "Optimización de Keywords", "Informes Mensuales"],
        photo: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80&auto=format&fit=crop",
        photoAlt: "Analítica SEO y posicionamiento en buscadores",
        tag: null,
    },
    {
        title: "Gestión de Redes Sociales",
        desc: "Conectamos tu marca con los vecinos de la provincia. Creamos contenido real que genera comunidad y clientes fieles.",
        icon: Instagram,
        href: "/servicios/redes",
        features: ["Contenido Original", "Gestión de Comunidad", "Estrategia de Crecimiento"],
        photo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80&auto=format&fit=crop",
        photoAlt: "Gestión de redes sociales y contenido digital",
        tag: null,
    },
    {
        title: "Ofimática y Automatización",
        desc: "Ahorra horas de trabajo repetitivo. Automatizamos tus facturas y procesos administrativos para que te centres en vender.",
        icon: Zap,
        href: "/servicios/ofimatica",
        features: ["Facturación Automática", "Digitalización de Procesos", "Soporte Técnico"],
        photo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&auto=format&fit=crop",
        photoAlt: "Automatización de procesos y ofimática digital",
        tag: null,
    },
];

const stats = [
    {
        icon: TrendingUp,
        value: "+340%",
        label: "Visibilidad media en Google",
        desc: "Nuestros clientes aparecen donde antes eran invisibles.",
    },
    {
        icon: Users,
        value: "+50",
        label: "Negocios digitalizados",
        desc: "Pymes y autónomos de Soria que ya crecen online.",
    },
    {
        icon: Clock,
        value: "< 48h",
        label: "Tiempo de respuesta",
        desc: "Soporte local. Siempre cerca, siempre rápido.",
    },
    {
        icon: ShieldCheck,
        value: "100%",
        label: "Satisfacción garantizada",
        desc: "Si no estás contento en 30 días, te devolvemos el dinero.",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
};

export default function ServiciosClient() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-neon-orange/30 selection:text-neon-orange overflow-x-hidden">
            <Navbar />

            {/* ─── HERO ─── */}
            <section className="relative pt-32 pb-24 px-6 overflow-hidden">
                {/* Fondo foto Unsplash semitransparente */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85&auto=format&fit=crop"
                        alt="Equipo trabajando con ordenadores"
                        fill
                        className="object-cover opacity-10"
                        priority
                    />
                    {/* Degradado sobre la foto */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/70 to-[#0A0A0A]" />
                </div>

                {/* Orbe naranja izquierda */}
                <div className="orb-1 absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-neon-orange/10 blur-[100px] pointer-events-none z-0" />
                {/* Orbe derecha */}
                <div className="orb-2 absolute top-10 right-0 w-[320px] h-[320px] rounded-full bg-neon-orange/8 blur-[90px] pointer-events-none z-0" />

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-neon-orange/10 border border-neon-orange/30 rounded-full px-5 py-2 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-neon-orange animate-pulse" />
                        <span className="text-neon-orange text-sm font-semibold tracking-wider uppercase">
                            Agencia local · Soria
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-outfit text-5xl md:text-7xl font-bold mb-6 leading-tight"
                    >
                        Soluciones de{" "}
                        <span className="text-neon-orange neon-glow">Digitalización&nbsp;Km&nbsp;0</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-text-slate text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
                    >
                        En Numancia Digital combinamos la cercanía de Soria con la tecnología más avanzada
                        del mercado. Elige el motor que impulsará tu negocio.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="/contacto"
                            className="inline-flex items-center justify-center gap-2 bg-neon-orange text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-secondary-orange transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,138,0,0.35)] neon-border"
                        >
                            Asesoramiento gratuito <ArrowRight size={20} />
                        </Link>
                        <a
                            href="#servicios"
                            className="inline-flex items-center justify-center gap-2 glass border border-white/10 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:border-neon-orange/40 transition-all duration-200"
                        >
                            Ver servicios
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ─── SEPARADOR ─── */}
            <div className="relative h-px max-w-7xl mx-auto px-6">
                <div className="h-px bg-gradient-to-r from-transparent via-neon-orange/40 to-transparent" />
            </div>

            {/* ─── STATS "POR QUÉ ELEGIRNOS" ─── */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-14"
                    >
                        <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-3">
                            Por qué elegirnos
                        </h2>
                        <p className="text-text-slate max-w-xl mx-auto">
                            Números reales de negocios reales en Soria y provincia.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                variants={cardVariants}
                                className="glass rounded-3xl p-7 border border-white/5 hover:border-neon-orange/25 transition-all group text-center"
                            >
                                <div className="w-14 h-14 bg-neon-orange/10 rounded-2xl flex items-center justify-center border border-neon-orange/20 group-hover:bg-neon-orange/20 transition-all mx-auto mb-4">
                                    <stat.icon className="text-neon-orange" size={26} />
                                </div>
                                <div className="font-outfit text-4xl font-bold text-neon-orange mb-1">
                                    {stat.value}
                                </div>
                                <div className="font-semibold text-white mb-2">{stat.label}</div>
                                <p className="text-text-slate text-sm leading-relaxed">{stat.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── SEPARADOR ─── */}
            <div className="relative h-px max-w-7xl mx-auto px-6">
                <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
            </div>

            {/* ─── TARJETAS DE SERVICIO ─── */}
            <main id="servicios" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-14"
                    >
                        <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-3">
                            Nuestros servicios
                        </h2>
                        <p className="text-text-slate max-w-xl mx-auto">
                            Cada solución está pensada para el tejido empresarial de Soria: ágil, cercana y con resultados medibles.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid gap-8"
                    >
                        {allServices.map((service, i) => (
                            <motion.div
                                key={i}
                                variants={cardVariants}
                                className="glass rounded-[2.5rem] border border-white/5 hover:border-neon-orange/25 transition-all duration-300 group overflow-hidden"
                            >
                                <div className="flex flex-col lg:flex-row">
                                    {/* Foto del servicio */}
                                    <div className="relative w-full lg:w-72 xl:w-80 h-52 lg:h-auto shrink-0 overflow-hidden">
                                        <Image
                                            src={service.photo}
                                            alt={service.photoAlt}
                                            fill
                                            className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                                            sizes="(max-width: 1024px) 100vw, 320px"
                                        />
                                        {/* Overlay degradado lateral en desktop */}
                                        <div className="hidden lg:block absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-[rgba(10,10,10,0.85)]" />
                                        {/* Badge "Más popular" */}
                                        {service.tag && (
                                            <div className="absolute top-4 left-4 bg-neon-orange text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-[0_0_14px_rgba(255,138,0,0.5)]">
                                                {service.tag}
                                            </div>
                                        )}
                                    </div>

                                    {/* Contenido */}
                                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 p-8 md:p-10 flex-grow">
                                        {/* Icono */}
                                        <div className="w-16 h-16 bg-neon-orange/10 rounded-2xl flex items-center justify-center border border-neon-orange/20 group-hover:bg-neon-orange/20 transition-all shrink-0">
                                            <service.icon className="text-neon-orange" size={32} />
                                        </div>

                                        {/* Texto */}
                                        <div className="flex-grow">
                                            <h3 className="font-outfit text-2xl md:text-3xl font-bold mb-3">
                                                {service.title}
                                            </h3>
                                            <p className="text-text-slate text-base md:text-lg mb-5 leading-relaxed max-w-2xl">
                                                {service.desc}
                                            </p>
                                            <div className="flex flex-wrap gap-3">
                                                {service.features.map((f, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-white/60 bg-white/5 px-3 py-1.5 rounded-full border border-white/8"
                                                    >
                                                        <CheckCircle2 size={13} className="text-neon-orange shrink-0" />
                                                        {f}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <div className="shrink-0 w-full lg:w-auto">
                                            <Link
                                                href={service.href}
                                                className="flex items-center justify-center gap-2 bg-neon-orange text-white px-7 py-4 rounded-xl font-bold text-base hover:bg-secondary-orange transition-all duration-200 hover:scale-105 active:scale-95 neon-border shadow-[0_0_24px_rgba(255,138,0,0.3)] w-full lg:w-auto whitespace-nowrap"
                                            >
                                                Saber más <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </main>

            {/* ─── SEPARADOR ─── */}
            <div className="relative h-px max-w-7xl mx-auto px-6">
                <div className="h-px bg-gradient-to-r from-transparent via-neon-orange/30 to-transparent" />
            </div>

            {/* ─── CTA FINAL ─── */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="relative rounded-[3rem] overflow-hidden border border-neon-orange/20 text-center"
                    >
                        {/* Fondo con gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/12 via-neon-orange/5 to-transparent" />
                        {/* Orbe interior */}
                        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-neon-orange/15 blur-[80px] pointer-events-none" />

                        <div className="relative z-10 p-12 md:p-16">
                            <div className="inline-flex items-center gap-2 bg-neon-orange/10 border border-neon-orange/30 rounded-full px-4 py-1.5 mb-6">
                                <span className="w-2 h-2 rounded-full bg-neon-orange animate-pulse" />
                                <span className="text-neon-orange text-xs font-semibold tracking-wider uppercase">
                                    Sin compromiso · Sin coste
                                </span>
                            </div>

                            <h3 className="font-outfit text-3xl md:text-5xl font-bold mb-5 italic">
                                ¿No sabes por dónde empezar?
                            </h3>
                            <p className="text-text-slate text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                                Analizamos tu negocio sin coste y te proponemos la solución que mejor se adapte
                                a tus necesidades y presupuesto. Primera consulta siempre gratuita.
                            </p>

                            <Link
                                href="/contacto"
                                className="inline-flex items-center justify-center gap-3 bg-neon-orange text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-secondary-orange transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,138,0,0.45)] neon-border"
                            >
                                Solicitar Asesoramiento Gratuito <ArrowRight size={22} />
                            </Link>

                            {/* Micro-copy de confianza */}
                            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-text-slate">
                                <span className="flex items-center gap-1.5">
                                    <CheckCircle2 size={14} className="text-neon-orange" />
                                    Respuesta en menos de 24h
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <CheckCircle2 size={14} className="text-neon-orange" />
                                    Sin letra pequeña
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <CheckCircle2 size={14} className="text-neon-orange" />
                                    100% local, Soria
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
