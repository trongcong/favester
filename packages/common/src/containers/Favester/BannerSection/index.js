import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Image from 'reusecore/src/elements/Image';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Container from '../../../components/UI/Container';
import Particles from '../Particle';
import { openModal, closeModal } from '@redq/reuse-modal';
import BannerWrapper, {
  BannerObject,
} from './bannerSection.style';

import BannerObject1 from '../../../assets/image/favester/banner/bannerObject1.png';
import BannerObject2 from '../../../assets/image/favester/banner/landingpageconcept.png';
import PlayVideoButton from '../../../assets/image/favester/play_button.svg';
import {ButtonWrapper, ContentWrapper} from "../../../components/FeatureBlock/featureBlock.style";

const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  outlineBtnStyle,
  btnWrapperStyle,
  contentStyle,
  buttonStyle,
}) => {
  const IntroVideo = () => (
      <iframe
          src = "https://player.vimeo.com/video/336284343"
          width = "640"
          height = "360"
          frameBorder = "0"
          allow = "autoplay; fullscreen" allowFullScreen
      />
  );
  const CloseModalButton = () => (
      <Button
          className="modalCloseBtn"
          variant="fab"
          onClick={() => closeModal()}
          icon={<i className="flaticon-plus-symbol" />}
      />
  );
  // Video modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: '100%',
          height: '100%',
          x: 0,
          y: 0,
        },
      },
      component: IntroVideo,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false,
    });
  };

  const ButtonGroup = () => (
      <Fragment>
      <Button
          onClick={()=> window.open("https://www.favester.com/auth/sign_up", "_blank")}
          title="JOIN NOW" {...btnStyle} />
      <Button
          className="outlined"
          title="WATCH VIDEO"
          variant="outlined"
          {...outlineBtnStyle}
          onClick={handleVideoModal}
      />
    </Fragment>
  );
  return (
    <BannerWrapper id="banner_section">
      <Particles />
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
          <ContentWrapper className="content__wrapper" {...contentStyle}>
            <Heading className="title" {...title} content="The social network that will inspire you to <span del>#delete</span><span face>facebook</span>"/>
            <Text content='You are not a product. So why continue to use a social network that treats you like one?'  {...description}/>
            <Text content='Discuss all your favourite topics at Favester - a network of federated niche sites.' {...description}/>
            <Text content='Follow friends and discover new ones across a network of more than 2 million people. Publish anything you like - links, pictures, text, video.' {...description}/>

            <ButtonWrapper className="button__wrapper" {...btnWrapperStyle}>
              <ButtonGroup/>
            </ButtonWrapper>
          </ContentWrapper>
          </Box>
        </Box>
      </Container>
      <BannerObject>
        <div className="objectWrapper">
          <Image src={BannerObject1} alt="BannerObject1" />
          <div className="dashboardWrapper">
            <Image src={BannerObject2} alt="BannerObject2" />
            <Box className="fig__caption">
              <Button title={<Image src={PlayVideoButton} alt="play button" />}
                  {...buttonStyle}
                  onClick={handleVideoModal}
              />
            </Box>
          </div>
        </div>
      </BannerObject>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
  btnWrapperStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, '70%', '50%', '45%'],
  },
  title: {
    fontSize: ['22px', '34px', '30px', '50px'],
    fontWeight: '700',
    fontFamily: '\'Merriweather\', serif',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.5',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    fontFamily: '\'Merriweather\', serif',
    mb: '1em',
  },
  btnStyle: {
    minWidth: ['120px', '120px', '120px', '156px'],
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'primaryWithBg',
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#5167db',
    ml: '18px',
  },
    // button default design
  buttonStyle: {
    variant: 'textButton',
    p: 0,
    color: '#ec4444',
    fontSize: '71px',
  },
};

export default BannerSection;
