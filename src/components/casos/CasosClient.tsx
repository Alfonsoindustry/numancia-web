"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    TrendingUp,
    MapPin,
    Zap,
    FileText,
    Database,
    Globe,
    CheckCircle,
    Clock,
    BarChart3,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Servicios prestados ─── */
const servicios = [
    {
        icono: FileText,
        titulo: "Informes de facturación automatizados",
        descripcion:
            "Generación automática de informes mensuales y anuales de facturación completos: ventas por categoría, tendencias, comparativas interanuales y exportación directa a PDF y Excel. Cero trabajo manual.",
        color: "text-blue-400",
        bg: "bg-blue-400/10 border-blue-400/20",
    },
    {
        icono: Zap,
        titulo: "Automatizaciones de negocio",
        descripcion:
            "Flujos automatizados para albaranes, recordatorios de revisiones ópticas, gestión de garantías de monturas y seguimiento de pedidos a proveedores. El equipo se enfoca en el cliente, no en el papeleo.",
        color: "text-purple-400",
        bg: "bg-purple-400/10 border-purple-400/20",
    },
    {
        icono: Database,
        titulo: "Programa de ingesta de productos",
        descripcion:
            "Aplicación a medida para la incorporación masiva y sencilla de nuevos productos al catálogo: lectura de hojas de datos de proveedor, normalización automática y volcado directo al sistema de gestión.",
        color: "text-cyan-400",
        bg: "bg-cyan-400/10 border-cyan-400/20",
    },
    {
        icono: Globe,
        titulo: "Mejoras continuas en la web",
        descripcion:
            "Optimización de rendimiento, nuevas secciones de catálogo online, integración con Google Business Profile y mejoras de SEO local para ganar visibilidad en búsquedas de óptica en Soria.",
        color: "text-green-400",
        bg: "bg-green-400/10 border-green-400/20",
    },
];

/* ─── Métricas destacadas ─── */
const metricas = [
    { valor: "12h", label: "ahorradas por semana", icono: Clock },
    { valor: "500+", label: "productos migrados", icono: Database },
    { valor: "100%", label: "informes automatizados", icono: BarChart3 },
    { valor: "0", label: "errores en facturación", icono: CheckCircle },
];

/* ─── Línea de tiempo del proyecto ─── */
const timeline = [
    { fase: "Análisis", descripcion: "Auditoría de procesos existentes, identificación de cuellos de botella y priorización de automatizaciones con mayor impacto." },
    { fase: "Automatización", descripcion: "Desarrollo de los flujos de informes mensuales/anuales, automatización de recordatorios y gestión documental." },
    { fase: "Ingesta de datos", descripcion: "Programa personalizado para la carga masiva de productos desde catálogos de proveedores. Migración de 500+ referencias." },
    { fase: "Web & SEO", descripcion: "Mejoras de rendimiento, nuevas secciones y optimización local para búsquedas de óptica en Soria y provincia." },
];

