import React, { useState, useEffect } from 'react';
import './MobileStickyCTA.css';

const MobileStickyCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Mostrar el botón si ha scrolleado más allá del Hero original
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className={`mobile-sticky-cta ${isVisible ? 'visible' : ''}`}>
            <button
                className="sticky-btn"
                onClick={() => {
                    window.location.href = '#contacto';
                    window.dataLayer?.push({ 'event': 'mobile_sticky_cta_click' });
                }}
            >
                Agendar Demo
            </button>
        </div>
    );
};

export default MobileStickyCTA;
