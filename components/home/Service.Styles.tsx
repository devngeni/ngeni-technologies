import styled from "styled-components";
import { Container, Header, Title } from "../commons";
import { LandingText } from "./Landing.Styles";

export const ServiceContainer = styled(Container)`
  justify-content: start;
  gap: 40.6px;
  padding: 40px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
export const ServiceTitle = styled(Title)`
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -0.02em;
  color: #101828;
  padding: 20px 0px;
  order: 1;
  align-self: stretch;
`;
export const ServiceHeader = styled(Header)`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #88d7cf;
`;
export const ServiceTitle2 = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0.02em;
`;
export const CardText = styled.div`
  color: #646464;
  &:hover {
    color: inherit;
  }
`;
export const ServiceText = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #41beb2;
  &:hover {
    color: inherit;
  }
`;
export const ServiceWrapper = styled.div``;
export const ServiceIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
