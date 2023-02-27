import styled from "styled-components";
import { Button, Cards, Container, Header, Title } from "../commons";

export const ServiceContainer = styled(Container)`
  justify-content: start;
  gap: 80.6px;
  padding: 80px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 0;
  }
`;
export const ServiceTitle = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -0.02em;
  color: #101828;
  padding: 20px 0px;
  order: 1;
  align-self: stretch;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
export const ServiceHeader = styled(Header)`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #88d7cf;
`;
export const ServiceTitle2 = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0.02em;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 100%;
  }
`;
export const CardText = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #646464;
`;
export const ServiceText = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #41beb2;
`;
export const ServiceWrapper = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
export const TestimonialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
  h1 {
    font-weight: 500;
    font-size: 42px;
    line-height: 60px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #101828;
    overflow-wrap: break-word;
    white-space: pre-line;
    word-wrap: break-word;
    width: 70vw;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 24px;
    }
  }
`;
export const ServiceIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const ServiceCards = styled.div`
  width: 384px;
  height: 501px;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  gap: 22px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid rgba(216, 216, 216, 0.4);
  box-shadow: 0px 67.1144px 109.061px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.5s ease-in-out;
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const CardIcon = styled(CardWrapper)`
  justify-content: center;
  gap: 10px;
`;

export const ExploreButton = styled(Button)`
  background: #f9fafb;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  color: #101828;
`;

export const TeamCard = styled(Cards)`
  width: 276px;
  height: 292px;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: #f9fafb;
  border: none;
  gap: 10px;
  img {
    border-radius: 50%;
  }
  &:hover {
    border: 1px solid #41beb2;
    background: #fff;
    transition: 0.5s ease-in-out;
    color: initial;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &:hover > div {
    color: initial;
  }
`;

export const TeamName = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #101828;
`;

export const TeamLink = styled.a`
  img {
    width: 100%;
    border-radius: 5px;
  }
`;

export const Testimonialcontainer = styled.div`
  background: #f5f5f5;
  padding: 40px;
`;
