import React, { useEffect, useMemo, useRef, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import AboutUs from '../components/AboutUs/AboutUs';
import Services from '../components/Services/Services';
import Projects from '../components/Projects/Projects';
import ContactUs from '../components/ContacUs/ContactUs';
import Footer from '../components/Footer/Footer';

const usePrimarySectionsOnScreen = () => {
    const navbarRef = useRef();
    const homeRef = useRef();
    const aboutUsRef = useRef();
    const servicesRef = useRef();
    const projectsRef = useRef();
    const contactUsRef = useRef();
    const [orientationChange, setOrientationChange] = useState(0);
    const sectionsArray = useMemo(() => [homeRef, aboutUsRef, servicesRef, projectsRef, contactUsRef], []);

    useEffect(() => {
        const navbar = navbarRef.current;
        const certificateLogo = navbar.querySelector('.navbar__certificate');
        const brand = navbar.querySelector('.navbar__brand');
        const navLinks = navbar.querySelectorAll('a');
        let lastScrollTop, navbarTimeout;
        const screenOrientation = window.screen.orientation;
        const setNavbarTimeout = () => {
            clearTimeout(navbarTimeout);
            navbarTimeout = setTimeout(() => {
                navbar.setAttribute('data-slide','up');
            }, 2000)
        }
        const onNavbarHoverIn = () => {
            clearTimeout(navbarTimeout);
        }
        const scrollCallback = ()  => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if(currentScrollTop > lastScrollTop) {
                navbar.setAttribute('data-slide','up');
                clearTimeout(navbarTimeout);
            } else {
                navbar.setAttribute('data-slide','down');
                clearTimeout(navbarTimeout);
                setNavbarTimeout();
                navbar.addEventListener('mouseenter', onNavbarHoverIn);
            }
            lastScrollTop = currentScrollTop;
        }
        const orientationCallback = () => {
            setOrientationChange(orientationChange + 1);
        }
        const activateNavbarLink = ([ entry ]) => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    const linkHref = link.getAttribute('href');
                    linkHref.includes(entry.target.id)
                    ? link.parentElement.classList.add('active')
                    : link.parentElement.classList.remove('active')
                })
            }
        }
        const navbarReact = ([ entry ]) => {
            if(entry.isIntersecting) {
                navLinks.forEach(link => {
                    const linkHref = link.getAttribute('href');
                    linkHref.includes(entry.target.id)
                    ? link.parentElement.classList.add('active')
                    : link.parentElement.classList.remove('active')
                })
                if (window.innerWidth >= 1008) {
                    certificateLogo.setAttribute('data-show','true');
                    brand.setAttribute('data-show','false');
                } else {
                    certificateLogo.setAttribute('data-show','false');
                    brand.setAttribute('data-show','true');
                }
                navbar.removeAttribute('data-theme');
                navbar.setAttribute('data-slide','down');
                clearTimeout(navbarTimeout);
                document.removeEventListener('scroll', scrollCallback);
                navbar.removeEventListener('mouseleave', setNavbarTimeout);
            } else {
                if (window.innerWidth >= 1008) {
                    navbar.setAttribute('data-theme', 'inverse');
                    certificateLogo.setAttribute('data-show','false');
                    brand.setAttribute('data-show','true');
                    document.addEventListener('scroll', scrollCallback);
                    navbar.addEventListener('mouseleave', setNavbarTimeout);
                } else {
                    navbar.setAttribute('data-slide','down');
                    certificateLogo.setAttribute('data-show','false');
                    brand.setAttribute('data-show','true');
                }
            }
        }

        const homeOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        }
        const homeObserver = new IntersectionObserver(navbarReact, homeOptions);
        const homeCurrentRef = homeRef.current;
        if(homeCurrentRef) homeObserver.observe(homeCurrentRef);
        if (!screenOrientation) { // For Safari
            window.addEventListener('onorientationchange', orientationCallback);
        } else {
            screenOrientation.addEventListener('change', orientationCallback);
        }

        const sectionOptions = window.innerWidth >= 1008
        ? {
            root: null,
            rootMargin: '-27% 0px -25% 0px',
            threshold: 0.22
        }
        : {
            root: null,
            rootMargin: '-25% 0px -30% 0px',
            threshold: 0.07
        }
        const observedSections = sectionsArray.map(ref => {
            const sectionObserver = new IntersectionObserver(activateNavbarLink, sectionOptions);
            const currentRef = ref.current;
            if(currentRef) sectionObserver.observe(currentRef);

            return {
                currentRef : currentRef, 
                observer : sectionObserver
            };
        });

        return () => {
            clearTimeout(navbarTimeout);
            observedSections.forEach(observed => {
                if(observed.currentRef) observed.observer.unobserve(observed.currentRef);
            })
            if(homeCurrentRef) homeObserver.unobserve(homeCurrentRef);
            navbar.removeEventListener('mouseenter', onNavbarHoverIn);
            navbar.removeEventListener('mouseleave', setNavbarTimeout);
            document.removeEventListener('scroll', scrollCallback);
            if (!screenOrientation) { // For Safari
                window.removeEventListener('orientationchange', orientationCallback);
            } else {
                screenOrientation.removeEventListener('change', orientationCallback);
            }
        }
    }, [navbarRef, sectionsArray, orientationChange]);

    return [...sectionsArray, navbarRef];
}

const App = () => {
    const [homeRef, aboutUsRef, servicesRef, projectsRef, contactUsRef, navbarRef] = usePrimarySectionsOnScreen();

    return (
        <React.StrictMode>
            <header>
                <Navbar reference={navbarRef}/>
            </header>
            <main>
                <HomeBanner reference={homeRef}/>
                <AboutUs reference={aboutUsRef}/>
                <Services reference={servicesRef}/>
                <Projects reference={projectsRef}/>
                <ContactUs reference={contactUsRef}/>
            </main>
            <footer>
                <Footer />
            </footer>
        </React.StrictMode>
    );
}

export default App;