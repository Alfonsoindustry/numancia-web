import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-white/5 bg-[#0B1120]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/brand/logo_web_512x512.png"
                        alt="Numancia Digital Logo"
                        width={32}
                        height={32}
                        className="opacity-50"
                    />
                    <span className="font-outfit font-bold opacity-50 uppercase tracking-widest text-sm">
                        Numancia Digital <span className="text-neon-orange">Soria</span>
                    </span>
                </Link>
                <p className="text-text-slate text-sm">
                    © {new Date().getFullYear()} Numancia Digital. Inspirado por Numancia, impulsado por el futuro.
                </p>
                <div className="flex gap-6 text-text-slate text-sm">
                    <Link href="/sobre-nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link>
                    <Link href="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link>
                    <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
                </div>
            </div>
        </footer>
    );
}
