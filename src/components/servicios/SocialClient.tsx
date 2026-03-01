"use client";

import { motion } from "framer-motion";
import { Instagram, Heart, Share2, ArrowRight, TrendingUp, Users, MessageCircle, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const SocialIllustration = () => (
    <svg viewBox="0 0 500 340" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Fondo */}
        <rect x="10" y="10" width="480" height="320" rx="16" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.15" fill="#0A0A0A" />

        {/* Feed Instagram simulado - col izquierda */}
        <rect x="20" y="20" width="200" height="310" rx="12" fill="#FF8A00" fillOpacity="0.04" stroke="#FF8A00" strokeWidth="0.8" strokeOpacity="0.2" />
        {/* Story row */}
        {[0, 1, 2, 3].map((i) => (
            <circle key={i} cx={42 + i * 46} cy={50} r={16} stroke="#FF8A00" strokeWidth={i === 0 ? 2 : 1} strokeOpacity={i === 0 ? 0.8 : 0.3} fill="#FF8A00" fillOpacity={i === 0 ? 0.15 : 0.04} />
        ))}
        {/* Posts */}
        <rect x="28" y="76" width="184" height="90" rx="8" fill="#FF8A00" fillOpacity="0.1" stroke="#FF8A00" strokeWidth="0.5" strokeOpacity="0.3" />
        {/* Like/comment row */}
        <circle cx="42" cy="180" r="6" fill="#FF8A00" fillOpacity="0.7" />
        <rect x="52" y="176" width="30" height="8" rx="4" fill="white" fillOpacity="0.15" />
        <circle cx="100" cy="180" r="6" fill="white" fillOpacity="0.2" />
        <rect x="110" y="176" width="25" height="8" rx="4" fill="white" fillOpacity="0.1" />
        {/* Post 2 */}
        <rect x="28" y="196" width="88" height="88" rx="8" fill="#FF8A00" fillOpacity="0.07" stroke="#FF8A00" strokeWidth="0.5" strokeOpacity="0.2" />
        <rect x="124" y="196" width="88" height="88" rx="8" fill="#FF8A00" fillOpacity="0.04" stroke="#FF8A00" strokeWidth="0.5" strokeOpacity="0.15" />

        {/* Panel de métricas - derecha */}
        <rect x="236" y="20" width="254" height="310" rx="12" fill="#FF8A00" fillOpacity="0.04" stroke="#FF8A00" strokeWidth="0.8" strokeOpacity="0.2" />
        <text x="363" y="46" textAnchor="middle" fill="white" fontSize="11" fontFamily="sans-serif" fontWeight="bold" fillOpacity="0.7">Estadísticas del mes</text>
        <rect x="244" y="52" width="238" height="1" fill="white" fillOpacity="0.06" />

        {/* Métrica 1: Alcance */}
        <rect x="248" y="64" width="110" height="60" rx="10" fill="#FF8A00" fillOpacity="0.08" stroke="#FF8A00" strokeWidth="0.8" strokeOpacity="0.25" />
        <text x="303" y="85" textAnchor="middle" fill="#FF8A00" fontSize="18" fontFamily="sans-serif" fontWeight="bold">+2.4K</text>
        <text x="303" y="100" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif" fillOpacity="0.5">Alcance</text>
        <text x="303" y="114" textAnchor="middle" fill="#22c55e" fontSize="8" fontFamily="sans-serif">▲ 34%</text>

        {/* Métrica 2: Interacciones */}
        <rect x="368" y="64" width="110" height="60" rx="10" fill="#FF8A00" fillOpacity="0.05" stroke="#FF8A00" strokeWidth="0.5" strokeOpacity="0.2" />
        <text x="423" y="85" textAnchor="middle" fill="white" fontSize="18" fontFamily="sans-serif" fontWeight="bold" fillOpacity="0.7">312</text>
        <text x="423" y="100" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif" fillOpacity="0.4">Me gustas</text>
        <text x="423" y="114" textAnchor="middle" fill="#22c55e" fontSize="8" fontFamily="sans-serif">▲ 18%</text>

        {/* Gráfico de barras */}
        <rect x="248" y="140" width="230" height="1" fill="white" fillOpacity="0.06" />
        <text x="363" y="158" textAnchor="middle" fill="white" fontSize="10" fontFamily="sans-serif" fillOpacity="0.4">Publicaciones esta semana</text>
        {[55, 80, 45, 90, 65, 100, 75].map((h, i) => (
            <rect key={i} x={260 + i * 30} y={260 - h * 0.6} width={18} height={h * 0.6} rx="4"
                fill="#FF8A00" fillOpacity={i === 5 ? 0.8 : 0.3} />
        ))}
        {["L", "M", "X", "J", "V", "S", "D"].map((d, i) => (
            <text key={i} x={269 + i * 30} y={275} textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif" fillOpacity="0.3">{d}</text>
        ))}

        {/* Seguidores nuevos */}
        <rect x="248" y="286" width="230" height="36" rx="8" fill="#FF8A00" fillOpacity="0.1" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.3" />
        <text x="363" y="308" textAnchor="middle" fill="#FF8A00" fontSize="11" fontFamily="sans-serif" fontWeight="bold">+127 seguidores nuevos este mes</text>
    </svg>
);

