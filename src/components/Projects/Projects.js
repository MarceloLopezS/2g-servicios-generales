import React from 'react';
import './Projects.css';
import projectImg1 from '../../assets/images/remodelacion-hotel-costa-del-sol.jpeg';
import projectImg2 from '../../assets/images/proyecto-inmobiliario.jpeg';
import projectImg3 from '../../assets/images/estacion-meteorologica.jpeg';
import projectImg4 from '../../assets/images/diseño-sistema-rebombeo.jpeg';

const Projects = ({ reference }) => {
    return (
        <section id='projects' className='projects' ref={reference}>
            <section className='projects__text container'>
                <div>
                    <h2 className='fs-section-title highlighted text-neutral-100'>
                            Proyectos destacados
                    </h2>
                    <p className='section-primary-text highlighted text-accent-400'>
                        Perseguimos la creación de bases sólidas, confiables y resistentes
                    </p>
                </div>
                <div className='text-neutral-100 text-align-justify'>
                    <p>
                        En <span className='highlighted text-accent-400'>2G</span>, estamos comprometidos con dar las mejores soluciones; generando confianza y fidelidad en nuestros clientes.
                    </p>
                    <p>
                        Contamos con un equipo profesional altamente calificado y especializado para cada servicio que, 
                        junto con nuestros equipos de alta tecnología, nos permiten alcanzar la excelencia operacional de cada proyecto.
                    </p>
                    <p className='padding-top-150'>
                        Nuestro profesionalismo y trato cordial están presentes en todo momento, velando por una relación positiva y proactiva con el fin de mantener siempre los acuerdos de <span className='highlighted text-accent-400'>presupuesto, desarrollo y tiempo.</span>
                    </p>
                </div>
            </section>
            <section className='projects__grid'>
                <div className='card' data-section='projects'>
                    <div className='card__media'>
                        <img loading='lazy' src={projectImg1} alt='Remodelación Costa del Sol Cajamarca - Wyndham'></img>
                    </div>
                    <div className='card__body'>
                        <p className='highlighted'>Diseño - Construcción</p>
                        <h3>Costa del Sol Wyndham</h3>
                        <p>Caso de estudio</p>
                        <p>Remodelación general de piso salón y habitaciones del Hotel Costa del Sol Wyndham - Cajamarca</p>
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
                        <p>Reubicación, colocación de cerco perimétrico y mantenimiento preventivo de la Estación Meteorológica Automática Chugur - Cajamarca</p>
                        <button type='button' className='btn' data-bg='primary'>Más sobre el proyecto</button>
                    </div>
                </div>
                <div className='card' data-section='projects'>
                    <div className='card__media'>
                        <img loading='lazy' src={projectImg4} alt='Sistema de rebombeo - Minera Yanaocha'></img>
                    </div>
                    <div className='card__body'>
                        <p className='highlighted'>Diseño</p>
                        <h3>Minera Yanacocha</h3>
                        <p>Caso de estudio</p>
                        <p>Evaluación del sistema de tanques de rebombeo de agua en el tajo tapado Oeste de Minera Yanacocha - Cajamarca</p>
                        <button type='button' className='btn' data-bg='primary'>Más sobre el proyecto</button>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Projects