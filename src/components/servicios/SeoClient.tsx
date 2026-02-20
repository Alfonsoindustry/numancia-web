"use client";

import { motion } from "framer-motion";
import { Search, MapPin, BarChart3, Target, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function SeoServiceClient() {
    return (
        <div className="min-h-screen bg-[#0B1120] text-white selection:bg-neon-orange/30 selection:text-neon-orange">
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-orange/20 text-neon-orange text-sm font-bold mb-6">
                                <Search size={16} /> SEO LOCAL SORIA
                            </div>
                            <h1 className="font-outfit text-5xl md:text-7xl font-bold mb-8 leading-tight">
                                Posicionamiento <br />
                                <span className="text-neon-orange neon-glow">SEO Local en Soria</span>
                            </h1>
                            <p className="text-text-slate text-lg md:text-xl leading-relaxed mb-10">
                                Cuando alguien busca tu producto o servicio en Soria, tienes que estar ahí. Optimizamos tu presencia en Google Maps y Google Search para que seas la opción #1 de tus vecinos.
                            </p>
                            <Link href="/contacto" className="inline-flex items-center gap-2 bg-neon-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-orange transition-all neon-border">
                                Solicitar auditoría SEO <ArrowRight size={20} />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative aspect-video glass rounded-3xl border border-white/10 overflow-hidden group shadow-2xl"
                        >
                            <Image
                                src="/images/servicios-seo.png"
                                alt="Estrategia de posicionamiento SEO Local y Google Maps en Soria - Numancia Digital"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                    </div>

                    {/* Nueva Sección: Visibilidad Local */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-12 rounded-[3rem] border border-white/5 mb-24 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Target size={200} />
                        </div>
                        <div className="relative z-10">
                            <h2 className="font-outfit text-4xl font-bold mb-6">Visibilidad que Convierte</h2>
                            <p className="text-text-slate text-xl leading-relaxed max-w-3xl">
                                El SEO no es solo para aparecer en Google; es para que te encuentren los clientes que están listos para comprar en Soria. Optimizamos tu ficha de Google Business Profile y tu contenido web para que, cuando un soriano busque lo que ofreces, tu nombre sea el primero que vea.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Google Maps", desc: "Aparece en el 'Local Pack' cuando busquen negocios cerca de ellos.", icon: MapPin },
                            { title: "Análisis de Datos", desc: "Informes mensuales reales sobre cuántos clientes te han llamado.", icon: BarChart3 },
                            { title: "Palabras Clave", desc: "Análisis exhaustivo de qué busca exactamente la gente en Soria.", icon: Target },
                        ].map((f, i) => (
                            <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:border-neon-orange/20 transition-all">
                                <div className="w-12 h-12 bg-neon-orange/10 rounded-xl flex items-center justify-center mb-6">
                                    <f.icon className="text-neon-orange" size={24} />
                                </div>
                                <h3 className="font-outfit text-xl font-bold mb-3">{f.title}</h3>
                                <p className="text-text-slate text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
