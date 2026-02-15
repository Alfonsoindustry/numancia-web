"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
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

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-slate">
                    <Link href="/servicios" className="hover:text-white transition-colors py-2">
                        Servicios
                    </Link>
                    <Link href="/sobre-nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link>
                    <Link href="/precios" className="hover:text-white transition-colors">Precios</Link>
                    <Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link>
                    <Link href="/contacto" className="bg-neon-orange text-white px-5 py-2 rounded-full font-bold hover:secondary-orange transition-all neon-border">
                        Auditoría Gratis
                    </Link>
                </div>
            </div>
        </nav>
    );
}
