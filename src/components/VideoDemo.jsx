import React from 'react';
import './VideoDemo.css';

const VideoDemo = () => {
    return (
        <section className="video-section" id="demo">
            <div className="container">
                <div className="video-header text-center">
                    <h2 className="section-title">Descubre ScoreMaster en Acción</h2>
                    <p className="video-subtitle">
                        Mira lo fácil que es configurar y gestionar un marcador profesional en tiempo real.
                    </p>
                </div>

                <div className="video-wrapper glass-panel">
                    <div className="iframe-container">
                        <iframe
                            src="https://www.youtube.com/embed/PlCqiSUAJSg?rel=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=PlCqiSUAJSg"
                            title="ScoreMaster Pro - Guía de Uso"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoDemo;
