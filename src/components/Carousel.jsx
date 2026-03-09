import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Play, Monitor } from 'lucide-react';
import './Carousel.css';

const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            title: "Panel de Control",
            subtitle: "Limpio e Intuitivo",
            icon: <Play size={24} />,
            content: (
                <div className="slide-mockup control-mockup">
                    <div className="tablet-frame">
                        <div className="app-ui">
                            <div className="header-bar">Dashboard del Operador</div>
                            <div className="main-controls">
                                <div className="score-control">
                                    <span>LOCAL</span> <div className="btn-add">+1</div>
                                </div>
                                <div className="time-control">
                                    12:45 <button className="btn-pause">Pause</button>
                                </div>
                                <div className="score-control">
                                    <span>VISITANTE</span> <div className="btn-add">+1</div>
                                </div>
                            </div>
                            <div className="bottom-controls">
                                <button className="btn-ads">Lanzar Publicidad</button>
                                <button className="btn-msg">Mensaje Rápido</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Vista Pública (External)",
            subtitle: "Espectacularidad Televisiva",
            icon: <Monitor size={24} />,
            content: (
                <div className="slide-mockup public-mockup">
                    <div className="tv-frame">
                        <div className="tv-screen">
                            <div className="broadcast-overlay">
                                <div className="team-local">
                                    <div className="logo-placeholder"></div>
                                    <span>R.MADRID</span>
                                    <div className="score">2</div>
                                </div>
                                <div className="time-center">
                                    <span className="period">2ND HALF</span>
                                    <span className="clock text-gradient">45:00</span>
                                </div>
                                <div className="team-visit">
                                    <div className="score">0</div>
                                    <span>BARCELONA</span>
                                    <div className="logo-placeholder"></div>
                                </div>
                            </div>
                            <div className="ad-banner-placeholder text-gradient">
                                TU PATROCINADOR AQUÍ
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const nextSlide = () => setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <section className="carousel-section bg-secondary">
            <div className="container">
                <h2 className="section-title text-center">Dos caras, un mismo control</h2>

                <div className="carousel-container glass-panel">
                    <div className="carousel-controls-top">
                        {slides.map((slide, index) => (
                            <button
                                key={index}
                                className={`tab-btn ${activeSlide === index ? 'active' : ''}`}
                                onClick={() => setActiveSlide(index)}
                            >
                                {slide.icon} {slide.title}
                            </button>
                        ))}
                    </div>

                    <div className="carousel-content">
                        <button className="nav-btn prev" onClick={prevSlide}><ChevronLeft size={32} /></button>

                        <div className="slide-wrapper">
                            <div className="slide-info text-center">
                                <h3>{slides[activeSlide].subtitle}</h3>
                            </div>
                            {slides[activeSlide].content}
                        </div>

                        <button className="nav-btn next" onClick={nextSlide}><ChevronRight size={32} /></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
