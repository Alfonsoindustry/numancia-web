"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, FileText, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function OfficeServiceClient() {
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
                                <Zap size={16} /> OFIMÁTICA Y AUTOMATIZACIÓN
                            </div>
                            <h1 className="font-outfit text-5xl md:text-7xl font-bold mb-8 leading-tight">
                                Gana tiempo <br />
                                <span className="text-neon-orange neon-glow">para lo que importa</span>
                            </h1>
                            <p className="text-text-slate text-lg md:text-xl leading-relaxed mb-10">
                                Deja de pelearte con Excel y facturas en papel. Automatizamos tus procesos administrativos para que gestiones tu negocio desde cualquier lugar con un solo clic.
                            </p>
                            <Link href="/contacto" className="inline-flex items-center gap-2 bg-neon-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-orange transition-all neon-border">
                                Automatizar mi negocio <ArrowRight size={20} />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative aspect-video glass rounded-3xl border border-white/10 overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/20 to-transparent opacity-50" />
                            <div className="flex h-full items-center justify-center">
                                <ShieldCheck size={120} className="text-neon-orange/50 group-hover:scale-105 transition-transform duration-500" />
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Facturación Auto", desc: "Genera y envía facturas a tus clientes automáticamente.", icon: FileText },
                            { title: "Seguridad Total", desc: "Tus datos siempre a buen recaudo y cumpliendo la ley.", icon: ShieldCheck },
                            { title: "Ahorro de Horas", desc: "Reduce en un 80% el tiempo dedicado a tareas repetitivas.", icon: Clock },
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
