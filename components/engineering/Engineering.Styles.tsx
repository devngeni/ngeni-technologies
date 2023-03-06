import styled from "styled-components";

export const DevsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(250, 92, 134, 0.2) 0%,
    rgba(250, 92, 134, 0) 100%
  );
`;
export const DevsGrid = styled.div`
  height: inherit;
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: space-around;
  align-items: center;
`;
export const DevsContainer = styled.div`
  display: flex;
  width: 100%;
  height: inherit;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;
export const DevsCard = styled.div``;
export const DevsImage = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
align-items: center;
`;
export const DevsTitle = styled.div`
  font-weight: 600;
  font-size: 48px;
  line-height: 130%;
  text-transform: capitalize;
  color: #ffffff;
  font-family: "Urbanist";
`;

export const DevsText = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 151%;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.4);
  font-family: "Quicksand";
`;
export const DevsButton = styled.button`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 20px 35px;
  width: 210px;
  height: 65px;
  background: #27538c;
  border-radius: 5px;
  font-weight: 600;
  color: #ffffff;
  border: none;
  font-family: "Quicksand";
  cursor: pointer;
  &:hover {
    background: transparent;
    border: 1px solid #27538c;
    transition: 0.3s ease-in-out;
  }
`;

export const DevRating = styled.div``
