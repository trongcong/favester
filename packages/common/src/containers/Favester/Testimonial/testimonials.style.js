import styled from 'styled-components';

import Substract from '../../../assets/image/favester/substract.png';
import SubstractHover from '../../../assets/image/favester/substract-hover.png';

const TestimonialsSectionWrapper = styled.section`
  padding: 200px 0 80px;
      @media (max-width: 767px) {
        padding-top: 40px ;
        padding-bottom: 40px ;
      }
  .testimonialSlider {
    .image-gallery-content {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      @media (max-width: 767px) {
        flex-direction: column;
      }
      .image-gallery-slide-wrapper {
        max-width: 60%;
        width: 60%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column-reverse;
        @media screen and (max-width: 1100px) and (min-width: 992px) {
          max-width: 56%;
          width: 56%;
        }
        @media (max-width: 991px) {
          max-width: 50%;
          width: 50%;
        }
        @media (max-width: 767px) {
          max-width: 100%;
          width: 100%;
        }
        > span {
          display: flex;
          @media (max-width: 480px) {
            justify-content: center;
          }
          .image-gallery-left-nav,
          .image-gallery-right-nav {
            position: relative;
            top: 0;
            transform: none;
            margin-top: 0;
          }
          .image-gallery-left-nav {
          }
          .image-gallery-right-nav {
            margin-left: 10px;
          }
        }
        .image-gallery-swipe {
          .image-gallery-slide {
            .image-gallery-description {
              background: transparent;
              bottom: 0px;
              color: #000;
              position: relative;
              .testimonialDes {
                box-sizing: border-box;
                margin-top: -10px;
                max-width: 550px;
                font-size: 36px;
                line-height: 50px;
                color: #0f2137;
                font-weight: 300;
                -webkit-letter-spacing: -0.01em;
                -moz-letter-spacing: -0.01em;
                -ms-letter-spacing: -0.01em;
                letter-spacing: -0.01em;
                @media (max-width: 991px) {
                  font-size: 30px;
                  line-height: 40px;
                  max-width: 100%;
                }
                @media (max-width: 768px) {
                  font-size: 24px;
                  line-height: 36px;
                }
                @media (max-width: 480px) {
                  font-size: 20px;
                  text-align: center;
                }
                &::before {
                  content: 'TESTIMONIALS';
                  box-sizing: border-box;
                  margin-bottom: 10px;
                  margin-top: 0px;
                  font-size: 14px;
                  color: #1a73e8;
                  display: block;
                  font-weight: 700;
                  text-align: left;
                  -webkit-letter-spacing: 0.11em;
                  -moz-letter-spacing: 0.11em;
                  -ms-letter-spacing: 0.11em;
                  letter-spacing: 0.11em;
                  @media (max-width: 480px) {
                    text-align: center;
                  }
                }
              }
              .testimonialDetails {
                @media (max-width: 480px) {
                  text-align: center;
                }
                .testimonialName {
                  font-size: 18px;
                  line-height: 33px;
                  color: #343d48;
                  font-weight: 700;
                  margin-bottom: -3px;
                }
                .testimonialDesignation {
                  font-size: 16px;
                  line-height: 33px;
                  color: #343d48;
                  font-weight: 400;
                  opacity: 0.8;
                }
              }
            }
          }
        }
        .image-gallery-left-nav {
          padding: 0;
          font-size: 0;
          margin-top: -15px;
          width: 15px;
          height: 2px;
          transition: width 0.25s ease-in-out;
          background-image: url(${Substract});
          width: 20px;
          height: 30px;
          background-repeat-x: repeat;
          background-position: center;
          background-size: contain;
          &:hover {
            width: 35px;
            background-image: url(${SubstractHover});
            &::before {
              background-color: #1a73e8;
            }
            &::after {
              background-color: #1a73e8;
            }
          }

          &::before {
            top: 11px;
            content: '';
            width: 10px;
            height: 2px;
            background-color: #343d48;
            display: block;
            position: absolute;
            transform: rotate(-36deg);
            transition: inherit;
            left: 0;
          }
          &::after {
            content: '';
            width: 10px;
            height: 2px;
            background-color: #343d48;
            display: block;
            position: absolute;
            bottom: 11px;
            transform: rotate(36deg);
            transition: inherit;
            left: 0;
          }
        }
        .image-gallery-right-nav {
          padding: 0;
          font-size: 0;
          margin-top: -15px;
          width: 15px;
          height: 2px;
          transition: all 0.25s ease-in-out;
          background-image: url(${SubstractHover});
          width: 30px;
          height: 30px;
          background-repeat-x: repeat;
          background-position: center;
          background-size: contain;
          &:hover {
            &::before {
              background-color: #1a73e8;
            }
            &::after {
              background-color: #1a73e8;
            }
          }

          &::before {
            top: 11px;
            content: '';
            width: 10px;
            height: 2px;
            background-color: #1a73e8;
            display: block;
            position: absolute;
            transform: rotate(36deg);
            transition: inherit;
            left: 20px;
          }
          &::after {
            content: '';
            width: 10px;
            height: 2px;
            background-color: #1a73e8;
            display: block;
            position: absolute;
            bottom: 11px;
            transform: rotate(-36deg);
            transition: inherit;
            left: 20px;
          }
        }
      }
      .image-gallery-thumbnails-wrapper {
        max-width: 40%;
        height: 520px;
        width: 40%;

        @media screen and (max-width: 1100px) and (min-width: 992px) {
          padding-left: 25px;
          overflow: hidden;
        }
        @media (max-width: 991px) {
          padding-left: 0px;
          overflow: hidden;
          max-width: 50%;
          width: 50%;
        }
        @media (max-width: 767px) {
          max-width: 100%;
          width: 100%;
          height: auto;
          margin-top: 50px;
          overflow: hidden;
        }
        .image-gallery-thumbnails {
          overflow: initial;
          padding-left: 30px;
          @media (max-width: 991px) {
            padding-left: 0px;
          }
          @media (max-width: 767px) {
            overflow: hidden;
          }
        }
        .image-gallery-thumbnails-container {
          position: relative;
          height: 520px;
          @media screen and (max-width: 1100px) and (min-width: 992px) {
            margin-left: -20px;
            margin-top: 15px;
          }
          @media (max-width: 991px) {
            margin-left: -25px;
          }
          @media (max-width: 767px) {
            height: auto;
            margin-left: 0px;
          }
          img {
            border-radius: 50%;
            height: 100%;
            width: 100%;

            @media (max-width: 768px) {
              box-shadow: none;
            }
            @media (max-width: 991px) {
              width: 70px;
              height: 70px;
            }
            @media (max-width: 480px) {
              width: 70px;
              height: 70px;
            }
          }

          .image-gallery-thumbnail:nth-child(1) {
            position: absolute;
            top: 150px;
            left: 0;
            width: 120px;
            height: 120px;
            @media (max-width: 991px) {
              position: absolute;
              top: 220px;
              left: 80px;
              width: 120px;
              height: 120px;
              img {
                width: 80px;
                height: 80px;
              }
            }
            @media (max-width: 767px) {
              position: relative;
              top: 0;
              left: 0;
              width: calc(33.33% - 30px);
              height: auto;
              margin-right: 30px;
              margin-left: 10px;
            }
            img {
            }
          }
          .image-gallery-thumbnail:nth-child(2) {
            position: absolute;
            top: 0;
            left: 180px;
            width: 100px;
            height: 100px;
            @media (max-width: 991px) {
              position: absolute;
              top: 110px;
              left: 160px;
              width: 100px;
              height: 100px;
            }
            @media (max-width: 767px) {
              position: relative;
              top: 0;
              width: calc(33.33% - 30px);
              height: auto;
              margin-right: 30px;
              left: 0;
            }
          }
          .image-gallery-thumbnail:nth-child(3) {
            position: absolute;
            top: 160px;
            left: 250px;
            width: 70px;
            height: 70px;
            @media screen and (max-width: 1100px) and (min-width: 992px) {
              position: absolute;
              top: 180px;
              left: 220px;
              width: 70px;
              height: 70px;
            }
            @media (max-width: 991px) {
              position: absolute;
              top: 200px;
              left: 272px;
              width: 70px;
              height: 70px;
            }
            @media (max-width: 767px) {
              position: relative;
              top: 0;
              width: calc(33.33% - 30px);
              height: auto;
              margin-right: 30px;
              left: 0;
            }
          }
          .image-gallery-thumbnail:nth-child(4) {
            position: absolute;
            bottom: 100px;
            left: 200px;
            width: 90px;
            height: 90px;
            @media (max-width: 991px) {
              position: absolute;
              bottom: 100px;
              left: 240px;
              width: 90px;
              height: 90px;
            }
            @media (max-width: 767px) {
              position: relative;
              top: 0;
              width: calc(33.33% - 30px);
              height: auto;
              margin-right: 30px;
              left: 0;
            }
          }
          .image-gallery-thumbnail:nth-child(5) {
            position: absolute;
            bottom: 20px;
            left: 20px;
            width: 105px;
            height: 105px;
            @media screen and (max-width: 1100px) and (min-width: 992px) {
              position: absolute;
              bottom: 50px;
              left: 20px;
              width: 105px;
              height: 105px;
            }
            @media (max-width: 991px) {
              position: absolute;
              bottom: 40px;
              left: 115px;
              width: 105px;
              height: 105px;
            }
            @media (max-width: 767px) {
              position: relative;
              top: 0;
              width: calc(33.33% - 30px);
              height: auto;
              margin-right: 30px;
              left: 0;
            }
          }
          .image-gallery-thumbnail {
            transition: all 0.35s ease;
            border: 0;
            border-radius: 50%;
            .image-gallery-thumbnail-inner {
              width: 100%;
              height: 100%;
            }
            &.active {
              border: 0;
              transform: scale(1.3);
              box-shadow: 0px 18px 68px 0px rgba(22, 30, 54, 0.25);
              @media (max-width: 1100px) {
                box-shadow: none;
              }
              .image-gallery-thumbnail-inner {
                @keyframes pulse {
                  0% {
                    transform: translateX(-50%) translateY(-50%) translateZ(0)
                      scale(1);
                    opacity: 1;
                  }

                  100% {
                    transform: translateX(-50%) translateY(-50%) translateZ(0)
                      scale(1.5);
                    opacity: 0;
                  }
                }
                @media (max-width: 991px) {
                  @keyframes pulse {
                    0% {
                      transform: translateX(-50%) translateY(-50%) translateZ(0)
                        scale(1);
                      opacity: 0;
                    }

                    100% {
                      transform: translateX(-50%) translateY(-50%) translateZ(0)
                        scale(1.2);
                      opacity: 0;
                    }
                  }
                }
                &::before {
                  content: '';
                  position: absolute;
                  display: block;
                  width: 100%;
                  height: 100%;
                  box-shadow: 0 0 0 0.8px rgba(0, 0, 0, 0.1);
                  border-radius: 50%;
                  top: 50%;
                  left: 50%;
                  opacity: 0;
                  -webkit-transform: translate(-50%, -50%);
                  transform: translate(-50%, -50%);
                  animation: pulse 2.2s ease-out infinite;
                  backface-visibility: hidden;
                  pointer-events: none;
                }
                &::after {
                  content: '';
                  position: absolute;
                  display: block;
                  width: 100%;
                  height: 100%;
                  box-shadow: 0 0 0 0.8px rgba(0, 0, 0, 0.1);
                  border-radius: 50%;
                  top: 50%;
                  left: 50%;
                  opacity: 0;
                  -webkit-transform: translate(-50%, -50%);
                  transform: translate(-50%, -50%);
                  animation: pulse 2.2s ease-out infinite;
                  backface-visibility: hidden;
                  pointer-events: none;
                  animation-delay: 1s;
                }
              }
              img {
                position: relative;
                @media (max-width: 768px) {
                  margin: 10px 0;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default TestimonialsSectionWrapper;
