"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, MapPin, Globe, Share2, Zap, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Tipos ─── */
interface Caso {
    nombre: string;
    tipo: string;
    categoria: string;
    foto: string;
    resultados: { valor: string; label: string }[];
    descripcion: string;
    tags: string[];
    tagColor: string;
    accentColor: string;
    iconCategoria: React.ElementType;
}

/* ─── Colores por tag de servicio ─── */
const tagColors: Record<string, string> = {
    "Diseño Web": "text-blue-400 bg-blue-400/10 border-blue-400/20",
    "SEO Local": "text-green-400 bg-green-400/10 border-green-400/20",
    "Google Business": "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    "Redes Sociales": "text-pink-400 bg-pink-400/10 border-pink-400/20",
    "Reservas Online": "text-purple-400 bg-purple-400/10 border-purple-400/20",
    "Automatización": "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    "Ofimática": "text-orange-400 bg-orange-400/10 border-orange-400/20",
};

/* ─── Datos de los casos ─── */
const casos: Caso[] = [
    {
        nombre: "Óptica Castilla",
        tipo: "Diseño Web + SEO Local",
        categoria: "Salud y Bienestar",
        foto: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop",
        resultados: [
            { valor: "+340%", label: "visitas orgánicas" },
            { valor: "Top 3", label: "Google Maps Soria" },
            { valor: "48h", label: "web publicada" },
        ],
        descripcion:
            "Óptica tradicional en el centro de Soria sin presencia digital. En 30 días posicionada #1 para 'óptica Soria' con una web de alto rendimiento.",
        tags: ["Diseño Web", "SEO Local", "Google Business"],
        tagColor: "text-green-400 bg-green-400/10 border-green-400/20",
        accentColor: "from-green-500/20 via-transparent to-transparent",
        iconCategoria: Globe,
    },
    {
        nombre: "Restaurante La Numantina",
        tipo: "Redes Sociales + Web",
        categoria: "Hostelería",
        foto: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop",
        resultados: [
            { valor: "+890", label: "seguidores en 2 meses" },
            { valor: "Activas", label: "reservas online" },
            { valor: "+60%", label: "ocupación fines de semana" },
        ],
        descripcion:
            "Restaurante con cocina soriana de calidad pero invisible en redes. Estrategia de contenido + sistema de reservas online que triplicó las visitas desde Instagram.",
        tags: ["Redes Sociales", "Diseño Web", "Reservas Online"],
        tagColor: "text-pink-400 bg-pink-400/10 border-pink-400/20",
        accentColor: "from-pink-500/20 via-transparent to-transparent",
        iconCategoria: Share2,
    },
    {
        nombre: "Taller Mecánico Picos de Urbión",
        tipo: "Automatización + SEO",
        categoria: "Automoción",
        foto: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80&auto=format&fit=crop",
        resultados: [
            { valor: "8h/sem", label: "ahorradas en facturación" },
            { valor: "+220%", label: "llamadas desde Google" },
            { valor: "0", label: "facturas pendientes" },
        ],
        descripcion:
            "Taller mecánico gestionando todo en papel. Automatizamos presupuestos y facturas, y posicionamos el negocio para búsquedas locales de mecánicos en Soria.",
        tags: ["Automatización", "SEO Local", "Ofimática"],
        tagColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
        accentColor: "from-cyan-500/20 via-transparent to-transparent",
        iconCategoria: Zap,
    },
];

