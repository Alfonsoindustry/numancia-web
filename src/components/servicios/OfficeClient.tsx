"use client";

import { motion } from "framer-motion";
import {
    Zap, ShieldCheck, FileText, Clock, ArrowRight,
    CheckCircle2, Database, RefreshCw, Cpu, Cloud
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const features = [
    { title: "Facturación Auto", desc: "Genera y envía facturas a tus clientes automáticamente sin tocar un papel.", icon: FileText },
    { title: "Seguridad Total", desc: "Tus datos siempre a buen recaudo y cumpliendo el RGPD europeo.", icon: ShieldCheck },
    { title: "Ahorro de Horas", desc: "Reduce en un 80% el tiempo dedicado a tareas repetitivas y administrativas.", icon: Clock },
    { title: "Todo en la Nube", desc: "Accede a toda tu información desde el móvil, desde cualquier lugar.", icon: Cloud },
    { title: "Flujos con IA", desc: "Automatizaciones inteligentes para responder clientes, gestionar citas y más.", icon: Cpu },
    { title: "Integración Total", desc: "Conectamos tus herramientas: WhatsApp, correo, calendario y CRM en un solo lugar.", icon: RefreshCw },
];

const process = [
    {
        step: "01",
        title: "Análisis de Procesos",
        desc: "Mapeamos cada tarea manual que realizas en tu negocio: facturación, atención al cliente, inventario, reservas. Identificamos dónde puedes ganar más tiempo.",
        icon: Clock,
    },
    {
        step: "02",
        title: "Diseño & Implementación",
        desc: "Configuramos las herramientas adecuadas: Google Workspace, Stripe, WhatsApp Business API o software a medida. Flujos automatizados listos en menos de 48h.",
        icon: Zap,
    },
    {
        step: "03",
        title: "Formación & Soporte",
        desc: "Te enseñamos a usar las nuevas herramientas y te damos soporte continuo. Tu negocio funcionando solo, con tú controlando todo desde el móvil.",
        icon: Database,
    },
];

const incluidos = [
    "Facturación automática con Stripe integrado",
    "Gestión de citas y reservas online",
    "Respuestas automáticas a clientes por WhatsApp",
    "Informes de ventas en tiempo real",
    "Digitalización de documentos en papel",
    "Google Workspace o Microsoft 365 configurado",
];

export default function OfficeServiceClient() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-neon-orange/30 selection:text-neon-orange">
            <Navbar />

            {/* ── HERO con imagen real ── */}
            <section className="relative min-h-[92vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=85&auto=format&fit=crop"
                        alt="Automatización y ofimática profesional"
                        fill
                        className="object-cover object-center opacity-20"
                        priority
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
                </div>

                <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-neon-orange/8 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-orange/30 text-neon-orange text-sm font-bold mb-8"
                        >
                            <Zap size={15} />
                            OFIMÁTICA Y AUTOMATIZACIÓN
                        </motion.div>

                        <h1 className="font-outfit text-5xl md:text-7xl font-bold mb-8 leading-[1.05]">
                            Automatización{" "}
                            <span className="block text-neon-orange neon-glow">que libera tiempo</span>
                        </h1>

                        <p className="text-text-slate text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                            Deja de pelearte con Excel y facturas en papel. Automatizamos tus procesos administrativos para que gestiones tu negocio desde cualquier lugar con un solo clic.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link
                                href="/contacto"
                                className="inline-flex items-center gap-2 bg-neon-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-orange transition-all neon-border"
                            >
                                Automatizar mi negocio <ArrowRight size={20} />
                            </Link>
                        </div>

                        {/* Stats rápidos */}
                        <div className="flex flex-wrap gap-8">
                            {[
                                { value: "-80%", label: "Tiempo en tareas manuales" },
                                { value: "48h", label: "Implementación media" },
                                { value: "0€", label: "Análisis inicial gratuito" },
                            ].map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + i * 0.15 }}
                                >
                                    <div className="font-outfit text-3xl font-bold text-neon-orange">{s.value}</div>
                                    <div className="text-text-slate text-sm">{s.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Panel visual derecha */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute inset-0 bg-neon-orange/10 rounded-3xl blur-[60px]" />
                        <div className="relative glass rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=85&auto=format&fit=crop"
                                alt="Automatización Soria"
                                width={900}
                                height={560}
                                className="w-full h-full object-cover opacity-60 rounded-3xl"
                                unoptimized
                            />
                            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4 border border-white/10 flex items-center gap-4">
                                <div className="w-10 h-10 bg-neon-orange/20 rounded-xl flex items-center justify-center shrink-0">
                                    <Zap className="text-neon-orange" size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold">Tiempo recuperado</div>
                                    <div className="text-neon-orange font-outfit font-bold text-lg">-80% tareas manuales</div>
                                </div>
                                <div className="ml-auto text-green-400 font-bold text-sm">▲ +12%</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <main className="pb-20 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* ── PROCESO ── */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mb-32"
                    >
                        <div className="text-center mb-16">
                            <span className="text-neon-orange text-sm font-bold tracking-widest uppercase">Metodología</span>
                            <h2 className="font-outfit text-4xl md:text-5xl font-bold mt-3">
                                Cómo automatizamos tu <span className="text-neon-orange">negocio</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {process.map((p, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="relative group"
                                >
                                    {i < process.length - 1 && (
                                        <div className="hidden md:block absolute top-12 left-full w-full h-[1px] bg-gradient-to-r from-neon-orange/40 to-transparent z-0" />
                                    )}
                                    <div className="glass p-8 rounded-2xl border border-white/5 hover:border-neon-orange/30 transition-all relative z-10 h-full">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-14 h-14 bg-neon-orange/10 rounded-xl flex items-center justify-center group-hover:bg-neon-orange/20 transition-all border border-neon-orange/20">
                                                <p.icon className="text-neon-orange" size={26} />
                                            </div>
                                            <span className="font-outfit text-5xl font-bold text-neon-orange/15">{p.step}</span>
                                        </div>
                                        <h3 className="font-outfit text-xl font-bold mb-3">{p.title}</h3>
                                        <p className="text-text-slate text-sm leading-relaxed">{p.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* ── QUÉ AUTOMATIZAMOS ── */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mb-32 glass rounded-[3rem] border border-white/5 overflow-hidden relative"
                    >
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-orange/5 rounded-full blur-[80px]" />
                        </div>
                        <div className="relative z-10 grid lg:grid-cols-2 gap-0">
                            <div className="relative h-72 lg:h-auto">
                                <Image
                                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80&auto=format&fit=crop"
                                    alt="Potencia tu negocio con IA"
                                    fill
                                    className="object-cover object-center opacity-40"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0A]/90" />
                            </div>
                            <div className="p-10 lg:p-14 flex flex-col justify-center">
                                <h2 className="font-outfit text-4xl font-bold mb-4">
                                    Potencia tu negocio con
                                    <span className="text-neon-orange"> IA</span>
                                </h2>
                                <p className="text-text-slate text-lg leading-relaxed mb-8">
                                    Implementamos herramientas de Inteligencia Artificial y flujos automatizados que eliminan las tareas manuales propensas a errores. Desde la gestión de inventario hasta la respuesta automática a clientes.
                                </p>
                                <div className="space-y-3">
                                    {incluidos.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-white/80">
                                            <CheckCircle2 size={16} className="text-neon-orange shrink-0" />
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* ── FEATURES ── */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mb-32"
                    >
                        <div className="text-center mb-16">
                            <span className="text-neon-orange text-sm font-bold tracking-widest uppercase">Servicios</span>
                            <h2 className="font-outfit text-4xl md:text-5xl font-bold mt-3">
                                Todo lo que <span className="text-neon-orange">automatizamos</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="glass p-8 rounded-2xl border border-white/5 hover:border-neon-orange/25 transition-all group"
                                >
                                    <div className="w-12 h-12 bg-neon-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neon-orange/20 transition-all">
                                        <f.icon className="text-neon-orange" size={24} />
                                    </div>
                                    <h3 className="font-outfit text-xl font-bold mb-3">{f.title}</h3>
                                    <p className="text-text-slate text-sm leading-relaxed">{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* ── CTA ── */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center glass p-12 md:p-16 rounded-[3rem] border border-neon-orange/20 bg-gradient-to-br from-neon-orange/5 via-transparent to-transparent relative overflow-hidden"
                    >
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neon-orange/8 rounded-full blur-[80px]" />
                        </div>
                        <div className="relative z-10">
                            <span className="text-neon-orange text-sm font-bold tracking-widest uppercase block mb-4">Análisis gratuito</span>
                            <h3 className="font-outfit text-4xl md:text-5xl font-bold mb-6">
                                ¿Cuántas horas pierdes en<br />tareas repetitivas cada semana?
                            </h3>
                            <p className="text-text-slate text-lg mb-10 max-w-xl mx-auto">
                                Las automatizamos en menos de 48 horas. Cuéntanos tu proceso y te decimos cómo.
                            </p>
                            <Link
                                href="/contacto"
                                className="inline-flex items-center gap-2 bg-neon-orange text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-secondary-orange transition-all neon-border"
                            >
                                Automatizar mi negocio <ArrowRight size={22} />
                            </Link>
                            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-text-slate">
                                {["Sin compromiso", "Implementación en 48h", "Formación incluida"].map((item) => (
                                    <span key={item} className="flex items-center gap-2">
                                        <CheckCircle2 size={14} className="text-neon-orange" /> {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                </div>
            </main>
            <Footer />
        </div>
    );
}
