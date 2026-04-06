"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    Check, X, ArrowRight, Shield, Zap, Star, ChevronDown, ChevronUp,
    Globe, MapPin, Mail, Headphones, Lock, ShoppingCart, BarChart2,
    Share2, FileText, Bot, Clock, Layers, RefreshCw, BadgeCheck
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

/* ─── Datos de planes ─── */
const plans = [
    {
        name: "Paquete Base",
        price: "1.000",
        pricePerMonth: "83",
        period: "/año",
        desc: "Para el comercio que necesita empezar con fuerza.",
        features: [
            { text: "Página Web (Landing Page de alto rendimiento)", icon: Globe },
            { text: "SEO Local base (Google Maps + Google Search)", icon: MapPin },
            { text: "Hasta 3 cuentas de correo corporativo", icon: Mail },
            { text: "Soporte técnico Kilómetro Cero", icon: Headphones },
            { text: "Hosting incluido por 1 año", icon: Lock },
            { text: "Certificado SSL (HTTPS)", icon: BadgeCheck },
        ],
        cta: "Empezar con Base",
        highlight: false,
    },
    {
        name: "Paquete Premium",
        price: "1.200",
        pricePerMonth: "100",
        period: "/año",
        desc: "La solución total para dominar el mercado soriano.",
        features: [
            { text: "Web corporativa completa (todas las páginas)", icon: Layers },
            { text: "SEO Local avanzado + informe mensual", icon: BarChart2 },
            { text: "Gestión de ventas online (e-commerce opcional)", icon: ShoppingCart },
            { text: "Gestión de Redes Sociales (Instagram + Facebook)", icon: Share2 },
            { text: "Ofimática y digitalización de procesos", icon: FileText },
            { text: "Sistema de automatización de citas y facturas", icon: Bot },
            { text: "Soporte prioritario 24/7", icon: Headphones },
            { text: "Estrategia de contenidos anual", icon: RefreshCw },
            { text: "Soluciones digitales a medida", icon: Star },
        ],
        cta: "Dar el salto Premium",
        highlight: true,
    },
];

/* ─── FAQ data ─── */
const faqs = [
    {
        q: "¿Por qué sois tan baratos comparado con otras agencias?",
        a: "No somos baratos, somos eficientes. Eliminamos los costes que inflan el precio de las agencias tradicionales: alquileres de oficina, personal infrautilizado y software antiguo. Usamos tecnología moderna (Next.js, Supabase, Vercel) que nos permite ofrecer el mismo resultado o mejor a una fracción del coste.",
    },
    {
        q: "¿Cuánto tarda en estar lista mi web?",
        a: "Una landing page o web básica está publicada en 48-72 horas desde que nos das el material (logo, textos, fotos). Una web corporativa completa en 7-14 días. Siempre con revisiones hasta que estés satisfecho.",
    },
    {
        q: "¿Qué pasa con el Plan Base después del primer año?",
        a: "Al año, el hosting pasa a costar desde 200€/año. También puedes contratar nuestro mantenimiento mensual (desde 200€/mes) que incluye actualizaciones, seguridad, SEO continuo y soporte técnico.",
    },
    {
        q: "¿Podéis desplazaros a mi negocio en Soria?",
        a: "Sí, nos movemos por toda la provincia. La reunión inicial y las revisiones clave las hacemos presencialmente si lo prefieres. Somos locales, ese es nuestro mayor valor.",
    },
    {
        q: "¿Necesito saber de tecnología para trabajar con vosotros?",
        a: "Para nada. Nos encargamos de todo. Solo necesitas tener claro qué quieres para tu negocio. El resto es cosa nuestra.",
    },
    {
        q: "¿Tengo que firmar permanencia en el Plan Premium?",
        a: "Ambos planes tienen facturación anual. Si en algún momento necesitas pausar o cancelar, hablamos directamente. No creemos en las cláusulas de permanencia abusivas; si nos quedamos contigo es porque estás contento con los resultados.",
    },
];

/* ─── Tabla comparativa ─── */
const comparisonRows: [string, boolean, boolean][] = [
    ["Velocidad < 1 segundo (Next.js 15)", false, true],
    ["Precio desde 200€/mes", false, true],
    ["Visita presencial en Soria", false, true],
    ["Tecnología moderna (Next.js + Supabase)", false, true],
    ["Entrega en 48-72 horas", false, true],
    ["Informe SEO mensual y detallado", false, true],
];

