import React from 'react';
import './AboutUs.css';
import Carousel from '../Carousel/Carousel';

const AboutUs = ({ reference }) => {
    return (
        <section id='about-us' className='about-us' ref={reference}>
            <section className='about-us__text container'>
                <h2 className='fs-section-title highlighted text-neutral-900'>
                    Acerca de nosotros
                </h2>
                <p className='section-primary-text highlighted text-primary-400'>
                    Operamos con los mejores estándares desde el año 2013
                </p>
                <p>
                    <span className='highlighted text-accent-400'>Conocemos lo que hacemos.</span> Ejecutamos proyectos de construcción e ingeniería sostenibles, utilizando las mejores tecnologías para garantizar la satisfacción y confiabilidad de nuestros clientes.
                </p>
                <p>
                    Buscamos la manera de garantizar el <span className='highlighted text-accent-400'>éxito de cada proyecto,</span> cumpliendo con los estándares de Calidad, Seguridad y Medio Ambiente.
                </p>
                <button type='button' className='btn' data-bg='primary'>Más sobre nosotros</button>
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