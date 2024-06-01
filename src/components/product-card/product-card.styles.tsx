import styled from "styled-components";

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 550px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 500px;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    width: 40vw;
    height: 300px;
    margin-bottom: 50px;

    img {
      height: 300px;
    }

    span {
      margin-top: 30px;
      font-size: 13px;
    }

    button {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;

      &:hover {
        img {
          opacity: unset;
        }

        button {
          opacity: unset;
        }
      }
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;

  @media screen and (max-width: 800px) {
    margin-right: 10px;
  }
`;

export const Price = styled.span``;
