import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "¿Necesito hardware o pantallas LED especiales?",
            answer: "No. ScoreMaster Pro funciona en cualquier tablet, iPad, PC o Mac. Su salida 'External' se puede conectar a cualquier pantalla gigante, televisor o monitor mediante HDMI, o capturar en OBS/vMix compartiendo pestaña."
        },
        {
            question: "¿Requiere conexión a internet para funcionar?",
            answer: "Sí, ScoreMaster Pro es una aplicación web basada en la nube. Esto significa que puedes controlar el marcador desde la pista con una tablet y proyectarlo en la cabina de retransmisión sin tirar cables larguísimos, todo sincronizado al milisegundo."
        },
        {
            question: "¿Puedo personalizar los colores y logos de los equipos?",
            answer: "Absolutamente. Puedes subir los escudos de los equipos locales y visitantes, y los fondos del panel de táctil se adaptarán automáticamente (rojo, azul, etc.) para evitar faltas de concentración bajo presión."
        },
        {
            question: "¿Cómo funciona la monetización por ADS?",
            answer: "Puedes subir múltiples banners publicitarios a tu galería. Durante los tiempos muertos o medias partes, simplemente haz clic en 'Lanzar Publicidad' y el marcador será reemplazado por los rotadores automáticos de tus patrocinadores."
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
