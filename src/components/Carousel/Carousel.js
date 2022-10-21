import React, { useEffect, useRef } from 'react';
import './Carousel.css';

const useCarousel = () => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        let transitionTimeout;
        let carouselInterval;
        const nextSlide = (carouselTrack, numberOfSlides) => {
            const firstSlide = carouselTrack.querySelector('.carousel__slide');
            carouselTrack.style.transition = 'transform 500ms ease-out';
            if(numberOfSlides > 2) {
                carouselTrack.style.transform = `translateY(-${(100 / numberOfSlides) * 2}%)`;
            } else {
                carouselTrack.style.transform = `translateY(-${100 / numberOfSlides}%)`;
            }
            transitionTimeout = setTimeout(() => {
                carouselTrack.style.transition = 'none';
                carouselTrack.insertAdjacentElement('beforeend', firstSlide);
                if(numberOfSlides > 2) {
                    carouselTrack.style.transform = `translateY(-${100 / numberOfSlides}%)`
                } else {
                    carouselTrack.style.transform = `translateY(0%)`;
                }
            }, 500)
        }
        
        const track = carousel.querySelector('.carousel__track');
        const slides = track.querySelectorAll('.carousel__slide');
        const numberOfSlides = slides.length;
        track.style.height = `${100 * numberOfSlides}%`;
        if(numberOfSlides > 2) {
            const lastSlide = slides[slides.length - 1];
            track.insertAdjacentElement('afterbegin', lastSlide);
            track.style.transform = `translateY(-${100 / numberOfSlides}%)`;
        }
        carouselInterval = setInterval(() => {
            nextSlide(track, numberOfSlides);
        }, 4000)

        return () => {
            clearTimeout(transitionTimeout);
            clearInterval(carouselInterval);
        }
    }, [])

    return [carouselRef];
}

const Carousel = (props) => {
    const [carouselRef] = useCarousel();

    return (
        <div className='carousel' data-section={props.section} ref={carouselRef}>
            <ul className='carousel__track'>
            {
                props.children.map((child, i) => {
                    return (
                        <li className='carousel__slide' key={i}>
                            {child}
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Carousel