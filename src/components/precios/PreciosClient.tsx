"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Shield, Zap, Star, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

const plans = [
    {
        name: "Paquete Base",
        price: "900",
        period: "/año",
        desc: "Para el comercio que necesita empezar con fuerza.",
        features: [
            "Página Web (Landing Page de alto rendimiento)",
            "SEO Local base (Google Maps + Google Search)",
            "Hasta 3 cuentas de correo corporativo",
            "Soporte técnico Kilómetro Cero",
            "Hosting incluido por 1 año",
            "Certificado SSL (HTTPS)",
        ],
        cta: "Empezar con Base",
        highlight: false
    },
    {
        name: "Paquete Premium",
        price: "1.000",
        period: "/año",
        desc: "La solución total para dominar el mercado soriano.",
        features: [
            "Web corporativa completa (todas las páginas)",
            "SEO Local avanzado + informe mensual",
            "Gestión de ventas online (e-commerce opcional)",
            "Gestión de Redes Sociales (Instagram + Facebook)",
            "Ofimática y digitalización de procesos",
            "Sistema de automatización de citas y facturas",
            "Soporte prioritario 24/7",
            "Estrategia de contenidos anual",
            "Soluciones digitales a medida",
        ],
        cta: "Dar el salto Premium",
        highlight: true
    }
];

const faqs = [
    {
        q: "¿Por qué sois tan baratos comparado con otras agencias?",
        a: "No somos baratos, somos eficientes. Eliminamos los costes que inflan el precio de las agencias tradicionales: alquileres de oficina, personal infrautilizado y software antiguo. Usamos tecnología moderna (Next.js, Supabase, Vercel) que nos permite ofrecer el mismo resultado o mejor a una fracción del coste."
    },
    {
        q: "¿Cuánto tarda en estar lista mi web?",
        a: "Una landing page o web básica está publicada en 48-72 horas desde que nos das el material (logo, textos, fotos). Una web corporativa completa en 7-14 días. Siempre con revisiones hasta que estés satisfecho."
    },
    {
        q: "¿Qué pasa con el Plan Base después del primer año?",
        a: "Al año, el hosting pasa a costar desde 200€/año. También puedes contratar nuestro mantenimiento mensual (desde 200€/mes) que incluye actualizaciones, seguridad, SEO continuo y soporte técnico."
    },
    {
        q: "¿Podéis desplazaros a mi negocio en Soria?",
        a: "Sí, nos movemos por toda la provincia. La reunión inicial y las revisiones clave las hacemos presencialmente si lo prefieres. Somos locales, ese es nuestro mayor valor."
    },
    {
        q: "¿Necesito saber de tecnología para trabajar con vosotros?",
        a: "Para nada. Nos encargamos de todo. Solo necesitas tener claro qué quieres para tu negocio. El resto es cosa nuestra."
    },
    {
        q: "¿Tengo que firmar permanencia en el Plan Premium?",
        a: "Ambos planes tienen facturación anual. Si en algún momento necesitas pausar o cancelar, hablamos directamente. No creemos en las cláusulas de permanencia abusivas; si nos quedamos contigo es porque estás contento con los resultados."
    },
];

function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            className="border-b border-white/5 py-6 cursor-pointer group"
            onClick={() => setOpen(!open)}
        >
            <div className="flex items-center justify-between gap-4">
                <h4 className="font-outfit font-bold text-lg group-hover:text-neon-orange transition-colors">{q}</h4>
                {open
                    ? <ChevronUp className="text-neon-orange shrink-0" size={20} />
                    : <ChevronDown className="text-white/30 shrink-0 group-hover:text-neon-orange transition-colors" size={20} />
                }
            </div>
            {open && (
                <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-text-slate mt-4 leading-relaxed"
                >
                    {a}
                </motion.p>
            )}
        </div>
    );
}

