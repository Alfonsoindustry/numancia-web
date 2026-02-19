"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-6 right-6 z-[100] flex justify-center pointer-events-none"
                >
                    <div className="bg-neon-orange p-6 md:p-8 rounded-[2rem] border border-white/20 shadow-[0_20px_50px_rgba(255,138,0,0.3)] max-w-4xl w-full pointer-events-auto relative overflow-hidden group">
                        <div className="absolute -inset-1 bg-white/20 blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>

                        <div className="relative flex flex-col md:flex-row items-center gap-6">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/20">
                                <Cookie className="text-white" size={24} />
                            </div>

                            <div className="flex-grow text-center md:text-left">
                                <h3 className="font-outfit font-bold text-white mb-1">Control de Cookies</h3>
                                <p className="text-white/90 text-sm leading-relaxed">
                                    Utilizamos cookies propias y de terceros para mejorar tu experiencia. Al continuar navegando, consideramos que aceptas su uso. Puedes leer más en nuestra{" "}
                                    <Link href="/legal/cookies" className="text-white hover:underline font-bold">Política de Cookies</Link>.
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-3 shrink-0">
                                <button
                                    onClick={handleDecline}
                                    className="px-6 py-2.5 rounded-xl text-sm font-bold text-white/70 hover:text-white transition-colors"
                                >
                                    Rechazar
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="bg-white text-neon-orange px-8 py-2.5 rounded-xl text-sm font-bold hover:bg-white/90 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.1)] active:scale-95"
                                >
                                    Aceptar todo
                                </button>
                            </div>

                            <button
                                onClick={() => setIsVisible(false)}
                                className="absolute top-4 right-4 text-white/20 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
