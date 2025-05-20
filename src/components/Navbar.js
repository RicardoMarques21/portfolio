import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav>
            <h1>Ricardo Marques</h1>


            <div className="hamburger" onClick={toggleMenu}>
                <span className={isOpen ? 'bar open' : 'bar'}></span>
                <span className={isOpen ? 'bar open' : 'bar'}></span>
                <span className={isOpen ? 'bar open' : 'bar'}></span>
            </div>


            <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
                <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                <li><Link to="/techstack" onClick={() => setIsOpen(false)}>TechStack</Link></li>
                <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
                <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
