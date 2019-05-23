import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import 'react-image-gallery/styles/css/image-gallery.css';
import Container from '../../../components/UI/Container';
import FeatureSliderWrapper from './featureSlider.style';

import img_SP from '../../../assets/image/favester/app-slider/superperformance.jpg';
import img_CS from '../../../assets/image/favester/app-slider/colours.jpg';
import img_NF from '../../../assets/image/favester/app-slider/notifications.jpg';
import img_GL from '../../../assets/image/favester/app-slider/galleries.jpg';
import img_PO from '../../../assets/image/favester/app-slider/postoptions.jpg';
import img_FI from '../../../assets/image/favester/app-slider/faceid.jpg';

import ic_SP from '../../../assets/image/favester/app-slider/6.svg';
import ic_CS from '../../../assets/image/favester/app-slider/1.svg';
import ic_NF from '../../../assets/image/favester/app-slider/2.svg';
import ic_GL from '../../../assets/image/favester/app-slider/3.svg';
import ic_PO from '../../../assets/image/favester/app-slider/4.svg';
import ic_FI from '../../../assets/image/favester/app-slider/5.svg';

const images = [
    {
        original: `${img_SP}`,
        thumbnail: `${ic_SP}`,
        thumbnailLabel: 'Super Performance',
    },
    {
        original: `${img_CS}`,
        thumbnail: `${ic_CS}`,
        thumbnailLabel: 'Colour schemes',
    },
    {
        original: `${img_NF}`,
        thumbnail: `${ic_NF}`,
        thumbnailLabel: 'Notifications',
    },
    {
        original: `${img_GL}`,
        thumbnail: `${ic_GL}`,
        thumbnailLabel: 'Galleries',
    },
    {
        original: `${img_PO}`,
        thumbnail: `${ic_PO}`,
        thumbnailLabel: 'Post options',
    },
    {
        original: `${img_FI}`,
        thumbnail: `${ic_FI}`,
        thumbnailLabel: 'Face ID',
    },
];

const FeatureSlider = ({sectionSubTitle, sectionTitle, sectionHeader}) => {
    return (
        <FeatureSliderWrapper className="FeatureSliderWrap">
      <div className="FeatureSliderInner">
        <span> </span>
        <span> </span>
        <span> </span>
      </div>
      <Container>
        <Box {...sectionHeader}>
          <Text {...sectionSubTitle} />
          <Heading {...sectionTitle} />
        </Box>
        <Box className="FeatureSlider">
          <ImageGallery
              items={images}
              className="Slider-img"
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false}
              showBullets={true}
              autoPlay={true}
          />
        </Box>
      </Container>
    </FeatureSliderWrapper>
    );
};

// FeatureSlider style props
FeatureSlider.propTypes = {
    sectionSubTitle: PropTypes.object,
    sectionTitle: PropTypes.object,
    sectionHeader: PropTypes.object,
};

// FeatureSlider default style
FeatureSlider.defaultProps = {
    sectionHeader: {},
    sectionSubTitle: {
        content: 'ON THE GO',
        as: 'span',
        display: 'block',
        textAlign: 'center',
        fontSize: '14px',
        letterSpacing: '0.13em',
        fontWeight: '700',
        color: '#1a73e8',
        mb: '10px',
    },
    // section title default style
    sectionTitle: {
        content: 'Awesome mobile apps for iOS and Android',
        textAlign: 'center',
        fontSize: ['20px', '24px', '24px', '24px', '30px'],
        fontWeight: '400',
        color: '#0f2137',
        letterSpacing: '-0.025em',
        mb: '0',
    },
};

export default FeatureSlider;
