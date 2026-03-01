"use client";

import { motion } from "framer-motion";
import { Search, MapPin, BarChart3, Target, ArrowRight, TrendingUp, CheckCircle2, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const SeoIllustration = () => (
    <svg viewBox="0 0 500 340" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Google SERP simulado */}
        <rect x="10" y="10" width="480" height="320" rx="16" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.2" fill="#0B1120" />
        {/* Barra de búsqueda */}
        <rect x="30" y="24" width="440" height="36" rx="18" fill="white" fillOpacity="0.05" stroke="white" strokeWidth="0.8" strokeOpacity="0.1" />
        <circle cx="54" cy="42" r="8" stroke="#FF8A00" strokeWidth="1.5" strokeOpacity="0.5" />
        <line x1="60" y1="48" x2="66" y2="54" stroke="#FF8A00" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
        <rect x="72" y="38" width="180" height="8" rx="4" fill="white" fillOpacity="0.15" />
        {/* Resultado #1 (destacado con naranja) */}
        <rect x="20" y="72" width="460" height="70" rx="12" fill="#FF8A00" fillOpacity="0.08" stroke="#FF8A00" strokeWidth="1.5" strokeOpacity="0.4" />
        <rect x="36" y="86" width="6" height="6" rx="1" fill="#FF8A00" />
        <text x="50" y="94" fill="#FF8A00" fontSize="10" fontFamily="sans-serif" fontWeight="bold" fillOpacity="0.9">Tu Negocio Soria · numanciadigital.es</text>
        <rect x="36" y="100" width="280" height="8" rx="3" fill="white" fillOpacity="0.7" />
        <rect x="36" y="114" width="220" height="6" rx="3" fill="white" fillOpacity="0.3" />
        <rect x="36" y="124" width="260" height="6" rx="3" fill="white" fillOpacity="0.2" />
        {/* Badge #1 */}
        <rect x="390" y="82" width="76" height="54" rx="8" fill="#FF8A00" fillOpacity="0.15" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.4" />
        <text x="428" y="106" textAnchor="middle" fill="#FF8A00" fontSize="18" fontFamily="sans-serif" fontWeight="bold">#1</text>
        <text x="428" y="122" textAnchor="middle" fill="#FF8A00" fontSize="8" fontFamily="sans-serif">en Soria</text>
        {/* Resultado #2 */}
        <rect x="20" y="154" width="460" height="55" rx="10" fill="white" fillOpacity="0.02" stroke="white" strokeWidth="0.5" strokeOpacity="0.08" />
        <rect x="36" y="166" width="200" height="7" rx="3" fill="white" fillOpacity="0.2" />
        <rect x="36" y="179" width="300" height="5" rx="2.5" fill="white" fillOpacity="0.1" />
        <rect x="36" y="190" width="250" height="5" rx="2.5" fill="white" fillOpacity="0.07" />
        {/* Resultado #3 */}
        <rect x="20" y="220" width="460" height="55" rx="10" fill="white" fillOpacity="0.02" stroke="white" strokeWidth="0.5" strokeOpacity="0.05" />
        <rect x="36" y="232" width="220" height="7" rx="3" fill="white" fillOpacity="0.12" />
        <rect x="36" y="245" width="280" height="5" rx="2.5" fill="white" fillOpacity="0.07" />
        <rect x="36" y="256" width="200" height="5" rx="2.5" fill="white" fillOpacity="0.05" />
        {/* Estrellas en resultado #1 */}
        {[0, 1, 2, 3, 4].map((s) => (
            <polygon key={s} points={`${340 + s * 12},88 ${342 + s * 12},83 ${344 + s * 12},88 ${339 + s * 12},85 ${345 + s * 12},85`}
                fill="#FF8A00" fillOpacity="0.8" />
        ))}
        {/* Flecha indicando subida */}
        <polyline points="470,290 470,280 460,285" stroke="#22c55e" strokeWidth="2" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" />
        <text x="445" y="308" fill="#22c55e" fontSize="9" fontFamily="sans-serif" fillOpacity="0.7">+87%</text>
    </svg>
);

