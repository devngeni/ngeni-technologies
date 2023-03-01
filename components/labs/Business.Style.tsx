import styled from "styled-components";
import { ToolsTitle, ToolsWrapper } from "./Tools.Style";

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
`;
export const BusinessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
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
`;

export const BusinessCardTitle = styled.h1`
  font-weight: 500;
  font-size: 27.2118px;
  line-height: 130%;
  text-align: center;
  color: #ffffff;
`;
export const BusinessCardText = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #a1a1a1;
  width: 322px;
`;

export const BusinessContainer = styled.div``;
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
`;
export const ProjectTitle = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;
  display: flex;
  align-items: center;
  text-align: center;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #3ebeb8;
`;
export const ProjectText = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ebebeb;
`;
export const ProjectGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: inherit;
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
`;
export const ProjectRight = styled.div`
  background-image: url("/Boom.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  background-size: cover;
  width: 100%;
  height: 935px;
`;
export const ProjectCardTitle = styled.div`
  font-weight: 500;
  font-size: 32.9748px;
  line-height: 156.02%;
  color: #000000;
`;
export const CompleteTitle = styled.h1`
  font-weight: 900;
  font-size: 96px;
  line-height: 115.02%;
  text-transform: capitalize;
  color: #253435;
`;
export const CompleteText = styled(BusinessGrid)`
  display: flex;
  justify-content: center;
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
`;
export const WhyGrid = styled.div`
  background: url("/World.svg");
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  padding: 50px 0;
  gap: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const WhyCard = styled.div`
  background: url("/City.svg");
  background-repeat: no-repeat;
  background-position: center;
`;
export const WhyText = styled.div`
  font-weight: 500;
  font-size: 16.2571px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: #a1a1a1;
`;
export const WhyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  width: 100%;
`;
