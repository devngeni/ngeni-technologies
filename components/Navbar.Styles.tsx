import styled from "styled-components";
import { Grid, Header } from "./commons";

export const NavbarText = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  flex: none;
  order: 2;
  flex-grow: 0;
  cursor: pointer;
  color: #fff;
  &:hover {
    color: #41bfb3;
  }
`;

export const NavbarWrapper = styled.div`
  width: 100%;
  padding: 36px auto;
  align-items: center;
  display: content;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const NavbarHeader = styled(Header)`
  align-items: center;
  display: flex;
  justify-content: center;
`;
export const NavbarGrid = styled(Grid)`
  grid-template-columns: 1fr 2fr;
  padding: 20px 0;
  align-content: center;
`;
export const AiNavText = styled.div`
  font-weight: 800;
  font-size: 20px;
  color: #fff;
`;

export const AiText = styled(NavbarText)`
  color: #fff;
`;

export const AiNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AiContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const DesignNavWrapper = styled.div`
  background-color: #000000;
`;
export const DesignContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  padding: 50px 250px 0 250px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
export const NavbarLogo = styled.div``;
export const DesignNavText = styled.div``;
export const DesignNavMenu = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
`;
export const DesignNavMenuText = styled.div`
  font-family: "Syncopate";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
`;
