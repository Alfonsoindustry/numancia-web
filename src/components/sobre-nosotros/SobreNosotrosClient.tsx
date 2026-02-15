"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Rocket, Heart, Shield } from "lucide-react";

export default function SobreNosotrosClient() {
    return (
        <div className="min-h-screen bg-[#0B1120] text-white selection:bg-neon-orange/30 selection:text-neon-orange">
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Hero Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="font-outfit text-5xl md:text-7xl font-bold mb-8 leading-tight">
                                Tradición Numantina, <br />
                                <span className="text-neon-orange neon-glow">Impulso Digital</span>
                            </h1>
                            <p className="text-text-slate text-lg md:text-xl leading-relaxed mb-8">
                                En Numancia Digital no solo creamos webs o gestionamos redes; construimos el motor tecnológico de los negocios en Soria. Nacimos con una misión clara: demostrar que desde nuestra provincia se puede liderar la vanguardia digital.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="glass px-6 py-3 rounded-full border border-white/5 text-sm font-bold flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-neon-orange" /> +10 Años de Experiencia
                                </div>
                                <div className="glass px-6 py-3 rounded-full border border-white/5 text-sm font-bold flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-neon-orange" /> 100% Capital Soriano
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative aspect-square glass rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/sobre-nosotros-hero.png"
                                alt="Agencia de Marketing Digital y SEO en Soria - Numancia Digital"
                                fill
                                className="object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
                        </motion.div>
                    </div>

                    {/* Valores */}
                    <div className="grid md:grid-cols-3 gap-8 mb-32">
                        {[
                            {
                                title: "Estrategia Local",
                                desc: "Dominamos el SEO en Soria y el mercado de la provincia. Tu negocio no solo estará online, estará delante de tus clientes potenciales.",
                                icon: Heart
                            },
                            {
                                title: "Tecnología de Vanguardia",
                                desc: "Soluciones de diseño web con Next.js 15 y optimización de velocidad extrema. La misma potencia que las grandes tecnológicas aplicada a tu pyme.",
                                icon: Rocket
                            },
                            {
                                title: "Resultados Medibles",
                                desc: "Sin humo. Auditorías gratuitas, informes claros y una gestión de ventas online enfocada en el retorno de inversión (ROI) real.",
                                icon: Shield
                            }
                        ].map((valor, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-neon-orange/20 transition-all group"
                            >
                                <div className="w-14 h-14 bg-neon-orange/10 rounded-2xl flex items-center justify-center mb-8 border border-neon-orange/20 group-hover:bg-neon-orange/20 transition-all">
                                    <valor.icon className="text-neon-orange" size={28} />
                                </div>
                                <h3 className="font-outfit text-2xl font-bold mb-4">{valor.title}</h3>
                                <p className="text-text-slate leading-relaxed">
                                    {valor.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Blog Optimizado SEO */}
                    <section className="bg-white/5 rounded-[4rem] p-12 md:p-20 border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-orange/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                        <div className="max-w-3xl mx-auto relative text-center mb-16">
                            <h2 className="font-outfit text-4xl font-bold mb-6 italic">Liderando la Transformación Digital en Soria</h2>
                            <div className="w-20 h-1 bg-neon-orange mx-auto mb-10" />
                        </div>

                        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                            <p className="text-white/80 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-neon-orange first-letter:mr-3 first-letter:float-left mb-10">
                                El éxito hoy no se mide solo por tener una página web, sino por ser la opción número uno cuando alguien busca soluciones en Soria. La transformación digital es el puente que conecta el comercio tradicional soriano con las nuevas oportunidades de venta online.
                            </p>
                            <p className="text-white/80 leading-relaxed">
                                En Numancia Digital nos especializamos en <strong>Diseño Web de alto rendimiento</strong> y <strong>posicionamiento SEO local</strong>. Entendemos que una empresa en Soria necesita visibilidad en Google Maps, una gestión profesional de redes sociales y herramientas de automatización que ahorren tiempo y costes operativos.
                            </p>
                            <blockquote className="border-l-4 border-neon-orange pl-8 py-4 my-10 italic text-xl text-white">
                                "Nuestra misión es que el talento y los productos de Soria no tengan fronteras gracias a la tecnología más avanzada del mercado."
                            </blockquote>
                            <p className="text-white/80 leading-relaxed">
                                Desde la creación de landing pages optimizadas para conversiones hasta la consultoría estratégica de marketing, trabajamos con un enfoque de cercanía total. Somos tu socio tecnológico en Soria: alguien que conoce tu mercado, se desplaza a tu negocio y utiliza las mismas herramientas que lideran Silicon Valley para que tu empresa sea imbatible.
                            </p>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
