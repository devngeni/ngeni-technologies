import styled from "styled-components";
import { motion } from "framer-motion";
export const ToolsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  flex-direction: column;
  gap: 50px;
  background: ${({ theme }) => theme.colors.main};
`;
export const ToolsTitle = styled.h1`
  font-family: "Montserrat";
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 900;
  font-size: 76.1857px;
  color: ${({ theme }) => theme.colors.section};
  word-spacing: 3px;
  span {
    color: #41bfb3;
  }
  @media (max-width: 768px) {
    font-size: 34px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const ToolsText = styled.p`
  font-family: "Montserrat";
  display: flex;
  text-align: center;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.section};
`;
export const ToolsGrid = styled.div`
  background: url("/Wire.svg");
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  position: relative;
  gap: 50px;
  @media (max-width: 768px) {
    justify-content: space-evenly;
    flex-wrap: nowrap;
    transition: 0.5s ease-in-out;
  }
`;

export const ToolsCard = styled(motion.div)`
  background: #11191f;
  border-radius: 15px;
  width: 200px;
  height: 130px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  animation: moveLeft 5s linear infinite;
  @media (max-width: 768px) {
    width: 100px;
    height: 50px;
    padding: 10px;
    img {
      width: 60%;
    }
  }
`;
export const ToolsCardIcon = styled.div``;