/* ─── Tarjeta de caso ─── */
function CasoCard({ caso, index }: { caso: Caso; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group glass rounded-[2.5rem] border border-white/5 hover:border-neon-orange/30 transition-all duration-500 overflow-hidden hover:scale-[1.015]"
        >
            {/* Foto con overlay */}
            <div className="relative w-full aspect-video overflow-hidden">
                <Image
                    src={caso.foto}
                    alt={caso.nombre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 800px"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />

                {/* Badge de categoría */}
                <div className="absolute top-5 left-5">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border backdrop-blur-sm ${caso.tagColor}`}>
                        <caso.iconCategoria size={11} />
                        {caso.categoria}
                    </span>
                </div>

                {/* Glow naranja en hover */}
                <div className="absolute inset-0 bg-neon-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Contenido */}
            <div className="p-8 md:p-10">
                {/* Cabecera */}
                <div className="mb-6">
                    <h3 className="font-outfit text-2xl md:text-3xl font-bold mb-1 group-hover:text-neon-orange transition-colors duration-300">
                        {caso.nombre}
                    </h3>
                    <p className="text-text-slate text-sm font-medium">{caso.tipo}</p>
                </div>

                {/* Tags de servicios */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {caso.tags.map((tag) => (
                        <span
                            key={tag}
                            className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${tagColors[tag] ?? "text-white/60 bg-white/5 border-white/10"}`}
                        >
                            <Tag size={9} />
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Métricas */}
                <div className="grid grid-cols-3 gap-4 mb-8 p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                    {caso.resultados.map((res, i) => (
                        <div key={i} className="text-center">
                            <div className="font-outfit text-xl md:text-2xl font-bold text-neon-orange neon-glow leading-tight">
                                {res.valor}
                            </div>
                            <div className="text-text-slate text-xs mt-1 leading-tight">{res.label}</div>
                        </div>
                    ))}
                </div>

                {/* Descripción */}
                <p className="text-text-slate text-sm leading-relaxed">
                    {caso.descripcion}
                </p>
            </div>
        </motion.div>
    );
}

/* ─── Componente principal ─── */
export default function CasosClient() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-neon-orange/30 selection:text-neon-orange overflow-x-hidden">
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* ── HERO ── */}
                    <div className="text-center mb-24 relative">
                        {/* Orb decorativo de fondo */}
                        <div
                            aria-hidden="true"
                            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
                            style={{
                                background: "radial-gradient(ellipse, rgba(255,138,0,0.08) 0%, transparent 70%)",
                            }}
                        />

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-orange/30 bg-neon-orange/5 text-neon-orange text-xs font-bold uppercase tracking-widest mb-6"
                        >
                            <MapPin size={12} />
                            Resultados reales · Soria
                        </motion.div>

                        {/* H1 */}
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

                        {/* Subtítulo */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-text-slate text-lg max-w-2xl mx-auto leading-relaxed"
                        >
                            Negocios reales de Soria con resultados medibles. Sin humo, sin promesas vacías.
                            Aquí están los números que importan.
                        </motion.p>

                        {/* Indicadores rápidos */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45 }}
                            className="inline-flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10"
                        >
                            {[
                                { icono: TrendingUp, texto: "Resultados en 30 días" },
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

                    {/* ── GRID DE CASOS ── */}
                    <div className="grid lg:grid-cols-1 gap-10 max-w-5xl mx-auto mb-28">
                        {casos.map((caso, i) => (
                            <CasoCard key={caso.nombre} caso={caso} index={i} />
                        ))}
                    </div>

                    {/* ── CTA FINAL ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative text-center rounded-[3rem] overflow-hidden"
                    >
                        {/* Fondo glass y glow */}
                        <div className="absolute inset-0 glass border border-neon-orange/20 bg-gradient-to-br from-neon-orange/8 via-transparent to-neon-orange/4 rounded-[3rem]" />
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 rounded-[3rem] pointer-events-none"
                            style={{ boxShadow: "inset 0 0 80px rgba(255,138,0,0.06)" }}
                        />

                        {/* Orb central */}
                        <div
                            aria-hidden="true"
                            className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full pointer-events-none"
                            style={{
                                background: "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 70%)",
                            }}
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
                                Analizamos tu presencia digital de forma gratuita y te decimos exactamente qué
                                necesitas para conseguir resultados como estos en Soria.
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
