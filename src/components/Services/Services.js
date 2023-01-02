import React from 'react';
import './Services.css';
import serviceImg1 from '../../assets/images/levantamiento-topografico.webp';
import serviceImg2 from '../../assets/images/construccion-civil.webp';
import serviceImg3 from '../../assets/images/movimiento-tierras.webp';
import serviceImg4 from '../../assets/images/sistemas-drenaje.webp';
import serviceImg5 from '../../assets/images/evaluacion-sistemas-bombeo.webp';
import serviceImg6 from '../../assets/images/saneamiento-fisico-legal-predios.webp';

const Services = ({ reference }) => {
    return (
        <section id='services' className='services' ref={reference}>
            <section className='services__text container'>
                <h2 className='fs-section-title highlighted text-neutral-100'>
                    Nuestros Servicios
                </h2>
                <p className='section-primary-text highlighted text-accent-400'>
                    Tecnología y compromiso para la satisfacción de nuestros clientes
                </p>
                <p className='text-align-justify'>
                    <span className='highlighted text-accent-400'>Orgullosos de nuestro trabajo.</span> Contamos con personal calificado, equipos de alta tecnología y la mejor logística para cada servicio. Nos aseguramos de que cada prestación se ejecute de acuerdo a los estándares exigidos por ley.
                </p>
            </section>
            <section className='services__grid'>
                <div className='card' data-section='services'>
                    <div className='card__media'>
                        <img loading='lazy' src={serviceImg1} alt='Levantamiento topográfico'></img>
                    </div>
                    <div className='card__body'>
                        <h3>Levantamiento Topográfico</h3>
                        <p>Garantizamos mediciones precisas y detalladas, empleando fotogrametría y geodesia.</p>
                    </div>
                </div>
                <div className='card' data-section='services'>
                    <div className='card__media'>
                        <img loading='lazy' src={serviceImg2} alt='Construcción Civil'></img>
                    </div>
                    <div className='card__body'>
                        <h3>Construcción Civil</h3>
                        <p>Ofrecemos planificación, cimenta&shy;ción, edificación, instalación de tuberías, electricidad y remodelación.</p>
                    </div>
                </div>
                <div className='card' data-section='services'>
                    <div className='card__media'>
                        <img loading='lazy' src={serviceImg3} alt='Movimiento de tierras'></img>
                    </div>
                    <div className='card__body'>
                        <h3>Movimiento de tierras</h3>
                        <p>Ejecutamos con eficacia proyectos de calidad, gracias a nuestro personal, equipos y maquinaria.</p>
                    </div>
                </div>
                <div className='card' data-section='services'>
                    <div className='card__media'>
                        <img loading='lazy' src={serviceImg4} alt='Sistemas de drenaje'></img>
                    </div>
                    <div className='card__body'>
                        <h3>Sistemas de drenaje</h3>
                        <p>Diseñamos e instalamos sistemas de drenaje y almacenamiento con calidad garantizada.</p>
                    </div>
                </div>
                <div className='card' data-section='services'>
                    <div className='card__media'>
                        <img loading='lazy' src={serviceImg5} alt='Sistemas de bombeo'></img>
                    </div>
                    <div className='card__body'>
                        <h3>Sistemas de bombeo</h3>
                        <p>Realizamos evaluación, instalación y mantenimiento de sistemas completos de bombeo de agua en tajos abiertos y subterráneos.</p>
                    </div>
                </div>
                <div className='card' data-section='services'>
                    <div className='card__media'>
                        <img loading='lazy' src={serviceImg6} alt='Saneamiento físico legal de predios'></img>
                    </div>
                    <div className='card__body'>
                        <h3>Saneamiento físico legal de predios</h3>
                        <p>Brindamos asesoría técnico legal en todo el proceso de saneamiento, asegurando su inversión.</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Services