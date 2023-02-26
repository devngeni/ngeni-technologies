import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  justify-content: center;
  align-content: center;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
