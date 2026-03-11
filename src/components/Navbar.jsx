import React from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logos/md.png';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="navbar glass-panel">
            <div className="navbar-container container">
                <div className="navbar-logo">
                    <img src={logo} alt="ScoreMaster Pro Logo" />
                    <span className="logo-text">ScoreMaster <span className="highlight">Pro</span></span>
                </div>

                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <a href="#solucion" onClick={() => setIsOpen(false)}>Solución</a>
                    <a href="#caracteristicas" onClick={() => setIsOpen(false)}>Arquitectura</a>
                    <a href="#como-funciona" onClick={() => setIsOpen(false)}>Flujo de Trabajo</a>
                    <div className="lang-switcher" style={{ color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: "600", cursor: "pointer" }}>
                        <span style={{ color: "var(--text-primary)" }}>ES</span> <span style={{ opacity: 0.5 }}>| EN</span>
                    </div>
                    <a href="#contacto" onClick={() => setIsOpen(false)}><button className="nav-cta">Agendar Demo</button></a>
                </div>

                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
