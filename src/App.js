import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
    onMenuToggle() {
        const navLinks = document.querySelector('#nav-primary-links');
        const navDropIcon = document.querySelector('#nav-drop');
        const navCloseIcon = document.querySelector('#nav-close');

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
                    {/* <HomeBanner />
                    <AboutUs />
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