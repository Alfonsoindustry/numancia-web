"use client";

import { motion } from "framer-motion";
import { Monitor, Search, Instagram, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const allServices = [
    {
        title: "Diseño Web de Alto Rendimiento",
        desc: "Creamos escaparates digitales que cargan en menos de un segundo. Usamos Next.js 15 para garantizar la máxima velocidad y seguridad para tu negocio en Soria.",
        icon: Monitor,
        href: "/servicios/web",
        features: ["Carga ultra-rápida", "Diseño Adaptable", "SEO Integrado"]
    },
    {
        title: "SEO Local Estratégico",
        desc: "Posicionamos tu negocio en los primeros resultados de Google Maps. Si te buscan en Soria, aparecerás el primero.",
        icon: Search,
        href: "/servicios/seo",
        features: ["Google Business Profile", "Optimización de Keywords", "Informes Mensuales"]
    },
    {
        title: "Gestión de Redes Sociales",
        desc: "Conectamos tu marca con los vecinos de la provincia. Creamos contenido real que genera comunidad y clientes fieles.",
        icon: Instagram,
        href: "/servicios/redes",
        features: ["Contenido Original", "Gestión de Comunidad", "Estrategia de Crecimiento"]
    },
    {
        title: "Ofimática y Automatización",
        desc: "Ahorra horas de trabajo repetitivo. Automatizamos tus facturas y procesos administrativos para que te centres en vender.",
        icon: Zap,
        href: "/servicios/ofimatica",
        features: ["Facturación Automática", "Digitalización de Procesos", "Soporte Técnico"]
    }
];

export default function ServiciosClient() {
    return (
        <div className="min-h-screen bg-[#0B1120] text-white selection:bg-neon-orange/30 selection:text-neon-orange">
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-outfit text-5xl md:text-7xl font-bold mb-6"
                        >
                            Nuestras <span className="text-neon-orange neon-glow">Soluciones Digitales</span>
                        </motion.h1>
                        <p className="text-text-slate text-lg max-w-2xl mx-auto leading-relaxed">
                            En Numancia Digital combinamos la cercanía de Soria con la tecnología más avanzada del mercado. Elige el motor que impulsará tu negocio.
                        </p>
                    </div>

                    <div className="grid gap-8">
                        {allServices.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-neon-orange/20 transition-all group"
                            >
                                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
                                    <div className="w-20 h-20 bg-neon-orange/10 rounded-2xl flex items-center justify-center border border-neon-orange/20 group-hover:bg-neon-orange/20 transition-all shrink-0">
                                        <service.icon className="text-neon-orange" size={40} />
                                    </div>

                                    <div className="flex-grow">
                                        <h2 className="font-outfit text-3xl font-bold mb-4">{service.title}</h2>
                                        <p className="text-text-slate text-lg mb-6 leading-relaxed max-w-3xl">
                                            {service.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-4 mb-8">
                                            {service.features.map((f, idx) => (
                                                <span key={idx} className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/60">
                                                    <CheckCircle2 size={16} className="text-neon-orange" /> {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="shrink-0 w-full lg:w-auto">
                                        <Link
                                            href={service.href}
                                            className="flex items-center justify-center gap-2 bg-neon-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-orange transition-all neon-border w-full lg:w-auto"
                                        >
                                            Saber más <ArrowRight size={20} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Sección de Compromiso */}
                    <div className="mt-24 p-12 rounded-[3rem] bg-gradient-to-br from-neon-orange/10 to-transparent border border-neon-orange/20 text-center">
                        <h3 className="font-outfit text-3xl font-bold mb-6 italic">¿No sabes por dónde empezar?</h3>
                        <p className="text-text-slate text-lg mb-10 max-w-2xl mx-auto">
                            Analizamos tu negocio sin coste y te proponemos la solución que mejor se adapte a tus necesidades y presupuesto.
                        </p>
                        <Link href="/contacto" className="inline-block bg-neon-orange text-white px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-secondary-orange shadow-[0_0_50px_rgba(255,138,0,0.4)] transition-all transform hover:scale-105 active:scale-95 neon-border">
                            Solicitar Asesoramiento Gratuito
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
