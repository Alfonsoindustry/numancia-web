"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, FileText, Clock, ArrowRight, CheckCircle2, RefreshCw, Database } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const AutomationIllustration = () => (
    <svg viewBox="0 0 500 340" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Fondo */}
        <rect x="10" y="10" width="480" height="320" rx="16" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.15" fill="#0B1120" />

        {/* Flujo de automatización */}
        {/* Paso 1: Entrada (Cliente) */}
        <rect x="28" y="60" width="100" height="60" rx="10" fill="#FF8A00" fillOpacity="0.15" stroke="#FF8A00" strokeWidth="1.5" strokeOpacity="0.5" />
        <text x="78" y="85" textAnchor="middle" fill="#FF8A00" fontSize="9" fontFamily="sans-serif" fontWeight="bold">CLIENTE</text>
        <text x="78" y="99" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif" fillOpacity="0.6">Hace pedido</text>
        <rect x="52" y="106" width="52" height="8" rx="3" fill="#FF8A00" fillOpacity="0.3" />

        {/* Flecha 1 */}
        <path d="M 128 90 L 165 90" stroke="#FF8A00" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="4 3" />
        <polygon points="165,86 172,90 165,94" fill="#FF8A00" fillOpacity="0.6" />

        {/* Paso 2: Sistema */}
        <rect x="172" y="60" width="100" height="60" rx="10" fill="#FF8A00" fillOpacity="0.08" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.3" />
        <text x="222" y="85" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="bold" fillOpacity="0.8">SISTEMA</text>
        <text x="222" y="99" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif" fillOpacity="0.5">Procesa auto</text>
        {/* Gear icon simulado */}
        <circle cx="222" cy="76" r="6" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.5" />

        {/* Flecha 2 */}
        <path d="M 272 90 L 309 90" stroke="#FF8A00" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="4 3" />
        <polygon points="309,86 316,90 309,94" fill="#FF8A00" fillOpacity="0.6" />

        {/* Paso 3: Factura */}
        <rect x="316" y="60" width="100" height="60" rx="10" fill="#FF8A00" fillOpacity="0.08" stroke="#FF8A00" strokeWidth="1" strokeOpacity="0.3" />
        <text x="366" y="85" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="bold" fillOpacity="0.8">FACTURA</text>
        <text x="366" y="99" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif" fillOpacity="0.5">Enviada auto</text>

        {/* Separador */}
        <rect x="20" y="140" width="460" height="1" fill="white" fillOpacity="0.06" />

        {/* Panel de gestión */}
        <text x="250" y="165" textAnchor="middle" fill="white" fontSize="11" fontFamily="sans-serif" fontWeight="bold" fillOpacity="0.6">Panel de control en tiempo real</text>

        {/* Tarjetas métricas */}
        <rect x="28" y="176" width="100" height="70" rx="10" fill="#FF8A00" fillOpacity="0.08" stroke="#FF8A00" strokeWidth="0.8" strokeOpacity="0.25" />
        <text x="78" y="200" textAnchor="middle" fill="#FF8A00" fontSize="20" fontFamily="sans-serif" fontWeight="bold">€2.4K</text>
        <text x="78" y="216" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif" fillOpacity="0.45">Ingresos mes</text>
        <text x="78" y="236" textAnchor="middle" fill="#22c55e" fontSize="8" fontFamily="sans-serif">▲ +12%</text>

        <rect x="140" y="176" width="100" height="70" rx="10" fill="#FF8A00" fillOpacity="0.05" stroke="#FF8A00" strokeWidth="0.5" strokeOpacity="0.2" />
        <text x="190" y="200" textAnchor="middle" fill="white" fontSize="20" fontFamily="sans-serif" fontWeight="bold" fillOpacity="0.7">34</text>
        <text x="190" y="216" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif" fillOpacity="0.4">Facturas emitidas</text>

        <rect x="252" y="176" width="100" height="70" rx="10" fill="#FF8A00" fillOpacity="0.05" stroke="#FF8A00" strokeWidth="0.5" strokeOpacity="0.2" />
        <text x="302" y="200" textAnchor="middle" fill="white" fontSize="20" fontFamily="sans-serif" fontWeight="bold" fillOpacity="0.7">-80%</text>
        <text x="302" y="216" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif" fillOpacity="0.4">Tiempo manual</text>
        <text x="302" y="236" textAnchor="middle" fill="#22c55e" fontSize="8" fontFamily="sans-serif">Ahorrado</text>

        <rect x="364" y="176" width="110" height="70" rx="10" fill="#FF8A00" fillOpacity="0.05" stroke="#FF8A00" strokeWidth="0.5" strokeOpacity="0.2" />
        <text x="419" y="200" textAnchor="middle" fill="white" fontSize="20" fontFamily="sans-serif" fontWeight="bold" fillOpacity="0.7">∞</text>
        <text x="419" y="216" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif" fillOpacity="0.4">Escalabilidad</text>
        <text x="419" y="236" textAnchor="middle" fill="#FF8A00" fontSize="8" fontFamily="sans-serif">Sin límites</text>

        {/* Footer del panel */}
        <rect x="28" y="260" width="444" height="50" rx="10" fill="#FF8A00" fillOpacity="0.06" stroke="#FF8A00" strokeWidth="0.5" strokeOpacity="0.2" />
        <circle cx="46" cy="285" r="6" fill="#22c55e" fillOpacity="0.8" />
        <text x="60" y="289" fill="white" fontSize="9" fontFamily="sans-serif" fillOpacity="0.6">Sistema activo · Próxima factura: automática · Sin intervención manual</text>
    </svg>
);

