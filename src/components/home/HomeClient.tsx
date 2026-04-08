"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe, Search, Instagram, Zap, Star, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
    {
        title: "Páginas Web",
        desc: "Tu escaparate abierto 24/7 con tecnología de alto rendimiento.",
        icon: Globe,
        href: "/servicios/web",
        svg: (
            <svg viewBox="0 0 80 60" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="78" height="58" rx="8" stroke="#FF8A00" strokeWidth="1.5" strokeOpacity="0.4" />
                <rect x="1" y="1" width="78" height="12" rx="8" fill="#FF8A00" fillOpacity="0.08" />
                <circle cx="10" cy="7" r="2" fill="#FF4D00" fillOpacity="0.7" />
                <circle cx="17" cy="7" r="2" fill="#FF8A00" fillOpacity="0.7" />
                <circle cx="24" cy="7" r="2" fill="#FF8A00" fillOpacity="0.4" />
                <rect x="34" y="4" width="30" height="6" rx="3" fill="white" fillOpacity="0.08" />
                <rect x="8" y="20" width="40" height="4" rx="2" fill="#FF8A00" fillOpacity="0.6" />
                <rect x="8" y="28" width="30" height="2" rx="1" fill="white" fillOpacity="0.2" />
                <rect x="8" y="33" width="25" height="2" rx="1" fill="white" fillOpacity="0.15" />
                <rect x="8" y="42" width="20" height="7" rx="3" fill="#FF8A00" fillOpacity="0.8" />
                <rect x="52" y="20" width="20" height="28" rx="4" fill="#FF8A00" fillOpacity="0.08" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.3" />
            </svg>
        )
    },
    {
        title: "SEO Local",
        desc: "Aparece el primero cuando Soria te busca en Google.",
        icon: Search,
        href: "/servicios/seo",
        svg: (
            <svg viewBox="0 0 80 60" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="28" r="18" stroke="#FF8A00" strokeWidth="1.5" strokeOpacity="0.4" />
                <circle cx="30" cy="28" r="10" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.2" fill="#FF8A00" fillOpacity="0.05" />
                <line x1="43" y1="41" x2="56" y2="54" stroke="#FF8A00" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.8" />
                <circle cx="30" cy="28" r="4" fill="#FF8A00" fillOpacity="0.9" />
                <rect x="55" y="8" width="18" height="4" rx="2" fill="#FF8A00" fillOpacity="0.5" />
                <rect x="55" y="16" width="14" height="3" rx="1.5" fill="white" fillOpacity="0.15" />
                <rect x="55" y="22" width="16" height="3" rx="1.5" fill="white" fillOpacity="0.1" />
                <rect x="55" y="28" width="12" height="3" rx="1.5" fill="white" fillOpacity="0.1" />
            </svg>
        )
    },
    {
        title: "Redes Sociales",
        desc: "Conectamos tu marca con el corazón de la provincia.",
        icon: Instagram,
        href: "/servicios/redes",
        svg: (
            <svg viewBox="0 0 80 60" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="30" r="10" stroke="#FF8A00" strokeWidth="1.5" strokeOpacity="0.8" fill="#FF8A00" fillOpacity="0.08" />
                <circle cx="12" cy="14" r="7" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.5" fill="#FF8A00" fillOpacity="0.05" />
                <circle cx="68" cy="14" r="7" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.5" fill="#FF8A00" fillOpacity="0.05" />
                <circle cx="12" cy="48" r="7" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.5" fill="#FF8A00" fillOpacity="0.05" />
                <circle cx="68" cy="48" r="7" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.5" fill="#FF8A00" fillOpacity="0.05" />
                <line x1="18" y1="19" x2="31" y2="23" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="62" y1="19" x2="49" y2="23" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="18" y1="43" x2="31" y2="37" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="62" y1="43" x2="49" y2="37" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="40" cy="30" r="4" fill="#FF8A00" />
            </svg>
        )
    },
    {
        title: "Ofimática",
        desc: "Automatiza tus facturas y gana tiempo libre.",
        icon: Zap,
        href: "/servicios/ofimatica",
        svg: (
            <svg viewBox="0 0 80 60" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="30" height="38" rx="4" stroke="#FF8A00" strokeWidth="1.5" strokeOpacity="0.4" fill="#FF8A00" fillOpacity="0.04" />
                <rect x="13" y="15" width="20" height="2" rx="1" fill="#FF8A00" fillOpacity="0.6" />
                <rect x="13" y="21" width="15" height="2" rx="1" fill="white" fillOpacity="0.2" />
                <rect x="13" y="27" width="18" height="2" rx="1" fill="white" fillOpacity="0.15" />
                <rect x="13" y="33" width="12" height="2" rx="1" fill="white" fillOpacity="0.1" />
                <path d="M50 20 L58 8 L66 20 L62 20 L62 52 L54 52 L54 20 Z" fill="#FF8A00" fillOpacity="0.7" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.5" />
                <path d="M50 20 L54 20 L54 52 L62 52 L62 20 L66 20" stroke="#FF8A00" strokeWidth="0.5" strokeOpacity="0.3" />
            </svg>
        )
    },
];

