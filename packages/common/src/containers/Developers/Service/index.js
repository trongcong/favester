import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Container from '../../../components/UI/Container';
import SectionWrapper from './service.style';
import { SERVICE_ITEMS } from '../../../data/Developers';
import Image from "reusecore/src/elements/Image";
import {AuthorImage} from "../Testimonial/testimonial.style";

const ServiceSection = ({
  secTitleWrapper,
  secText,
  secHeading,
  Row,
  Col,
  serviceTitleStyle,
  iconStyle,
  secDes,
}) => {
  return (
    <SectionWrapper>
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="OPEN SOURCE" />
          <Heading
            {...secHeading}
            content="Join a team of friendly developers working with exciting technologies"
          />
          <Text
            {...secDes}
            content="Our project is an extension of the awesome work already done by the following projects: Mastodon (Ruby on Rails & Node.js), Mast (native iOS app) and Fedilab (Android app). In take build the ultimate knowledge sharing platform, we're looking for developers to help code a number of additional features and enchancements, and take it to the next level. We'll strive to make sure that your contributions and skills are recognized."
          />
        </Box>

        <Box {...Row}>
          {SERVICE_ITEMS.map((item, index) => (
            <Box
              {...Col}
              key={`service-item-${index}`}
              className="service_item_col"
            >
              <Box className="service_item">
                <Box className="service_icon">
                  {/*<i className={item.icon} />*/}
                  <Image
                      src={item.icon}
                      alt={item.title}
                      {...iconStyle}
                  />
                </Box>
                <Heading as="h3" content={item.title} {...serviceTitleStyle} />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </SectionWrapper>
  );
};

ServiceSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
  Row: PropTypes.object,
  Col: PropTypes.object,
  serviceTitleStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  secDes: PropTypes.object,
};

ServiceSection.defaultProps = {
  secTitleWrapper: {
    mb: ['60px', '80px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#ff4362',
    mb: '12px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px', '36px', '36px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    ml: 'auto',
    mr: 'auto',
    lineHeight: '1.12',
    width: '540px',
    maxWidth: '100%',
  },
  Row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    ml: ['0', '-15px', '-20px', '-35px', '-35px'],
    mr: ['0', '-15px', '-20px', '-35px', '-35px'],
  },
  Col: {
    pl: ['15px', '15px', '25x', '35px', '35px'],
    pr: ['15px', '15px', '25px', '35px', '35px'],
    mb: '40px',
  },
  serviceTitleStyle: {
    fontSize: ['15px', '15px', '15px', '16px', '17px'],
    fontWeight: '500',
    color: '#ff4361',
    mb: 0,
  },
  iconStyle: {
    maxWidth: '80%',
  },
  secDes: {
    fontSize: ['14px', '15px', '16px'],
    color: '#5d646d',
    lineHeight: '1.875',
    mt: '30px',
    ml: 'auto',
    mr: 'auto',
    width: '800px',
    maxWidth: '100%',
    textAlign: 'center',
  },
};

export default ServiceSection;
