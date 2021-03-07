import styled from 'styled-components';

import backgroundImage from '@/assets/background.png';

export const Container = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 500px) {
    background-size: cover;
    background-position-x: -216px;
  }

  > div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      max-width: 450px;
      width: 100%;
      height: 100%;
      padding: 20px 15px 0px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > img {
        width: 100%;
        margin-bottom: 25px;
      }

      > form {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

export const FieldGroup = styled.div`
  > label {
    color: #ffffff;
    font-weight: 600;
  }

  > div {
    padding: 5px 10px;
    background-color: transparent;
    border: 2px solid #ffffff;
    border-radius: 4px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    > svg {
      font-size: 20px;
      color: #ffffff;
      margin-right: 5px;
    }

    > input {
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: 0;
      color: #ffffff;
    }

    &:focus-within {
      -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
        0 0 8px rgb(255 255 255);
      box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(255 255 255);
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  background-color: #ffffff;
  color: #333333;
  font-weight: 600;
  border: 2px solid #ffffff;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:hover > svg {
    background-color: transparent;
    color: #ffffff;
  }

  > svg {
    font-size: 20px;
    font-weight: 600;
    color: #333333;
    margin-right: 5px;
  }
`;

export const FlexGrow = styled.div`
  flex-grow: 1;
`;

export const Copyright = styled.div`
  display: block;
  text-align: center;
  margin-top: 30px;

  > p {
    margin-bottom: 15px;
  }

  p {
    color: #ffffff;
  }
`;
