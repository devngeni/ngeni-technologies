import styled from "styled-components";

export const LeftGrid = styled.div`
  flex-direction: column;
  gap: 20px;
`;

export const GridCenterItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridFlow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
`;
