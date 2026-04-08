"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    CheckCircle,
    ArrowRight,
    AlertCircle,
    Loader2,
    Send,
    Star,
    Search,
    TrendingUp,
    ShieldCheck,
    ChevronDown,
} from "lucide-react";

const SECTORES = [
    "Salud (dentista, fisio, óptica…)",
    "Hostelería (restaurante, hotel rural…)",
    "Academia o centro de formación",
    "Comercio local (tienda, ferretería…)",
    "Servicios profesionales (gestoría, abogado…)",
    "Inmobiliaria",
    "Otro sector",
];

const CHECKS = [
    { icon: Search, text: "Posición en Google para las búsquedas de tu sector en Soria" },
    { icon: TrendingUp, text: "Velocidad y visibilidad de tu web actual (o por qué necesitas una)" },
    { icon: ShieldCheck, text: "3 acciones concretas para captar más clientes desde esta semana" },
];

export default function AuditoriaClient() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        business: "",
        sector: "Salud (dentista, fisio, óptica…)",
        website: "", // honeypot
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    subject: "Auditoría Digital Gratuita",
                    message: `Negocio: ${formData.business}\nSector: ${formData.sector}`,
                    website: formData.website,
                }),
            });
            setStatus(res.ok ? "success" : "error");
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-neon-orange/30 selection:text-neon-orange">

            {/* Orbs */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 -left-40 w-[700px] h-[700px] bg-neon-orange/8 rounded-full blur-[180px]" />
                <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-neon-orange/5 rounded-full blur-[150px]" />
            </div>

            {/* Logo mínimo */}
            <header className="relative z-10 px-6 pt-6 pb-4">
                <Link href="/" className="inline-flex items-center gap-2 group">
                    <Image
                        src="/brand/logo_web_512x512.png"
                        alt="Numancia Digital"
                        width={36}
                        height={36}
                        className="rounded-lg transition-transform group-hover:scale-110"
                    />
                    <span className="font-outfit font-bold text-xl tracking-tight uppercase">
                        Numancia <span className="text-neon-orange">Digital</span>
                    </span>
                </Link>
            </header>

            <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pb-20 pt-8 lg:pt-16">

                {/* ── HERO ── */}
                <div className="text-center mb-14">
                    <span className="inline-block text-neon-orange text-xs font-bold tracking-[0.25em] uppercase mb-4 bg-neon-orange/10 px-4 py-2 rounded-full border border-neon-orange/20">
                        Gratis y sin compromiso · Respuesta en 3 días
                    </span>
                    <h1 className="font-outfit text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5">
                        ¿Por qué tu negocio{" "}
                        <span className="text-neon-orange block">no aparece en Google?</span>
                    </h1>
                    <p className="text-text-slate text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Te lo decimos en{" "}
                        <span className="text-white font-semibold">3 días</span>, gratis y con
                        acciones concretas. Sin tecnicismos, sin humo.
                    </p>
                </div>

                {/* ── 2 columnas ── */}
                <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">

                    {/* Columna izquierda — Qué incluye */}
                    <div className="space-y-8">

                        {/* Qué analizamos */}
                        <div className="glass rounded-3xl border border-white/8 p-7 space-y-5">
                            <h2 className="font-outfit text-lg font-bold text-white mb-1">
                                Qué incluye la auditoría
                            </h2>
                            <p className="text-text-slate text-sm">
                                Un informe de 3 páginas, específico para tu negocio en Soria.
                            </p>
                            {CHECKS.map(({ icon: Icon, text }) => (
                                <div key={text} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-neon-orange/10 rounded-xl flex items-center justify-center border border-neon-orange/20">
                                        <Icon className="text-neon-orange" size={18} />
                                    </div>
                                    <p className="text-white/80 text-sm leading-relaxed pt-2">{text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Testimonio real */}
                        <div className="glass rounded-3xl border border-neon-orange/15 p-7 relative overflow-hidden">
                            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-neon-orange/40 to-transparent" />
                            <div className="flex gap-0.5 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} className="text-neon-orange fill-neon-orange" />
                                ))}
                            </div>
                            <p className="text-white/80 text-sm leading-relaxed italic mb-4">
                                "Ahora somos los primeros cuando alguien busca una óptica en Soria. Las visitas a la web se multiplicaron y lo notamos en la tienda."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-neon-orange flex items-center justify-center font-bold text-black text-sm flex-shrink-0">
                                    O
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">Óptica Perlado</p>
                                    <p className="text-white/40 text-xs">Cliente en Soria</p>
                                </div>
                            </div>
                        </div>

                        {/* Garantía */}
                        <div className="flex items-start gap-3 px-2">
                            <CheckCircle className="text-neon-orange flex-shrink-0 mt-0.5" size={18} />
                            <p className="text-text-slate text-sm">
                                <span className="text-white font-semibold">Sin ventas agresivas.</span>{" "}
                                Recibes el informe aunque no acabes contratando. El 100% es tuyo.
                            </p>
                        </div>
                    </div>

                    {/* Columna derecha — Formulario */}
                    <div className="relative">
                        <div className="absolute -top-8 -right-8 w-64 h-64 bg-neon-orange/6 rounded-full blur-[100px] pointer-events-none" />
                        <div className="glass relative rounded-[2.5rem] border border-white/8 p-7 sm:p-9 overflow-hidden">
                            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-neon-orange/50 to-transparent" />

                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center text-center py-14 gap-5"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                                            <CheckCircle className="text-green-400" size={40} />
                                        </div>
                                        <div>
                                            <h3 className="font-outfit text-2xl font-bold text-white mb-2">
                                                ¡Recibido!
                                            </h3>
                                            <p className="text-text-slate text-sm max-w-xs mx-auto">
                                                Te enviamos la auditoría en{" "}
                                                <span className="text-white font-semibold">menos de 3 días laborables</span>.
                                                Revisa tu bandeja de entrada.
                                            </p>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-4"
                                    >
                                        <div className="mb-5">
                                            <h2 className="font-outfit text-2xl font-bold text-white mb-1">
                                                Solicita tu auditoría
                                            </h2>
                                            <p className="text-text-slate text-sm">
                                                Rellenalo en 60 segundos. Gratis y sin compromiso.
                                            </p>
                                        </div>

                                        {/* Honeypot */}
                                        <div style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }} aria-hidden="true">
                                            <input
                                                type="text"
                                                name="website"
                                                tabIndex={-1}
                                                autoComplete="off"
                                                value={formData.website}
                                                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                            />
                                        </div>

                                        {/* Nombre */}
                                        <Field label="Nombre y apellidos">
                                            <input
                                                type="text"
                                                required
                                                placeholder="Tu nombre"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="input-base"
                                            />
                                        </Field>

                                        {/* Nombre del negocio */}
                                        <Field label="Nombre de tu negocio">
                                            <input
                                                type="text"
                                                required
                                                placeholder="Ej: Fisioterapia Centro Soria"
                                                value={formData.business}
                                                onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                                                className="input-base"
                                            />
                                        </Field>

                                        {/* Sector */}
                                        <Field label="Sector">
                                            <div className="relative">
                                                <select
                                                    value={formData.sector}
                                                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                                                    className="input-base appearance-none pr-10 cursor-pointer"
                                                >
                                                    {SECTORES.map((s) => (
                                                        <option key={s} value={s} className="bg-[#111] text-white">{s}</option>
                                                    ))}
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-neon-orange pointer-events-none" size={16} />
                                            </div>
                                        </Field>

                                        {/* Email + Teléfono */}
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <Field label="Email">
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="tu@email.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="input-base"
                                                />
                                            </Field>
                                            <Field label="Teléfono">
                                                <input
                                                    type="tel"
                                                    required
                                                    placeholder="000 000 000"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="input-base"
                                                />
                                            </Field>
                                        </div>

                                        {/* Error */}
                                        <AnimatePresence>
                                            {status === "error" && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-2xl px-4 py-3"
                                                >
                                                    <AlertCircle className="text-red-400 flex-shrink-0" size={16} />
                                                    <p className="text-red-400 text-sm">
                                                        Error al enviar. Escríbenos directamente a buzon@numanciadigital.es
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* CTA */}
                                        <motion.button
                                            type="submit"
                                            disabled={status === "sending"}
                                            whileHover={status !== "sending" ? { scale: 1.02 } : {}}
                                            whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                                            className={`
                                                w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3
                                                transition-all duration-300 mt-2
                                                ${status === "sending"
                                                    ? "bg-neon-orange/60 cursor-not-allowed text-black"
                                                    : "bg-neon-orange hover:bg-amber-500 shadow-[0_0_40px_rgba(255,138,0,0.35)] hover:shadow-[0_0_60px_rgba(255,138,0,0.5)] text-black"
                                                }
                                            `}
                                        >
                                            {status === "sending" ? (
                                                <>
                                                    <Loader2 size={20} className="animate-spin" />
                                                    Enviando…
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={18} />
                                                    Quiero mi auditoría gratuita
                                                    <ArrowRight size={18} />
                                                </>
                                            )}
                                        </motion.button>

                                        <p className="text-center text-xs text-white/25">
                                            Solo te contactamos para enviarte el informe. Sin spam.
                                        </p>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer mínimo */}
            <footer className="relative z-10 text-center pb-8 text-white/20 text-xs space-x-4">
                <Link href="/privacidad" className="hover:text-white/40 transition-colors">Privacidad</Link>
                <span>·</span>
                <Link href="/aviso-legal" className="hover:text-white/40 transition-colors">Aviso legal</Link>
                <span>·</span>
                <span>Numancia Digital · Soria</span>
            </footer>

            <style jsx global>{`
                .input-base {
                    width: 100%;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 1rem;
                    padding: 1rem 1.25rem;
                    color: white;
                    font-size: 0.9rem;
                    transition: all 0.2s;
                    outline: none;
                }
                .input-base::placeholder { color: rgba(255,255,255,0.25); }
                .input-base:hover { border-color: rgba(255,255,255,0.2); }
                .input-base:focus { border-color: rgba(255,138,0,0.6); background: rgba(255,255,255,0.08); }
            `}</style>
        </div>
    );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="space-y-1.5">
            <label className="block text-xs font-bold text-white/50 uppercase tracking-widest ml-1">
                {label}
            </label>
            {children}
        </div>
    );
}
