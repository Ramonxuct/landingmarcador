import React from 'react';
import './CTA.css';

const CTA = () => {
    return (
        <section className="cta-section" id="registro">
            <div className="container">
                <div className="cta-box glass-panel text-center">
                    <h2 className="section-title">¿Listo para subir de nivel tus eventos?</h2>
                    <p className="cta-subtitle">
                        Únete a los más de 500 operadores y recintos que ya han profesionalizado su gestión deportiva con ScoreMaster Pro.
                    </p>
                    <div className="cta-actions">
                        <button className="primary-cta">Crear Cuenta Gratis</button>
                        <span className="cta-note">Sin tarjeta de crédito. Configuración en 5 minutos.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
