import styled from "styled-components";
import { ToolsTitle, ToolsWrapper } from "./Tools.Style";
interface isExpanded {
  isExpanded: boolean;
  isAnimating: boolean;
}
interface isHidden {
  hidden: boolean;
}
export const BusinessWrapper = styled(ToolsWrapper)`
  justify-content: space-around;
  background: url("/EthBg.svg") #010a0f;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
export const BusinessTitle = styled(ToolsTitle)`
  justify-content: start;
  align-items: flex-start;
  font-family: "Montserrat";
`;
export const BusinessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BussinessLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
export const BussinessRight = styled.div``;
export const BusinessCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 48px 0px;
  width: 619px;
  height: 516px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0px 0px 34.0148px rgba(255, 255, 255, 0.05),
    inset 0px 2.26765px 2.26765px rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(36.3611px);
  border-radius: 10px;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: inset 0px 0px 34.0148px rgba(255, 255, 255, 0.05),
      inset 0px 2.26765px 2.26765px rgba(255, 255, 255, 0.15),
      0px 0px 34.0148px rgba(255, 255, 255, 0.05),
      0px 2.26765px 2.26765px rgba(255, 255, 255, 0.15);
    transition: 0.5s ease-in-out;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const BusinessCardTitle = styled.h1`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 27.2118px;
  line-height: 130%;
  text-align: center;
  color: #ffffff;
`;
export const BusinessCardText = styled.p`
  font-family: "Montserrat";
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #a1a1a1;
  width: 322px;
`;

export const BusinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProjectWrapper = styled(ToolsWrapper)`
  background-image: url("/Square.svg");
  background-repeat: no-repeat;
  background-position: center;
`;
export const ProjectCard = styled.div`
  background: #101921;
  box-shadow: 0px 2px 24px rgba(34, 34, 34, 0.1);
  border-radius: 16px;
  width: 863.28px;
  height: 155.61px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ProjectTitle = styled.h1`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;
  display: flex;
  align-items: center;
  text-align: center;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #3ebeb8;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
export const ProjectText = styled.p`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ebebeb;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const ProjectGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: inherit;
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 20px;
    justify-content: space-around;
    padding: 0 20px;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 11px;
`;
export const ProjectLeft = styled.div`
  background: #d9d9d9;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: flex-basis 0.5s ease-in-out;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;
export const CompletedGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 100vh;
  transition: all 0.5s ease-in-out;
`;
export const ProjectRight = styled.div`
  background-image: url("/Boom.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  transition: flex-basis 0.5s ease-in-out;
`;

export const ProjectCardTitle = styled.div`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 32.9748px;
  line-height: 156.02%;
  color: #000000;
  cursor: pointer;
  font-family: "Montserrat";
  span {
    font-family: "Montserrat";
    &:hover {
      color: #3ebeb8;
      transition: 0.5s ease-in-out;
    }
  }
  @media (max-width: 768px) {
    font-size: 24px;
    padding: 20px 0;
  }
`;
export const CompleteTitle = styled.h1`
  font-family: "Montserrat";
  font-weight: 900;
  font-size: 96px;
  line-height: 115.02%;
  text-transform: capitalize;
  color: #253435;
  @media (max-width: 768px) {
    line-height: 80.02%;
    transition: 0.5s ease-in-out;
  }
`;
export const CompleteText = styled(BusinessGrid)`
  display: flex;
  justify-content: center;
  gap: 80px;
`;
export const CompleteCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: inherit;
`;

export const WhyTitle = styled.div`
  font-weight: 500;
  font-size: 74.1857px;
  line-height: 92px;
  display: flex;
  align-items: center;
  color: #ffffff;
  font-family: "Montserrat";

  @media (max-width: 768px) {
    font-size: 48px;
    line-height: 59px;
  }
`;
export const WhyGrid = styled.div`
  background: url("/World.svg");
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  padding: 50px 0;
  gap: 50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  @media (max-width: 768px) {
  }
`;

export const WhyCard = styled.div`
  background: url("/City.gif");
  background-repeat: no-repeat;
  background-position: center;
`;
export const WhyText = styled.div`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 16.2571px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: #a1a1a1;
`;
export const WhyContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 50px;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }
`;
