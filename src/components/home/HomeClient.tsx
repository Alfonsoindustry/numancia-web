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
            {/* Mesh Gradients Animados (Fondo de Alta Riqueza) */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-orange/15 rounded-full blur-[120px] animate-mesh" />
                <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] bg-electric-violet/10 rounded-full blur-[140px] animate-mesh" style={{ animationDelay: '-2s' }} />
                <div className="absolute top-[40%] left-[20%] w-[40%] h-[40%] bg-secondary-orange/5 rounded-full blur-[100px] animate-mesh" style={{ animationDelay: '-5s' }} />
                <div className="absolute bottom-[-10%] left-[10%] w-[50%] h-[50%] bg-neon-orange/10 rounded-full blur-[120px] animate-mesh" style={{ animationDelay: '-1s' }} />
            </div>

            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-48 pb-20 px-6 z-10">
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
                            <Link href="/contacto" className="flex items-center justify-center gap-2 bg-neon-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-orange transition-all neon-border active:scale-95 text-center shadow-[0_0_30px_rgba(255,138,0,0.3)]">
                                Comenzar ahora <ArrowRight size={20} />
                            </Link>
                            <button
                                onClick={() => document.getElementById('servicios-grid')?.scrollIntoView({ behavior: 'smooth' })}
                                className="flex items-center justify-center gap-2 glass text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all active:scale-95 text-center border-white/10"
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
                                className="object-contain drop-shadow-[0_0_40px_rgba(255,138,0,0.4)]"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Grid de Servicios Km 0 */}
            <section id="servicios-grid" className="py-32 px-6 relative z-10 scroll-mt-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-outfit text-4xl md:text-5xl font-bold mb-6"
                        >
                            Nuestros Servicios <span className="text-neon-orange italic">Km 0</span>
                        </motion.h2>
                        <p className="text-text-slate text-lg max-w-2xl mx-auto leading-relaxed">
                            Todo lo que tu negocio necesita para dominar el entorno digital con la cercanía que solo Soria puede ofrecer.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((s, i) => (
                            <Link
                                key={i}
                                href={s.href}
                                className="group"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="glass h-full p-8 rounded-3xl border border-white/5 group-hover:border-neon-orange/30 group-hover:bg-white/[0.05] transition-all relative overflow-hidden flex flex-col items-start"
                                >
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon-orange/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-electric-violet/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="w-14 h-14 bg-neon-orange/10 rounded-2xl flex items-center justify-center mb-8 border border-neon-orange/20 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,138,0,0.1)]">
                                        <s.icon className="text-neon-orange" size={28} />
                                    </div>
                                    <h3 className="font-outfit text-2xl font-bold mb-4">{s.title}</h3>
                                    <p className="text-text-slate leading-relaxed mb-6 flex-grow">{s.desc}</p>

                                    <div className="flex items-center gap-2 text-neon-orange font-bold text-sm uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                                        Explorar <ArrowRight size={16} />
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sección Comparativa: El Modelo Numancia */}
            <section id="precios-home" className="py-32 px-6 relative z-10 overflow-hidden">
                {/* Separador Visual con Luz */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-orange/20 to-transparent" />

                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="font-outfit text-4xl md:text-5xl font-bold mb-6">El modelo <span className="text-neon-orange">Numancia Digital</span></h2>
                        <p className="text-text-slate text-lg max-w-2xl mx-auto">
                            Eliminamos la grasa de las agencias tradicionales para ofrecerte tecnología de élite a precios honestos.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.01] backdrop-blur-sm relative group">
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
                                        <div className="w-2 h-2 rounded-full bg-white/10 mt-2.5" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-10 rounded-[2.5rem] neon-border bg-gradient-to-br from-neon-orange/10 to-transparent relative overflow-hidden group/nd">
                            <div className="absolute -inset-2 bg-neon-orange/10 blur-[60px] rounded-full opacity-50 pointer-events-none group-hover/nd:opacity-80 transition-opacity" />
                            <div className="absolute top-8 right-8">
                                <Zap className="text-neon-orange animate-pulse" size={40} />
                            </div>

                            <h3 className="font-outfit text-3xl font-bold mb-10 text-white">Numancia Digital</h3>
                            <ul className="space-y-8">
                                {[
                                    "Arquitectura de alto rendimiento (Next.js 15)",
                                    "Automatización total para máxima eficiencia",
                                    "Precios transparentes y sin sorpresas",
                                    "Compromiso Kilómetro Cero (Soria)"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-white font-semibold text-lg">
                                        <CheckCircle2 className="text-neon-orange shrink-0 mt-1" size={24} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final de Impacto */}
            <section className="py-32 px-6 text-center relative z-10">
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-orange to-electric-violet rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative glass p-16 md:p-24 rounded-[3rem] border border-white/10 overflow-hidden">
                        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neon-orange/20 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-electric-violet/10 rounded-full blur-[100px] pointer-events-none" />

                        <h2 className="font-outfit text-5xl md:text-6xl font-bold mb-8 leading-tight">¿Hablamos del <span className="text-neon-orange">futuro</span> de tu negocio?</h2>
                        <p className="text-text-slate text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                            Reserva una de nuestras 3 auditorías gratuitas mensuales para comercios de Soria.
                            Veamos cómo la tecnología puede trabajar para ti.
                        </p>
                        <Link href="/contacto" className="inline-block bg-neon-orange text-white px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-secondary-orange transition-all neon-border active:scale-95 shadow-[0_20px_50px_rgba(255,138,0,0.3)] transform hover:-translate-y-1">
                            Solicitar Auditoría Gratis
                        </Link>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
