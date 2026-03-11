import React from 'react';
import { Settings, Sliders, Tv } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
    return (
        <section className="how-it-works" id="como-funciona">
            <div className="container">
                <h2 className="section-title text-center">El flujo de trabajo que tu producción agradecerá</h2>
                <p className="section-subtitle text-center" style={{ marginBottom: "4rem", color: "var(--text-secondary)" }}>Desde la configuración táctica inicial en boxes hasta la explosión del clímax en el minuto 90. Cero curvas de aprendizaje.</p>

                <div className="steps-container">
                    <div className="step-card glass-panel">
                        <div className="step-number">1</div>
                        <div className="step-icon">
                            <Settings size={32} className="neon-icon" />
                        </div>
                        <h3>Preparación (Pre-Match)</h3>
                        <p>Define alineaciones, carga los assets gráficos y programa las playlists de patrocinios antes de que abran puertas.</p>
                    </div>

                    <div className="step-line"></div>

                    <div className="step-card glass-panel">
                        <div className="step-number">2</div>
                        <div className="step-icon">
                            <Sliders size={32} className="neon-icon" />
                        </div>
                        <h3>Control en Directo</h3>
                        <p>Opera sin latencia. Asigna múltiples tablets a cronometradores y operadores con roles específicos blindados a errores.</p>
                    </div>

                    <div className="step-line"></div>

                    <div className="step-card glass-panel">
                        <div className="step-number">3</div>
                        <div className="step-icon">
                            <Tv size={32} className="neon-icon" />
                        </div>
                        <h3>Impacto y Reporte</h3>
                        <p>Sincroniza la salida de vídeo a tus matrices LED y obtén métricas post-partido del tiempo de exposición de cada marca.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
