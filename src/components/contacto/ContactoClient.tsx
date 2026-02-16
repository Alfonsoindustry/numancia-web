"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Instagram, Send, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactoClient() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        subject: "Diseño Web",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", phone: "", subject: "Diseño Web", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className="min-h-screen bg-[#0B1120] text-white selection:bg-neon-orange/30 selection:text-neon-orange">
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Info de contacto */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="font-outfit text-5xl md:text-7xl font-bold mb-8 leading-tight">
                                Estamos para ti <br />
                                <span className="text-neon-orange neon-glow">en toda Soria</span>
                            </h1>
                            <p className="text-text-slate text-lg md:text-xl leading-relaxed mb-12">
                                ¿Tienes un proyecto en mente o necesitas digitalizar tu negocio? No hay oficina física porque nosotros <span className="font-bold text-white">nos desplazamos a tu comercio en cualquier punto de la provincia</span>.
                                Trato cercano, real y soriano.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 bg-neon-orange/10 rounded-2xl flex items-center justify-center border border-neon-orange/20 group-hover:bg-neon-orange/20 transition-all">
                                        <Phone className="text-neon-orange" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Llámanos</p>
                                        <p className="text-xl font-bold">+34 671 883 656</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 bg-neon-orange/10 rounded-2xl flex items-center justify-center border border-neon-orange/20 group-hover:bg-neon-orange/20 transition-all">
                                        <Mail className="text-neon-orange" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Email</p>
                                        <p className="text-xl font-bold">buzon@numanciadigital.es</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 bg-neon-orange/10 rounded-2xl flex items-center justify-center border border-neon-orange/20 group-hover:bg-neon-orange/20 transition-all">
                                        <Instagram className="text-neon-orange" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Nuestras Redes</p>
                                        <p className="text-xl font-bold">@numancia.digital</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 bg-neon-orange/10 rounded-2xl flex items-center justify-center border border-neon-orange/20 group-hover:bg-neon-orange/20 transition-all">
                                        <MapPin className="text-neon-orange" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Ubicación</p>
                                        <p className="text-xl font-bold italic">Nos movemos por toda la provincia de Soria</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Formulario */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="glass p-8 md:p-12 rounded-[3rem] border border-white/5 relative"
                        >
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-neon-orange/5 rounded-full blur-[100px] pointer-events-none" />

                            <form onSubmit={handleSubmit} className="space-y-6 relative">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-white/60 ml-1">NOMBRE</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Tu nombre"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-neon-orange/50 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-white/60 ml-1">TELÉFONO</label>
                                        <input
                                            required
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="000 000 000"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-neon-orange/50 transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-white/60 ml-1">ASUNTO</label>
                                    <select
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-neon-orange/50 transition-all appearance-none"
                                    >
                                        <option className="bg-[#0B1120]">Diseño Web</option>
                                        <option className="bg-[#0B1120]">SEO Local</option>
                                        <option className="bg-[#0B1120]">Redes Sociales</option>
                                        <option className="bg-[#0B1120]">Otros / Auditoría Gratis</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-white/60 ml-1">MENSAJE</label>
                                    <textarea
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Cuéntanos un poco sobre tu negocio..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-neon-orange/50 transition-all resize-none"
                                    />
                                </div>

                                <button
                                    disabled={status === "sending" || status === "success"}
                                    className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${status === "success" ? "bg-green-500" : status === "error" ? "bg-red-500" : "bg-neon-orange hover:bg-secondary-orange shadow-[0_0_30px_rgba(255,138,0,0.3)]"}`}
                                >
                                    {status === "idle" && <><Send size={20} /> Enviar Mensaje</>}
                                    {status === "sending" && "Enviando..."}
                                    {status === "success" && "¡Mensaje Enviado!"}
                                    {status === "error" && "Error al enviar. Reintenta."}
                                </button>
                                <p className="text-center text-xs text-white/30">Responderemos en menos de 24 horas laborables.</p>
                            </form>
                            <p className="text-center text-xs text-white/30">Responderemos en menos de 24 horas laborables.</p>
                        </form>
                    </motion.div>
                </div>
        </div>
            </main >

        <Footer />
        </div >
    );
}
