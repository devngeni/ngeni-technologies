import styled from "styled-components";

export const Cards = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px 40px;
  gap: 22px;
  width: 373px;
  height: 243px;
  background: #ffffff;
  border: 1px solid rgba(216, 216, 216, 0.4);
  box-shadow: 0px 67.1144px 109.061px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  &:hover {
    color: #ffffff;
    background: #41bfb3;
    border: none;
    transition: 0.5s ease-in-out;
  }
  &:hover > div {
    color: #ffffff;
    transition: 0.5s ease-in-out;
  }
  @media (max-width: 768px) {
    width: 85%;
  }
`;
