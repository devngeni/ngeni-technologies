import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  gap: 8px;
  width: Hug (115px);
  height: Hug(40px);
  background: #41bfb3;
  border-radius: 8px;
  flex: none;
  order: 4;
  flex-grow: 0;
  color: #ffffff;
  border: none;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    border: 1px solid #41bfb3;
    background: #ffffff;
    color: #41bfb3;
    padding: 10px 16px;
    transition: 0.5s ease-in-out;
  }
`;
