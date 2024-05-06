import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const FormContainer = styled.form`
  height: 100px;
  width: 500px;
  border: 1px solid #000;
  border-radius: 10px;

  h2 {
    padding: 0 10px 0 10px;
  }

  div {
    padding: 0 10px 0 10px;
  }

  @media screen and (max-width: 800px) {
    width: 300px;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
