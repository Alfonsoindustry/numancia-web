"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/servicios", label: "Servicios" },
        { href: "/sobre-nosotros", label: "Sobre Nosotros" },
        { href: "/precios", label: "Precios" },
        { href: "/contacto", label: "Contacto" },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "glass border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group z-50">
                    <Image
                        src="/brand/logo_web_512x512.png"
                        alt="Numancia Digital Logo"
                        width={40}
                        height={40}
                        className="rounded-lg transition-transform group-hover:scale-110"
                    />
                    <span className="font-outfit font-bold text-xl tracking-tight uppercase">
                        Numancia <span className="text-neon-orange">Digital</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-slate">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-white transition-colors py-2">
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/contacto" className="bg-neon-orange text-white px-5 py-2 rounded-full font-bold hover:secondary-orange transition-all neon-border">
                        Auditoría Gratis
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 p-2 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 bg-[#0B1120] pt-32 px-6 flex flex-col gap-8 md:hidden h-screen"
                        >
                            <div className="flex flex-col gap-6 items-center">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-2xl font-bold hover:text-neon-orange transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <Link
                                    href="/contacto"
                                    className="w-full text-center bg-neon-orange text-white px-8 py-4 rounded-2xl font-bold text-xl neon-border mt-4"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Auditoría Gratis
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
