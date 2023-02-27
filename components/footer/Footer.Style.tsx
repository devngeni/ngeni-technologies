import styled from "styled-components";
import { Grid, Header } from "../commons";
import { GridFlow, LeftGrid } from "../commons/LeftGrid";

export const FooterWrapper = styled.footer`
  background-color: #000000;
  color: #ffffff;
  padding: 36px 0px;
`;
export const FooterGrid = styled(GridFlow)`
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0px;
  width: 100%;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-content: center;
  }
`;
export const FooterGridItem = styled(LeftGrid)`
  display: flex;
  gap: 30px;
  @media (max-width: 768px) {
    flex: 0;
    gap: 10px;
  }
`;
export const FooterHeader = styled(Header)`
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #ffffff;
`;
export const FooterText = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  &:hover {
    color: #88d7cf;
    cursor: pointer;
  }
`;
export const FooterTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #98a2b3;
  text-align: start;
`;

export const FooterCopyRight = styled(FooterGrid)`
  justify-content: space-around;
  align-content: center;
  padding: 40px 0px;
`;

export const FooterIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 40px;
  img {
    cursor: pointer;
  }
`;
