import styled from "styled-components";

export const MovingWrapper = styled.div`
  background: ${(props) => props.theme.colors.background};
  height: 70vh;
  @media (max-width: 768px) {
    height: 100%;
  }
`;
export const MovingContainer = styled.div`
  background: url("/Wavy.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
`;
export const MovingScroll = styled.div``;
export const MovingHeader = styled.div`
  width: max-content;
  display: flex;
  overflow: hidden;
  flex-wrap: nowrap;
  font-family: "Syncopate";
  font-style: normal;
  font-weight: 700;
  font-size: 128px;
  line-height: 120px;
  color: #ffffff;
  animation: moveTextlong 20s linear infinite;
  @media (max-width: 768px) {
    font-size: 62px;
    line-height: 80px;
  }
`;
export const MovingTitle = styled.div`
  width: max-content;
  overflow: hidden;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-family: "Syncopate";
  font-style: normal;
  font-weight: 700;
  font-size: 128px;
  line-height: 120px;
  -webkit-text-stroke: 1px solid #ffffff;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #ffffff;
  transform: translateY(50%);
  animation: moveText 20s linear infinite;
  @media (max-width: 768px) {
    font-size: 62px;
    line-height: 80px;
  }
`;
