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
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f4ebff;
    border: 1px solid #41bfb3;
    background: #ffffff;
    color: #41bfb3;
  }
`;
