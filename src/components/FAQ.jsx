import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "¿Qué pasa si se cae nuestra conexión a internet en el estadio?",
            answer: "Absolutamente nada. ScoreMaster Pro está diseñado bajo una arquitectura Zero-Trust y puede operar 100% en una red local aislada (LAN / Intranet). No dependes de internet para que el show continúe."
        },
        {
            question: "¿Es compatible con nuestros paneles LED y matrices actuales?",
            answer: "Sí. El sistema es 'Hardware Agnostic'. La salida de renderizado de video se emite en estándares universales que tu mezclador o procesadora LED actual puede ingerir sin problemas (vía HDMI directo o captura NDI/SDI según tu topología)."
        },
        {
            question: "¿Podemos tener un operador para básquetbol y otro dedicado solo al cronómetro de posesión?",
            answer: "Por supuesto. El sistema soporta múltiples terminales (tablets/PCs) conectados simultáneamente. Puedes asignar el rol de 'Cronometrador de 24s' a un dispositivo, bloqueando el resto de funciones para evitar errores graves durante el juego."
        },
        {
            question: "¿Cómo funciona la inyección automática de publicidad?",
            answer: "Puedes pre-cargar listas de reproducción (Ad Playlists) de sponsors en video o imagen dinámica. Durante un tiempo muerto, el operador de producción puede lanzar la pauta con un solo botón, midiendo el tiempo exacto de exposición para tus reportes de ROI."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section bg-secondary">
            <div className="container">
                <div className="faq-header text-center">
                    <h2 className="section-title">Preguntas Frecuentes</h2>
                    <p className="section-subtitle">Todo lo que necesitas saber antes de subir el nivel de tu evento.</p>
                </div>

                <div className="faq-accordion glass-panel">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <div className="faq-icon text-gradient">
                                    {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
                                </div>
                            </div>
                            <div className="faq-answer" style={{
                                maxHeight: activeIndex === index ? '200px' : '0px',
                                opacity: activeIndex === index ? '1' : '0'
                            }}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
