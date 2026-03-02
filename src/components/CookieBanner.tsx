"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[100] w-full"
        >
          <div className="glass border-t border-neon-orange/20 shadow-[0_-4px_30px_rgba(255,138,0,0.08)]">
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              {/* Texto */}
              <p className="text-text-slate text-sm leading-relaxed text-center sm:text-left flex-1">
                Usamos cookies propias para mejorar tu experiencia. Puedes
                aceptarlas o rechazarlas.{" "}
                <Link
                  href="/legal/cookies"
                  className="text-neon-orange hover:underline font-medium whitespace-nowrap"
                >
                  Política de cookies
                </Link>
              </p>

              {/* Botones */}
              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                <button
                  onClick={handleReject}
                  className="glass border border-white/10 hover:border-white/20 text-text-slate hover:text-white text-sm font-medium px-6 py-2.5 rounded-xl transition-all duration-200 w-full sm:w-auto"
                >
                  Rechazar
                </button>
                <button
                  onClick={handleAccept}
                  className="bg-neon-orange neon-border text-white text-sm font-bold px-7 py-2.5 rounded-xl hover:brightness-110 active:scale-95 transition-all duration-200 w-full sm:w-auto"
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
