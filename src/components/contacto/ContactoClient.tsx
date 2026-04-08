"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    Phone,
    Mail,
    Instagram,
    MapPin,
    Clock,
    Send,
    CheckCircle,
    AlertCircle,
    Loader2,
    ChevronDown,
    Shield,
    Zap,
    Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

/* ------------------------------------------------------------------ */
/* Datos estáticos                                                      */
/* ------------------------------------------------------------------ */

const CONTACT_INFO = [
    {
        icon: Phone,
        label: "Llámanos",
        value: "+34 671 883 656",
        href: "tel:+34671883656",
    },
    {
        icon: Mail,
        label: "Email",
        value: "buzon@numanciadigital.es",
        href: "mailto:buzon@numanciadigital.es",
    },
    {
        icon: Instagram,
        label: "Instagram",
        value: "@numancia.digital",
        href: "https://instagram.com/numancia.digital",
    },
    {
        icon: MapPin,
        label: "Zona de trabajo",
        value: "Toda la provincia de Soria",
        href: null,
    },
    {
        icon: Clock,
        label: "Horario",
        value: "Lun – Vie · 9:00 – 19:00",
        href: null,
    },
];

const TRUST_CARDS = [
    {
        icon: Zap,
        title: "Respuesta en 24 h",
        desc: "Te contestamos el mismo día laborable, sin burocracia.",
    },
    {
        icon: Users,
        title: "Reunión presencial en Soria",
        desc: "Nos desplazamos a tu negocio, en cualquier punto de la provincia.",
    },
    {
        icon: Shield,
        title: "Auditoría gratis incluida",
        desc: "Diagnóstico digital completo sin coste ni compromiso.",
    },
];

const SERVICIOS = [
    "Diseño Web",
    "Tienda Online (E-commerce)",
    "SEO Local",
    "Gestión de Redes Sociales",
    "Google My Business",
    "Auditoría Digital Gratuita",
    "Otros / Consulta general",
];

/* ------------------------------------------------------------------ */
/* Componente principal                                                 */
/* ------------------------------------------------------------------ */

