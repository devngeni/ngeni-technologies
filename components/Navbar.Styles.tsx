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
  color: #101828;
  &:hover {
    color: #41bfb3;
  }
`;

export const NavbarWrapper = styled.div`
width: 100%;
padding: 20px auto;
align-items: center;
display: content;
background-color: ${({ theme }) => theme.colors.background};
`;

export const NavbarHeader = styled(Header)`
align-items: center;
display: flex;
justify-content: center;
`
export const NavbarGrid = styled(Grid)`
grid-template-columns: 1fr 2fr;
padding: 20px 0;
align-content: center;
`
export const AiNavText = styled.div`
font-weight: 800;
font-size: 20px;
color: #fff;
`

export const AiText = styled(NavbarText)`
color: #fff;
`

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
`