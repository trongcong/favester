import styled from 'styled-components';

const ContactFromWrapper = styled.div`
  display: flex;
  align-items: stretch;
  width: 490px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    button {
      width: 100%;
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
          color: #aeb1b6;
          font-size: 12px;
        }
      }
    }

    input {
      height: 100%;
      background: #fff;
      font-size: 16px;
      font-weight: 400;
      color: #343d48;
      padding: 5px 15px;
      border-color: #dadada;
      @media (max-width: 575px) {
        height: 48px;
      }
    }

    label {
      font-size: 14px;
      color: #343d48;
      font-weight: 500;
      padding-left: 10px;
      top: 5px;
    }
  }

  .field-wrapper {
    height: 100%;
  }
  

#mm-embedded-form {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
}
#mm-embedded-form > div:nth-child(3){
    grid-column: span 2;
    order: 1;
}
#mm-embedded-form > button{
    order: 0;
}
#mm-embedded-form > .mm-powered-by{
    grid-column: span 2;
    order: 1;
    display: none;
}

#mm-embedded-form #mm-email {
    box-shadow: none;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid #EBEBEB;
    transition: border-color 0.2s ease;
    display: block;
    width: 100%;
    min-height: 48px;
    height: auto;
}

#mm-embedded-form #mm-email-error {
    color: red;
    font-size: 12px;
    font-weight: 400;
}
 
#mm-embedded-form .mm-field {
    margin-bottom: 20px;
}
#mm-embedded-form .mm-message {
    text-align: center;
    background: #5268db;
    padding: 20px;
    color: white;
    border-radius: 4px;
}
@media (max-width: 575px) {
      #mm-embedded-form{grid-template-columns: 1fr;}
      #mm-embedded-form > button{
            margin-bottom: 20px
      }
      #mm-embedded-form > div:nth-child(3) {
            grid-column: span 1; 
            order: 1;
            display: flex;
            justify-content: center;
            max-width: 100%;
            overflow: hidden;
      }
      #mm-embedded-form > div.mm-powered-by {
            grid-column: span 1; 
            order: 1;
            text-align: center;
      }
}
`;

export default ContactFromWrapper;