const features = [
    { title: "Google Maps", desc: "Aparece en el 'Local Pack' cuando busquen negocios cerca de ellos en Soria.", icon: MapPin },
    { title: "Análisis de Datos", desc: "Informes mensuales claros sobre cuántos clientes te han llamado gracias a Google.", icon: BarChart3 },
    { title: "Palabras Clave", desc: "Qué busca exactamente la gente en Soria y cómo posicionarte para capturarlos.", icon: Target },
    { title: "Crecimiento Continuo", desc: "El SEO no es un sprint, es una maratón. Mejoramos mes a mes de forma consistente.", icon: TrendingUp },
];

export default function SeoServiceClient() {
    return (
        <div className="min-h-screen bg-[#0B1120] text-white selection:bg-neon-orange/30 selection:text-neon-orange">
            <Navbar />
            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Hero */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-orange/20 text-neon-orange text-sm font-bold mb-6">
                                <Search size={16} /> SEO LOCAL SORIA
                            </div>
                            <h1 className="font-outfit text-5xl md:text-7xl font-bold mb-8 leading-tight">
                                Posicionamiento <br />
                                <span className="text-neon-orange neon-glow">local en Soria</span>
                            </h1>
                            <p className="text-text-slate text-lg md:text-xl leading-relaxed mb-10">
                                Cuando alguien busca tu producto o servicio en Soria, tienes que estar ahí. Optimizamos tu presencia en Google Maps y Google Search para que seas la opción #1 de tus vecinos.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contacto" className="inline-flex items-center gap-2 bg-neon-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-orange transition-all neon-border">
                                    Auditoría SEO gratis <ArrowRight size={20} />
                                </Link>
                            </div>
                            {/* Stats rápidos */}
                            <div className="flex gap-8 mt-10">
                                <div>
                                    <div className="font-outfit text-3xl font-bold text-neon-orange">+87%</div>
                                    <div className="text-text-slate text-sm">Visibilidad media conseguida</div>
                                </div>
                                <div>
                                    <div className="font-outfit text-3xl font-bold text-neon-orange">3 meses</div>
                                    <div className="text-text-slate text-sm">Para ver resultados reales</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative">
                            <div className="absolute inset-0 bg-neon-orange/8 rounded-3xl blur-[50px]" />
                            <div className="relative glass rounded-3xl border border-white/10 overflow-hidden shadow-2xl p-4 aspect-video flex items-center justify-center">
                                <SeoIllustration />
                            </div>
                        </motion.div>
                    </div>

                    {/* Qué incluye */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="glass p-12 rounded-[3rem] border border-white/5 mb-24 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Target size={240} />
                        </div>
                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="font-outfit text-4xl font-bold mb-6">Visibilidad que <span className="text-neon-orange">convierte</span></h2>
                                <p className="text-text-slate text-lg leading-relaxed">
                                    El SEO local no es solo aparecer en Google; es aparecer ante los clientes que ya están listos para comprar en Soria. Optimizamos tu ficha de Google Business Profile y tu contenido para que tu nombre sea el primero que vean.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Optimización Google Business Profile",
                                    "Auditoría técnica SEO completa",
                                    "Estrategia de keywords locales",
                                    "Link building local (directorios, prensa soriana)",
                                    "Informe mensual de posicionamiento",
                                    "Optimización de reseñas y reputación online",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-white/80">
                                        <CheckCircle2 size={18} className="text-neon-orange shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
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
                        <h3 className="font-outfit text-3xl font-bold mb-4">¿Cuántos clientes estás perdiendo en Google ahora mismo?</h3>
                        <p className="text-text-slate text-lg mb-8 max-w-xl mx-auto">Te mostramos exactamente dónde estás en Soria y qué haremos para llevarte al top.</p>
                        <Link href="/contacto" className="inline-flex items-center gap-2 bg-neon-orange text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-secondary-orange transition-all neon-border">
                            Auditoría SEO Gratuita <ArrowRight size={22} />
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
