import React from 'react';
import { Settings, Sliders, Tv } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
    return (
        <section className="how-it-works" id="how-it-works">
            <div className="container">
                <h2 className="section-title text-center">En marcha en 3 sencillos pasos</h2>

                <div className="steps-container">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <div className="step-icon">
                            <Settings size={32} />
                        </div>
                        <h3>Configura</h3>
                        <p>Define los equipos, colores, logos y el estilo visual del marcador antes del partido.</p>
                    </div>

                    <div className="step-line"></div>

                    <div className="step-card">
                        <div className="step-number">2</div>
                        <div className="step-icon">
                            <Sliders size={32} />
                        </div>
                        <h3>Controla</h3>
                        <p>Gestiona los goles, faltas y tiempos en tiempo real desde la comodidad de una tablet o smartphone.</p>
                    </div>

                    <div className="step-line"></div>

                    <div className="step-card">
                        <div className="step-number">3</div>
                        <div className="step-icon">
                            <Tv size={32} />
                        </div>
                        <h3>Proyecta</h3>
                        <p>Pulsa 'External' y muestra un acabado televisivo y profesional a tu audiencia al instante.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