const metrics = [
    { value: "3x", label: "Más velocidad que WordPress" },
    { value: "+87%", label: "Mejora de visibilidad en Google" },
    { value: "48h", label: "De cero a web publicada" },
    { value: "0€", label: "Hasta que veas resultados" },
];

const steps = [
    {
        num: "01",
        title: "Auditoría Digital Gratuita",
        desc: "Analizamos tu presencia digital actual sin ningún coste. Te mostramos exactamente qué está fallando y cómo solucionarlo.",
        visual: (
            <svg viewBox="0 0 320 220" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="280" height="180" rx="12" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.2" fill="#FF8A00" fillOpacity="0.03" />
                <rect x="20" y="20" width="280" height="36" rx="12" fill="#FF8A00" fillOpacity="0.07" />
                <circle cx="38" cy="38" r="5" fill="#FF4D00" fillOpacity="0.6" />
                <circle cx="52" cy="38" r="5" fill="#FF8A00" fillOpacity="0.6" />
                <circle cx="66" cy="38" r="5" fill="#FF8A00" fillOpacity="0.3" />
                <rect x="40" y="72" width="80" height="8" rx="4" fill="#FF8A00" fillOpacity="0.6" />
                <rect x="40" y="88" width="60" height="4" rx="2" fill="white" fillOpacity="0.15" />
                <rect x="40" y="100" width="70" height="4" rx="2" fill="white" fillOpacity="0.1" />
                <rect x="170" y="68" width="110" height="60" rx="8" fill="#FF8A00" fillOpacity="0.06" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.2" />
                <rect x="180" y="82" width="90" height="8" rx="4" fill="#FF8A00" fillOpacity="0.3" />
                <rect x="180" y="96" width="70" height="4" rx="2" fill="white" fillOpacity="0.12" />
                <rect x="180" y="106" width="80" height="4" rx="2" fill="white" fillOpacity="0.08" />
                <rect x="40" y="130" width="240" height="2" rx="1" fill="white" fillOpacity="0.06" />
                <rect x="40" y="144" width="50" height="30" rx="6" fill="#FF8A00" fillOpacity="0.7" />
                <rect x="100" y="144" width="60" height="30" rx="6" fill="#FF8A00" fillOpacity="0.15" />
                <rect x="170" y="144" width="60" height="30" rx="6" fill="#FF8A00" fillOpacity="0.08" />
                <text x="65" y="162" textAnchor="middle" fill="white" fontSize="10" fontFamily="sans-serif" fontWeight="bold" opacity="0.9">Inicio</text>
                <text x="130" y="162" textAnchor="middle" fill="white" fontSize="10" fontFamily="sans-serif" opacity="0.5">Web</text>
                <text x="200" y="162" textAnchor="middle" fill="white" fontSize="10" fontFamily="sans-serif" opacity="0.3">SEO</text>
            </svg>
        )
    },
    {
        num: "02",
        title: "Diseñamos tu Solución",
        desc: "Creamos tu estrategia personalizada. Wireframes, diseño visual y plan de contenidos adaptado a tu negocio soriano.",
        visual: (
            <svg viewBox="0 0 320 220" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="10" width="185" height="130" rx="10" stroke="#FF8A00" strokeWidth="1.5" strokeOpacity="0.3" fill="#FF8A00" fillOpacity="0.03" />
                <rect x="30" y="24" width="165" height="16" rx="4" fill="#FF8A00" fillOpacity="0.12" />
                <rect x="30" y="50" width="75" height="50" rx="6" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.3" fill="#FF8A00" fillOpacity="0.05" />
                <rect x="115" y="50" width="80" height="22" rx="4" fill="white" fillOpacity="0.05" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                <rect x="115" y="78" width="80" height="22" rx="4" fill="white" fillOpacity="0.05" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                <rect x="30" y="110" width="165" height="18" rx="6" fill="#FF8A00" fillOpacity="0.5" />
                <rect x="220" y="40" width="90" height="140" rx="20" stroke="#FF8A00" strokeWidth="1.5" strokeOpacity="0.4" fill="#FF8A00" fillOpacity="0.04" />
                <rect x="230" y="56" width="70" height="10" rx="3" fill="#FF8A00" fillOpacity="0.4" />
                <rect x="230" y="72" width="55" height="5" rx="2.5" fill="white" fillOpacity="0.12" />
                <rect x="230" y="82" width="60" height="5" rx="2.5" fill="white" fillOpacity="0.08" />
                <rect x="230" y="96" width="70" height="30" rx="6" fill="#FF8A00" fillOpacity="0.08" stroke="#FF8A00" strokeWidth="0.5" strokeOpacity="0.3" />
                <rect x="230" y="135" width="70" height="20" rx="6" fill="#FF8A00" fillOpacity="0.6" />
                <circle cx="265" cy="175" r="4" fill="#FF8A00" fillOpacity="0.8" />
                <circle cx="257" cy="175" r="4" fill="white" fillOpacity="0.1" />
                <circle cx="273" cy="175" r="4" fill="white" fillOpacity="0.1" />
            </svg>
        )
    },
    {
        num: "03",
        title: "Lanzamos y Crecemos",
        desc: "Tu negocio online en 48 horas. Medimos resultados, optimizamos y escalamos. Tu éxito es nuestra métrica.",
        visual: (
            <svg viewBox="0 0 320 220" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="30,180 80,150 130,130 180,90 230,55 280,20" stroke="#FF8A00" strokeWidth="2.5" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="30,180 80,150 130,130 180,90 230,55 280,20" stroke="#FF8A00" strokeWidth="10" strokeOpacity="0.08" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="80" cy="150" r="4" fill="#FF8A00" fillOpacity="0.8" />
                <circle cx="130" cy="130" r="4" fill="#FF8A00" fillOpacity="0.8" />
                <circle cx="180" cy="90" r="4" fill="#FF8A00" fillOpacity="0.9" />
                <circle cx="230" cy="55" r="4" fill="#FF8A00" />
                <circle cx="280" cy="20" r="6" fill="#FF8A00" />
                <line x1="30" y1="185" x2="290" y2="185" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
                <line x1="30" y1="20" x2="30" y2="185" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
                <rect x="220" y="10" width="72" height="28" rx="6" fill="#FF8A00" fillOpacity="0.15" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.5" />
                <text x="256" y="28" textAnchor="middle" fill="#FF8A00" fontSize="11" fontFamily="sans-serif" fontWeight="bold">+87%</text>
                <text x="90" y="175" fill="white" fontSize="8" fontFamily="sans-serif" opacity="0.3">Mes 1</text>
                <text x="175" y="175" fill="white" fontSize="8" fontFamily="sans-serif" opacity="0.3">Mes 3</text>
                <text x="260" y="175" fill="white" fontSize="8" fontFamily="sans-serif" opacity="0.3">Mes 6</text>
            </svg>
        )
    }
];

