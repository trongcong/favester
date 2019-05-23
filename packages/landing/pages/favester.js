import React, {Fragment, useEffect, useState} from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import {ThemeProvider} from 'styled-components';
import {favesterTheme} from 'common/src/theme/favester';
import {ResetCSS} from 'common/src/assets/css/style';
import Navbar from 'common/src/containers/Favester/Navbar';
import Footer from 'common/src/containers/Favester/Footer';
import {DrawerProvider} from 'common/src/contexts/DrawerContext';

import BannerSection from 'common/src/containers/Favester/BannerSection';
import AwardsSection from 'common/src/containers/Favester/Awards';
import UpdateScreen from 'common/src/containers/Favester/UpdateScreen';
import PlatformFeaturesSection from 'common/src/containers/Favester/PlatformFeaturesSection';
import FeatureSlider from "common/src/containers/Favester/FeatureSlider";
import FeatureSliderTwo from "common/src/containers/Favester/FeatureSliderTwo";
import TestimonialSection from 'common/src/containers/Favester/Testimonial';
import DomainSection from 'common/src/containers/Favester/Domain';
import ServicesSection from 'common/src/containers/Favester/ServicesSection';
import PartnerHistory from 'common/src/containers/Favester/PartnerHistory';
import ContactSection from 'common/src/containers/Favester/Contact';
import {
    GlobalStyle,
    ContentWrapper,
    ConditionSectionWrapper,
    DomainServicesWrapper,
} from 'common/src/containers/Favester/favester.style';

function getSize() {
    return {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth,
    };
}

function useWindowSize() {
    let [windowSize, setWindowSize] = useState(getSize());

    function handleResize() {
        setWindowSize(getSize());
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowSize;
}

export default () => {
    const size = process.browser && useWindowSize();
    return (
        <ThemeProvider theme={favesterTheme}>
          <Fragment>
            <Head>
              <title>Favester - a microblogging social network</title>
              <meta name="Description" content="Favester - a microblogging social network" />
              <meta name="theme-color" content="#ec5555" />
                {/* Load google fonts */}
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Merriweather:400,700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <ResetCSS />
            <GlobalStyle />

            <ContentWrapper>
              <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                <DrawerProvider>
                  <Navbar />
                </DrawerProvider>
              </Sticky>

              <BannerSection />
              <AwardsSection />
              <UpdateScreen />
              <PlatformFeaturesSection />
              <ConditionSectionWrapper id="app_section">
                {size.innerWidth > 1100 ? <FeatureSlider /> : <FeatureSliderTwo />}
              </ConditionSectionWrapper>
              <TestimonialSection />

              <DomainServicesWrapper>
                  <DomainSection />
                  <ServicesSection />
              </DomainServicesWrapper>

              <PartnerHistory />
              <ContactSection />
              <Footer />
            </ContentWrapper>
          </Fragment>
        </ThemeProvider>
    );
};
