import styled, { createGlobalStyle } from 'styled-components';
export const ServicesSectionWrapper = styled.section`
  .service_section {
    // background: linear-gradient(
    //   to bottom,
    //   #ffffff 0%,
    //   #f9fbfd 50%,
    //   #f9fbfd 100%
    // );

    .service_col {
      border-width: 1px 0 0 1px;
      border-style: solid;
      border-color: #f1f4f6;
      &:nth-child(3n + 3),
      &:last-child {
        border-right-width: 1px;
      }
      &:nth-last-child(-n + 3) {
        border-bottom-width: 1px;
      }
      .service_item {
        position: relative;
        height: 100%;
        transition: 0.2s ease-in-out;

        &:hover {
          box-shadow: 0 40px 90px -30px rgba(39, 79, 117, 0.2);
          z-index: 1;
        }

        &:before {
          content: '';
          position: absolute;
          width: 85%;
          height: 0;
          bottom: 0;
          left: 50%;
          display: block;
          pointer-events: 0;
          transform: translateX(-50%);
        }
        &:hover {
          &:before {
            box-shadow: 0px 0px 60px 0px rgba(39, 79, 117, 0.2);
          }
        }

        img {
          width: auto;
        height: 90px;
        }
      }
    }
  }
`;
