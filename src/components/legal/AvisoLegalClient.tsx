"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AvisoLegalClient() {
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
                            Aviso <span className="text-neon-orange">Legal</span>
                        </h1>

                        <div className="space-y-10 text-text-slate leading-relaxed">
                            <section>
                                <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-wider">1. Datos Identificativos</h2>
                                <p>
                                    En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos:
                                </p>
                                <ul className="mt-4 space-y-2 list-disc ml-5">
                                    <li><strong>Titular:</strong> Numancia Digital (Hugo)</li>
                                    <li><strong>Domicilio Social:</strong> Calle El Collado, Soria, España</li>
                                    <li><strong>CIF/NIF:</strong> [Pendiente de completar]</li>
                                    <li><strong>Email:</strong> buzon@numanciadigital.es</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-wider">2. Usuarios</h2>
                                <p>
                                    El acceso y/o uso de este portal de Numancia Digital atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-wider">3. Uso del Portal</h2>
                                <p>
                                    numancia.digital proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a Numancia Digital a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-wider">4. Propiedad Intelectual</h2>
                                <p>
                                    Numancia Digital por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, etc.).
                                </p>
                                <p className="mt-2">
                                    Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Numancia Digital.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-wider">5. Exclusión de Garantías y Responsabilidad</h2>
                                <p>
                                    Numancia Digital no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
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
