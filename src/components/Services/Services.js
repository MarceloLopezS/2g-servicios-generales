import React from 'react';
import './Services.css';
import serviceImg1 from '../../assets/images/levantamiento-topográfico.jpg';
import serviceImg2 from '../../assets/images/movimiento-tierras.jpg';
import serviceImg3 from '../../assets/images/evaluación-sistemas-bombeo.jpg';
import serviceImg4 from '../../assets/images/sistemas-drenaje.jpg';
import serviceImg5 from '../../assets/images/construcción.jpg';
import serviceImg6 from '../../assets/images/saneamiento-físico-legal-predios.jpg';

const Services = () => {
    return (
        <section className='services'>
            <div className='services__text container'>
                <h2 className='fs-title-phrase highlighted text-neutral-100'>
                    Nuestros Servicios
                </h2>
                <p className='section-title highlighted text-accent-400'>
                    Tecnología punta a disposición de nuestros clientes
                </p>
                <p>
                    <span className='highlighted text-accent-400'>Orgullosos de nuestro trabajo.</span> Contamos con equipamiento y personal adecuados para cada servicio.
                    Trabajamos en torno a estándares de <span className='highlighted text-accent-400'>calidad, seguridad y medio ambiente</span> que nos permite asegurar una ejecución de proyectos impecable.
                </p>
            </div>
            <div className='services__grid'>
                <div className='card' data-section='services'>
                    <div className='card__media'>
                        <img loading='lazy' src={serviceImg1} alt='Levantamiento topográfico'></img>
                    </div>
                    <div className='card__body'>
                        <h3 className='highlighted'>Levantamiento Topográfico</h3>
                        <p>Empleamos los mejores equipos y tecnología punta para asegurar un trabajo preciso y eficiente.</p>
                    </div>
                </div>
                <div className='card' data-section='services'>
                    <div className='card__media'>
                        <img loading='lazy' src={serviceImg2} alt='Movimiento de tierras'></img>
                    </div>
                    <div className='card__body'>
                        <h3 className='highlighted'>Movimiento de tierras</h3>
                        <p>Empleamos los mejores equipos y tecnología punta para asegurar un trabajo preciso y eficiente.</p>
                    </div>
                </div>
                <div className='card' data-section='services'>
                    <div className='card__media'>
                        <img loading='lazy' src={serviceImg3} alt='Sistemas de bombeo'></img>
                    </div>
                    <div className='card__body'>
                        <h3 className='highlighted'>Sistemas de bombeo</h3>
                        <p>Empleamos los mejores equipos y tecnología punta para asegurar un trabajo preciso y eficiente.</p>
                    </div>
                </div>
                <div className='card' data-section='services'>
                    <div className='card__media'>
                        <img loading='lazy' src={serviceImg4} alt='Sistemas de drenaje'></img>
                    </div>
                    <div className='card__body'>
                        <h3 className='highlighted'>Sistemas de drenaje</h3>
                        <p>Empleamos los mejores equipos y tecnología punta para asegurar un trabajo preciso y eficiente.</p>
                    </div>
                </div>
                <div className='card' data-section='services'>
                    <div className='card__media'>
                        <img loading='lazy' src={serviceImg5} alt='Construcción'></img>
                    </div>
                    <div className='card__body'>
                        <h3 className='highlighted'>Construcción</h3>
                        <p>Empleamos los mejores equipos y tecnología punta para asegurar un trabajo preciso y eficiente.</p>
                    </div>
                </div>
                <div className='card' data-section='services'>
                    <div className='card__media'>
                        <img loading='lazy' src={serviceImg6} alt='Saneamiento físico legal de predios'></img>
                    </div>
                    <div className='card__body'>
                        <h3 className='highlighted'>Saneamiento físico legal de predios</h3>
                        <p>Empleamos los mejores equipos y tecnología punta para asegurar un trabajo preciso y eficiente.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services