"use client";

import { motion } from "framer-motion";
import { Instagram, Heart, Share2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function SocialServiceClient() {
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
                                <Instagram size={16} /> REDES SOCIALES
                            </div>
                            <h1 className="font-outfit text-5xl md:text-7xl font-bold mb-8 leading-tight">
                                Conecta con tu <br />
                                <span className="text-neon-orange neon-glow">comunidad local</span>
                            </h1>
                            <p className="text-text-slate text-lg md:text-xl leading-relaxed mb-10">
                                En Soria, el boca a boca es digital. Gestionamos tus perfiles de Facebook e Instagram para que tu negocio sea el que más "ruido" haga en la provincia. Contenido real para gente real.
                            </p>
                            <Link href="/contacto" className="inline-flex items-center gap-2 bg-neon-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-orange transition-all neon-border">
                                Comenzar plan social <ArrowRight size={20} />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative aspect-video glass rounded-3xl border border-white/10 overflow-hidden group shadow-2xl"
                        >
                            <Image
                                src="/images/servicios-redes.png"
                                alt="Gestión de Redes Sociales en Soria"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                    </div>

                    {/* Nueva Sección: Engagement Local */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-12 rounded-[3rem] border border-white/5 mb-24 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Share2 size={200} />
                        </div>
                        <div className="relative z-10">
                            <h2 className="font-outfit text-4xl font-bold mb-6">Humanizamos tu Marca</h2>
                            <p className="text-text-slate text-xl leading-relaxed max-w-3xl">
                                Las redes sociales no son un catálogo; son un canal de comunicación. Creamos contenido que resuena con la gente de Soria, resaltando tus valores, tu equipo y lo que te hace único. No buscamos solo "likes", buscamos construir una comunidad fiel que elija tu negocio una y otra vez.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Contenido Local", desc: "Fotos y vídeos que celebran la esencia de Soria y tu negocio.", icon: Heart },
                            { title: "Gestión de Mensajes", desc: "No dejes ni una duda sin responder. Atención inmediata.", icon: Instagram },
                            { title: "Crecimiento Orgánico", desc: "Estrategias para que tus seguidores sean clientes potenciales.", icon: Share2 },
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
