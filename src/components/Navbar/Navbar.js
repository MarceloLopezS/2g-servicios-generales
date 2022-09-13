import React from 'react';
import './Navbar.css';
import logoPath from '../../assets/images/logo.jpg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a className="logo">
                <img src={logoPath} alt="2G Logo"></img>
            </a>
            <button className='btn'></button>
            <ul className='nav-links'>
                <li>
                    <a href='#'>Inicio</a>
                </li>
                <li>
                    <a href='#'>Nosotros</a>
                </li>
                <li>
                    <a href='#'>Servicios</a>
                </li>
                <li>
                    <a href='#'>Política de Calidad</a>
                </li>
                <li>
                    <a href='#'>Proyectos</a>
                </li>
                <li>
                    <a href='#'>Contáctenos</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar