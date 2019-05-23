import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Link from 'reusecore/src/elements/Link';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import Container from '../../../components/UI/Container';
import GlideCarousel from '../../../components/GlideCarousel';
import GlideSlide from '../../../components/GlideCarousel/glideSlide';

import { LOGOS } from '../../../data/Favester/index';

import {
  AwardSectionWrapper,
  AwardItem,
  AwardeeWrapper,
  PrevButton,
  NextButton,
  Awardlink,
  AwardeeLogo,
  AwardeeDetails,
  AwardImageWrapper,
} from './awards.style';

const AwardsSection = ({
  secTitleWrapper,
  secTitle,
  secDescription,
  awardLogoStyle,
  awardNameStyle,
  awardDetailsStyle,
  awardeeLogoStyle,
  awardeeNameStyle,
  awardDateStyle,
}) => {
  //Carousel Options
  const carouselOptions = {
    type: 'carousel',
    autoplay: 4000,
    perView: 4,
    gap: 30,
    animationDuration: 800,
    breakpoints: {
      990: {
        perView: 3,
      },
      767: {
        perView: 2,
      },
      500: {
        perView: 1,
      },
    },
  };

  return (
    <AwardSectionWrapper id="communities_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="Find your perfect community" />
          <Text
            {...secDescription}
            content="Favester isn’t just a website, it is a federation — think Star Trek. Different independent communities (like planets) working together to form a coherent network. Being part of one is being part of the whole. Many more communities are launching soon!"
          />
        </Box>

        <GlideCarousel
          carouselSelector="awards-carousel"
          options={carouselOptions}
          prevButton={
            <PrevButton>
              <span />
            </PrevButton>
          }
          nextButton={
            <NextButton>
              <span />
            </NextButton>
          }
        >
          <>
            {LOGOS.map((logo, index) => (
              <GlideSlide key={`award-item-${index}`}>
                <AwardItem>
                  <AwardImageWrapper>
                    <Link target="_blank" href={logo.link} children={
                      <Image
                        src={logo.awardLogo}
                        alt={`award-logo-${index}`}
                        {...awardLogoStyle}
                      />} />
                  </AwardImageWrapper>
                  <Text content={logo.awardDetails} {...awardDetailsStyle} />
                  <AwardeeWrapper>
                    <Link target="_blank" href={logo.link} children={'Visit'} />
                  </AwardeeWrapper>
                </AwardItem>
              </GlideSlide>
            ))}
          </>
        </GlideCarousel>
      </Container>
    </AwardSectionWrapper>
  );
};

AwardsSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  awardLogoStyle: PropTypes.object,
  awardNameStyle: PropTypes.object,
  awardDetailsStyle: PropTypes.object,
  awardeeLogoStyle: PropTypes.object,
  awardeeNameStyle: PropTypes.object,
  awardDateStyle: PropTypes.object,
};

AwardsSection.defaultProps = {
  secTitleWrapper: {
    width: ['100%', '100%', '60%', '50%', '50%'],
    mb: '90px',
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '600',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
  },
  awardLogoStyle: {
    ml: 'auto',
    mr: 'auto',
    mb: '25px',
  },
  awardNameStyle: {
    fontSize: ['16px', '16px', '18px', '20px'],
    fontWeight: '600',
    color: '#302b4e',
    lineHeight: '1.35',
    textAlign: 'center',
    mb: '17px',
  },
  awardDetailsStyle: {
    fontSize: ['15px', '15px', '15px', '16px'],
    color: '#43414e',
    lineHeight: '1.5',
    textAlign: 'center',
    mb: '0',
  },
  awardeeNameStyle: {
    fontSize: '16px',
    color: '#9391a5',
    lineHeight: '1.35',
    fontWeight: '600',
    mb: '4px',
  },
  awardDateStyle: {
    fontSize: '12px',
    color: '#9391a5',
    lineHeight: '1.35',
    mb: '0',
  },
};

export default AwardsSection;