/* ─── FAQ Item ─── */
function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            className="border-b border-white/5 py-6 cursor-pointer group"
            onClick={() => setOpen(!open)}
        >
            <div className="flex items-center justify-between gap-4">
                <h4 className="font-outfit font-bold text-lg group-hover:text-neon-orange transition-colors">
                    {q}
                </h4>
                {open ? (
                    <ChevronUp className="text-neon-orange shrink-0" size={20} />
                ) : (
                    <ChevronDown className="text-white/30 shrink-0 group-hover:text-neon-orange transition-colors" size={20} />
                )}
            </div>
            <AnimatePresence>
                {open && (
                    <motion.p
                        key="answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-text-slate mt-4 leading-relaxed overflow-hidden"
                    >
                        {a}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}

/* ─── Main Component ─── */
export default function PreciosClient() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-neon-orange/30 selection:text-neon-orange overflow-x-hidden">
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* ── HEADER ── */}
                    <div className="text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-orange/30 bg-neon-orange/5 text-neon-orange text-xs font-bold uppercase tracking-widest mb-6"
                        >
                            <Star size={12} fill="#FF8A00" /> Precios para Soria, sin trampa ni cartón
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-outfit text-5xl md:text-7xl font-bold mb-6 leading-tight"
                        >
                            Precios honestos,{" "}
                            <br />
                            <span className="text-neon-orange neon-glow">compromiso en Soria</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-text-slate text-lg max-w-2xl mx-auto"
                        >
                            Sin letras pequeñas. Tecnología premium a precios adaptados a la realidad de nuestra provincia.
                        </motion.p>
                    </div>

                    {/* ── PLANES DE PRECIO ── */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-28">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                className="relative"
                            >
                                {/* Glow ring detrás del plan destacado */}
                                {plan.highlight && (
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
                                        style={{
                                            boxShadow:
                                                "0 0 60px 10px rgba(255,138,0,0.18), 0 0 120px 20px rgba(255,138,0,0.08)",
                                        }}
                                    />
                                )}

                                <div
                                    className={`relative p-10 rounded-[2.5rem] border glass flex flex-col h-full ${
                                        plan.highlight
                                            ? "border-neon-orange/60 bg-neon-orange/5"
                                            : "border-white/5 bg-white/[0.01]"
                                    }`}
                                >
                                    {/* Badge animado plan destacado */}
                                    {plan.highlight && (
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
                                            className="absolute top-0 right-10 -translate-y-1/2 flex items-center gap-1.5 bg-neon-orange text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_16px_rgba(255,138,0,0.6)]"
                                        >
                                            <motion.span
                                                animate={{ rotate: [0, 15, -15, 0] }}
                                                transition={{ repeat: Infinity, duration: 2.5, delay: 1 }}
                                                className="inline-block"
                                            >
                                                <Star size={11} fill="white" />
                                            </motion.span>
                                            Más Popular
                                        </motion.div>
                                    )}

                                    {/* Nombre y descripción */}
                                    <div className="mb-6">
                                        <h3
                                            className={`font-outfit text-2xl font-bold mb-2 ${
                                                plan.highlight ? "text-neon-orange" : "text-white"
                                            }`}
                                        >
                                            {plan.name}
                                        </h3>
                                        <p className="text-text-slate text-sm">{plan.desc}</p>
                                    </div>

                                    {/* Precio principal */}
                                    <div className="mb-2">
                                        <div className="flex items-baseline gap-1">
                                            <span
                                                className={`font-outfit text-7xl font-bold leading-none ${
                                                    plan.highlight ? "text-neon-orange neon-glow" : "text-white"
                                                }`}
                                            >
                                                {plan.price}€
                                            </span>
                                            <span className="text-text-slate text-base ml-1">{plan.period}</span>
                                        </div>
                                        <p className="text-text-slate text-sm mt-2 font-medium">
                                            ({plan.pricePerMonth}€/mes aprox.)
                                        </p>
                                    </div>

                                    {/* Separador */}
                                    <div
                                        className={`w-full h-px my-8 ${
                                            plan.highlight
                                                ? "bg-gradient-to-r from-transparent via-neon-orange/50 to-transparent"
                                                : "bg-white/5"
                                        }`}
                                    />

                                    {/* Features con iconos */}
                                    <ul className="space-y-3.5 mb-10 flex-1">
                                        {plan.features.map((feature, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.05 * idx }}
                                                className="flex items-start gap-3 text-sm"
                                            >
                                                <div
                                                    className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center mt-0.5 ${
                                                        plan.highlight
                                                            ? "bg-neon-orange/15 border border-neon-orange/30"
                                                            : "bg-white/5 border border-white/10"
                                                    }`}
                                                >
                                                    <feature.icon
                                                        className={plan.highlight ? "text-neon-orange" : "text-white/50"}
                                                        size={14}
                                                    />
                                                </div>
                                                <span className="text-white/80 leading-relaxed">{feature.text}</span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <Link
                                        href="/contacto"
                                        className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-base transition-all duration-300 ${
                                            plan.highlight
                                                ? "bg-neon-orange text-white hover:bg-secondary-orange shadow-[0_0_28px_rgba(255,138,0,0.4)] hover:shadow-[0_0_40px_rgba(255,138,0,0.6)]"
                                                : "glass text-white hover:bg-white/5 border border-white/10 hover:border-neon-orange/30"
                                        }`}
                                    >
                                        {plan.cta}
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* ── GARANTÍAS ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-28"
                    >
                        <h2 className="font-outfit text-3xl font-bold text-center mb-12">
                            <span className="text-neon-orange">Lo que prometemos</span>, lo cumplimos
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: Shield,
                                    title: "Sin sorpresas",
                                    desc: "El precio acordado es el precio final. Sin costes ocultos ni extras inesperados.",
                                    color: "from-blue-500/10 to-transparent",
                                    borderColor: "border-blue-500/20",
                                    iconBg: "bg-blue-500/10 border-blue-500/20",
                                    iconColor: "text-blue-400",
                                },
                                {
                                    icon: Zap,
                                    title: "Entrega rápida",
                                    desc: "Tu web publicada en 48-72 horas. Sin esperas de semanas ni meses.",
                                    color: "from-neon-orange/10 to-transparent",
                                    borderColor: "border-neon-orange/20",
                                    iconBg: "bg-neon-orange/10 border-neon-orange/20",
                                    iconColor: "text-neon-orange",
                                },
                                {
                                    icon: BadgeCheck,
                                    title: "Satisfacción garantizada",
                                    desc: "Revisiones ilimitadas hasta que estés 100% satisfecho con el resultado.",
                                    color: "from-green-500/10 to-transparent",
                                    borderColor: "border-green-500/20",
                                    iconBg: "bg-green-500/10 border-green-500/20",
                                    iconColor: "text-green-400",
                                },
                            ].map((g, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.12 }}
                                    className={`glass p-8 rounded-2xl border ${g.borderColor} text-center hover:scale-[1.02] transition-transform duration-300 bg-gradient-to-b ${g.color}`}
                                >
                                    <div
                                        className={`w-16 h-16 ${g.iconBg} rounded-2xl border flex items-center justify-center mb-6 mx-auto`}
                                    >
                                        <g.icon className={g.iconColor} size={32} />
                                    </div>
                                    <h4 className="font-outfit text-xl font-bold mb-3">{g.title}</h4>
                                    <p className="text-text-slate text-sm leading-relaxed">{g.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── MANTENIMIENTO A MEDIDA ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-28 glass p-10 rounded-3xl border border-white/5 max-w-2xl mx-auto text-center"
                    >
                        <div className="w-12 h-12 bg-neon-orange/10 border border-neon-orange/20 rounded-xl flex items-center justify-center mx-auto mb-5">
                            <Clock className="text-neon-orange" size={24} />
                        </div>
                        <h4 className="font-outfit text-2xl font-bold mb-3 italic">¿Necesitas algo a medida?</h4>
                        <p className="text-text-slate text-base mb-2">
                            Mantenimiento mensual desde{" "}
                            <span className="text-white font-bold">200€/mes</span> con todo incluido.
                        </p>
                        <p className="text-text-slate text-sm mb-6">
                            Hosting, actualizaciones, seguridad, soporte técnico y mejoras continuas.
                        </p>
                        <Link
                            href="/contacto"
                            className="text-neon-orange font-bold hover:underline inline-flex items-center gap-2"
                        >
                            Habla con nosotros directamente <ArrowRight size={16} />
                        </Link>
                    </motion.div>

                    {/* ── TABLA COMPARATIVA ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-28"
                    >
                        <h2 className="font-outfit text-4xl font-bold text-center mb-4">
                            ¿Por qué{" "}
                            <span className="text-neon-orange neon-glow">5x más barato</span> no significa 5x peor?
                        </h2>
                        <p className="text-text-slate text-center mb-12 max-w-xl mx-auto">
                            Tecnología moderna, equipo local y cero burocracia. Eso marca la diferencia.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/5 glass">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-5 px-6 text-text-slate font-medium">
                                            Característica
                                        </th>
                                        <th className="text-center py-5 px-6 text-white/40 font-medium">
                                            Agencia tradicional
                                        </th>
                                        <th className="text-center py-5 px-6 text-neon-orange font-bold">
                                            Numancia Digital
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonRows.map(([feature, traditional, numancia], i) => (
                                        <motion.tr
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.07 }}
                                            className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                                        >
                                            <td className="py-4 px-6 text-white/70 font-medium">{feature}</td>
                                            <td className="text-center py-4 px-6">
                                                {traditional ? (
                                                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-500/10 border border-green-500/30">
                                                        <Check size={14} className="text-green-400" />
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-500/10 border border-red-500/20">
                                                        <X size={14} className="text-red-400/70" />
                                                    </span>
                                                )}
                                            </td>
                                            <td className="text-center py-4 px-6">
                                                {numancia ? (
                                                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-neon-orange/15 border border-neon-orange/40">
                                                        <Check size={14} className="text-neon-orange" />
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-500/10 border border-red-500/20">
                                                        <X size={14} className="text-red-400/70" />
                                                    </span>
                                                )}
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* ── FAQ ── */}
                    <div className="max-w-3xl mx-auto mb-28">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-text-slate text-xs font-bold uppercase tracking-widest mb-4">
                                FAQ
                            </span>
                            <h2 className="font-outfit text-4xl font-bold">
                                Preguntas frecuentes
                            </h2>
                        </motion.div>
                        <div className="glass rounded-2xl border border-white/5 px-6">
                            {faqs.map((faq, i) => (
                                <FaqItem key={i} q={faq.q} a={faq.a} />
                            ))}
                        </div>
                    </div>

                    {/* ── CTA FINAL ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative text-center rounded-[3rem] overflow-hidden"
                    >
                        {/* Fondo y glow */}
                        <div className="absolute inset-0 glass border border-neon-orange/20 bg-gradient-to-br from-neon-orange/8 via-transparent to-neon-orange/4 rounded-[3rem]" />
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 rounded-[3rem] pointer-events-none"
                            style={{
                                boxShadow: "inset 0 0 80px rgba(255,138,0,0.06)",
                            }}
                        />

                        {/* Orb decorativo */}
                        <div
                            aria-hidden="true"
                            className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full pointer-events-none"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 70%)",
                            }}
                        />

                        <div className="relative z-10 p-14">
                            {/* Urgencia / checklist */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8"
                            >
                                {[
                                    "Primera reunión gratis",
                                    "Sin permanencia abusiva",
                                    "Presencial en Soria",
                                    "Web en 48-72 h",
                                ].map((item, i) => (
                                    <span
                                        key={i}
                                        className="flex items-center gap-1.5 text-sm text-white/70"
                                    >
                                        <Check size={14} className="text-neon-orange shrink-0" />
                                        {item}
                                    </span>
                                ))}
                            </motion.div>

                            <h3 className="font-outfit text-4xl md:text-5xl font-bold mb-4 leading-tight">
                                ¿Aún con dudas?{" "}
                                <span className="text-neon-orange neon-glow">Hablemos.</span>
                            </h3>
                            <p className="text-text-slate text-lg mb-10 max-w-xl mx-auto">
                                Hacemos la primera reunión gratis, sin presión y sin compromiso. Analizamos tu negocio y te decimos exactamente qué necesitas.
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
                                    Solicitar reunión gratuita
                                    <ArrowRight size={22} />
                                </Link>
                            </motion.div>
                            <p className="text-text-slate/60 text-xs mt-5">
                                Sin compromiso · Te respondemos en menos de 24 h
                            </p>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
