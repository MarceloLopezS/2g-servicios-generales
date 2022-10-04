import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import AboutUs from '../components/AboutUs/AboutUs';
import Services from '../components/Services/Services';

const useHomeBannerOnScreen = (options) => {
    const ref = useRef(null);

    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        const currentRef = ref.current;
        let lastScrollTop;
        const scrollCallback = ()  => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if(currentScrollTop > lastScrollTop) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0%)';
            }
            lastScrollTop = currentScrollTop;
        }
        const observerCallback = ([entry]) => {
            if(entry.isIntersecting) {
                navbar.removeAttribute('data-theme');
                navbar.style.transform = 'translateY(0%)';
                document.removeEventListener('scroll', scrollCallback);
            } else {
                navbar.setAttribute('data-theme', 'inverse');
                document.addEventListener('scroll', scrollCallback)
            }
        }

        const observer = new IntersectionObserver(observerCallback, options);
        if(currentRef) observer.observe(currentRef);

        return () => {
            if(currentRef) observer.unobserve(currentRef);
            document.removeEventListener('scroll', scrollCallback);
        }
    }, [ref, options])

    return [ref];
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
    const [ref] = useHomeBannerOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.3
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