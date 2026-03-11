import React from 'react';
import './CTA.css';

const CTA = () => {
    return (
        <section className="cta-section" id="contacto">
            <div className="container" style={{ position: "relative", zIndex: "1" }}>
                <div className="cta-box glass-panel text-center" style={{ padding: "4rem 2rem", border: "1px solid var(--accent-neon)" }}>
                    <h2 className="section-title">Lleva la experiencia de tus gradas al nivel Enterprise.</h2>
                    <p className="cta-subtitle" style={{ maxWidth: "700px", margin: "0 auto 2rem", color: "var(--text-secondary)" }}>
                        No importa si gestionas el estadio de un equipo local o la final de una liga internacional. Agenda una reunión técnica con nuestros ingenieros y descubre cómo ScoreMaster Pro se adapta a tu infraestructura física.
                    </p>

                    <form className="cta-form" style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", maxWidth: "600px", margin: "0 auto" }}>
                        <input type="email" placeholder="Email Corporativo" required style={{ padding: "1rem", borderRadius: "8px", border: "1px solid var(--border-color)", background: "rgba(0,0,0,0.5)", color: "#fff", flex: "1", minWidth: "250px" }} />
                        <input type="text" placeholder="Nombre del Recinto / Estadio" required style={{ padding: "1rem", borderRadius: "8px", border: "1px solid var(--border-color)", background: "rgba(0,0,0,0.5)", color: "#fff", flex: "1", minWidth: "250px" }} />
                        <button
                            type="submit"
                            className="primary-cta"
                            style={{ flex: "1", minWidth: "250px", width: "100%" }}
                            onClick={(e) => {
                                e.preventDefault();
                                window.dataLayer?.push({ 'event': 'bottom_cta_demo_request' });
                            }}
                        >
                            Agendar Demo Técnica
                        </button>
                    </form>

                    <div style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                        <span className="cta-note">Respuesta garantizada del equipo de ingeniería en menos de 24h.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
