import styled, { keyframes } from "styled-components";
import { Title } from "../commons";

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;
const pause = keyframes`
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 161px;
  height: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TimelineWrapper = styled.div``;
export const TimelineGrid = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  height: 100vh;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: fit-content;
  }
`;
export const TimeLineTitle = styled(Title)`
  font-family: "Montserrat";
  font-size: 96px;
  font-weight: 900;
  line-height: 120px;
  @media (max-width: 768px) {
    font-size: 34px;
    line-height: 50px;
  }
`;
export const TimelineLeftGrid = styled.div`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.section};
  gap: 20px;
  padding: 50px 0;
  height: inherit;
`;
export const TimelineRightGrid = styled.div``;
export const TimeImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotate} 5s linear infinite;
  &:nth-of-type(2) {
    animation: ${pause} 5s linear infinite;
  }
  @media (max-width: 768px) {
    img {
      width: 30%;
      height: 100%;
    }
  }
`;
export const TimeImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    img {
      width: 70%;
    }
  }
`;
export const TimeLineRightHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const TimelineText = styled.div`
  font-family: "Montserrat";
  width: 300px;
  font-weight: 500;
  font-size: 24px;
  line-height: 20px;
  text-transform: uppercase;
  color: #010a0f;
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  transform: rotate(-90deg);
  @media (max-width: 768px) {
    display: flex;
    font-size: 16px;
    align-items: center;
  }
`;
export const TimeContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    width: 100px;
    height: 400px;
  }
`;
export const TimeLineCircle = styled.div`
  background: ${({ theme }) => theme.colors.main};
  padding: 20px 0;
  @media (max-width: 768px) {
    scroll-behavior: smooth;
    transition: 0.5s ease-in-out;
    height: fit-content;
  }
`;

export const TimelineP = styled.div`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 48px;
  line-height: 20px;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 20px;
  }
`;
export const RightHeader = styled.div`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #a7cefc;
`;
export const RightP = styled(RightHeader)`
  font-family: "Montserrat";
  inline-size: 450px;
  overflow-wrap: break-word;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    inline-size: 100%;
    font-weight: 400;
    font-family: "Quicksand";
  }
`;
export const Timeline = styled.div`
  background: url("/Number.svg") no-repeat;
  background-size: contain;
  background-position: center;
  height: 91.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.section};
  animation: rotateBackground 1s linear;
  @keyframes rotateBackground {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media (max-width: 768px) {
    width: 70%;
    height: 80px;
  }
`;
export const Text = styled.div`
  font-weight: 700;
  font-size: 20px;
`;
export const TimeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  opacity: 1s;
  gap: 20px;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  @media (max-width: 768px) {
    gap: 0px;
  }
`;

const StyledDiv1 = styled(TimeGrid)`
  animation-delay: 1.5s;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const StyledDiv2 = styled(TimeGrid)`
  animation-delay: 2s;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const StyledDiv3 = styled(TimeGrid)`
  animation-delay: 2.5s;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const StyledDiv4 = styled(TimeGrid)`
  animation-delay: 3s;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const StyledDiv5 = styled(TimeGrid)`
  animation-delay: 3.5s;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  animation-play-state: running;
`;
const FADE_IN_ANIMATION_NAME = "fadeIn";
export {
  StyledDiv1,
  StyledDiv2,
  StyledDiv3,
  StyledDiv4,
  StyledDiv5,
  fadeIn,
  fadeOut,
  FADE_IN_ANIMATION_NAME,
};
