import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Dominio Absoluto del Espectáculo Deportivo.<br />
                        <span className="text-gradient">Sin Latencia. Sin Dependencias.</span>
                    </h1>
                    <p className="hero-subtitle">
                        ScoreMaster Pro es la suite definitiva para la gestión de pantallas gigantes y marcadores físicos. Un sistema 100% aislado, inalámbrico y diseñado para maximizar los ingresos de tu estadio.
                    </p>
                    <div className="hero-cta-group">
                        <button
                            className="primary-cta"
                            onClick={() => {
                                window.location.href = '#contacto';
                                window.dataLayer?.push({ 'event': 'hero_cta_demo_click' });
                            }}
                        >
                            Agendar Demo Técnica
                        </button>
                        <button
                            className="secondary-cta ghost-cta"
                            onClick={() => {
                                window.open('https://app.scoremaster.pro/register', '_blank');
                                window.dataLayer?.push({ 'event': 'hero_cta_amateur_register' });
                            }}
                        >
                            Crear Cuenta Gratis
                        </button>
                    </div>

                    <div className="hero-trust-badges">
                        <p className="trust-title">Diseñado para la máxima exigencia</p>
                        <div className="trust-logos">
                            <span className="badge-pill">✓ 100% Uptime Garantizado</span>
                            <span className="badge-pill">✓ Arquitectura Zero-Trust</span>
                            <span className="badge-pill">✓ Operación LAN Offline</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={1000} scale={1.02} transitionSpeed={2500}>
                        <div className="mockup-container glass-panel">
                            <div className="mockup-led">
                                <span className="animate-pulse">78 : 14</span>
                                <div className="led-teams">
                                    <span className="team">LAKERS <strong>102</strong></span>
                                    <span className="team">BULLS <strong>98</strong></span>
                                </div>
                            </div>
                            <div className="mockup-tablet">
                                <div className="tablet-screen real-ui">
                                    <div className="team-panel local">
                                        <div className="team-name">LOCAL</div>
                                        <button className="btn-score">GOL +</button>
                                    </div>
                                    <div className="center-panel">
                                        <div className="status-indicator"></div>
                                        <button className="btn-resume">▶ REANUDAR</button>
                                    </div>
                                    <div className="team-panel visit">
                                        <div className="team-name">VISITANTE</div>
                                        <button className="btn-score">GOL +</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                </div>
            </div>
        </section>
    );
};

export default Hero;
