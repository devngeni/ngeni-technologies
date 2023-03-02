import styled from "styled-components";

export const LabsWrapper = styled.div`
  min-height: 100%;
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
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.mobileTitle};
    line-height: 50px;
  }
`;
export const LabsGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  justify-content: center;
  height: 100vh;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    gap: 50px;
  }
`;
export const LabLeftGrid = styled.div`
  width: 100%;
  align-content: center;
  justify-content: center;
  height: inherit;
`;
export const LabRightGrid = styled.div`
  width: 100%;
  background: url("/Heroimg.svg");
  background-repeat: no-repeat;
  background-position: center;
`;
export const LabText = styled.div`
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
  border-radius: 5px;
  &:hover {
    border: 1px solid #3ebeb8;
    color: #3ebeb8;
    transition: 0.5s ease-in-out;
  }
`;
