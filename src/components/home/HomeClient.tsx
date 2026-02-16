"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe, Search, Instagram, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
    {
        title: "Páginas Web",
        desc: "Tu escaparate abierto 24/7 con tecnología de alto rendimiento.",
        icon: Globe,
        href: "/servicios/web",
    },
    {
        title: "SEO Local",
        desc: "Aparece el primero cuando Soria te busca en Google.",
        icon: Search,
        href: "/servicios/seo",
    },
    {
        title: "Redes Sociales",
        desc: "Conectamos tu marca con el corazón de la provincia.",
        icon: Instagram,
        href: "/servicios/redes",
    },
    {
        title: "Ofimática",
        desc: "Automatiza tus facturas y gana tiempo libre.",
        icon: Zap,
        href: "/servicios/ofimatica",
    },
];

export default function HomeClient() {
    return (
        <div className="relative min-h-screen bg-[#0B1120] overflow-hidden selection:bg-neon-orange/30 selection:text-neon-orange">
            {/* Luces de fondo (Efecto Neón) */}
            <div className="absolute top-0 -left-4 w-96 h-96 bg-neon-orange/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 -right-4 w-96 h-96 bg-neon-orange/5 rounded-full blur-[120px] pointer-events-none" />

            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-48 pb-20 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="font-outfit text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
                            Digitalizamos el <br />
                            <span className="text-neon-orange neon-glow">corazón de Soria</span>
                        </h1>
                        <p className="text-text-slate text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
                            Soluciones digitales de alto rendimiento para el comercio local.
                            Tecnología de vanguardia para quienes hacen grande nuestra provincia.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contacto" className="flex items-center justify-center gap-2 bg-neon-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-orange transition-all neon-border active:scale-95 text-center">
                                Comenzar ahora <ArrowRight size={20} />
                            </Link>
                            <button
                                onClick={() => document.getElementById('servicios-grid')?.scrollIntoView({ behavior: 'smooth' })}
                                className="flex items-center justify-center gap-2 glass text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-all active:scale-95 text-center"
                            >
                                Ver servicios
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-[500px] aspect-square">
                            <div className="absolute inset-0 bg-neon-orange/20 rounded-full blur-[80px] animate-pulse" />
                            <Image
                                src="/brand/logo_original_hq.png"
                                alt="Agencia de Marketing Digital y Diseño Web en Soria - Numancia Digital"
                                fill
                                className="object-contain drop-shadow-[0_0_30px_rgba(255,138,0,0.3)]"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Grid de Servicios */}
            <section id="servicios-grid" className="py-20 px-6 relative scroll-mt-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-outfit text-4xl font-bold mb-4">Nuestros Servicios Km 0</h2>
                        <p className="text-text-slate">Todo lo que tu negocio necesita para dominar el entorno digital.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((s, i) => (
                            <Link
                                key={i}
                                href={s.href}
                                className="group"
                            >
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="glass h-full p-8 rounded-2xl border border-white/5 hover:neon-border-intense transition-all relative overflow-hidden group/card"
                                >
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon-orange/10 rounded-full blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity" />
                                    <div className="w-12 h-12 bg-neon-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neon-orange/20 transition-all">
                                        <s.icon className="text-neon-orange" size={24} />
                                    </div>
                                    <h3 className="font-outfit text-xl font-bold mb-3">{s.title}</h3>
                                    <p className="text-text-slate text-sm leading-relaxed">{s.desc}</p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sección Comparativa: Anti-Agencia */}
            <section id="precios-home" className="py-24 px-6 bg-white/[0.02]">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-outfit text-4xl font-bold mb-4">El modelo Numancia Digital</h2>
                        <p className="text-text-slate text-lg">¿Por qué somos más rápidos, mejores y 5 veces más baratos?</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.01]">
                            <h3 className="font-outfit text-2xl font-bold mb-8 text-text-slate">Agencia tradicional</h3>
                            <ul className="space-y-6">
                                {[
                                    "Infraestructuras pesadas y lentas",
                                    "Mantenimiento manual costoso",
                                    "Precios inflados (3.000€/mes)",
                                    "Soporte genérico y distante"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-white/40">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-8 rounded-3xl neon-border bg-neon-orange/5 relative overflow-hidden group/premium">
                            <div className="absolute -inset-2 bg-neon-orange/10 blur-[60px] rounded-full opacity-50 pointer-events-none" />
                            <div className="absolute top-0 right-0 p-4">
                                <Zap className="text-neon-orange drop-shadow-[0_0_8px_rgba(255,138,0,0.5)]" size={32} />
                            </div>
                            <h3 className="font-outfit text-2xl font-bold mb-8 text-white">Numancia Digital</h3>
                            <ul className="space-y-6">
                                {[
                                    "Tecnología Serverless (rápida y segura)",
                                    "Automatización total de procesos",
                                    "Precios asequibles (800€ a 1.000€)",
                                    "Soporte Kilómetro Cero (Soria)"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-white font-medium">
                                        <CheckCircle2 className="text-neon-orange" size={20} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto glass p-12 rounded-[2rem] neon-border relative overflow-hidden">
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-neon-orange/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon-orange/10 rounded-full blur-[100px] pointer-events-none" />
                    <h2 className="font-outfit text-4xl md:text-5xl font-bold mb-6">¿Preparado para el salto?</h2>
                    <p className="text-text-slate text-lg mb-10">
                        Ofrecemos una auditoría digital gratuita para los próximos 3 comercios en Soria.
                        Sin compromiso, solo valor real.
                    </p>
                    <Link href="/contacto" className="inline-block bg-neon-orange text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-secondary-orange transition-all neon-border active:scale-95 shadow-[0_0_30px_rgba(255,138,0,0.3)]">
                        Solicitar Auditoría Gratis
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
