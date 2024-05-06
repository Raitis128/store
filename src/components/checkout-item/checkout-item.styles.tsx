import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 800px) {
    border-bottom: 0;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const Name = styled.span`
  width: 23%;

  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const Quantity = styled.span`
  width: 23%;
  display: flex;

  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const Price = styled.span`
  width: 23%;

  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const Arrow = styled.div`
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
`;
export const Value = styled.span`
  margin: 2px 10px 0px 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    border-bottom: 1px solid darkgrey;
    width: 100%;
    padding-bottom: 10px;
    text-align: center;
    padding-left: 0px;
  }
`;
