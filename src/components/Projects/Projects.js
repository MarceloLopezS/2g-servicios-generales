import React from 'react';
import './Projects.css';
import projectImg1 from '../../assets/images/remodelacion-hotel-costa-del-sol.jpeg';
import projectImg2 from '../../assets/images/proyecto-inmobiliario.jpeg';
import projectImg3 from '../../assets/images/estacion-meteorologica.jpeg';
import projectImg4 from '../../assets/images/diseño-sistema-rebombeo.jpeg';

const Projects = ({ reference }) => {
    const toggleComplementText = (event) => {
        const buttonParent = event.target.parentElement;
        const slides = buttonParent.parentElement.querySelectorAll('.card__body');
        slides.forEach(slide => slide.toggleAttribute('data-show'));
    }
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
                    <p className='padding-top-150'>
                        Contamos con un equipo profesional altamente calificado y especializado para cada servicio que, 
                        junto con nuestros equipos de alta tecnología, nos permiten alcanzar la excelencia operacional de cada proyecto.
                    </p>
                    <p className='padding-top-150'>
                        Nuestro profesionalismo y trato cordial están presentes en todo momento, velando por una relación positiva y proactiva, con el fin de mantener siempre los acuerdos de <span className='highlighted text-accent-400'>presupuesto, desarrollo y tiempo.</span>
                    </p>
                </div>
            </section>
            <section className='projects__grid'>
                <div className='card' data-section='projects'>
                    <div className='card__media'>
                        <img loading='lazy' src={projectImg1} alt='Remodelación Costa del Sol Cajamarca - Wyndham'></img>
                    </div>
                    <div className='card__body main' data-show>
                        <p className='highlighted'>Diseño - Construcción</p>
                        <h3>Costa del Sol Wyndham</h3>
                        <p>Caso de estudio</p>
                        <p>Remodelación general de piso salón y habitaciones del Hotel Costa del Sol Wyndham - Cajamarca</p>
                        <button type='button' className='btn' data-bg='primary' onClick={toggleComplementText}>Más sobre el proyecto</button>
                    </div>
                    <div className='card__body complement | text-align-justify'>
                        <p>La empresa hotelera Costa del Sol - Wyndham, es reconocida en la ciudad de Cajamarca y a nivel nacional. Cuenta con 11 sucursales, siendo una de las cadenas hoteleras más importantes del país.</p>
                        <p>El proyecto consistió en la remodelación de espacios interiores del hotel, realizándose trabajos de: instalación del piso vinil, pintado de interiores, trabajos eléctricos y acabados finales.</p>
                        <p>Este proyecto fue entregado cumpliendo los estándares de calidad, seguridad y medio ambiente; los cuales son transcendentales para la satisfacción de nuestros clientes.</p>
                        <button type='button' className='btn' data-bg='primary' onClick={toggleComplementText}>Atrás</button>
                    </div>
                </div>
                <div className='card' data-section='projects'>
                    <div className='card__media'>
                        <img loading='lazy' src={projectImg2} alt='Proyecto Inmobiliario Vica World Global S.A.C'></img>
                    </div>
                    <div className='card__body main' data-show>
                        <p className='highlighted'>
                            Saneamiento físico legal de predios
                        </p>
                        <h3>Vica World Global S.A.C</h3>
                        <p>Caso de estudio</p>
                        <p>Levantamiento topográfico</p>
                        <p>Movimiento de tierras</p>
                        <p>Proyecto Inmobiliario Residencial San José - Namora - Cajamarca</p>
                        <button type='button' className='btn' data-bg='primary' onClick={toggleComplementText}>Más sobre el proyecto</button>
                    </div>
                    <div className='card__body complement | text-align-justify'>
                        <p>Vica Work Global S.A.C es una empresa inmobiliaria reconocida en la ciudad de Cajamarca, con inicio de actividades en el año 2014.</p>
                        <p>El proyecto consistió en el acondicionamiento del área para una próxima residencial, realizándose trabajos de: levantamiento topográfico, preparación del terreno, corte, relleno y trazado, demarcación de áreas comunes e instalación de un portón de ingreso.</p>
                        <p>El cliente expresó su satisfacción con los trabajos y el servicio realizado, reconociendo nuestro compromiso y trayectoria.</p>
                        <button type='button' className='btn' data-bg='primary' onClick={toggleComplementText}>Atrás</button>
                    </div>
                </div>
                <div className='card' data-section='projects'>
                    <div className='card__media'>
                        <img loading='lazy' src={projectImg3} alt='Cerco perimétrico Estación Meteorológica Automática Chugur'></img>
                    </div>
                    <div className='card__body main' data-show>
                        <p className='highlighted'>Construcción</p>
                        <h3>Servicio Nacional Meteorología e Hidrología</h3>
                        <p>Caso de estudio</p>
                        <p>Reubicación, colocación de cerco perimétrico y mantenimiento preventivo de la Estación Meteorológica Automática Chugur - Cajamarca</p>
                        <button type='button' className='btn' data-bg='primary' onClick={toggleComplementText}>Más sobre el proyecto</button>
                    </div>
                    <div className='card__body complement | text-align-justify'>
                        <p>El SENAMHI es un organismo público especializado  en las áreas de meteorología, hidrología, agrometeoro&shy;logía y asuntos ambientales.</p>
                        <p>El proyecto consistió en la reubicación de una torre de alta tensión y la instalación de un cerco perimétrico. Se llevaron a cabo trabajos de alto riego (trabajos en altura), pero siempre cumpliendo con los estándares de seguridad por parte de nuestros trabajadores.</p>
                        <p>El cliente quedó satisfecho con el trabajo final, siendo un referente importante en nuestra cartera.</p>
                        <button type='button' className='btn' data-bg='primary' onClick={toggleComplementText}>Atrás</button>
                    </div>
                </div>
                <div className='card' data-section='projects'>
                    <div className='card__media'>
                        <img loading='lazy' src={projectImg4} alt='Sistema de rebombeo - Minera Yanaocha'></img>
                    </div>
                    <div className='card__body main' data-show>
                        <p className='highlighted'>Diseño</p>
                        <h3>Minera Yanacocha</h3>
                        <p>Caso de estudio</p>
                        <p>Evaluación del sistema de tanques de rebombeo de agua en el tajo tapado Oeste de Minera Yanacocha - Cajamarca</p>
                        <button type='button' className='btn' data-bg='primary' onClick={toggleComplementText}>Más sobre el proyecto</button>
                    </div>
                    <div className='card__body complement | text-align-justify'>
                        <p>Minera Yanacocha es una mina aurífera considerada la más grande de América del Sur y la segunda a nivel mundial.</p>
                        <p>El proyecto tuvo la finalidad de evaluar el funcionamiento hidráulico del sistema de tanques de rebombeo del tajo (Tapado Oeste), haciendo uso de información topográfica y cartográfica. Se obtuvieron referencias a tiempos inoperativos y, en consecuencia, presentamos una alternativa de solución de ingeniería, obteniendo importantes mejoras en la optimización de drenaje.</p>
                        <p>El proyecto generó la satisfacción nuestra y del cliente, considerándose un éxito por ambas partes.</p>
                        <button type='button' className='btn' data-bg='primary' onClick={toggleComplementText}>Atrás</button>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Projects