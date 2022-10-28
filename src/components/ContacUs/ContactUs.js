import React from 'react';
import CustomSelect from '../CustomSelect/CustomSelect';
import './ContactUs.css';

const removeInvalidClass = (e) => {
    if ([...e.target.parentElement.classList].includes('invalid')) {
        e.target.parentElement.classList.remove('invalid');
    } else if ([...e.target.parentElement.parentElement.classList].includes('invalid')) {
        e.target.parentElement.parentElement.classList.remove('invalid');
    }
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const serviceOfInterest = e.target.querySelector('select');
    const clientName = e.target.querySelector('input[name="contact-us__name"]');
    const email = e.target.querySelector('input[name="contact-us__email"]');
    const company = e.target.querySelector('input[name="contact-us__company"]');
    const city = e.target.querySelector('input[name="contact-us__city"]');
    const message = e.target.querySelector('textarea[name="contact-us__message"]')
    const inputs = [serviceOfInterest, clientName, email, company, city, message];
    const messageContainer = e.target.querySelector('.server-response');
    let validForm = true;

    messageContainer.textContent = '';
    messageContainer.removeAttribute('data-success');
    messageContainer.removeAttribute('data-danger');
    if (serviceOfInterest.value === '-') {
        validForm = false;
        serviceOfInterest.parentElement.classList.add('invalid');
    }
    inputs.forEach(input => {
        if (!input.value) {
            validForm = false;
            input.parentElement.classList.add('invalid');
        }
    });

    if(email.value) {
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!email.value.match(regex)) {
            validForm = false;
            email.parentElement.classList.add('invalid');
            email.setAttribute('placeholder', 'Por favor inserta un correo válido');
            email.value = '';
        }
    }

    if(validForm) {
        const loader = e.target.querySelector('.loader');
        const submitButton = e.target.querySelector('button[type="submit"]');
        loader.setAttribute('data-show', '');
        submitButton.disabled = true;
        const formData = {
            serviceOfInterest: serviceOfInterest.value,
            clientName: clientName.value,
            email: email.value,
            company: company.value,
            city: city.value,
            message: message.value
        };
        fetch("http://localhost:3001", {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .catch(error => {
            loader.removeAttribute('data-show');
            console.error(`Fetch error: ${error}`);
            messageContainer.textContent = 'Hubo un inconveniente al procesar la solicitud. Por favor, intente nuevamente.';
            messageContainer.setAttribute('data-danger', '');
            submitButton.disabled = false;
        })
        .then(data => {
            loader.removeAttribute('data-show');
            const { success, message } = data;
            const messageContainer = e.target.querySelector('.server-response');

            messageContainer.textContent = message;
            if(success === 'true') {
                messageContainer.removeAttribute('data-danger');
                messageContainer.setAttribute('data-success', '');
                submitButton.disabled = true;
            } else if (success == 'false') {
                messageContainer.removeAttribute('data-success');
                messageContainer.setAttribute('data-danger', '');
                submitButton.disabled = false;
            }
        });
    }
}

const ContactUs = ({ reference }) => {
    return (
        <section id='contact-us' className='contact-us' ref={reference}>
            <section className='contact-us__text container'>
                <h2 className='fs-section-title highlighted text-neutral-900'>Contacta con nosotros</h2>
                <p className='section-primary-text highlighted text-primary-400'>Estamos a tu servicio</p>
                <div className='contact-us__info'>
                    <p className='contact-us__info-title'>Dirección:</p>
                    <p>Jr. San Sebastián 557 - Urb. Casurco - Cajamarca - Cajamarca</p>
                </div>
                <div className='contact-us__info'>
                    <p className='contact-us__info-title'>Teléfonos:</p>
                    <p>+51 924 674 701</p>
                    <p>+51 966 869 663</p>
                </div>
                <div className='contact-us__info'>
                    <p className='contact-us__info-title'>Correos:</p>
                    <p>consultas@2gserviciosgenerales.com</p>
                    <p>gerencia@2gserviciosgenerales.com</p>
                </div>
            </section>
            <section className='contact-us__form-container container'>
                <p className='contact-us__info-title'>Envíanos un mensaje:</p>
                <form className='contact-us__form' onSubmit={onFormSubmit}>
                    <div className='contact-us__form-group'>
                        <label className='contact-us__form-label text-form-label' htmlFor='contact-us__service'>Selecciona un servicio de interés</label>
                        <div className='contact-us__select-container' onClick={removeInvalidClass}>
                            <CustomSelect optionsArray={[
                                '-',
                                'Construcción',
                                'Levantamiento topográfico',
                                'Movimiento de tierras',
                                'Saneamiento físico legal de predios',
                                'Sistemas de bombeo',
                                'Sistemas de drenaje'
                            ]} />
                        </div>
                    </div>
                    <div className='contact-us__form-group'>
                        <label className='contact-us__form-label text-form-label' htmlFor='contact-us__name'>Nombre completo</label>
                        <div className='contact-us__input-container'>
                            <input id='contact-us__name' name='contact-us__name' type='text' placeholder='Por favor escribe tu nombre completo' onFocus={removeInvalidClass}></input>
                        </div>
                    </div>
                    <div className='contact-us__form-group'>
                        <label className='contact-us__form-label text-form-label' htmlFor='contact-us__email'>Email</label>
                        <div className='contact-us__input-container'>
                            <input id='contact-us__email' name='contact-us__email' type='email' placeholder='Por favor escribe tu dirección de correo electrónico' onFocus={removeInvalidClass}></input>
                        </div>
                    </div>
                    <div className='contact-us__form-group'>
                        <label className='contact-us__form-label text-form-label' htmlFor='contact-us__company'>Empresa</label>
                        <div className='contact-us__input-container'>
                            <input id='contact-us__company' name='contact-us__company' type='text' placeholder='Por favor escribe el nombre de tu empresa' onFocus={removeInvalidClass}></input>
                        </div>
                    </div>
                    <div className='contact-us__form-group'>
                        <label className='contact-us__form-label text-form-label' htmlFor='contact-us__city'>Ciudad</label>
                        <div className='contact-us__input-container'>
                            <input id='contact-us__city' name='contact-us__city' type='text' placeholder='Por favor escribe la ciudad donde te ubicas' onFocus={removeInvalidClass}></input>
                        </div>
                    </div>
                    <div className='contact-us__form-group'>
                        <label className='contact-us__form-label text-form-label' htmlFor='contact-us__message'>Mensaje</label>
                        <div className='contact-us__input-container'>
                            <textarea id='contact-us__message' name='contact-us__message' placeholder='Por favor escribe tu mensaje' onFocus={removeInvalidClass}></textarea>
                        </div>
                    </div>
                    <div className='contact-us__action-response'>
                        <button type='submit' className='btn' data-bg='primary'>Enviar</button>
                        <div className='response'>
                            <span className='loader'></span>
                            <div className='server-response'></div>
                        </div>
                    </div>
                </form>
            </section>
        </section>
    )
}

export default ContactUs