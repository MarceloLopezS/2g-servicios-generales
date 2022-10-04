import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import AboutUs from '../components/AboutUs/AboutUs';
import Services from '../components/Services/Services';

const useHomeBannerOutOfScreen = (options) => {
    const ref = useRef(null);

    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        const currentRef = ref.current;
        const callback = ([entry]) => {
            if(entry.isIntersecting) {
                navbar.removeAttribute('data-theme')
            } else {
                navbar.setAttribute('data-theme', 'inverse');
            }
        }

        const observer = new IntersectionObserver(callback, options);
        if(currentRef) observer.observe(currentRef);

        return () => {
            if(currentRef) observer.unobserve(currentRef);
        }
    }, [ref, options])

    return [ref];
}

const onMenuToggle = () => {
    const navLinks = document.querySelector('#navbar__primary-navigation');
    const navDropIcon = document.querySelector('#navbar__drop');
    const navCloseIcon = document.querySelector('#navbar__close');

    navLinks.getAttribute('aria-expanded') === 'true' 
    ? navLinks.setAttribute('aria-expanded', 'false')
    : navLinks.setAttribute('aria-expanded', 'true')
    navCloseIcon.toggleAttribute('data-visible');
    navDropIcon.toggleAttribute('data-visible');
    navLinks.toggleAttribute('data-expanded');
}

const App = () => {
    const [ref] = useHomeBannerOutOfScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.4
    })

    return (
        <React.StrictMode>
            <header>
                <Navbar menuToggle={onMenuToggle}/>
            </header>
            <main>
                <HomeBanner reference={ref}/>
                <AboutUs />
                <Services />
                {/* <Quality Policy/>
                <ProjectsGrid />
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
        </React.StrictMode>
    );
}

export default App;