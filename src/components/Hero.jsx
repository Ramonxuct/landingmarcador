import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Domina el Marcador.<br />
                        <span className="text-gradient">Controla la Emoción.</span>
                    </h1>
                    <p className="hero-subtitle">
                        La plataforma profesional de gestión deportiva en tiempo real para estadios, streaming y eventos. Configura, controla y proyecta con un solo clic.
                    </p>
                    <div className="hero-cta-group">
                        <button className="primary-cta">Empieza ahora - Registro Gratis</button>
                        <button className="secondary-cta">Ver Demo</button>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="mockup-container glass-panel">
                        <div className="mockup-led">
                            <span className="animate-pulse">78 : 14</span>
                            <div className="led-teams">
                                <span className="team">LAKERS <strong>102</strong></span>
                                <span className="team">BULLS <strong>98</strong></span>
                            </div>
                        </div>
                        <div className="mockup-tablet">
                            <div className="tablet-screen">
                                <div className="btn-mock active"></div>
                                <div className="btn-mock"></div>
                                <div className="btn-mock"></div>
                                <div className="btn-mock"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
