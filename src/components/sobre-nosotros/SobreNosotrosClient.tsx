"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle2, Rocket, Heart, Shield, ArrowRight, MapPin, Code2, TrendingUp } from "lucide-react";


const valores = [
    { title: "Estrategia Local", desc: "Dominamos el SEO en Soria y el mercado de la provincia. Tu negocio no solo estará online, estará delante de tus clientes potenciales.", icon: MapPin },
    { title: "Tecnología de Vanguardia", desc: "Next.js 15, IA y automatizaciones. La misma potencia que las grandes tecnológicas, aplicada a tu pyme local.", icon: Code2 },
    { title: "Resultados Medibles", desc: "Sin humo. Auditorías gratuitas, informes claros y gestión orientada al retorno de inversión (ROI) real.", icon: TrendingUp },
];

const timeline = [
    { year: "2024", title: "Fundación de Numancia Digital", desc: "Nace con una misión: demostrar que desde Soria se puede liderar la transformación digital." },
    { year: "2024", title: "Primer cliente local", desc: "El primer negocio soriano confía en nosotros. Resultados en menos de 30 días." },
    { year: "2025", title: "Expansión de servicios", desc: "Añadimos automatizaciones con IA y gestión avanzada de redes sociales." },
    { year: "2025+", title: "Referencia digital en Soria", desc: "El objetivo: ser la agencia de referencia para cada comercio y PYME de la provincia." },
];

export default function SobreNosotrosClient() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-neon-orange/30 selection:text-neon-orange">
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Hero Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-orange/20 text-neon-orange text-sm font-bold mb-8">
                                <MapPin size={14} /> Agencia 100% de Soria
                            </div>
                            <h1 className="font-outfit text-5xl md:text-7xl font-bold mb-8 leading-tight">
                                Nacimos en Soria <br />
                                <span className="text-neon-orange neon-glow">para digitalizarla</span>
                            </h1>
                            <p className="text-text-slate text-lg md:text-xl leading-relaxed mb-8">
                                En Numancia Digital no solo creamos webs o gestionamos redes; construimos el motor tecnológico de los negocios en Soria. Nacimos con una misión clara: demostrar que desde nuestra provincia se puede liderar la vanguardia digital.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-10">
                                <div className="glass px-6 py-3 rounded-full border border-white/5 text-sm font-bold flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-neon-orange" /> Innovación sin fronteras
                                </div>
                                <div className="glass px-6 py-3 rounded-full border border-white/5 text-sm font-bold flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-neon-orange" /> Soporte directo y real
                                </div>
                                <div className="glass px-6 py-3 rounded-full border border-white/5 text-sm font-bold flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-neon-orange" /> Presencial en Soria
                                </div>
                            </div>
                            <Link href="/contacto" className="inline-flex items-center gap-2 bg-neon-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-orange transition-all neon-border">
                                Trabajemos juntos <ArrowRight size={20} />
                            </Link>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative">
                            <div className="absolute inset-0 bg-neon-orange/10 rounded-[3rem] blur-[80px]" />
                            <div className="relative rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl aspect-square">
                                <Image
                                    src="/images/sobre-nosotros-v5.png"
                                    alt="Equipo Numancia Digital, Soria"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Valores */}
                    <div className="grid md:grid-cols-3 gap-8 mb-32">
                        {valores.map((valor, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-neon-orange/20 transition-all group"
                            >
                                <div className="w-14 h-14 bg-neon-orange/10 rounded-2xl flex items-center justify-center mb-8 border border-neon-orange/20 group-hover:bg-neon-orange/20 transition-all">
                                    <valor.icon className="text-neon-orange" size={28} />
                                </div>
                                <h3 className="font-outfit text-2xl font-bold mb-4">{valor.title}</h3>
                                <p className="text-text-slate leading-relaxed">{valor.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Nuestra historia (Timeline) */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32">
                        <h2 className="font-outfit text-4xl font-bold text-center mb-16">
                            Nuestra <span className="text-neon-orange">historia</span>
                        </h2>
                        <div className="relative max-w-3xl mx-auto">
                            <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-neon-orange/50 via-neon-orange/20 to-transparent" />
                            <div className="space-y-12">
                                {timeline.map((item, i) => (
                                    <div key={i} className="flex gap-8 pl-4">
                                        <div className="relative shrink-0">
                                            <div className="w-8 h-8 rounded-full bg-neon-orange/20 border-2 border-neon-orange/50 flex items-center justify-center mt-1">
                                                <div className="w-2 h-2 rounded-full bg-neon-orange" />
                                            </div>
                                        </div>
                                        <div className="glass p-8 rounded-2xl border border-white/5 hover:border-neon-orange/15 transition-all flex-1">
                                            <div className="text-neon-orange font-bold text-sm uppercase tracking-widest mb-2">{item.year}</div>
                                            <h4 className="font-outfit text-xl font-bold mb-2">{item.title}</h4>
                                            <p className="text-text-slate">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Manifiesto */}
                    <section className="bg-gradient-to-br from-neon-orange/8 to-transparent rounded-[4rem] p-12 md:p-20 border border-neon-orange/15 relative overflow-hidden mb-16">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-orange/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        <div className="max-w-3xl mx-auto relative text-center mb-16">
                            <h2 className="font-outfit text-4xl font-bold mb-6 italic">Liderando la transformación digital de Soria</h2>
                            <div className="w-20 h-1 bg-neon-orange mx-auto mb-10" />
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-white/80 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-neon-orange first-letter:mr-3 first-letter:float-left mb-8 text-lg">
                                El éxito hoy no se mide solo por tener una página web, sino por ser la opción número uno cuando alguien busca soluciones en Soria. La transformación digital es el puente que conecta el comercio tradicional soriano con las nuevas oportunidades de venta online.
                            </p>
                            <p className="text-white/80 leading-relaxed text-lg mb-8">
                                En Numancia Digital nos especializamos en <strong>diseño web de alto rendimiento</strong> y <strong>posicionamiento SEO local</strong>. Entendemos que una empresa en Soria necesita visibilidad en Google Maps, una gestión profesional de redes sociales y herramientas de automatización que ahorren tiempo y costes operativos.
                            </p>
                            <blockquote className="border-l-4 border-neon-orange pl-8 py-4 my-10 italic text-xl text-white">
                                "Nuestra misión es que el talento y los productos de Soria no tengan fronteras gracias a la tecnología más avanzada del mercado."
                            </blockquote>
                            <p className="text-white/80 leading-relaxed text-lg">
                                Somos tu socio tecnológico en Soria: alguien que conoce tu mercado, se desplaza a tu negocio y utiliza las mismas herramientas que lideran Silicon Valley para que tu empresa sea imbatible en la provincia.
                            </p>
                        </div>
                    </section>

                    {/* CTA */}
                    <div className="text-center">
                        <Link href="/contacto" className="inline-flex items-center gap-2 bg-neon-orange text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-secondary-orange transition-all neon-border shadow-[0_0_30px_rgba(255,138,0,0.3)]">
                            Hablemos de tu proyecto <ArrowRight size={22} />
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
