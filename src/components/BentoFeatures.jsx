import React from 'react';
import './BentoFeatures.css';
import { WifiOff, MonitorPlay, Users, Layers, Zap, DollarSign } from 'lucide-react';

const BentoFeatures = () => {
    return (
        <section id="caracteristicas" className="bento-features">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">El Núcleo Tecnológico</h2>
                    <p className="section-subtitle">Construido para soportar la presión de una final. Arquitectura robusta y escalable para recintos de élite.</p>
                </div>

                <div className="bento-grid">
                    {/* Bloque 1: Offline (Grande) */}
                    <div className="bento-item bento-large glass-panel feature-offline">
                        <div className="feature-content">
                            <div className="icon-wrapper">
                                <WifiOff size={32} className="neon-icon" />
                            </div>
                            <h3>Infraestructura Zero-Trust. 100% Offline.</h3>
                            <p>Control total y sin interrupciones. No dependas de internet para que el espectáculo continúe. Sistema totalmente aislado e inalámbrico operable desde múltiples tablets en red local privada (LAN).</p>
                        </div>
                        <div className="feature-visual">
                            {/* Simularemos un diagrama de red */}
                            <div className="network-diagram">
                                <div className="node tablet">Tablet UI</div>
                                <div className="connection active"></div>
                                <div className="node server">Servidor Local</div>
                                <div className="connection active"></div>
                                <div className="node screen">Pantalla LED</div>
                            </div>
                        </div>
                    </div>

                    {/* Bloque 2: Multideporte */}
                    <div className="bento-item glass-panel">
                        <div className="feature-content">
                            <div className="icon-wrapper">
                                <Layers size={28} className="neon-icon" />
                            </div>
                            <h3>Lógica Multideporte Profesional</h3>
                            <p>Fútbol, Baloncesto y Balonmano en un solo motor. Gestión automatizada de tiempos extra, reglas granulares y posesión.</p>
                        </div>
                    </div>

                    {/* Bloque 3: Monetización */}
                    <div className="bento-item glass-panel feature-monetization">
                        <div className="feature-content">
                            <div className="icon-wrapper">
                                <DollarSign size={28} className="neon-icon" />
                            </div>
                            <h3>Monetización en Tiempo Real</h3>
                            <p>Convierte el marcador en tu mejor activo comercial. Inyecta publicidad de patrocinadores mediante listas automatizadas.</p>
                        </div>
                    </div>

                    {/* Bloque 4: Multiusuario */}
                    <div className="bento-item glass-panel">
                        <div className="feature-content">
                            <div className="icon-wrapper">
                                <Users size={28} className="neon-icon" />
                            </div>
                            <h3>Gestión de Equipos y Roles</h3>
                            <p>Multiusuario concurrente. Asigna roles (Operador, Crono, Árbitro) y aísla comandos críticos para evitar errores en directo.</p>
                        </div>
                    </div>

                    {/* Bloque 5: Hardware Control */}
                    <div className="bento-item glass-panel">
                        <div className="feature-content">
                            <div className="icon-wrapper">
                                <MonitorPlay size={28} className="neon-icon" />
                            </div>
                            <h3>Suite de Control de Hardware</h3>
                            <p>Unifica la gestión. Controla la matriz de pantallas gigantes, U-Televisiva y marcadores auxiliares simultáneamente.</p>
                        </div>
                    </div>

                    {/* Bloque 6: Animaciones (Grande) */}
                    <div className="bento-item bento-wide glass-panel feature-animation">
                        <div className="feature-content">
                            <div className="icon-wrapper">
                                <Zap size={32} className="neon-icon" />
                            </div>
                            <div className="text-content">
                                <h3>El Espectáculo a tu Medida</h3>
                                <p>Inyecta adrenalina. Desata animaciones de video y plantillas gráficas automáticas para cada momento clave (Goles, Triples, Faltas) con un solo tap en tu tablet. Cero latencia entre la orden y la pantalla.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BentoFeatures;