/* ─── Componente principal ─── */
export default function CasosClient() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-neon-orange/30 selection:text-neon-orange overflow-x-hidden">
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* ── HERO ── */}
                    <div className="text-center mb-24 relative">
                        <div
                            aria-hidden="true"
                            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
                            style={{ background: "radial-gradient(ellipse, rgba(255,138,0,0.08) 0%, transparent 70%)" }}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-orange/30 bg-neon-orange/5 text-neon-orange text-xs font-bold uppercase tracking-widest mb-6"
                        >
                            <MapPin size={12} />
                            Caso real · Soria
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-outfit text-5xl md:text-7xl font-bold mb-6 leading-tight"
                        >
                            Proyectos que{" "}
                            <br />
                            <span className="text-neon-orange neon-glow">hablan por sí solos</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-text-slate text-lg max-w-2xl mx-auto leading-relaxed"
                        >
                            Resultados reales con negocios de Soria. Sin humo, sin promesas vacías.
                            Aquí están los números que importan.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45 }}
                            className="inline-flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10"
                        >
                            {[
                                { icono: TrendingUp, texto: "Resultados medibles" },
                                { icono: MapPin, texto: "100% negocios de Soria" },
                                { icono: Globe, texto: "Presencia digital garantizada" },
                            ].map(({ icono: Icono, texto }) => (
                                <span key={texto} className="flex items-center gap-2 text-sm text-white/60">
                                    <Icono size={14} className="text-neon-orange" />
                                    {texto}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* ── CASO: ÓPTICA PERLADO ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mb-28"
                    >
                        {/* Cabecera del caso */}
                        <div className="glass rounded-[3rem] border border-white/5 overflow-hidden">

                            {/* Foto hero */}
                            <div className="relative w-full h-72 md:h-96 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1400&q=80&auto=format&fit=crop"
                                    alt="Óptica Perlado Soria"
                                    fill
                                    className="object-cover"
                                    sizes="100vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />

                                {/* Badge cliente */}
                                <div className="absolute top-6 left-6">
                                    <span className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border border-neon-orange/40 bg-neon-orange/10 text-neon-orange backdrop-blur-sm">
                                        <CheckCircle size={12} />
                                        Cliente activo
                                    </span>
                                </div>

                                {/* Nombre sobre la foto */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                                    <p className="text-neon-orange text-sm font-bold uppercase tracking-widest mb-2">
                                        Óptica · Soria capital
                                    </p>
                                    <h2 className="font-outfit text-4xl md:text-6xl font-bold leading-tight">
                                        Óptica Perlado
                                    </h2>
                                </div>
                            </div>

                            {/* Métricas */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-b border-white/5">
                                {metricas.map((m, i) => {
                                    const Icono = m.icono;
                                    return (
                                        <motion.div
                                            key={m.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className={`p-8 text-center ${i < 3 ? "border-r border-white/5" : ""} ${i < 2 ? "border-b border-white/5 md:border-b-0" : ""}`}
                                        >
                                            <Icono size={20} className="text-neon-orange mx-auto mb-3 opacity-70" />
                                            <div className="font-outfit text-3xl md:text-4xl font-bold text-neon-orange neon-glow mb-1">
                                                {m.valor}
                                            </div>
                                            <div className="text-text-slate text-xs leading-tight">{m.label}</div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Descripción general */}
                            <div className="p-8 md:p-12 border-b border-white/5">
                                <p className="text-text-slate text-lg leading-relaxed max-w-3xl">
                                    Óptica Perlado lleva años siendo un referente en Soria. Cuando llegaron a nosotros,
                                    gestionaban la facturación, los pedidos y el catálogo de producto de forma manual,
                                    con hojas de cálculo y procesos que consumían horas cada semana.
                                    Hoy, sus procesos clave son automáticos y su equipo dedica ese tiempo a lo que
                                    realmente importa: atender a sus clientes.
                                </p>
                            </div>

                            {/* Servicios en detalle */}
                            <div className="p-8 md:p-12">
                                <h3 className="font-outfit text-2xl font-bold mb-8">
                                    Qué hemos hecho
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {servicios.map((s, i) => {
                                        const Icono = s.icono;
                                        return (
                                            <motion.div
                                                key={s.titulo}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                                className={`p-6 rounded-2xl border ${s.bg} flex gap-4`}
                                            >
                                                <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${s.bg}`}>
                                                    <Icono size={18} className={s.color} />
                                                </div>
                                                <div>
                                                    <h4 className={`font-outfit font-bold mb-2 ${s.color}`}>
                                                        {s.titulo}
                                                    </h4>
                                                    <p className="text-text-slate text-sm leading-relaxed">
                                                        {s.descripcion}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Línea de tiempo */}
                            <div className="p-8 md:p-12 border-t border-white/5 bg-white/[0.02]">
                                <h3 className="font-outfit text-2xl font-bold mb-8">
                                    Cómo lo hicimos
                                </h3>
                                <div className="relative">
                                    {/* Línea vertical */}
                                    <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-gradient-to-b from-neon-orange via-neon-orange/30 to-transparent hidden md:block" />
                                    <div className="space-y-8 md:pl-14">
                                        {timeline.map((item, i) => (
                                            <motion.div
                                                key={item.fase}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.12 }}
                                                className="relative flex gap-4 items-start"
                                            >
                                                {/* Punto en la línea */}
                                                <div className="hidden md:flex absolute -left-[3.15rem] top-1 w-4 h-4 rounded-full bg-neon-orange border-4 border-[#0A0A0A] shrink-0" />
                                                <div>
                                                    <span className="inline-block text-xs font-bold text-neon-orange uppercase tracking-widest mb-1">
                                                        {item.fase}
                                                    </span>
                                                    <p className="text-text-slate text-sm leading-relaxed">
                                                        {item.descripcion}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Quote del cliente */}
                            <div className="p-8 md:p-12 border-t border-white/5">
                                <div className="relative p-8 rounded-2xl bg-neon-orange/5 border border-neon-orange/15">
                                    <span className="absolute top-4 left-6 text-6xl text-neon-orange/20 font-serif leading-none select-none">
                                        "
                                    </span>
                                    <p className="text-lg text-white/80 leading-relaxed relative z-10 pt-4">
                                        Lo que antes nos llevaba media mañana del viernes ahora está listo
                                        automáticamente cada primer día del mes. El programa de productos
                                        nos ha ahorrado semanas de trabajo al año.
                                    </p>
                                    <p className="text-neon-orange text-sm font-bold mt-4">
                                        — Equipo de Óptica Perlado, Soria
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── CTA FINAL ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative text-center rounded-[3rem] overflow-hidden"
                    >
                        <div className="absolute inset-0 glass border border-neon-orange/20 bg-gradient-to-br from-neon-orange/8 via-transparent to-neon-orange/4 rounded-[3rem]" />
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 rounded-[3rem] pointer-events-none"
                            style={{ boxShadow: "inset 0 0 80px rgba(255,138,0,0.06)" }}
                        />
                        <div
                            aria-hidden="true"
                            className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full pointer-events-none"
                            style={{ background: "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 70%)" }}
                        />

                        <div className="relative z-10 p-12 md:p-16">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-orange/30 bg-neon-orange/5 text-neon-orange text-xs font-bold uppercase tracking-widest mb-6"
                            >
                                <TrendingUp size={12} />
                                El siguiente caso puedes ser tú
                            </motion.div>

                            <h3 className="font-outfit text-4xl md:text-5xl font-bold mb-5 leading-tight">
                                ¿Tu negocio es{" "}
                                <span className="text-neon-orange neon-glow">el próximo?</span>
                            </h3>

                            <p className="text-text-slate text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                                Analizamos tus procesos de forma gratuita y te decimos exactamente
                                qué podemos automatizar para que recuperes tiempo y reduzcas errores.
                            </p>

                            <motion.div
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 350 }}
                                className="inline-block"
                            >
                                <Link
                                    href="/contacto"
                                    className="inline-flex items-center gap-3 bg-neon-orange text-white px-12 py-5 rounded-2xl font-bold text-xl neon-border hover:bg-secondary-orange transition-colors duration-300"
                                >
                                    Solicitar auditoría gratuita
                                    <ArrowRight size={22} />
                                </Link>
                            </motion.div>

                            <p className="text-text-slate/60 text-xs mt-5">
                                Sin compromiso · Te respondemos en menos de 24 h · Presencial en Soria
                            </p>
                        </div>
                    </motion.div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
