import styled from "styled-components";
import { Grid, Title } from "../commons";

export const TimelineWrapper = styled.div``;
export const TimelineGrid = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
`;
export const TimeLineTitle = styled(Title)`
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
  img {
    width: 90%;
    height: 90%;
  }
`;
export const TimeImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    img {
      width: 5%;
    }
  }
`;
export const TimeLineRightHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const TimelineText = styled.div`
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
`;
export const TimeLineCircle = styled.div`
  background: ${({ theme }) => theme.colors.main};
  padding: 20px 0;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 100vh;
    overflow: scroll;
    scroll-behavior: smooth;
    transition: 0.5s ease-in-out;
  }
`;

export const TimelineP = styled.div`
  font-weight: 500;
  font-size: 48px;
  line-height: 20px;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 20px;
  }
`;
export const RightHeader = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #a7cefc;
`;
export const RightP = styled(RightHeader)`
  inline-size: 450px;
  overflow-wrap: break-word;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    inline-size: 100%;
    font-weight: 500;
  }
`;
export const Timeline = styled.div`
  background: url("/Number.svg") no-repeat;
  background-size: contain;
  background-position: center;
  height: 140px;
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
    height: 80px;
  }
`;
export const Text = styled.div`
  font-weight: 700;
  font-size: 24px;
`;
export const TimeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;
