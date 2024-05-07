import React from "react";
import { StyledFooter, FooterContainer } from "./footer.styles";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <StyledFooter>
        <p>© 2024 Ristorebak. All rights reserved.</p>
      </StyledFooter>
    </FooterContainer>
  );
};

export default Footer;
