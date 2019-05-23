import styled from 'styled-components';

export const AwardSectionWrapper = styled.section`
  padding: 150px 0;
  background-color: #f9f9f9;
  @media (max-width: 1200px) {
    padding: 110px 0;
  }
  @media (max-width: 990px) {
    padding: 100px 0;
  }
  @media (max-width: 767px) {
    padding: 80px 0;
  }
  @media (max-width: 575px) {
    padding: 60px 0 0;
  }

  .glide__controls {
    position: absolute;
    top: -155px;
    right: 0;
    @media (max-width: 767px) {
      top: -60px;
      left: 0;
      right: auto;
    }
    @media (max-width: 575px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const AwardItem = styled.div`
  padding: 40px 30px;
  background: #fff;
  border-radius: 10px;
  @media (max-width: 1200px) {
    padding: 40px 20px;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    max-height: 100px; 
    margin-bottom: 0;
    object-fit: contain;
  }
`;

export const AwardeeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

export const Awardlink = styled.a`
  
`;

export const AwardImageWrapper = styled.div`
  min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
`;

export const AwardeeLogo = styled.div`
  margin-right: 20px;
  flex-shrink: 0;
`;

export const AwardeeDetails = styled.div``;

export const PrevButton = styled.div`
  position: relative;
  padding: 18px 10px;
  cursor: pointer;
  &:hover {
    span {
      background: #3444f1;
      @media (min-width: 991px) {
        width: 100px;
      }
    }
  }
  span {
    width: 18px;
    height: 2px;
    background: #d1d3de;
    display: block;
    position: relative;
    transition: 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    &:before,
    &:after {
      content: '';
      display: block;
      height: 2px;
      border-radius: 2px;
      background: inherit;
      position: absolute;
    }
    &:before {
      transform: rotate(-45deg);
      top: -4px;
      left: 0;
      width: 10px;
    }
    &:after {
      transform: rotate(45deg);
      width: 8px;
      bottom: -6px;
      left: 1px;
    }
  }
`;

export const NextButton = styled.div`
  position: relative;
  padding: 18px 10px;
  cursor: pointer;
  &:hover {
    span {
      background: #3444f1;
      @media (min-width: 991px) {
        width: 100px;
      }
    }
  }
  span {
    width: 18px;
    height: 2px;
    background: #d1d3de;
    display: block;
    position: relative;
    transition: 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    &:before,
    &:after {
      content: '';
      display: block;
      height: 2px;
      border-radius: 2px;
      background: inherit;
      position: absolute;
    }
    &:before {
      transform: rotate(45deg);
      top: -4px;
      right: 0;
      width: 10px;
    }
    &:after {
      transform: rotate(-45deg);
      width: 8px;
      bottom: -6px;
      right: 1px;
    }
  }
`;
