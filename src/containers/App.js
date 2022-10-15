import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import AboutUs from '../components/AboutUs/AboutUs';
import Services from '../components/Services/Services';
import Projects from '../components/Projects/Projects';
import ContactUs from '../components/ContacUs/ContactUs';

const usePrimarySectionsOnScreen = () => {
    const homeRef = useRef(null);
    const [orientationChange, setOrientationChange] = useState(0);
    const aboutUsRef = useRef(null);
    const servicesRef = useRef(null);
    const projectsRef = useRef(null);
    const contactUsRef = useRef(null);
    const refsArray = [homeRef, aboutUsRef, servicesRef, projectsRef, contactUsRef];

    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        const brand = navbar.querySelector('.navbar__brand');
        const navLinks = navbar.querySelectorAll('a');
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

        const homeOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        }
        const homeObserver = new IntersectionObserver(navbarReact, homeOptions);
        if(homeRef.current) homeObserver.observe(homeRef.current);
        screenOrientation.addEventListener('change', orientationCallback);

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
        const observedSections = refsArray.map(ref => {
            const sectionObserver = new IntersectionObserver(activateNavbarLink, sectionOptions);
            if(ref.current) sectionObserver.observe(ref.current);

            return {
                currentRef : ref.current, 
                observer : sectionObserver
            };
        });

        return () => {
            observedSections.forEach(observed => {
                if(observed.currentRef) observed.observer.unobserve(observed.currentRef);
            })
            if(homeRef.current) homeObserver.unobserve(homeRef.current);
            document.removeEventListener('scroll', scrollCallback);
            screenOrientation.removeEventListener('change', orientationCallback);
        }
    }, [refsArray, orientationChange]);

    return refsArray;
}

const App = () => {
    const [homeRef, aboutUsRef, servicesRef, projectsRef, contactUsRef] = usePrimarySectionsOnScreen();

    return (
        <React.StrictMode>
            <header>
                <Navbar />
            </header>
            <main>
                <HomeBanner reference={homeRef}/>
                <AboutUs reference={aboutUsRef}/>
                <Services reference={servicesRef}/>
                <Projects reference={projectsRef}/>
                <ContactUs reference={contactUsRef}/>
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