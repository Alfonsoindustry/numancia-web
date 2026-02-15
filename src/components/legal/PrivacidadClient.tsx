"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacidadClient() {
    return (
        <div className="min-h-screen bg-[#0B1120] text-white selection:bg-neon-orange/30 selection:text-neon-orange">
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="font-outfit text-4xl md:text-5xl font-bold mb-12">
                            Política de <span className="text-neon-orange">Privacidad</span>
                        </h1>

                        <div className="space-y-10 text-text-slate leading-relaxed border-l border-neon-orange/20 pl-8">
                            <p className="italic">
                                Última actualización: 15 de febrero de 2026
                            </p>

                            <section>
                                <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-wider">1. Información al Usuario</h2>
                                <p>
                                    Numancia Digital, como responsable del tratamiento, le informa que de acuerdo con el Reglamento (UE) 2016/679 (RGPD) y la L.O. 3/2018 (LOPDGDD), trataremos sus datos según lo reflejado en la presente Política de Privacidad.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-wider">2. Finalidad del Tratamiento</h2>
                                <p>
                                    Sus datos personales serán tratados con las siguientes finalidades:
                                </p>
                                <ul className="mt-4 space-y-2 list-disc ml-5">
                                    <li>Gestionar las consultas enviadas a través del formulario de contacto.</li>
                                    <li>Envío de comunicaciones comerciales relacionadas con nuestros servicios (siempre que lo autorice).</li>
                                    <li>Mejora de la experiencia de usuario y estadísticas de navegación.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-wider">3. Criterios de Conservación</h2>
                                <p>
                                    Los datos se conservarán durante no más tiempo del necesario para mantener el fin del tratamiento o mientras existan prescripciones legales que dictaminen su custodia.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-wider">4. Derechos del Usuario</h2>
                                <p>
                                    El usuario tiene derecho a:
                                </p>
                                <ul className="mt-4 space-y-2 list-disc ml-5">
                                    <li>Retirar el consentimiento en cualquier momento.</li>
                                    <li>Solicitar acceso, rectificación, portabilidad y supresión de sus datos.</li>
                                    <li>Limitación u oposición a su tratamiento.</li>
                                    <li>Presentar una reclamación ante la autoridad de control (aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.</li>
                                </ul>
                                <p className="mt-4 font-bold text-white">
                                    Puede ejercer sus derechos enviando un email a: hola@numancia.digital
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-wider">5. Medidas de Seguridad</h2>
                                <p>
                                    Numancia Digital garantiza que ha implementado medidas técnicas y organizativas apropiadas para garantizar la seguridad de sus datos personales y protegerlos contra la destrucción, pérdida o alteración accidental o ilícita.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
