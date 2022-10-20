import React from 'react';
import './AboutUs.css';
import Carousel from '../Carousel/Carousel';

const AboutUs = ({ reference }) => {
    const toggleComplementText = (event) => {
        const buttonParent = event.target.parentElement;
        const slides = buttonParent.parentElement.querySelectorAll('.text-slide');
        slides.forEach(slide => slide.toggleAttribute('data-show'));
    }
    
    return (
        <section id='about-us' className='about-us' ref={reference}>
            <section className='about-us__text container'>
                <div className='text-slide main' data-show>
                    <h2 className='fs-section-title highlighted text-neutral-900'>
                        Acerca de nosotros
                    </h2>
                    <p className='section-primary-text highlighted text-primary-400'>
                        Operamos con los mejores estándares desde el año 2013
                    </p>
                    <p className='text-align-justify'>
                        <span className='highlighted text-accent-400'>Conocemos lo que hacemos.</span> Ejecutamos proyectos de construcción e ingeniería sostenibles, utilizando las mejores tecnologías para garantizar la satisfacción y confiabilidad de nuestros clientes.
                    </p>
                    <p className='text-align-justify'>
                        Buscamos la manera de garantizar el <span className='highlighted text-accent-400'>éxito de cada proyecto,</span> cumpliendo con los estándares de Calidad, Seguridad y Medio Ambiente.
                    </p>
                    <button type='button' className='btn' data-bg='primary' onClick={toggleComplementText}>Más sobre nosotros</button>
                </div>
                <div className='text-slide complement | text-align-justify'>
                    <h3 className='highlighted text-primary-400'>Nosotros</h3>
                    <p>Somos <span className='ff-primary'>2G SERVICIOS GENERALES S.R.L</span>, una empresa dedicada a la ejecución de proyectos de construcción e ingeniería con más de diez años de experiencia en: sistemas de rebombeo, levantamientos topográficos, saneamiento físico legal de predios, movimiento de tierras, sistemas de drenaje, trabajo en interiores y exteriores de edificaciones, cerco perimétrico y alquiler de maquinaria liviana para minería.</p>
                    <h3 className='highlighted text-primary-400'>Nuestra visión</h3>
                    <p>Ser reconocidos a nivel nacional como una empresa líder, sólida e innovadora en el sector construcción, brindando servicios que satisfacen íntegramente las expectativas de nuestros clientes, basándose en altos estándares de calidad, seguridad y cuidado del medio ambiente.</p>
                    <h3 className='highlighted text-primary-400'>Nuestra misión</h3>
                    <p>Contribuir al éxito de nuestros clientes, desarrollando cada uno de sus proyectos con calidad, seguridad, y cuidado del medio ambiente; siempre cumpliendo con los plazos y presupuestos previstos.</p>
                    <button className='btn btn-back' data-bg='primary' onClick={toggleComplementText}>
                        Volver
                    </button>
                </div>
            </section>
            <section className='about-us__main-picture'>
                <div className='ff-primary text-neutral-100 fs-picture-info'>
                    <p className='fw-regular padding-block-100'>Contratistas Generales</p>
                    <p className='fw-light'>Diseño y construcción</p>
                </div>
            </section>
            <section className='about-us__statistics | ff-primary text-neutral-100 bg-primary-400'>
                <div className='about-us__statistics-indicator | fs-carousel-indicator fw-light'>
                    <Carousel section={'about-us'}>
                        <div>
                            <p>01</p>
                        </div>
                        <div>
                            <p>02</p>
                        </div>
                    </Carousel>
                </div>
                <div className='about-us__statistics-percentaje | fs-carousel-number fw-bold'>
                    <Carousel section={'about-us'}>
                        <div>
                            <p>90<span className='text-accent-400'>%</span></p>
                        </div>
                        <div>
                            <p>60<span className='text-accent-400'>%</span></p>
                        </div>
                    </Carousel>
                </div>
                <div className='about-us__statistics-description | fs-carousel-description fw-light'>
                    <Carousel section={'about-us'}>
                        <div>
                            <p>De nuestros proyectos son bajo el esquema diseño/construcción</p>
                        </div>
                        <div>
                            <p>De nuestros proyectos son levantamientos topográficos</p>
                        </div>
                    </Carousel>
                </div>
            </section>
        </section>
    )
}

export default AboutUs