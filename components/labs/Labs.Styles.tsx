import styled from "styled-components";
import { Grid, Wrapper } from "../commons";

export const LabsWrapper = styled(Wrapper)`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    105.05deg,
    #010c10 10.85%,
    #061d1b 67.36%,
    #141311 128.79%
  );
`;

export const LabsTitle = styled.h1`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.title};
  line-height: 92px;
  color: #ffffff;
  display: grid;
  justify-content: center;
  span {
    color: #3ebeb8;
  }
`;
export const LabsGrid = styled(Grid)`
  width: 100%;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  justify-content: center;
  padding: 155px 0 0 0;
`;
export const LabLeftGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
  align-content: center;
  justify-content: center;
`;
export const LabText = styled.p`
  font-size: 15.2571px;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  color: #ffffff;
`;

export const Button = styled.button`
  width: 235.13px;
  height: 51.44px;
  border: 1px solid #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 33px;
  gap: 28px;
  color: #ffffff;
  background: transparent;
  cursor: pointer;
  &:hover {
    border: 1px solid #3ebeb8;
    color: #3ebeb8;
  }
`;
