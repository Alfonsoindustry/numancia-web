"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center px-6 relative overflow-hidden selection:bg-neon-orange/30 selection:text-neon-orange">
            {/* Orbe decorativo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-orange/8 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <Link href="/" className="inline-flex items-center gap-3 group">
                        <Image
                            src="/brand/logo_web_512x512.png"
                            alt="Numancia Digital"
                            width={48}
                            height={48}
                            className="rounded-xl group-hover:scale-110 transition-transform"
                        />
                        <span className="font-outfit font-bold text-xl uppercase tracking-tight">
                            Numancia <span className="text-neon-orange">Digital</span>
                        </span>
                    </Link>
                </motion.div>

                {/* 404 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="font-outfit font-bold leading-none text-neon-orange/20 select-none mb-6"
                    style={{ fontSize: "clamp(8rem, 20vw, 14rem)" }}
                >
                    404
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-outfit text-3xl md:text-4xl font-bold mb-4"
                >
                    Página no encontrada
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-text-slate text-lg mb-10 leading-relaxed"
                >
                    Parece que esta URL no existe o ha cambiado.<br />
                    Vuelve al inicio o explora nuestros servicios.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/"
                        className="flex items-center gap-2 bg-neon-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-orange hover:scale-105 transition-all neon-border shadow-[0_0_30px_rgba(255,138,0,0.3)]"
                    >
                        <Home size={18} /> Volver al inicio
                    </Link>
                    <Link
                        href="/servicios"
                        className="flex items-center gap-2 glass text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all border border-white/10"
                    >
                        Ver servicios <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
