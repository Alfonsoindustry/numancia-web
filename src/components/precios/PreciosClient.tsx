"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const plans = [
    {
        name: "Paquete de Digitalización Base",
        price: "900",
        period: "/pago único",
        desc: "Para el comercio que necesita empezar con fuerza.",
        features: [
            "Página Web",
            "Landing Page de alto rendimiento",
            "SEO Local base (Google Maps)",
            "Hasta 3 cuentas de correo corporativo",
            "Soporte Kilómetro Cero",
            "Hosting incluido por 1 año"
        ],
        cta: "Empezar con Base",
        highlight: false
    },
    {
        name: "Paquete Numancia Premium",
        price: "1.000",
        period: "/mes",
        desc: "La solución total para dominar el mercado soriano.",
        features: [
            "Web corporativa completa",
            "SEO Local avanzado",
            "Gestión de ventas online",
            "Gestión de Redes Sociales",
            "Ofimática general",
            "Sistema de Automatización de Citas/Facturas",
            "Soporte Prioritario 24/7",
            "Estrategia de contenidos anual",
            "Soluciones digitales a medida del cliente"
        ],
        cta: "Dar el salto Premium",
        highlight: true
    }
];

export default function PreciosClient() {
    return (
        <div className="min-h-screen bg-[#0B1120] text-white selection:bg-neon-orange/30 selection:text-neon-orange">
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-outfit text-5xl md:text-7xl font-bold mb-6"
                        >
                            Precios Digitales, <br />
                            <span className="text-neon-orange neon-glow">Compromiso en Soria</span>
                        </motion.h1>
                        <p className="text-text-slate text-lg max-w-2xl mx-auto">
                            Sin letras pequeñas. Tecnología premium a precios adaptados a la realidad de nuestra provincia.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className={`relative p-10 rounded-[2.5rem] border ${plan.highlight ? "border-neon-orange/50 bg-neon-orange/5" : "border-white/5 bg-white/[0.01]"} glass`}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 right-10 -translate-y-1/2 bg-neon-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                        Más Popular
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
                                        <li key={idx} className="flex items-center gap-3 text-sm">
                                            <Check className="text-neon-orange shrink-0" size={18} />
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

                    <div className="mt-20 text-center glass p-8 rounded-3xl border border-white/5 max-w-2xl mx-auto">
                        <h4 className="font-outfit text-xl font-bold mb-2 italic">¿Necesitas algo a medida?</h4>
                        <p className="text-text-slate text-sm mb-6">Mantenimiento mensual desde 200€/mes con todo incluido.</p>
                        <Link href="/contacto" className="text-neon-orange font-bold hover:underline">Habla con nosotros directamente &rarr;</Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