const testimonials = [
    {
        initial: "O",
        color: "#FF8A00",
        name: "Óptica Perlado · Soria",
        stars: 5,
        text: "Lo que antes nos llevaba media mañana del viernes ahora está listo automáticamente cada primer día del mes. 12 horas a la semana recuperadas.",
    },
    {
        initial: "R",
        color: "#34A853",
        name: "Roberto M.",
        stars: 5,
        text: "La mejor inversión del año. Por lo que antes pagaba en publicidad en una tarde, ahora tengo una web entera funcionando.",
    },
    {
        initial: "L",
        color: "#EA4335",
        name: "Laura P.",
        stars: 4,
        text: "Muy buena experiencia. El proceso fue rápido y el resultado final es exactamente lo que buscaba para mi negocio.",
    },
];

const marqueeItems = [
    "Diseño Web", "SEO Local", "Redes Sociales", "Automatización",
    "Next.js 15", "Soria, España", "Tecnología Km 0", "Agencia Digital",
    "Google Maps", "E-Commerce", "Facturación", "Posicionamiento",
];

export default function HomeClient() {
    return (
        <div className="relative min-h-screen bg-[#0A0A0A] overflow-hidden selection:bg-neon-orange/30 selection:text-neon-orange">
            {/* Luces de fondo animadas */}
            <div className="orb-1 absolute top-0 -left-20 w-[650px] h-[650px] bg-neon-orange/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="orb-2 absolute bottom-0 -right-20 w-[550px] h-[550px] bg-neon-orange/5 rounded-full blur-[130px] pointer-events-none" />
            <div className="orb-3 absolute top-1/2 left-1/3 w-80 h-80 bg-secondary-orange/5 rounded-full blur-[100px] pointer-events-none" />

            <Navbar />

            {/* ─────────────── HERO ─────────────── */}
            <section className="relative pt-48 pb-20 px-6 z-10 hero-grid">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div className="hero-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-orange/20 text-neon-orange text-sm font-bold mb-8">
                            <span className="w-2 h-2 rounded-full bg-neon-orange animate-pulse" />
                            Agencia Digital · Soria Km 0
                        </div>
                        <h1 className="font-outfit text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
                            Digitalizamos el <br />
                            <span className="text-neon-orange neon-glow">corazón de Soria</span>
                        </h1>
                        <p className="text-text-slate text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
                            Soluciones digitales de alto rendimiento para el comercio local.
                            Tecnología de vanguardia para quienes hacen grande nuestra provincia.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contacto"
                                className="flex items-center justify-center gap-2 bg-neon-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-orange hover:scale-105 transition-all neon-border active:scale-95 text-center shadow-[0_0_30px_rgba(255,138,0,0.35)]"
                            >
                                Auditoría Gratuita <ArrowRight size={20} />
                            </Link>
                            <Link
                                href="/servicios"
                                className="flex items-center justify-center gap-2 glass text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all active:scale-95 text-center border border-white/10"
                            >
                                Ver servicios
                            </Link>
                        </div>
                        {/* Indicadores de confianza */}
                        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-text-slate">
                            <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-neon-orange" /> Sin permanencia</span>
                            <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-neon-orange" /> Web en 48h</span>
                            <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-neon-orange" /> Auditoría 0€</span>
                        </div>
                    </div>

                    {/* Logo hero con badges flotantes */}
                    <div className="hero-right relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-neon-orange/15 rounded-full blur-[100px] scale-75" />

                        {/* Badge: disponibilidad */}
                        <div className="hero-badge-l absolute top-4 -left-4 glass rounded-2xl px-4 py-3 border border-white/10 z-10 hidden sm:block">
                            <div className="flex items-center gap-2 text-xs font-bold">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                Disponibles en Soria
                            </div>
                        </div>

                        {/* Badge: valoraciones */}
                        <div className="hero-badge-r absolute bottom-4 -right-4 glass rounded-2xl px-4 py-3 border border-white/10 z-10 hidden sm:block">
                            <div className="flex gap-0.5 mb-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={12} className="text-neon-orange fill-neon-orange" />
                                ))}
                            </div>
                            <div className="text-xs text-text-slate">Agencia de confianza</div>
                        </div>

                        {/* Badge: 48h */}
                        <div className="hero-badge-b absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-2xl px-4 py-3 border border-neon-orange/20 z-10 hidden sm:block">
                            <div className="text-neon-orange font-outfit font-bold text-sm">Web en 48h</div>
                        </div>

                        <Image
                            src="/brand/logo_web_512x512.png"
                            alt="Numancia Digital"
                            width={512}
                            height={512}
                            className="relative w-full max-w-[380px] mx-auto drop-shadow-[0_0_60px_rgba(255,138,0,0.35)] select-none"
                            priority
                        />
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1.5 text-white/20 cursor-default select-none"
                >
                    <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
                    <ChevronDown size={16} />
                </motion.div>
            </section>

            {/* ─────────────── TICKER ─────────────── */}
            <div className="border-y border-white/5 py-4 overflow-hidden relative z-10">
                <div className="animate-marquee flex gap-10 whitespace-nowrap">
                    {[...marqueeItems, ...marqueeItems].map((item, i) => (
                        <span key={i} className="flex items-center gap-3 text-xs font-bold text-text-slate uppercase tracking-widest">
                            <span className="text-neon-orange text-base">✦</span>
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* ─────────────── MÉTRICAS ─────────────── */}
            <section className="py-16 px-6 relative z-10">
                <div className="absolute inset-0 border-y border-white/5" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center glass p-8 rounded-2xl border border-white/5 hover:border-neon-orange/25 transition-all group"
                        >
                            <div className="w-8 h-[2px] bg-neon-orange/40 mx-auto mb-5 group-hover:w-16 transition-all duration-700 rounded-full" />
                            <div className="font-outfit text-4xl md:text-5xl font-bold text-neon-orange neon-glow mb-2">
                                {m.value}
                            </div>
                            <div className="text-text-slate text-sm">{m.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─────────────── SERVICIOS ─────────────── */}
            <section id="servicios-grid" className="py-32 px-6 relative z-10 scroll-mt-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-outfit text-4xl md:text-5xl font-bold mb-4 text-neon-orange neon-glow"
                        >
                            Servicios Km 0
                        </motion.h2>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
                            Todo lo que tu negocio necesita para dominar el entorno digital, con la cercanía que solo Soria puede ofrecer.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((s, i) => (
                            <Link key={i} href={s.href} className="group">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="glass h-full p-6 rounded-3xl border border-white/5 group-hover:border-neon-orange/30 group-hover:bg-white/[0.05] transition-all relative overflow-hidden flex flex-col"
                                >
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon-orange/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute top-5 right-5 font-outfit text-2xl font-bold text-neon-orange/12 group-hover:text-neon-orange/25 transition-colors select-none">
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                    {/* SVG Ilustrativo */}
                                    <div className="w-full h-24 mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                                        {s.svg}
                                    </div>
                                    <h3 className="font-outfit text-xl font-bold mb-3">{s.title}</h3>
                                    <p className="text-text-slate text-sm leading-relaxed mb-4 flex-grow">{s.desc}</p>
                                    <div className="flex items-center gap-2 text-neon-orange font-bold text-xs uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                                        Explorar <ArrowRight size={14} />
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─────────────── CÓMO TRABAJAMOS ─────────────── */}
            <section className="py-32 px-6 relative z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-orange/20 to-transparent" />
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-outfit text-4xl md:text-5xl font-bold mb-4"
                        >
                            Cómo <span className="text-neon-orange neon-glow">trabajamos</span>
                        </motion.h2>
                        <p className="text-text-slate text-lg max-w-xl mx-auto">
                            Un proceso sencillo, transparente y orientado a resultados reales para tu negocio.
                        </p>
                    </div>

                    <div className="space-y-32">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                            >
                                {/* Texto */}
                                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                                    <div className="font-outfit text-7xl font-bold text-neon-orange neon-glow mb-4 select-none">
                                        {step.num}
                                    </div>
                                    <h3 className="font-outfit text-3xl md:text-4xl font-bold mb-6">
                                        {step.title}
                                    </h3>
                                    <p className="text-text-slate text-lg leading-relaxed max-w-md">
                                        {step.desc}
                                    </p>
                                </div>
                                {/* Visual SVG */}
                                <div className={`relative ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                                    <div className="absolute inset-0 bg-neon-orange/5 rounded-3xl blur-[40px]" />
                                    <div className="relative glass rounded-3xl border border-white/8 overflow-hidden p-8 aspect-video flex items-center justify-center">
                                        {step.visual}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─────────────── COMPARATIVA ─────────────── */}
            <section className="py-32 px-6 relative z-10 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-orange/20 to-transparent" />
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="font-outfit text-4xl md:text-5xl font-bold mb-6">
                            El modelo <span className="text-neon-orange">Numancia Digital</span>
                        </h2>
                        <p className="text-text-slate text-lg max-w-2xl mx-auto">
                            Eliminamos la grasa de las agencias tradicionales para ofrecerte tecnología de élite a precios honestos.
                        </p>
                    </div>
                    <div className="relative grid md:grid-cols-2 gap-10">
                        {/* Badge central */}
                        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-neon-orange items-center justify-center shadow-[0_0_30px_rgba(255,138,0,0.6)] text-white font-outfit font-bold text-xs text-center leading-tight">
                            5x<br/>más<br/>barato
                        </div>
                        <div className="p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.01] backdrop-blur-sm">
                            <h3 className="font-outfit text-2xl font-bold mb-10 text-text-slate flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-white/20" /> Agencia tradicional
                            </h3>
                            <ul className="space-y-8">
                                {[
                                    "Infraestructuras pesadas y burocracia lenta",
                                    "Mantenimiento manual propenso a errores",
                                    "Precios inflados por costes indirectos",
                                    "Soporte genérico desde centros de llamadas"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-white/30 text-lg">
                                        <div className="w-2 h-2 rounded-full bg-white/10 mt-2.5 shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-10 rounded-[2.5rem] neon-border bg-gradient-to-br from-neon-orange/10 to-transparent relative overflow-hidden">
                            <div className="absolute -inset-2 bg-neon-orange/10 blur-[60px] rounded-full opacity-50 pointer-events-none" />
                            <div className="absolute top-8 right-8">
                                <Zap className="text-neon-orange animate-pulse" size={36} />
                            </div>
                            <h3 className="font-outfit text-3xl font-bold mb-10">Numancia Digital</h3>
                            <ul className="space-y-8">
                                {[
                                    "Arquitectura de alto rendimiento (Next.js 15)",
                                    "Automatización total para máxima eficiencia",
                                    "Precios transparentes y sin sorpresas",
                                    "Compromiso Kilómetro Cero en Soria"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-white font-semibold text-lg">
                                        <CheckCircle2 className="text-neon-orange shrink-0 mt-1" size={22} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─────────────── TESTIMONIOS ─────────────── */}
            <section className="py-32 px-6 relative z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-orange/20 to-transparent" />
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-outfit text-4xl md:text-5xl font-bold mb-4"
                        >
                            Lo que dicen nuestros <span className="text-neon-orange neon-glow">clientes</span>
                        </motion.h2>
                        <p className="text-text-slate text-lg">Negocios reales de Soria con resultados reales.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="glass p-8 rounded-3xl border border-white/5 hover:border-neon-orange/20 transition-all relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon-orange/30 to-transparent" />
                                <div className="text-neon-orange/15 font-outfit font-bold text-7xl leading-none mb-2 -ml-1 select-none">"</div>
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, s) => (
                                        <Star key={s} size={16} className={s < t.stars ? "text-neon-orange fill-neon-orange" : "text-white/15 fill-white/10"} />
                                    ))}
                                </div>
                                <p className="text-white/80 leading-relaxed mb-8 italic">"{t.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center font-outfit font-bold text-white text-lg select-none"
                                        style={{ backgroundColor: t.color }}
                                    >
                                        {t.initial}
                                    </div>
                                    <div className="font-bold text-white">{t.name}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─────────────── CTA FINAL ─────────────── */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto glass p-12 rounded-[2rem] neon-border relative overflow-hidden">
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-neon-orange/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon-orange/10 rounded-full blur-[100px] pointer-events-none" />
                    <h2 className="font-outfit text-4xl md:text-5xl font-bold mb-6">¿Preparado para el salto?</h2>
                    <p className="text-text-slate text-lg mb-8">
                        Auditoría digital gratuita para los próximos negocios de Soria.
                        Sin compromiso, solo valor real.
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
                        {["Análisis SEO completo", "Revisión presencia Google", "Plan de acción concreto", "100% gratuito"].map((item, i) => (
                            <span key={i} className="flex items-center gap-2 text-sm text-white/60">
                                <CheckCircle2 size={14} className="text-neon-orange shrink-0" /> {item}
                            </span>
                        ))}
                    </div>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-2 bg-neon-orange text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-secondary-orange hover:scale-105 transition-all neon-border active:scale-95 shadow-[0_0_30px_rgba(255,138,0,0.3)]"
                    >
                        Solicitar Auditoría Gratis <ArrowRight size={22} />
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
