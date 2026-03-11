import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
    const reviews = [
        {
            text: "ScoreMaster Pro eliminó el estrés de la mesa de control. El hecho de ser offline e inalámbrico nos permite operar desde cualquier rincón del pabellón con 0 visibilidad de latencia.",
            author: "Director Técnico de Estadio",
            role: "Pabellón Deportivo (10,000 espectadores)",
            rating: 5
        },
        {
            text: "La inyección de publicidad en un click mediante listas de reproducción paga el software por sí solo. Hemos aumentado los impactos de nuestros patrocinadores un 45%.",
            author: "Jefe de Patrocinios",
            role: "Club Baloncesto Profesional",
            rating: 5
        },
        {
            text: "El sistema de roles es clave. Ahora el cronometrador solo ve el reloj, y producción dispara las animaciones 'GOL', evitando errores críticos durante las finales.",
            author: "Productor Ejecutivo",
            role: "Liga Nacional de Fútbol Sala",
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
