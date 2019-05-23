import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { developersTheme } from 'common/src/theme/developers';
import { ResetCSS } from 'common/src/assets/css/style';
import {
    GlobalStyle,
    ContentWrapper,
} from 'common/src/containers/Developers/developers.style';

import BannerSection from 'common/src/containers/Developers/Banner';
import Navbar from 'common/src/containers/Developers/Navbar';
import ServiceSection from 'common/src/containers/Developers/Service';
import PricingSection from 'common/src/containers/Developers/Pricing';
import PartnerSection from 'common/src/containers/Developers/Partner';
import TrialSection from 'common/src/containers/Developers/Trial';
import FeatureSection from 'common/src/containers/Developers/Feature';
import UpdateScreen from 'common/src/containers/Developers/UpdateScreen';
import TestimonialSection from 'common/src/containers/Developers/Testimonial';
import Newsletter from 'common/src/containers/Developers/Newsletter';
import Footer from 'common/src/containers/Developers/Footer';

export default () => {
    return (
        <ThemeProvider theme={developersTheme}>
      <Fragment>
        <Head>
          <title>Favester - Developers</title>
          <meta name="Description" content="Favester - Developers" />
          <meta name="theme-color" content="#ec5555" />
            {/* Load google fonts */}
            <link
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,900|Open+Sans:400,400i,600,700"
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
          <ServiceSection />
          <UpdateScreen />
          <FeatureSection />
          <PartnerSection />
          {/*<PricingSection />*/}
          <TestimonialSection />
          <TrialSection />
          <Newsletter />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
    );
};
