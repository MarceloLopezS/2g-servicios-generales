import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <Navbar />
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