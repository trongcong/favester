import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Image from 'reusecore/src/elements/Image';
import Container from '../../../components/UI/Container';
import Link from 'next/link';

import SectionWrapper from './trial.style';
import GithubLogos from '../../../assets/image/developers/githublogo.png';

const TrialSection = ({
  row,
  title,
  description,
  textArea,
  imageArea,
  ImageOne,
  btnStyle,
  outlineBtnStyle,
  buttonWrapper,
}) => {
  return (
    <SectionWrapper className="trial-section">
      <Container>
        <Box {...row}>
          <Box {...imageArea}>
            <Link href="https://www.github.com/leisuretronics">
              <a>
              <Image {...ImageOne} src={GithubLogos} alt="Github Logo" />
              </a>
            </Link>
          </Box>
          <Box {...textArea}>
            <Heading
              {...title}
              content="Start contributing today"
            />
            <Text
              {...description}
              content="Browse our Github repos and see where your skills can be best utilised."
            />
            <Box {...buttonWrapper}>
              <Link href="https://www.github.com/leisuretronics">
                <a>
                  <Button title="VISIT GITHUB" {...btnStyle} />
                </a>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

TrialSection.propTypes = {
  row: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  imageArea: PropTypes.object,
  ImageOne: PropTypes.object,
};

TrialSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textArea: {
    width: ['100%', '100%', '80%', '43%'],
  },
  imageArea: {
    width: ['100%', '100%', '43%'],
    mb: ['5px', '5px', '10px', '10px'],
  },
  title: {
    fontSize: ['28px', '32px', '36px', '42px', '48px'],
    fontWeight: '500',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '28px',
    textAlign: 'center',
    lineHeight: '1.25',
  },
  description: {
    fontSize: ['15px', '15px', '16px', '16px', '16px'],
    color: '#5c636c',
    lineHeight: '2.1',
    textAlign: 'center',
    mb: ['35px', '35px', '40px', '60px'],
  },
  ImageOne: {
    ml: 'auto',
    mr: 'auto',
    width: '120px',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'secondaryWithBg',
    pl: ['15px', '30px'],
    pr: ['15px', '30px'],
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#0f2137',
    colors: 'secondary',
  },
};

export default TrialSection;
