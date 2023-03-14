import styled from "styled-components";
import { Grid, Header } from "../commons";
import { GridFlow, LeftGrid } from "../commons/LeftGrid";

export const FooterWrapper = styled.footer`
  background-color: #000000;
  color: #ffffff;
  padding: 36px 20px;
  justify-content: space-around;
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
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  &:hover {
    color: #88d7cf;
    cursor: pointer;
  }
`;
export const FooterTitle = styled.div`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #98a2b3;
  text-align: start;
`;

export const FooterCopyRight = styled(FooterGrid)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  padding: 20px 0px;
`;

export const FooterIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 40px;
  img {
    cursor: pointer;
  }
`;

export const DevsWrapper = styled.div`
  background: #27538c;
  width: 100%;
  display: grid;
  justify-content: space-around;
  padding: 98px 0px 0px 0px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const DevsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
  padding-bottom: 150px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const DevsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DevsCardTitle = styled.div`
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.015em;
  color: #ffffff;
`;

export const DevsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const DevsGridItem = styled.div``;
export const DevBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #faf5e4;
  padding: 20px 0px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
`;
export const DevsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const DevsCardText = styled.div`
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.015em;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    color: #000000;
    transition: 0.3s ease-in-out;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const DevsTopGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  border-bottom: 1px solid #faf5e4;
  padding: 20px 0px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const DevsBottomGrid = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const DevsCardImage = styled.div``;
export const DevsInputGroup = styled.div`
  width: 367px;
  background: #faf5e4;
  height: 64px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  border-radius: 5px;
`;
export const DevsInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: 0.015em;
  color: #343434;
  border: none;
  background: #faf5e4;
  &:focus {
    outline: none;
  }
`;
export const DevsButton = styled.button`
  width: 143px;
  height: 46px;
  background: #27538c;
  border-radius: 5px;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.015em;
  color: #faf5e4;
  border: none;
  cursor: pointer;
  &:hover {
    background: #000000;
    transition: 0.3s ease-in-out;
    border: 1px solid #faf5e4;
  }
`;
