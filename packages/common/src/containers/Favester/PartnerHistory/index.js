import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Card from 'reusecore/src/elements/Card';
import Image from 'reusecore/src/elements/Image';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import FeatureBlock from '../../../components/FeatureBlock';
import Container from '../../../components/UI/Container';
import Link from 'next/link';
import PartnerHistoryWrapper, {CounterUpArea} from './partnerHistory.style';

import GoogleImg from '../../../assets/image/favester/google_cloud_platform_logo.png';
import Intercom from '../../../assets/image/favester/Intercom.png';
import Moonmail from '../../../assets/image/favester/moonmail-logo.png';
import Github from '../../../assets/image/favester/github.png';
import BackgroundImg from '../../../assets/image/favester/partner-bg.png';
import GlideSlide from "../../../components/GlideCarousel/glideSlide";

const TECHNOLOGY_PROVIDERS = [
    {
        title: 'Google Cloud Platform',
        img: GoogleImg,
        link: 'https://cloud.google.com/',
    },
    {
        title: 'Intercom',
        img: Intercom,
        link: 'https://www.intercom.com/',
    },
    {
        title: 'Moonmail',
        img: Moonmail,
        link: 'https://moonmail.io/?tap_a=9273-822d14&tap_s=505397-0594e5',
    },
    {
        title: 'Github',
        img: Github,
        link: 'https://github.com/',
    },
];

const PartnerHistory = ({
                            row,
                            col,
                            cardStyle,
                            title,
                            description,
                            btnStyle,
                            sectionSubTitle,
                            cardArea,
                        }) => {
    return (
        <PartnerHistoryWrapper id="partners">
      <Image
          src={BackgroundImg}
          className="backgroungImg"
          alt="backgroungImg"
      />
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col} style={{flexDirection: 'column'}}>
            <Text {...sectionSubTitle} />
            <FeatureBlock
                title={<Heading {...title} />}
                description={<Text {...description} />}
            />
          </Box>
          <Box className="col" {...col} {...cardArea}>
            <CounterUpArea>
                {TECHNOLOGY_PROVIDERS.map((tech, index) => (
                    <Card  key={`tech-providers-item-${index}`} className="card" {...cardStyle}>
                    <Link href={tech.link}>
                      <a target="_blank">
                          <Image src={tech.img} alt={tech.title} />
                          <Text content={tech.title} />
                      </a>
                    </Link>
                  </Card>
                ))}
            </CounterUpArea>
          </Box>
        </Box>
      </Container>
    </PartnerHistoryWrapper>
    );
};

// Partner style props
PartnerHistory.propTypes = {
    sectionHeader: PropTypes.object,
    sectionTitle: PropTypes.object,
    sectionSubTitle: PropTypes.object,
    row: PropTypes.object,
    col: PropTypes.object,
    cardStyle: PropTypes.object,
};

// Partner default style
PartnerHistory.defaultProps = {
    // Partner section row default style
    row: {
        flexBox: true,
        flexWrap: 'wrap',
        ml: '-15px',
        mr: '-15px',
    },
    // Partner section col default style
    col: {
        pr: '15px',
        pl: '15px',
        width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
        flexBox: true,
        alignSelf: 'center',
    },
    // Card default style
    cardStyle: {
        p: '53px 40px 35px',
        borderRadius: '10px',
        boxShadow: '0px 8px 20px 0px rgba(16, 66, 97, 0.07)',
    },
    // Partner section title default style
    title: {
        content: 'Proudly built with the best tools',
        fontSize: ['24px', '26px', '30px', '36px', '48px'],
        fontWeight: '300',
        color: '#0f2137',
        letterSpacing: '-0.010em',
        mb: '20px',
        maxWidth: ['100%', '100%', '100%', '490px', '490px'],
        textAlign: ['center', 'left'],
    },
    // Partner section description default style
    description: {
        content:
            'We use the services of leading technology companies to provide a seamless experience across all platforms.',
        fontSize: '16px',
        color: '#343d48cc',
        lineHeight: '2.1',
        mb: '33px',
        textAlign: ['center', 'left'],
    },
    sectionSubTitle: {
        content: 'TECHNOLOGY PROVIDERS',
        as: 'span',
        textAlign: 'left',
        fontSize: '14px',
        letterSpacing: '0.13em',
        fontWeight: '700',
        color: '#1a73e8',
        mb: '10px',
        textAlign: ['center', 'left'],
    },
    // Button default style
    btnStyle: {
        minWidth: '156px',
        fontSize: '14px',
        fontWeight: '500',
    },
    cardArea: {
        pl: [0, 0, '40px', 0, 0],
    },
};

export default PartnerHistory;
