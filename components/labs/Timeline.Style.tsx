import styled from "styled-components";
import { Grid, Title } from "../commons";

export const TimelineWrapper = styled.div``;
export const TimelineGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  align-content: center;
  gap: 0;
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
    font-size: 48px;
    line-height: 60px;
  }
`;
export const TimelineLeftGrid = styled.div`
  grid-template-columns: 1fr 2fr;
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
  height: 100px;
  display: flex;
  align-item: center;
  justify-content: center;
  transform: rotate(-90deg);
  @media (max-width: 768px) {
    display: none;
  }
`;
export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
`;
export const TimeLineCircle = styled.div`
  background: ${({ theme }) => theme.colors.main};
  padding: 20px 0;
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
  font-size: 16px;
`;
export const Timeline = styled.div`
  background: url("/Number.svg") no-repeat;
  background-size: contain;
  background-position: top;
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
`;
export const Text = styled.div`
  font-weight: 700;
  font-size: 24px;
  position: absolute;
  z-index: 1;
`;
export const TimeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;
