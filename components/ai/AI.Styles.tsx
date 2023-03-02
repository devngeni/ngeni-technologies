import styled from "styled-components";
import { Button } from "../commons";

export const AiWrapper = styled.div`
  width: 100%;
  height: 95vh;
`;
export const AiHeader = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.header};
  line-height: 73px;
  letter-spacing: 0.02em;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 50px;
  }
`;
export const AiTitle = styled.h1`
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSizes.title};
  line-height: 98px;
  letter-spacing: 0.02em;
  background: linear-gradient(269.94deg, #4575df -7.83%, #3ebeb8 103.13%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  animation: glow 2s ease-in-out infinite;
  @keyframes glow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.mobileTitle};
    line-height: 50px;
  }
`;
export const AiText = styled.p`
  width: 723px;
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes.text};
  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    padding: 10px;
  }
`;
export const AiBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  height: inherit;
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-top: 50px;
    gap: 30px;
  }
`;
export const AiGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 50px;
  @media (max-width: 768px) {
    padding-top: 50px;
  }
`;
export const AiButton = styled.button`
  width: 172px;
  height: 70px;
  background: #3eb9ba;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  border: none;
  &:hover {
    background: transparent;
    border: 1px solid #3eb9ba;
    color: #3eb9ba;
    transition: 0.5s ease-in-out;
  }
  @media (max-width: 768px) {
    width: 100px;
    height: 100%;
  }
`;
export const AiRightButton = styled.button`
  width: 172px;
  height: 70px;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  &:hover {
    background: transparent;
    border: 1px solid #3eb9ba;
    color: #3eb9ba;
    transition: 0.5s ease-in-out;
  }
  @media (max-width: 768px) {
    width: 100px;
    height: 100%;
  }
`;
