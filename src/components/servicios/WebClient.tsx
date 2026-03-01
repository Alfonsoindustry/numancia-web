"use client";

import { motion } from "framer-motion";
import { Monitor, Code, Rocket, Layout, ArrowRight, TrendingUp, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const BrowserIllustration = () => (
    <svg viewBox="0 0 500 340" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shadow */}
        <ellipse cx="250" cy="330" rx="200" ry="10" fill="#FF8A00" fillOpacity="0.08" />
        {/* Browser frame */}
        <rect x="10" y="10" width="480" height="310" rx="16" stroke="#FF8A00" strokeWidth="1.5" strokeOpacity="0.35" fill="#0A0A0A" />
        <rect x="10" y="10" width="480" height="48" rx="16" fill="#FF8A00" fillOpacity="0.06" />
        {/* Traffic lights */}
        <circle cx="36" cy="34" r="7" fill="#FF4D00" fillOpacity="0.7" />
        <circle cx="56" cy="34" r="7" fill="#FF8A00" fillOpacity="0.7" />
        <circle cx="76" cy="34" r="7" fill="#22c55e" fillOpacity="0.5" />
        {/* URL bar */}
        <rect x="100" y="22" width="260" height="24" rx="12" fill="white" fillOpacity="0.05" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
        <text x="230" y="38" textAnchor="middle" fill="white" fillOpacity="0.25" fontSize="10" fontFamily="monospace">numanciadigital.es</text>
        {/* Nav bar */}
        <rect x="10" y="58" width="480" height="2" fill="white" fillOpacity="0.04" />
        {/* Hero block */}
        <rect x="30" y="76" width="200" height="20" rx="6" fill="#FF8A00" fillOpacity="0.5" />
        <rect x="30" y="104" width="160" height="10" rx="4" fill="white" fillOpacity="0.12" />
        <rect x="30" y="120" width="140" height="10" rx="4" fill="white" fillOpacity="0.08" />
        <rect x="30" y="144" width="100" height="28" rx="8" fill="#FF8A00" fillOpacity="0.85" />
        <text x="80" y="162" textAnchor="middle" fill="white" fontSize="10" fontFamily="sans-serif" fontWeight="bold">Comenzar</text>
        {/* Right image placeholder */}
        <rect x="280" y="70" width="200" height="150" rx="12" fill="#FF8A00" fillOpacity="0.07" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="380" cy="130" r="40" fill="#FF8A00" fillOpacity="0.1" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.3" />
        <polyline points="350,145 370,125 385,135 400,110 420,120" stroke="#FF8A00" strokeWidth="2" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" />
        {/* Services row */}
        <rect x="30" y="235" width="100" height="70" rx="10" fill="#FF8A00" fillOpacity="0.07" stroke="#FF8A00" strokeWidth="0.8" strokeOpacity="0.2" />
        <rect x="145" y="235" width="100" height="70" rx="10" fill="#FF8A00" fillOpacity="0.07" stroke="#FF8A00" strokeWidth="0.8" strokeOpacity="0.2" />
        <rect x="260" y="235" width="100" height="70" rx="10" fill="#FF8A00" fillOpacity="0.07" stroke="#FF8A00" strokeWidth="0.8" strokeOpacity="0.2" />
        <rect x="375" y="235" width="100" height="70" rx="10" fill="#FF8A00" fillOpacity="0.07" stroke="#FF8A00" strokeWidth="0.8" strokeOpacity="0.2" />
        <rect x="42" y="249" width="30" height="30" rx="6" fill="#FF8A00" fillOpacity="0.3" />
        <rect x="157" y="249" width="30" height="30" rx="6" fill="#FF8A00" fillOpacity="0.2" />
        <rect x="272" y="249" width="30" height="30" rx="6" fill="#FF8A00" fillOpacity="0.15" />
        <rect x="387" y="249" width="30" height="30" rx="6" fill="#FF8A00" fillOpacity="0.1" />
        <rect x="42" y="284" width="76" height="5" rx="2.5" fill="white" fillOpacity="0.1" />
        <rect x="157" y="284" width="76" height="5" rx="2.5" fill="white" fillOpacity="0.07" />
        <rect x="272" y="284" width="76" height="5" rx="2.5" fill="white" fillOpacity="0.06" />
        <rect x="387" y="284" width="76" height="5" rx="2.5" fill="white" fillOpacity="0.05" />
    </svg>
);

