import React from 'react';
import CustomSelect from '../CustomSelect/CustomSelect';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <section className='contact-us'>
            <div className='contact-us__text container'>
                <h2 className='fs-section-title highlighted text-neutral-900'>Contacta con nosotros</h2>
                <p className='section-primary-text highlighted text-primary-400'>Estamos a tu servicio</p>
                <div className='contact-us__info'>
                    <p className='contact-us__info-title'>Dirección:</p>
                    <p>Jr. San Sebastián 557 - Cajamarca - Cajamarca</p>
                </div>
                <div className='contact-us__info'>
                    <p className='contact-us__info-title'>Teléfonos:</p>
                    <p>076 999 999</p>
                    <p>976 999 999</p>
                </div>
                <div className='contact-us__info'>
                    <p className='contact-us__info-title'>Correos:</p>
                    <p>consultas@2gserviciosgenerales.com</p>
                    <p>gerencia@2gserviciosgenerales.com</p>
                </div>
            </div>
            <div className='contact-us__form-container container'>
                <p className='contact-us__info-title'>Envíanos un mensaje:</p>
                <form className='contact-us__form'>
                    <div className='contact-us__form-group'>
                        <label className='contact-us__form-label text-form-label' htmlFor='contact-us__service'>Selecciona un servicio de interés</label>
                        <div className='contact-us__select-container'>
                            <CustomSelect optionsArray={[
                                '-',
                                'Construcción',
                                'Levantamiento topográfico',
                                'Movimiento de tierras',
                                'Saneamiento físico legal de predios',
                                'Sistemas de bombeo',
                                'Sistemas de drenaje'
                            ]}/>
                        </div>
                    </div>
                    <div className='contact-us__form-group'>
                        <label className='contact-us__form-label text-form-label' htmlFor='contact-us__name'>Nombre completo</label>
                        <div className='contact-us__input-container'>
                            <input id='contact-us__name' name='contact-us__name' type='text' placeholder='Por favor escribe tu nombre completo'></input>
                        </div>
                    </div>
                    <div className='contact-us__form-group'>
                        <label className='contact-us__form-label text-form-label' htmlFor='contact-us__email'>Email</label>
                        <div className='contact-us__input-container'>
                            <input id='contact-us__email' name='contact-us__email' type='email' placeholder='Por favor escribe tu dirección de correo electrónico'></input>
                        </div>
                    </div>
                    <div className='contact-us__form-group'>
                        <label className='contact-us__form-label text-form-label' htmlFor='contact-us__company-name'>Empresa</label>
                        <div className='contact-us__input-container'>
                            <input id='contact-us__company-name' name='contact-us__company-name' type='text' placeholder='Por favor escribe el nombre de tu empresa'></input>
                        </div>
                    </div>
                    <div className='contact-us__form-group'>
                        <label className='contact-us__form-label text-form-label' htmlFor='contact-us__city'>Ciudad</label>
                        <div className='contact-us__input-container'>
                            <input id='contact-us__city' name='contact-us__city' type='text' placeholder='Por favor escribe la ciudad donde te ubicas'></input>
                        </div>
                    </div>
                    <div className='contact-us__form-group'>
                        <label className='contact-us__form-label text-form-label' htmlFor='contact-us__message'>Mensaje</label>
                        <div className='contact-us__input-container'>
                            <textarea id='contact-us__message' name='contact-us__message' placeholder='Por favor escribe tu mensaje' ></textarea>
                        </div>
                    </div>
                    <button type='button' className='btn' data-bg='primary'>Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default ContactUs