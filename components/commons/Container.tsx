import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0px;
  @media (max-width: 768px) {
    display: none;
    img {
      width: 97%;
    }
  }
`;
