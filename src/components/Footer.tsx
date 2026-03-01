import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

const services = [
    { label: "Diseño Web", href: "/servicios/web" },
    { label: "SEO Local", href: "/servicios/seo" },
    { label: "Redes Sociales", href: "/servicios/redes" },
    { label: "Automatización", href: "/servicios/ofimatica" },
    { label: "Precios", href: "/precios" },
];

const company = [
    { label: "Sobre Nosotros", href: "/sobre-nosotros" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
    { label: "Auditoría Gratis", href: "/contacto" },
];

export default function Footer() {
    return (
        <footer className="bg-[#0A0A0A] border-t border-white/5">
            {/* Top accent line */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-neon-orange/60 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Col 1: Marca */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-5 group">
                            <Image
                                src="/brand/logo_web_512x512.png"
                                alt="Numancia Digital"
                                width={36}
                                height={36}
                                className="rounded-lg group-hover:scale-105 transition-transform"
                            />
                            <span className="font-outfit font-bold text-lg uppercase tracking-tight">
                                Numancia <span className="text-neon-orange">Digital</span>
                            </span>
                        </Link>
                        <p className="text-text-slate text-sm leading-relaxed mb-6">
                            Digitalizamos el corazón de Soria. Tecnología de vanguardia para el comercio local.
                        </p>
                        {/* Redes sociales */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.instagram.com/numancia.digital"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram Numancia Digital"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-slate hover:text-neon-orange hover:border-neon-orange/40 hover:bg-neon-orange/5 transition-all"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="https://wa.me/34671883656?text=Hola%2C%20me%20gustar%C3%ADa%20una%20asesor%C3%ADa%20gratuita"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp Numancia Digital"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-slate hover:text-green-400 hover:border-green-400/40 hover:bg-green-400/5 transition-all"
                            >
                                <MessageCircle size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Col 2: Servicios */}
                    <div>
                        <h4 className="font-outfit font-bold text-sm uppercase tracking-widest text-white/40 mb-5">
                            Servicios
                        </h4>
                        <ul className="space-y-3">
                            {services.map((s) => (
                                <li key={s.href}>
                                    <Link
                                        href={s.href}
                                        className="text-text-slate text-sm hover:text-neon-orange transition-colors hover:translate-x-1 inline-block duration-200"
                                    >
                                        {s.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Empresa */}
                    <div>
                        <h4 className="font-outfit font-bold text-sm uppercase tracking-widest text-white/40 mb-5">
                            Empresa
                        </h4>
                        <ul className="space-y-3">
                            {company.map((c) => (
                                <li key={c.label}>
                                    <Link
                                        href={c.href}
                                        className="text-text-slate text-sm hover:text-neon-orange transition-colors hover:translate-x-1 inline-block duration-200"
                                    >
                                        {c.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Contacto */}
                    <div>
                        <h4 className="font-outfit font-bold text-sm uppercase tracking-widest text-white/40 mb-5">
                            Contacto
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="tel:+34671883656"
                                    className="flex items-center gap-3 text-text-slate text-sm hover:text-neon-orange transition-colors group"
                                >
                                    <Phone size={14} className="text-neon-orange shrink-0" />
                                    +34 671 883 656
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:buzon@numanciadigital.es"
                                    className="flex items-center gap-3 text-text-slate text-sm hover:text-neon-orange transition-colors group"
                                >
                                    <Mail size={14} className="text-neon-orange shrink-0" />
                                    buzon@numanciadigital.es
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-text-slate text-sm">
                                <MapPin size={14} className="text-neon-orange shrink-0 mt-0.5" />
                                <span>Soria, Castilla y León<br />
                                    <span className="text-white/30 text-xs">Nos movemos por toda la provincia</span>
                                </span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <Link
                                href="/contacto"
                                className="inline-flex items-center gap-2 text-xs font-bold text-neon-orange border border-neon-orange/30 px-4 py-2 rounded-full hover:bg-neon-orange/10 transition-all"
                            >
                                Auditoría Gratuita →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-text-slate text-xs">
                        © {new Date().getFullYear()} Numancia Digital · Inspirado por Numancia, impulsado por el futuro.
                    </p>
                    <div className="flex gap-6 text-text-slate text-xs">
                        <Link href="/aviso-legal" className="hover:text-neon-orange transition-colors">Aviso Legal</Link>
                        <Link href="/privacidad" className="hover:text-neon-orange transition-colors">Privacidad</Link>
                        <Link href="/legal/cookies" className="hover:text-neon-orange transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
