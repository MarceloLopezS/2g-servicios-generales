import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import AboutUs from '../components/AboutUs/AboutUs';
import Services from '../components/Services/Services';
import Projects from '../components/Projects/Projects';
import ContactUs from '../components/ContacUs/ContactUs';

const useHomeBannerOnScreen = (options) => {
    const homeRef = useRef(null);
    const [orientationChange, setOrientationChange] = useState(0);

    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        const brand = navbar.querySelector('.navbar__brand');
        const currentRef = homeRef.current;
        let lastScrollTop;
        const screenOrientation = window.screen.orientation;
        const scrollCallback = ()  => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if(currentScrollTop > lastScrollTop) {
                navbar.setAttribute('data-slide','up');
            } else {
                navbar.setAttribute('data-slide','down');
            }
            lastScrollTop = currentScrollTop;
        }
        const orientationCallback = () => {
            setOrientationChange(orientationChange + 1);
        }
        const observerCallback = ([entry]) => {
            if(entry.isIntersecting) {
                if (window.innerWidth >= 1008) {
                    brand.setAttribute('data-show','false');
                } else {
                    brand.setAttribute('data-show','true');
                }
                navbar.removeAttribute('data-theme');
                navbar.setAttribute('data-slide','down');
                document.removeEventListener('scroll', scrollCallback);
            } else {
                if (window.innerWidth >= 1008) {
                    navbar.setAttribute('data-theme', 'inverse');
                    brand.setAttribute('data-show','true');
                    document.addEventListener('scroll', scrollCallback);
                } else {
                    navbar.setAttribute('data-slide','down');
                    brand.setAttribute('data-show','true');
                }
            }
        }

        const observer = new IntersectionObserver(observerCallback, options);
        if(currentRef) observer.observe(currentRef);
        screenOrientation.addEventListener('change', orientationCallback);
        
        return () => {
            if(currentRef) observer.unobserve(currentRef);
            document.removeEventListener('scroll', scrollCallback);
            screenOrientation.removeEventListener('change', orientationCallback);
        }
    }, [homeRef, options, orientationChange])

    return [homeRef];
}

const onMenuToggle = () => {
    const menuToggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    const navLinks = document.querySelector('#navbar__primary-navigation');
    const navDropIcon = document.querySelector('#navbar__drop');
    const navCloseIcon = document.querySelector('#navbar__close');

    menuToggleButton.getAttribute('aria-expanded') === 'true' 
    ? menuToggleButton.setAttribute('aria-expanded', 'false')
    : menuToggleButton.setAttribute('aria-expanded', 'true')
    navCloseIcon.toggleAttribute('data-visible');
    navDropIcon.toggleAttribute('data-visible');
    navLinks.toggleAttribute('data-expanded');
}

const App = () => {
    const [homeRef] = useHomeBannerOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    });

    return (
        <React.StrictMode>
            <header>
                <Navbar menuToggle={onMenuToggle}/>
            </header>
            <main>
                <HomeBanner reference={homeRef}/>
                <AboutUs />
                <Services />
                <Projects />
                <ContactUs />
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