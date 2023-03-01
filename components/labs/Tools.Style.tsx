import styled from "styled-components";

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
`;
export const ToolsGrid = styled.div`
  background: url("/Wire.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
`;
export const ToolsCard = styled.div`
  background: #11191f;
  border-radius: 15px;
  width: 200px;
  height: 130px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ToolsCardIcon = styled.div``;
