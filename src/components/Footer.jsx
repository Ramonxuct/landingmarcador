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
                        <h4>Producto</h4>
                        <ul>
                            <li><a href="#features">Características</a></li>
                            <li><a href="#how-it-works">Cómo Funciona</a></li>
                            <li><a href="#demo">Solicitar Demo</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Casos de Uso</h4>
                        <ul>
                            <li><a href="#">Marcador para Streaming</a></li>
                            <li><a href="#">Gestión de Estadios</a></li>
                            <li><a href="#">Publicidad en Eventos Deportivos</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Soporte</h4>
                        <p>¿Necesitas ayuda con tu instalación?</p>
                        <a href="mailto:soporte@scoremaster.pro" className="contact-link">soporte@scoremaster.pro</a>
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
