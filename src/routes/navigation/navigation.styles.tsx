import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as IsLogo } from "../../assets/logo.svg";

export const NavigationComponent = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 170px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLinkBase = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const NavLink = styled(Link)`
  ${NavLinkBase}
`;

export const NavSpan = styled.span`
  ${NavLinkBase}
`;
export const Logo = styled(IsLogo)`
  height: 100%;
  width: 100px;
`;