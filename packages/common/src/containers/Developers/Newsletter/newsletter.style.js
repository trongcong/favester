import styled from 'styled-components';

const NewsletterWrapper = styled.div`
  position: relative;
  background: linear-gradient(
    -139deg,
    rgb(255, 65, 108) 0%,
    rgb(255, 75, 43) 100%
  );
  padding: 44px 80px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -105px;
  @media (max-width: 1220px) {
    padding: 35px 40px;
  }
  @media (max-width: 575px) {
    padding: 35px 20px;
  }
  @media (max-width: 990px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ContactFormWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 470px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1220px) {
    width: 420px;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    button {
      width: 100%;
    }
  }
  #mm-embedded-form {
      display: flex;
      align-items: flex-start;
      width: 470px;
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;
      @media (max-width: 1220px) {
        width: 420px;
      }
      @media (max-width: 575px) {
        width: 100%;
      }
      @media (max-width: 575px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 25px;
        button {
          width: 100%;
        }
      }
      
      label {
        display: block;
        padding: 0;
        font-size: 12px;
        margin-top: 5px;
      }
      .mm-message {
        background: #edcd37;
        width: 100%;
        border-radius: 4px;
        text-align: center;
        padding: 20px;
      }
      .mm-powered-by{ 
        display: none;
      }
      #mm-email {
        display: block;
        width: 100%;
        box-shadow: none;
        box-sizing: border-box;
        border-radius: 4px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(235, 235, 235);
        border-image: initial;
        transition: border-color 0.2s ease 0s;
        font-size: 16px;
        font-weight: 400;
        color: rgb(255, 255, 255);
        background: transparent;
        padding: 10px 15px;
        min-height: 46px;
        
        &::placeholder {color: white}
    }
  }
 
  
  .email_input {
    flex-grow: 1;
    margin-right: 20px;

    @media (max-width: 575px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }
    &.is-material {
      &.is-focus {
        label {
          font-size: 14px;
          color: #fff;
        }
        .highlight {
          background: #fff;
          height: 1px;
        }
      }
    }

    .highlight {
      background: rgba(255, 255, 255, 0.4);
    }

    input {
      background: transparent;
      font-size: 16px;
      font-weight: 400;
      color: #fff;
      padding: 10px 15px;
      border-color: #dadada;
      @media (max-width: 575px) {
        height: 48px;
      }
    }

    label {
      font-size: 17px;
      color: #fff;
      font-weight: 400;
      padding-left: 10px;
      top: 5px;
      pointer-events: none;
    }
  }
`;

export default NewsletterWrapper;
