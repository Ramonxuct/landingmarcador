import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
    const reviews = [
        {
            text: "Desde que implementamos ScoreMaster Pro, hemos monetizado los descansos con banners locales. El sistema se paga solo.",
            author: "Carlos Gómez",
            role: "Director Pabellón Municipal",
            rating: 5
        },
        {
            text: "La salida 'External' es perfecta para nuestra emisión en Twitch. Los gráficos se ven súper limpios y profesionales.",
            author: "Liga Amateur 3x3",
            role: "Organización de Eventos",
            rating: 5
        },
        {
            text: "Cualquier voluntario puede manejar el marcador desde una tablet sin miedo a equivocarse. Intuitivo y a prueba de errores.",
            author: "María L.",
            role: "Coordinadora Deportiva",
            rating: 5
        }
    ];

    return (
        <section className="testimonials bg-secondary">
            <div className="container">
                <h2 className="section-title text-center">Casos Reales de Uso</h2>

                <div className="testimonials-grid">
                    {reviews.map((review, index) => (
                        <div key={index} className="testimonial-card glass-panel">
                            <div className="stars">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="reviewer">
                                <strong>{review.author}</strong>
                                <span>{review.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
