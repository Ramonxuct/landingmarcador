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
                    <a href="#features" onClick={() => setIsOpen(false)}>Características</a>
                    <a href="#demo" onClick={() => setIsOpen(false)}>Demo</a>
                    <a href="#how-it-works" onClick={() => setIsOpen(false)}>Cómo Funciona</a>
                    <a href="#registro" onClick={() => setIsOpen(false)}><button className="nav-cta">Acceso Clientes</button></a>
                </div>

                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
