import React from 'react';
import './Integrations.css';

const Integrations = () => {
    // Lista de tecnologías simuladas para el carrusel continuo
    const logos = [
        "OBS Studio",
        "vMix",
        "Wirecast",
        "Tricaster",
        "NDI Protocol",
        "Novastar LED",
        "Blackmagic",
        "RTMP Stream"
    ];

    // Duplicamos el array para el efecto de scroll infinito
    const seamlessLogos = [...logos, ...logos];

    return (
        <section className="integrations-section bg-primary">
            <div className="container">
                <p className="integrations-title text-center">
                    COMPATIBLE Y LISTO PARA INTEGRARSE CON LOS ESTÁNDARES DEL SECTOR
                </p>
                <div className="logos-slider-container">
                    <div className="logos-slider">
                        {seamlessLogos.map((logo, index) => (
                            <div key={index} className="logo-item">
                                <span className="logo-text-placeholder">{logo}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Integrations;