const features = [
    { title: "Facturación Auto", desc: "Genera y envía facturas a tus clientes automáticamente sin tocar un papel.", icon: FileText },
    { title: "Seguridad Total", desc: "Tus datos siempre a buen recaudo y cumpliendo el RGPD europeo.", icon: ShieldCheck },
    { title: "Ahorro de Horas", desc: "Reduce en un 80% el tiempo dedicado a tareas repetitivas y administrativas.", icon: Clock },
    { title: "Todo en la Nube", desc: "Accede a toda tu información desde el móvil, desde cualquier lugar.", icon: Database },
];

export default function OfficeServiceClient() {
    return (
        <div className="min-h-screen bg-[#0B1120] text-white selection:bg-neon-orange/30 selection:text-neon-orange">
            <Navbar />
            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Hero */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-orange/20 text-neon-orange text-sm font-bold mb-6">
                                <Zap size={16} /> OFIMÁTICA Y AUTOMATIZACIÓN
                            </div>
                            <h1 className="font-outfit text-5xl md:text-7xl font-bold mb-8 leading-tight">
                                Automatización <br />
                                <span className="text-neon-orange neon-glow">que libera tiempo</span>
                            </h1>
                            <p className="text-text-slate text-lg md:text-xl leading-relaxed mb-10">
                                Deja de pelearte con Excel y facturas en papel. Automatizamos tus procesos administrativos para que gestiones tu negocio desde cualquier lugar con un solo clic.
                            </p>
                            <Link href="/contacto" className="inline-flex items-center gap-2 bg-neon-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-orange transition-all neon-border">
                                Automatizar mi negocio <ArrowRight size={20} />
                            </Link>
                            <p className="mt-4 text-text-slate text-sm">
                                Análisis gratuito de tus procesos actuales · Sin compromiso
                            </p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative">
                            <div className="absolute inset-0 bg-neon-orange/8 rounded-3xl blur-[50px]" />
                            <div className="relative glass rounded-3xl border border-white/10 overflow-hidden shadow-2xl p-4 aspect-video flex items-center justify-center">
                                <AutomationIllustration />
                            </div>
                        </motion.div>
                    </div>

                    {/* Qué automatizamos */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="glass p-12 rounded-[3rem] border border-white/5 mb-24 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Zap size={240} />
                        </div>
                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="font-outfit text-4xl font-bold mb-6">Potencia tu negocio con <span className="text-neon-orange">IA</span></h2>
                                <p className="text-text-slate text-lg leading-relaxed">
                                    Implementamos herramientas de Inteligencia Artificial y flujos automatizados que eliminan las tareas manuales propensas a errores. Desde la gestión de inventario hasta la respuesta automática a clientes.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Facturación automática con Stripe integrado",
                                    "Gestión de citas y reservas online",
                                    "Respuestas automáticas a clientes por WhatsApp",
                                    "Informes de ventas en tiempo real",
                                    "Digitalización de documentos en papel",
                                    "Google Workspace o Microsoft 365 configurado",
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
                        <h3 className="font-outfit text-3xl font-bold mb-4">¿Cuántas horas pierdes en tareas repetitivas cada semana?</h3>
                        <p className="text-text-slate text-lg mb-8 max-w-xl mx-auto">Las automatizamos en menos de 48 horas. Cuéntanos tu proceso y te decimos cómo.</p>
                        <Link href="/contacto" className="inline-flex items-center gap-2 bg-neon-orange text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-secondary-orange transition-all neon-border">
                            Automatizar mi negocio <ArrowRight size={22} />
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
