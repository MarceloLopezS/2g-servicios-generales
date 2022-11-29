import React from 'react';
import './HomeBanner.css';
import backgroundImage from '../../assets/images/home-image.webp';
import videoPath from '../../assets/videos/banner-video.mp4';
import logoPath from '../../assets/images/logo-banner.webp';

const HomeBanner = ({ reference }) => {
    return (
        <section id='home' className='banner' ref={reference}>
            {
                window.innerWidth > 1008 
                ? (<video className='banner__media banner__video' autoPlay muted loop>
                <source src={videoPath} type='video/mp4'></source>
            </video>)
                : (<img className='banner__media banner__bg-img' src={backgroundImage} alt='Paisaje de la ciudad de Cajamarca'>
                </img>)
            }
            <div className='banner__front container'>
                <div className='banner__brand'>
                    <img src={logoPath} alt='2G Logo'></img>
                </div>
                <div className='banner__body'>
                    <h1 className='highlighted fs-banner-title text-primary-400 padding-block-100'>Diseño <span className='text-accent-100'>&</span> Construcción</h1>
                    <p>Somos una empresa peruana con una década de experiencia en materializar los proyectos de nuestros clientes, siguiendo los más altos estándares de calidad, seguridad y medio ambiente.</p>
                </div>
                <div className='banner__scroll-wraper | padding-top-200'>
                    <div className='banner__scroll-icon-rail'>
                        <div className='banner__scroll-icon-moving'></div>
                    </div>
                    <span className='highlighted'><a href='#about-us'>Explora más</a></span>
                </div>
            </div>
        </section>
    )
}

export default HomeBanner