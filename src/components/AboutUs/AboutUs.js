import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section className='about-us'>
            <section className='about-us__text container'>
                <p className='fs-title-phrase highlighted text-neutral-900'>
                    El profesionalismo importa
                </p>
                <h2 className='fs-section-title highlighted text-primary-400'>
                    Operando bajo los mejores estándares desde 2013
                </h2>
                <p>
                    <span className='highlighted text-accent-400'>Conocemos lo que hacemos.</span> Usamos las mejores tecnologías para asegurar la eficiencia y confiabilidad de nuestro trabajo.
                </p>
                <p>
                    Buscamos la manera de garantizar el <span className='highlighted text-accent-400'>éxito de cada proyecto.</span> Gracias a nuestro compromiso, experiencia y valores, <span className='highlighted text-accent-400'>2G</span> se caracteriza por la completa satisfacción de sus clientes.
                </p>
                <button type='button' className='btn' data-bg='primary'>Más sobre nosotros</button>
            </section>
            <section className='about-us__main-picture'>
                <div className='text-neutral-100 ff-primary fs-picture-info'>
                    <p className='fw-regular padding-block-100'>Contratistas Generales</p>
                    <p className='fw-light'>Diseño y construcción</p>
                </div>
            </section>
            <section className='about-us__statistics | bg-primary-400'>
                {/* <Carousel />
                <Carousel />
                <Carousel /> */}
            </section>
        </section>
    )
}

export default AboutUs