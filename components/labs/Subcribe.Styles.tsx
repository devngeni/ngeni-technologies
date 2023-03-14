import styled from "styled-components";

export const SubscribeWrapper = styled.div`
  background: #41bfb3;
`;
export const SubscribeContainer = styled.div`
  padding: 100px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;
export const SubscribeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const SubscribeTitle = styled.h2`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 33.7714px;
  line-height: 51px;
  display: flex;
  align-self: start;

  color: #000000;
`;
export const SubscribeText = styled.div`
  font-family: "Montserrat";
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;
export const Button = styled.button`
  width: 228.42px;
  height: 44px;
  background: #000000;
  color: #ffffff;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.72px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Montserrat";
  &:hover {
    background: transparent;
    border: 1px solid #000000;
    transition: 0.5s ease-in-out;
    color: #000000;
  }
`;
export const Input = styled.input`
  width: 423px;
  height: 43px;
  border: 1px solid #000000;
  background: transparent;
  text-align: center;
  letter-spacing: 0.72px;
  text-transform: uppercase;
  color: #000000;
  font-weight: 800;
  font-family: "Montserrat";
  &:focus {
    outline: #41bfb3;
    border: 1px solid #fff;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
