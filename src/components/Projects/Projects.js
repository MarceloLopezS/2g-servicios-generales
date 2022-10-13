import React from 'react';
import './Projects.css';
import projectImg1 from '../../assets/images/remodelacion-hotel-costa-del-sol.jpeg';
import projectImg2 from '../../assets/images/proyecto-inmobiliario.jpeg';
import projectImg3 from '../../assets/images/estacion-meteorologica.jpeg';
import projectImg4 from '../../assets/images/muro-perimetrico.jpeg';

const Projects = ({ reference }) => {
    return (
        <section id='projects' className='projects' ref={reference}>
            <div className='projects__text container'>
                <div>
                    <h2 className='fs-section-title highlighted text-neutral-100'>
                            Proyectos destacados
                    </h2>
                    <p className='section-primary-text highlighted text-accent-400'>
                        La expectativa del cliente en las mejores manos
                    </p>
                </div>
                <div className='text-neutral-100 text-align-justify'>
                    <p>
                        En <span className='highlighted text-accent-400'>2G</span>, el compromiso es nuestro mejor valor y nuestro mayor orgullo.
                    </p>
                    <p>
                        Contamos con las capacidades humanas, profesionales y tecnológicas para asegurar un <span className='highlighted text-accent-400'>proyecto alineado al designio del cliente</span>, siguiendo siempre los estándares de calidad, seguridad y medio ambiente.
                    </p>
                    <p className='padding-top-150'>
                        Nuestro profesionalismo y trato cordial están presentes en todo momento, velando por una relación positiva y proactiva con el fin de mantener siempre los acuerdos de <span className='highlighted text-accent-400'>presupuesto, desarrollo y tiempo.</span>
                    </p>
                </div>
            </div>
            <div className='projects__grid'>
                <div className='card' data-section='projects'>
                    <div className='card__media'>
                        <img loading='lazy' src={projectImg1} alt='Remodelación Costa del Sol Cajamarca - Wyndham'></img>
                    </div>
                    <div className='card__body'>
                        <p className='highlighted'>Construcción</p>
                        <h3>Costa del Sol Cajamarca - Wyndham</h3>
                        <p>Caso de estudio</p>
                        <p>Remodelación de piso salón y habitaciones del Hotel Costa del Sol - Wyndham</p>
                        <button type='button' className='btn' data-bg='primary'>Más sobre el proyecto</button>
                    </div>
                </div>
                <div className='card' data-section='projects'>
                    <div className='card__media'>
                        <img loading='lazy' src={projectImg2} alt='Proyecto Inmobiliario Vica World Global S.A.C'></img>
                    </div>
                    <div className='card__body'>
                        <p className='highlighted'>
                            Saneamiento físico legal de predios
                        </p>
                        <h3>Vica World Global S.A.C</h3>
                        <p>Caso de estudio</p>
                        <p>Levantamiento topográfico</p>
                        <p>Movimiento de tierras</p>
                        <p>Proyecto Inmobiliario Residencial San José - Namora - Cajamarca</p>
                        <button type='button' className='btn' data-bg='primary'>Más sobre el proyecto</button>
                    </div>
                </div>
                <div className='card' data-section='projects'>
                    <div className='card__media'>
                        <img loading='lazy' src={projectImg3} alt='Cerco perimétrico Estación Meteorológica Automática Chugur'></img>
                    </div>
                    <div className='card__body'>
                        <p className='highlighted'>Construcción</p>
                        <h3>Servicio Nacional Meteorología e Hidrología</h3>
                        <p>Caso de estudio</p>
                        <p>Reubicación, colocación de cerco perimétrico y mantenimiento preventivo de la Estación Meteorológica Automática Chugur</p>
                        <button type='button' className='btn' data-bg='primary'>Más sobre el proyecto</button>
                    </div>
                </div>
                <div className='card' data-section='projects'>
                    <div className='card__media'>
                        <img loading='lazy' src={projectImg4} alt='Levantamiento topográfico'></img>
                    </div>
                    <div className='card__body'>
                        <p className='highlighted'>Construcción</p>
                        <h3>Divino Salvador S.A.</h3>
                        <p>Caso de estudio</p>
                        <p>Construcción de muro perimétrico sub - estación de Rebombeo Cerro Negro (Materiales y Agregados).</p> <p>Fabricación de estructuras metálicas galvanizadas según diseño.</p>
                        <button type='button' className='btn' data-bg='primary'>Más sobre el proyecto</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects