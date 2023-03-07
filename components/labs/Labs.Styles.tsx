import styled from "styled-components";

export const LabsWrapper = styled.div`
background: url("/Heroimg.svg") no-repeat;
background-position: right;
background-size: contain;
height: 100vh;
`;

export const LabLeftGrid = styled.div`
display: flex;
padding: 200px 0;
flex-direction: column;
gap: 73px;
@media (max-width: 768px) {
  align-items: center;
    justify-content: center;
}
`;

export const LabsGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
  }
`;
export const LabsTitle = styled.h1`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.title};
  line-height: 92px;
  color: #ffffff;
  span {
    color: #3ebeb8;
  }
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.mobileTitle};
    line-height: 50px;
  }
`;
export const LabRightGrid = styled.div`
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
