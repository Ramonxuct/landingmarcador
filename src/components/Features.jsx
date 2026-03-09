import React from 'react';
import { Hand, Cast, DollarSign, MessageSquare } from 'lucide-react';
import './Features.css';

const Features = () => {
    const featureList = [
        {
            icon: <Hand size={36} />,
            title: "Control en Vivo",
            description: "Gestión de goles, periodos y faltas con interfaz táctil muy intuitiva. Diseñada para operar sin errores bajo presión."
        },
        {
            icon: <Cast size={36} />,
            title: "Proyección Profesional",
            description: "Salida 'External' limpia, optimizada para pantallas gigantes y retransmisiones por streaming."
        },
        {
            icon: <DollarSign size={36} />,
            title: "Monetización (ADS)",
            description: "Sistema integrado para lanzar banners publicitarios y roteros de patrocinadores durante el partido con un clic."
        },
        {
            icon: <MessageSquare size={36} />,
            title: "Mensajería Instantánea",
            description: "Envía anuncios, avisos de emergencia o celebraciones animadas a la pantalla pública en segundos."
        }
    ];

    return (
        <section className="features bg-secondary" id="features">
            <div className="container">
                <div className="features-header text-center">
                    <h2 className="section-title">La herramienta definitiva para el operador.</h2>
                    <p className="features-subtitle">
                        Convierte cualquier evento deportivo en un espectáculo del más alto nivel con estas herramientas pro.
                    </p>
                </div>

                <div className="features-grid">
                    {featureList.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
