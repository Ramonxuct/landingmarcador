import React from 'react';
import logo from '../assets/logos/md.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src={logo} alt="ScoreMaster Pro Logo" />
                            <span className="logo-text">ScoreMaster <span className="highlight">Pro</span></span>
                        </div>
                        <p className="footer-description">
                            Software marcador deportivo y gestión de eventos deportivos en vivo. La solución líder para recintos, pabellones y streaming profesional.
                        </p>
                    </div>
                    <div className="footer-links">
                        <h4>Plataforma</h4>
                        <ul>
                            <li><a href="#caracteristicas">Arquitectura</a></li>
                            <li><a href="#como-funciona">Flujo de Trabajo</a></li>
                            <li><a href="#contacto">Solicitar Demo</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Casos de Uso</h4>
                        <ul>
                            <li><a href="#">Estadios y Recintos</a></li>
                            <li><a href="#">Producción Broadcast</a></li>
                            <li><a href="#">Monetización Deportiva</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Ingeniería & Soporte</h4>
                        <p>Atención 24/7 para clientes Enterprise.</p>
                        <a href="mailto:soporte@scoremaster.pro" className="contact-link text-gradient">soporte@scoremaster.pro</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} ScoreMaster Pro. Todos los derechos reservados.</p>
                    <div className="legal-links">
                        <a href="#">Privacidad</a>
                        <a href="#">Términos de Servicio</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
