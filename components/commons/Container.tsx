import styled, { keyframes } from "styled-components";
interface ImageAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  duration: number;
}
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0px;
  @media (max-width: 768px) {
  }
`;
const slide = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }

  50% {
    transform: translateX(-20%);
    opacity: 0.5;
  }

  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
`;

export const ImageAnimation = styled.div<ImageAnimationProps>`
  @media (max-width: 768px) {
    width: 100%;
    animation: ${props => slide} ${props => props.duration}s infinite ease-in-out;
  }
`;
