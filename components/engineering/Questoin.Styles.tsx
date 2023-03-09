import styled from "styled-components";
interface IconProps {
  isOpen: boolean;
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 16px;
  border: 1px solid #ccc;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.h3`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.025em;
  color: #343434;
`;

const Icon = styled(Title)<IconProps>`
  transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease-in-out;
  caret-color: transparent;
`;

const Content = styled.div<IconProps>`
  height: ${({ isOpen }) => (isOpen ? "auto" : "0px")};
  overflow: hidden;
  transition: height 0.3s ease-in-out;
`;
const Wrapper = styled.div`
  width: 1140px;
  height: 98px;
  display: flex;
  justify-content: space-around;
  background: #f8f9fa;
  border-radius: 10px;
  align-items: center;
  cursor: pointer;
`;
const CardElement = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: #ffffff;
`;

const CardBody = styled.div<IconProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: #ffffff;
  transition: all 0.3s ease-in-out;
  border: ${({ isOpen }) =>
    isOpen ? `1.5px solid #125B50;border-radius: 10px;` : `border: none;`};
`;

const Text = styled(Wrapper)`
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.015em;
  color: #343434;
  padding: 20px;
  caret-color: transparent;
`;
const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export {
  Container,
  Header,
  Title,
  Icon,
  Content,
  Wrapper,
  CardBody,
  CardElement,
  Text,
  Grid,
};