const features = [
    { title: "Rendimiento Top", desc: "Carga en menos de 1 segundo. No perderás ni un cliente por lentitud.", icon: Rocket },
    { title: "Diseño Adaptable", desc: "Perfecta en móvil, tablet y escritorio. El 70% del tráfico viene del móvil.", icon: Layout },
    { title: "Código Limpio", desc: "Next.js 15 con TypeScript. Seguridad, escalabilidad y mantenimiento sencillo.", icon: Code },
    { title: "Crece tus Ventas", desc: "Una web rápida y persuasiva convierte visitantes en clientes reales.", icon: TrendingUp },
];

const process = [
    { step: "01", title: "Briefing", desc: "Entendemos tu negocio, tu público y tus objetivos en Soria." },
    { step: "02", title: "Diseño", desc: "Prototipo visual aprobado por ti antes de escribir una línea de código." },
    { step: "03", title: "Desarrollo", desc: "Construcción con Next.js 15, SEO integrado y optimización de velocidad." },
    { step: "04", title: "Lanzamiento", desc: "Tu web en producción en Vercel. Velocidad global, gestión local." },
];

export default function WebServiceClient() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-neon-orange/30 selection:text-neon-orange">
            <Navbar />
            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Hero */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
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
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contacto" className="inline-flex items-center gap-2 bg-neon-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-orange transition-all neon-border">
                                    Solicitar presupuesto <ArrowRight size={20} />
                                </Link>
                                <Link href="/precios" className="inline-flex items-center gap-2 glass text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all border border-white/10">
                                    Ver precios
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative">
                            <div className="absolute inset-0 bg-neon-orange/8 rounded-3xl blur-[50px]" />
                            <div className="relative glass rounded-3xl border border-white/10 overflow-hidden shadow-2xl p-4 aspect-video flex items-center justify-center">
                                <BrowserIllustration />
                            </div>
                        </motion.div>
                    </div>

                    {/* Proceso */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32">
                        <h2 className="font-outfit text-4xl font-bold mb-16 text-center">Nuestro <span className="text-neon-orange">proceso</span></h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            {process.map((p, i) => (
                                <div key={i} className="relative">
                                    {i < process.length - 1 && (
                                        <div className="hidden md:block absolute top-8 left-full w-full h-[1px] bg-gradient-to-r from-neon-orange/30 to-transparent z-0" />
                                    )}
                                    <div className="glass p-8 rounded-2xl border border-white/5 hover:border-neon-orange/20 transition-all relative z-10">
                                        <div className="font-outfit text-4xl font-bold text-neon-orange/20 mb-4">{p.step}</div>
                                        <h3 className="font-outfit text-xl font-bold mb-3">{p.title}</h3>
                                        <p className="text-text-slate text-sm leading-relaxed">{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Características */}
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
                        <h3 className="font-outfit text-3xl font-bold mb-4">¿Tu negocio merece una web que trabaje por ti?</h3>
                        <p className="text-text-slate text-lg mb-8 max-w-xl mx-auto">Analizamos tu situación actual de forma gratuita y te decimos exactamente qué necesitas.</p>
                        <Link href="/contacto" className="inline-flex items-center gap-2 bg-neon-orange text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-secondary-orange transition-all neon-border">
                            Auditoría Gratuita <ArrowRight size={22} />
                        </Link>
                        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-text-slate">
                            {["Sin compromiso", "Respuesta en 24h", "Presencial en Soria"].map((item) => (
                                <span key={item} className="flex items-center gap-2">
                                    <CheckCircle2 size={14} className="text-neon-orange" /> {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