export default function ContactoClient() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "Diseño Web",
        message: "",
        website: "", // honeypot: debe quedar vacío siempre
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", subject: "Diseño Web", message: "", website: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-neon-orange/30 selection:text-neon-orange">
            <Navbar />

            {/* ── Hero decorativo ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-orange/4 rounded-full blur-[160px]" />
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-orange/3 rounded-full blur-[140px]" />
            </div>

            <main className="relative pt-32 pb-24 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">

                    {/* ── Encabezado centrado ── */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block text-neon-orange text-sm font-bold tracking-[0.25em] uppercase mb-4 bg-neon-orange/10 px-4 py-2 rounded-full border border-neon-orange/20">
                            Hablemos
                        </span>
                        <h1 className="font-outfit text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                            Tu Agencia Digital{" "}
                            <span className="text-neon-orange neon-glow block sm:inline">
                                Cerca de ti en Soria
                            </span>
                        </h1>
                        <p className="text-text-slate text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            ¿Tienes un proyecto en mente o necesitas digitalizar tu negocio?{" "}
                            <span className="font-semibold text-white">
                                Nos desplazamos a tu comercio
                            </span>{" "}
                            en cualquier punto de la provincia. Trato cercano, real y soriano.
                        </p>
                    </motion.div>

                    {/* ── Layout 2 columnas ── */}
                    <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 xl:gap-16 items-start">

                        {/* ====== COLUMNA IZQUIERDA ====== */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="space-y-8"
                        >
                            {/* Imagen decorativa de Soria */}
                            <div className="relative rounded-3xl overflow-hidden h-56 sm:h-64 border border-white/8 group">
                                <img
                                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format&fit=crop"
                                    alt="Equipo trabajando en estrategia digital"
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
                                <div className="absolute bottom-5 left-5">
                                    <span className="text-xs text-white/60 font-bold uppercase tracking-widest bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                                        Soria · España
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4 bg-neon-orange/90 text-black text-xs font-bold px-3 py-1 rounded-full">
                                    100% Local
                                </div>
                            </div>

                            {/* Datos de contacto */}
                            <div className="glass rounded-3xl border border-white/8 p-6 sm:p-8 space-y-5">
                                <h2 className="font-outfit text-lg font-bold text-white/60 uppercase tracking-widest mb-2">
                                    Contacto directo
                                </h2>
                                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                                    <div key={label} className="flex items-center gap-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-neon-orange/10 rounded-2xl flex items-center justify-center border border-neon-orange/20 group-hover:bg-neon-orange/20 group-hover:border-neon-orange/40 transition-all duration-300">
                                            <Icon className="text-neon-orange" size={20} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-none mb-1">
                                                {label}
                                            </p>
                                            {href ? (
                                                <a
                                                    href={href}
                                                    target={href.startsWith("http") ? "_blank" : undefined}
                                                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                    className="text-base font-semibold text-white hover:text-neon-orange transition-colors truncate block"
                                                >
                                                    {value}
                                                </a>
                                            ) : (
                                                <p className="text-base font-semibold text-white truncate">{value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Trust cards */}
                            <div className="space-y-3">
                                <h2 className="font-outfit text-xs font-bold text-white/40 uppercase tracking-widest px-1">
                                    Por qué elegirnos
                                </h2>
                                {TRUST_CARDS.map(({ icon: Icon, title, desc }, i) => (
                                    <motion.div
                                        key={title}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                        className="flex items-start gap-4 glass rounded-2xl p-4 border border-white/6 hover:border-neon-orange/20 transition-all duration-300 group"
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 bg-neon-orange/10 rounded-xl flex items-center justify-center border border-neon-orange/20 group-hover:bg-neon-orange/20 transition-all">
                                            <Icon className="text-neon-orange" size={18} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-sm mb-0.5">{title}</p>
                                            <p className="text-text-slate text-xs leading-relaxed">{desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* ====== COLUMNA DERECHA — FORMULARIO ====== */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Blob decorativo detrás del formulario */}
                            <div className="absolute -top-12 -right-12 w-72 h-72 bg-neon-orange/6 rounded-full blur-[120px] pointer-events-none" />
                            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-neon-orange/4 rounded-full blur-[100px] pointer-events-none" />

                            <div className="glass relative rounded-[2.5rem] border border-white/8 p-7 sm:p-10 overflow-hidden">
                                {/* Línea de acento superior */}
                                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-neon-orange/50 to-transparent" />

                                {/* ── Estado: SUCCESS ── */}
                                <AnimatePresence mode="wait">
                                    {status === "success" ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.4 }}
                                            className="flex flex-col items-center justify-center text-center py-16 gap-6"
                                        >
                                            <div className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                                                <CheckCircle className="text-green-400" size={40} />
                                            </div>
                                            <div>
                                                <h3 className="font-outfit text-2xl font-bold text-white mb-2">
                                                    ¡Mensaje enviado!
                                                </h3>
                                                <p className="text-text-slate">
                                                    Te respondemos en menos de{" "}
                                                    <span className="text-white font-semibold">24 horas laborables</span>.
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => setStatus("idle")}
                                                className="mt-2 text-sm text-neon-orange hover:underline transition-all"
                                            >
                                                Enviar otro mensaje
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-5"
                                        >
                                            <div className="mb-6">
                                                <h2 className="font-outfit text-2xl font-bold text-white mb-1">
                                                    Cuéntanos tu proyecto
                                                </h2>
                                                <p className="text-text-slate text-sm">
                                                    Rellena el formulario y te llamamos sin compromiso.
                                                </p>
                                            </div>

                                            {/* Honeypot anti-spam (invisible para humanos) */}
                                            <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
                                                <input
                                                    type="text"
                                                    name="website"
                                                    tabIndex={-1}
                                                    autoComplete="off"
                                                    value={formData.website}
                                                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                                />
                                            </div>

                                            {/* Nombre + Teléfono */}
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <InputField
                                                    label="Nombre"
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    placeholder="Tu nombre"
                                                    onChange={(v) => setFormData({ ...formData, name: v })}
                                                />
                                                <InputField
                                                    label="Teléfono"
                                                    type="tel"
                                                    required
                                                    value={formData.phone}
                                                    placeholder="000 000 000"
                                                    onChange={(v) => setFormData({ ...formData, phone: v })}
                                                />
                                            </div>

                                            {/* Email */}
                                            <InputField
                                                label="Email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                placeholder="tu@email.com"
                                                onChange={(v) => setFormData({ ...formData, email: v })}
                                            />

                                            {/* Servicio de interés */}
                                            <div className="space-y-2">
                                                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest ml-1">
                                                    Servicio de interés
                                                </label>
                                                <div className="relative">
                                                    <select
                                                        value={formData.subject}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, subject: e.target.value })
                                                        }
                                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 pr-12 text-white focus:outline-none focus:border-neon-orange/60 focus:bg-white/8 hover:border-white/20 transition-all duration-200 appearance-none cursor-pointer"
                                                    >
                                                        {SERVICIOS.map((s) => (
                                                            <option key={s} value={s} className="bg-[#111111] text-white">
                                                                {s}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown
                                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-neon-orange pointer-events-none"
                                                        size={18}
                                                    />
                                                </div>
                                            </div>

                                            {/* Mensaje */}
                                            <div className="space-y-2">
                                                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest ml-1">
                                                    Mensaje
                                                </label>
                                                <textarea
                                                    rows={4}
                                                    value={formData.message}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, message: e.target.value })
                                                    }
                                                    placeholder="Cuéntanos un poco sobre tu negocio y lo que necesitas..."
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/25 focus:outline-none focus:border-neon-orange/60 focus:bg-white/8 hover:border-white/20 transition-all duration-200 resize-none"
                                                />
                                            </div>

                                            {/* Error state */}
                                            <AnimatePresence>
                                                {status === "error" && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-2xl px-4 py-3"
                                                    >
                                                        <AlertCircle className="text-red-400 flex-shrink-0" size={18} />
                                                        <p className="text-red-400 text-sm">
                                                            Ha ocurrido un error. Por favor, inténtalo de nuevo o escríbenos
                                                            directamente al correo.
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {/* Botón de envío */}
                                            <motion.button
                                                type="submit"
                                                disabled={status === "sending"}
                                                whileHover={status !== "sending" ? { scale: 1.02 } : {}}
                                                whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                                                className={`
                                                    w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3
                                                    transition-all duration-300 relative overflow-hidden
                                                    ${status === "sending"
                                                        ? "bg-neon-orange/60 cursor-not-allowed"
                                                        : "bg-neon-orange hover:bg-amber-500 shadow-[0_0_40px_rgba(255,138,0,0.35)] hover:shadow-[0_0_60px_rgba(255,138,0,0.5)] text-black"
                                                    }
                                                `}
                                            >
                                                {/* Shimmer */}
                                                {status !== "sending" && (
                                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
                                                )}

                                                {status === "sending" ? (
                                                    <>
                                                        <Loader2 size={20} className="animate-spin text-black" />
                                                        <span className="text-black">Enviando…</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send size={20} />
                                                        Enviar mensaje gratis
                                                    </>
                                                )}
                                            </motion.button>

                                            <p className="text-center text-xs text-white/25 leading-relaxed">
                                                Sin spam. Sin compromisos. Solo te contactamos para ayudarte.
                                            </p>
                                        </motion.form>
                                    )}
                                </AnimatePresence>

                                {/* Línea de acento inferior */}
                                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-neon-orange/20 to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* Sub-componente reutilizable de input                                 */
/* ------------------------------------------------------------------ */

interface InputFieldProps {
    label: string;
    type: string;
    required?: boolean;
    value: string;
    placeholder: string;
    onChange: (v: string) => void;
}

function InputField({ label, type, required, value, placeholder, onChange }: InputFieldProps) {
    return (
        <div className="space-y-2">
            <label className="block text-xs font-bold text-white/50 uppercase tracking-widest ml-1">
                {label}
                {required && <span className="text-neon-orange ml-1">*</span>}
            </label>
            <input
                type={type}
                required={required}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/25 focus:outline-none focus:border-neon-orange/60 focus:bg-white/8 hover:border-white/20 transition-all duration-200"
            />
        </div>
    );
}
