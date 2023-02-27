import styled from "styled-components";
import { Button, Container, Header, Title } from "../commons";

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
export const LandingText = styled(Header)`
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
  color: #646464;
`;
export const LandingButtons = styled(Container)`
  justify-content: start;
  gap: 28px;
  padding: 50px 0;
`;

export const LandingButton = styled(Button)`
  width: 105px;
  height: 60px;
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
  cursor: pointer;
`;
export const LandingButton2 = styled(LandingButton)`
  background: #f4ebff;
  border: 1px solid #f4ebff;
  color: #41bfb3;
  &:hover {
    color: #ffffff;
    background: #41bfb3;
  }
`;
export const LandingPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    img {
      width: 90%;
      height: 90%;
    }
  }
`;
export const LandingContainer = styled(Container)`
  justify-content: start;
  gap: 34.6px;
  @media (max-width: 768px) {
    gap: 10px;
    img {
      width: 90%;
    }
  }
`;
export const LandingTitle = styled(Title)`
  font-weight: 700;
  font-size: 30px;
  line-height: 34px;
  padding: 0;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const LandingGrid = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 250px;
  @media (max-width: 768px) {
    gap: 20px;
  }
`;
export const LandingCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 225.16px;
  height: 90.84px;
  background: #f5f5f4;
  box-shadow: 0px 18.36px 38.25px rgba(0, 0, 0, 0.15);
  border-radius: 18.36px;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 20px;
  @media (max-width: 768px) {
    width: 100%;
    gap: 5px;
    img {
      width: 55%;
      height: 55%;
    }
  }
`;
