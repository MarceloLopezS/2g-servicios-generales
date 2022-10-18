import React from 'react';
import './Navbar.css';
import brandLogo from '../../assets/images/logo.png';
import certificateLogo from '../../assets/images/logo-camara-comercio.png';

const menuToggle = () => {
    if (window.innerWidth < 1008) {
        const menuToggleButton = document.querySelector('.navbar__mobile-menu-toggle');
        const navLinks = document.querySelector('#navbar__primary-navigation');
        const navDropIcon = document.querySelector('#navbar__drop');
        const navCloseIcon = document.querySelector('#navbar__close');

        menuToggleButton.getAttribute('aria-expanded') === 'true' 
        ? menuToggleButton.setAttribute('aria-expanded', 'false')
        : menuToggleButton.setAttribute('aria-expanded', 'true')
        navCloseIcon.toggleAttribute('data-visible');
        navDropIcon.toggleAttribute('data-visible');
        navLinks.toggleAttribute('data-expanded');
    }
}

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container navbar__container'>
                <img className='navbar__certificate' src={certificateLogo} alt='Logo Cámara de Comercio y Producción'></img>
                <img className='navbar__brand' src={brandLogo} alt='2G Logo'></img>
                <button className='navbar__mobile-menu-toggle' aria-controls='navbar__primary-navigation' aria-expanded='false' onClick={menuToggle}>
                    <svg className='navbar__icon' id='navbar__drop' data-visible xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    <svg className='navbar__icon' id='navbar__close' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    <span className='visually-hidden'>Menu</span>
                </button>
                <nav>
                    <ul id='navbar__primary-navigation' className='navbar__links | ff-primary fw-light' aria-label='Navegación primaria'>
                        <li onClick={menuToggle}>
                            <a href='#home'>Inicio</a>
                        </li>
                        <li onClick={menuToggle}>
                            <a href='#about-us'>Nosotros</a>
                        </li>
                        <li onClick={menuToggle}>
                            <a href='#services'>Servicios</a>
                        </li>
                        <li onClick={menuToggle}>
                            <a href='#projects'>Proyectos</a>
                        </li>
                        <li onClick={menuToggle}>
                            <a href='#contact-us'>Contacto</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar