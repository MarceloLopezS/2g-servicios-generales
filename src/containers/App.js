import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import AboutUs from '../components/AboutUs/AboutUs';

class App extends Component {
    componentDidMount() {
        // About-Us Carousels
        const aboutUsCarousels = document.querySelectorAll('.carousel[data-section="about-us"]');
        const nextSlide = (carouselTrack, numberOfSlides) => {
            const firstSlide = carouselTrack.querySelector('.carousel__slide');
            carouselTrack.style.transition = 'transform 500ms ease-out';
            if(numberOfSlides > 2) {
                carouselTrack.style.transform = `translateY(-${(100 / numberOfSlides) * 2}%)`;
            } else {
                carouselTrack.style.transform = `translateY(-${100 / numberOfSlides}%)`;
            }
            setTimeout(() => {
                carouselTrack.style.transition = 'none';
                carouselTrack.insertAdjacentElement('beforeend', firstSlide);
                if(numberOfSlides > 2) {
                    carouselTrack.style.transform = `translateY(-${100 / numberOfSlides}%)`
                } else {
                    carouselTrack.style.transform = `translateY(0%)`;
                }
            }, 500)
        }
        
        aboutUsCarousels.forEach(carousel => {
            const track = carousel.querySelector('.carousel__track');
            const slides = track.querySelectorAll('.carousel__slide');
            const numberOfSlides = slides.length;
            track.style.height = `${100 * numberOfSlides}%`;
            if(numberOfSlides > 2) {
                const lastSlide = slides[slides.length - 1];
                track.insertAdjacentElement('afterbegin', lastSlide);
                track.style.transform = `translateX(-${100 / numberOfSlides}%)`;
            }
            setInterval(() => {
                nextSlide(track, numberOfSlides);
            }, 4000)
        })
    }

    onMenuToggle() {
        const navLinks = document.querySelector('#navbar__primary-links');
        const navDropIcon = document.querySelector('#navbar__drop');
        const navCloseIcon = document.querySelector('#navbar__close');

        navLinks.getAttribute('aria-expanded') === 'true' 
        ? navLinks.setAttribute('aria-expanded', 'false')
        : navLinks.setAttribute('aria-expanded', 'true')
        navCloseIcon.toggleAttribute('data-visible');
        navDropIcon.toggleAttribute('data-visible');
        navLinks.toggleAttribute('data-expanded');
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    <Navbar menuToggle={this.onMenuToggle}/>
                </header>
                <main>
                    <HomeBanner />
                    <AboutUs />
                    {/* <Services />
                    <ProjectsGrid />
                    <WhyWorkWithUS />
                    <CallToAction />
                    <ContactUs /> */}
                </main>
                <footer>
                    {/* <LogoAndSocialLinks />
                    <FooterNav />
                    <Address />
                    <ContactInfo />
                    <Copyrights /> */}
                </footer>
            </React.Fragment>
        );
    }
}

export default App;