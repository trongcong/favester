import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Container from '../../../components/UI/Container';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import {TESTIMONIALS} from '../../../data/Favester';
import SliderDes from '../sliderDescription';

import TestimonialsSectionWrapper from "./testimonials.style";

const images = [
    {
        thumbnail: TESTIMONIALS[0].img,
        description: <SliderDes data={TESTIMONIALS[0]} />,
    },
    {
        thumbnail: TESTIMONIALS[1].img,
        description: <SliderDes data={TESTIMONIALS[1]} />,
    },
    {
        thumbnail: TESTIMONIALS[2].img,
        description: <SliderDes data={TESTIMONIALS[2]} />,
    },
    {
        thumbnail: TESTIMONIALS[3].img,
        description: <SliderDes data={TESTIMONIALS[3]} />,
    },
    {
        thumbnail: TESTIMONIALS[4].img,
        description: <SliderDes data={TESTIMONIALS[4]} />,
    },
];

const TestimonialSection = ({sectionWrapper, row, sectionSubTitle}) => {
    return (
        <TestimonialsSectionWrapper {...sectionWrapper} id="testimonialSection">
            <Box className="testimonialSlider">
                <Container>
                <Box className="testimonialDesWrapper">
                  <ImageGallery
                      items={images}
                      originalClass="Testimonial-img"
                      showPlayButton={false}
                      showFullscreenButton={false}
                  />
                </Box>
                </Container>
            </Box>
        </TestimonialsSectionWrapper>
    );
};

TestimonialSection.propTypes = {
    sectionWrapper: PropTypes.object,
    title: PropTypes.object,
};

TestimonialSection.defaultProps = {
    sectionWrapper: {
        as: 'section',
        pt: '0px',
        pb: ['20px', '80px', '0px', '80px', '80px'],
    },

    sectionSubTitle: {
        content: 'CLIENT TESTIMONIAL',
        as: 'span',
        display: 'block',
        textAlign: ['center', 'left'],
        fontSize: '14px',
        letterSpacing: '0.11em',
        fontWeight: '700',
        color: '#1a73e8',
        textTransform: 'uppercase',
        mb: '10px',
    },
};

export default TestimonialSection;
