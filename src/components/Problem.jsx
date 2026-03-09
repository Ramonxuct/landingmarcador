import React from 'react';
import { AlertCircle, Clock, MonitorPlay, Zap } from 'lucide-react';
import './Problem.css';

const Problem = () => {
    return (
        <section className="problem" id="problem">
            <div className="container">
                <div className="problem-header text-center">
                    <h2 className="section-title">
                        <span className="text-gradient">Deja atrás los sistemas complejos.</span><br />
                        Gestión profesional para cualquier nivel.
                    </h2>
                </div>

                <div className="problem-grid">
                    <div className="problem-card glass-panel">
                        <div className="problem-icon">
                            <Clock size={32} />
                        </div>
                        <h3>Gestión de tiempos confusa</h3>
                        <p>Sistemas amateur que fallan en el peor momento, haciendo que parar el reloj sea una pesadilla para el operador.</p>
                    </div>

                    <div className="problem-card glass-panel">
                        <div className="problem-icon">
                            <AlertCircle size={32} />
                        </div>
                        <h3>Faltas e incidencias perdidas</h3>
                        <p>Llevar la cuenta de faltas y amonestaciones en papel ya no es una opción para eventos serios.</p>
                    </div>

                    <div className="problem-card glass-panel relative">
                        <div className="problem-icon highlight-icon">
                            <MonitorPlay size={32} />
                        </div>
                        <h3>Publicidad desaprovechada</h3>
                        <p>Pantallas gigantes que solo muestran números en lugar de impactar con banners de patrocinadores y generar ingresos.</p>
                    </div>
                </div>

                <div className="problem-solution text-center">
                    <p>La solución es <strong>ScoreMaster Pro</strong>. Todo lo que necesitas en una única tablet.</p>
                    <Zap size={48} className="solution-indicator" />
                </div>
            </div>
        </section>
    );
};

export default Problem;
