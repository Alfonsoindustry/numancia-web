"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CookiesClient() {
    return (
        <div className="min-h-screen bg-[#0B1120] text-white selection:bg-neon-orange/30 selection:text-neon-orange">
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <article className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[2.5rem] border border-white/5">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-outfit text-4xl md:text-5xl font-bold mb-8 text-neon-orange neon-glow"
                    >
                        Política de Cookies
                    </motion.h1>

                    <div className="space-y-8 text-text-slate leading-relaxed">
                        <section>
                            <h2 className="text-white text-xl font-bold mb-4">1. ¿Qué son las cookies?</h2>
                            <p>
                                Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-4">2. ¿Qué tipos de cookies utiliza esta página web?</h2>
                            <p className="mb-4">Numancia Digital utiliza los siguientes tipos de cookies:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.</li>
                                <li><strong>Cookies de personalización:</strong> Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario (por ejemplo, el idioma).</li>
                                <li><strong>Cookies de análisis:</strong> Son aquellas que, bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-4">3. Desactivación y eliminación de cookies</h2>
                            <p>
                                Usted tiene la opción de permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. Al desactivar cookies, algunos de los servicios disponibles podrían dejar de estar operativos.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-4">4. Consentimiento</h2>
                            <p>
                                Al navegar y continuar en nuestro sitio web nos indica que está consintiendo el uso de las cookies antes enunciadas, y en las condiciones contenidas en la presente Política de Cookies.
                            </p>
                        </section>

                        <section className="pt-8 border-t border-white/5 text-sm italic">
                            <p>Última actualización: Febrero de 2026</p>
                            <p>Para cualquier consulta sobre nuestra política de cookies, puede contactar con nosotros en: <span className="text-neon-orange">hola@numanciadigital.es</span></p>
                        </section>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