export default function PreciosClient() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-neon-orange/30 selection:text-neon-orange">
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-outfit text-5xl md:text-7xl font-bold mb-6"
                        >
                            Precios honestos, <br />
                            <span className="text-neon-orange neon-glow">compromiso en Soria</span>
                        </motion.h1>
                        <p className="text-text-slate text-lg max-w-2xl mx-auto">
                            Sin letras pequeñas. Tecnología premium a precios adaptados a la realidad de nuestra provincia.
                        </p>
                    </div>

                    {/* Planes */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className={`relative p-10 rounded-[2.5rem] border ${plan.highlight ? "border-neon-orange/50 bg-neon-orange/5" : "border-white/5 bg-white/[0.01]"} glass`}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 right-10 -translate-y-1/2 bg-neon-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                                        <Star size={12} /> Más Popular
                                    </div>
                                )}
                                <h3 className="font-outfit text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-text-slate text-sm mb-8">{plan.desc}</p>
                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className="text-5xl font-bold text-white italic">{plan.price}€</span>
                                    <span className="text-text-slate text-sm">{plan.period}</span>
                                </div>

                                <ul className="space-y-4 mb-10">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm">
                                            <Check className="text-neon-orange shrink-0 mt-0.5" size={18} />
                                            <span className="text-white/80">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/contacto"
                                    className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold transition-all ${plan.highlight ? "bg-neon-orange text-white hover:bg-secondary-orange shadow-[0_0_20px_rgba(255,138,0,0.3)]" : "glass text-white hover:bg-white/5 border border-white/10"}`}
                                >
                                    {plan.cta} <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Garantías */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-6 mb-24"
                    >
                        {[
                            { icon: Shield, title: "Sin sorpresas", desc: "El precio acordado es el precio final. Sin costes ocultos ni extras inesperados." },
                            { icon: Zap, title: "Entrega rápida", desc: "Tu web publicada en 48-72 horas. Sin esperas de semanas ni meses." },
                            { icon: Star, title: "Satisfacción garantizada", desc: "Revisiones ilimitadas hasta que estés 100% satisfecho con el resultado." },
                        ].map((g, i) => (
                            <div key={i} className="glass p-8 rounded-2xl border border-white/5 text-center hover:border-neon-orange/20 transition-all">
                                <div className="w-14 h-14 bg-neon-orange/10 rounded-2xl flex items-center justify-center mb-6 mx-auto border border-neon-orange/20">
                                    <g.icon className="text-neon-orange" size={28} />
                                </div>
                                <h4 className="font-outfit text-xl font-bold mb-3">{g.title}</h4>
                                <p className="text-text-slate text-sm leading-relaxed">{g.desc}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Mantenimiento personalizado */}
                    <div className="mb-24 glass p-10 rounded-3xl border border-white/5 max-w-2xl mx-auto text-center">
                        <h4 className="font-outfit text-2xl font-bold mb-3 italic">¿Necesitas algo a medida?</h4>
                        <p className="text-text-slate text-base mb-2">Mantenimiento mensual desde <span className="text-white font-bold">200€/mes</span> con todo incluido.</p>
                        <p className="text-text-slate text-sm mb-6">Hosting, actualizaciones, seguridad, soporte técnico y mejoras continuas.</p>
                        <Link href="/contacto" className="text-neon-orange font-bold hover:underline inline-flex items-center gap-2">
                            Habla con nosotros directamente <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Comparativa con agencias tradicionales */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-24"
                    >
                        <h2 className="font-outfit text-4xl font-bold text-center mb-12">
                            ¿Por qué <span className="text-neon-orange">5x más barato</span> no significa 5x peor?
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-4 pr-8 text-text-slate font-normal">Característica</th>
                                        <th className="text-center py-4 px-4 text-text-slate font-normal">Agencia tradicional</th>
                                        <th className="text-center py-4 px-4 text-neon-orange font-bold">Numancia Digital</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["Velocidad de la web", "2-5 segundos (WordPress)", "< 1 segundo (Next.js 15)"],
                                        ["Precio medio mensual", "1.500 - 3.000€/mes", "desde 200€/mes"],
                                        ["Trato personalizado", "Call center genérico", "Visita presencial en Soria"],
                                        ["Tecnología", "WordPress + plugins", "Next.js 15 + Supabase"],
                                        ["Tiempo de entrega", "4-8 semanas", "48-72 horas"],
                                        ["Informes SEO", "Cada trimestre", "Mensual y detallado"],
                                    ].map(([feature, traditional, numancia], i) => (
                                        <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                            <td className="py-4 pr-8 text-white/70">{feature}</td>
                                            <td className="text-center py-4 px-4 text-white/30">{traditional}</td>
                                            <td className="text-center py-4 px-4 text-neon-orange font-bold">{numancia}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* FAQ */}
                    <div className="max-w-3xl mx-auto mb-24">
                        <h2 className="font-outfit text-4xl font-bold text-center mb-12">
                            Preguntas frecuentes
                        </h2>
                        {faqs.map((faq, i) => (
                            <FaqItem key={i} q={faq.q} a={faq.a} />
                        ))}
                    </div>

                    {/* CTA final */}
                    <div className="text-center glass p-12 rounded-[3rem] border border-neon-orange/20 bg-gradient-to-br from-neon-orange/5 to-transparent">
                        <h3 className="font-outfit text-3xl font-bold mb-4">¿Aún con dudas? Hablemos.</h3>
                        <p className="text-text-slate text-lg mb-8 max-w-xl mx-auto">
                            Hacemos la primera reunión gratis, sin presión y sin compromiso. Analizamos tu negocio y te decimos exactamente qué necesitas.
                        </p>
                        <Link href="/contacto" className="inline-flex items-center gap-2 bg-neon-orange text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-secondary-orange transition-all neon-border">
                            Solicitar reunión gratuita <ArrowRight size={22} />
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