const features = [
    { title: "Contenido Local", desc: "Fotos y vídeos que celebran la esencia de Soria y la historia de tu negocio.", icon: Heart },
    { title: "Gestión de Mensajes", desc: "Ninguna consulta sin responder. Atención inmediata en todos tus perfiles.", icon: MessageCircle },
    { title: "Crecimiento Orgánico", desc: "Estrategias para que tus seguidores sean clientes potenciales reales.", icon: TrendingUp },
    { title: "Comunidad Fiel", desc: "Construimos audiencias que eligen tu negocio una y otra vez.", icon: Users },
];

export default function SocialServiceClient() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-neon-orange/30 selection:text-neon-orange">
            <Navbar />
            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Hero */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-orange/20 text-neon-orange text-sm font-bold mb-6">
                                <Instagram size={16} /> REDES SOCIALES
                            </div>
                            <h1 className="font-outfit text-5xl md:text-7xl font-bold mb-8 leading-tight">
                                Redes Sociales <br />
                                <span className="text-neon-orange neon-glow">que generan clientes</span>
                            </h1>
                            <p className="text-text-slate text-lg md:text-xl leading-relaxed mb-10">
                                En Soria, el boca a boca es digital. Gestionamos tus perfiles de Instagram y Facebook para que tu negocio sea el que más "ruido" haga en la provincia. Contenido real para gente real.
                            </p>
                            <Link href="/contacto" className="inline-flex items-center gap-2 bg-neon-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-orange transition-all neon-border">
                                Comenzar plan social <ArrowRight size={20} />
                            </Link>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative">
                            <div className="absolute inset-0 bg-neon-orange/8 rounded-3xl blur-[50px]" />
                            <div className="relative glass rounded-3xl border border-white/10 overflow-hidden shadow-2xl p-4 aspect-video flex items-center justify-center">
                                <SocialIllustration />
                            </div>
                        </motion.div>
                    </div>

                    {/* Qué incluye */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="glass p-12 rounded-[3rem] border border-white/5 mb-24 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Share2 size={240} />
                        </div>
                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="font-outfit text-4xl font-bold mb-6">Humanizamos <span className="text-neon-orange">tu marca</span></h2>
                                <p className="text-text-slate text-lg leading-relaxed">
                                    Las redes sociales no son un catálogo; son un canal de comunicación. Creamos contenido que resuena con la gente de Soria, resaltando tus valores, tu equipo y lo que te hace único. No buscamos "likes", construimos comunidad fiel.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "12-16 publicaciones mensuales en Instagram y Facebook",
                                    "Diseño gráfico profesional adaptado a tu marca",
                                    "Estrategia de hashtags y menciones locales",
                                    "Gestión de comentarios y mensajes directos",
                                    "Informe mensual de métricas y crecimiento",
                                    "Stories y Reels con contenido de tu negocio",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-white/80">
                                        <CheckCircle2 size={18} className="text-neon-orange shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Features */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                        {features.map((f, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="glass p-8 rounded-2xl border border-white/5 hover:border-neon-orange/20 transition-all group">
                                <div className="w-12 h-12 bg-neon-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neon-orange/20 transition-all">
                                    <f.icon className="text-neon-orange" size={24} />
                                </div>
                                <h3 className="font-outfit text-xl font-bold mb-3">{f.title}</h3>
                                <p className="text-text-slate text-sm leading-relaxed">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center glass p-12 rounded-[3rem] border border-neon-orange/20 bg-gradient-to-br from-neon-orange/5 to-transparent">
                        <h3 className="font-outfit text-3xl font-bold mb-4">¿Tus redes llevan meses sin actividad?</h3>
                        <p className="text-text-slate text-lg mb-8 max-w-xl mx-auto">Las redes sin contenido no ayudan, perjudican. Hablemos sobre tu estrategia en Soria.</p>
                        <Link href="/contacto" className="inline-flex items-center gap-2 bg-neon-orange text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-secondary-orange transition-all neon-border">
                            Reactivar mis redes <ArrowRight size={22} />
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
