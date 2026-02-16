"use client";

import { motion } from "framer-motion";
import { Monitor, Code, Rocket, Layout, ArrowRight, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function WebServiceClient() {
    return (
        <div className="min-h-screen bg-[#0B1120] text-white selection:bg-neon-orange/30 selection:text-neon-orange">
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Hero de Servicio */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-orange/20 text-neon-orange text-sm font-bold mb-6">
                                <Monitor size={16} /> DISEÑO Y DESARROLLO WEB
                            </div>
                            <h1 className="font-outfit text-5xl md:text-7xl font-bold mb-8 leading-tight">
                                Tu escaparate <br />
                                <span className="text-neon-orange neon-glow">abierto 24/7</span>
                            </h1>
                            <p className="text-text-slate text-lg md:text-xl leading-relaxed mb-10">
                                No hacemos "páginas bonitas". Creamos máquinas de venta de alto rendimiento diseñadas por y para los negocios de Soria. Velocidad brutal, diseño adaptable y SEO integrado desde el código.
                            </p>
                            <Link href="/contacto" className="inline-flex items-center gap-2 bg-neon-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-orange transition-all neon-border">
                                Solicitar presupuesto <ArrowRight size={20} />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative aspect-video glass rounded-3xl border border-white/10 overflow-hidden group shadow-2xl"
                        >
                            <Image
                                src="/images/servicios-web.png"
                                alt="Diseño Web Profesional en Soria"
                                fill
                                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                            <div className="flex h-full items-center justify-center relative z-10">
                                <Layout size={120} className="text-neon-orange/50 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Nueva Sección: Estrategia 360 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-12 rounded-[3rem] border border-white/5 mb-24 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Monitor size={200} />
                        </div>
                        <div className="relative z-10">
                            <h2 className="font-outfit text-4xl font-bold mb-6">Estrategia Digital 360°</h2>
                            <p className="text-text-slate text-xl leading-relaxed max-w-3xl">
                                No solo lanzamos una web; lanzamos tu negocio al mundo digital. Analizamos tu competencia en Soria, definimos tu embudo de ventas y nos aseguramos de que cada píxel trabaje para conseguirte más clientes. Una web de Numancia Digital es una inversión directa en el crecimiento de tu empresa.
                            </p>
                        </div>
                    </motion.div>

                    {/* Características */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Rendimiento Top", desc: "Carga en menos de 1 segundo para no perder ni un solo cliente.", icon: Rocket },
                            { title: "Diseño Adaptable", desc: "Se verá perfecto en móviles, tablets y PCs.", icon: Layout },
                            { title: "Código Limpio", desc: "Utilizamos Next.js para una seguridad y escalabilidad total.", icon: Code },
                            { title: "Crece tus Ventas", desc: "Una web rápida y persuasiva convierte visitantes en clientes reales. Es la mejor inversión para tu negocio.", icon: TrendingUp },
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
