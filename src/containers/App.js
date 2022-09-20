import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HomeBanner from '../components/HomeBanner/HomeBanner';

class App extends Component {
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
                    {/* <AboutUs />
                    <Services />
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