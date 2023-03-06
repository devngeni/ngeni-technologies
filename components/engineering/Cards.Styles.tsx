import styled from "styled-components";
interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

interface DotProps {
  isActive: boolean;
  onClick: () => void;
}

export const CardWrapper = styled.div`
  background: #27538c;
`;
export const CardContainer = styled.div`
  padding: 60px 0;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
export const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
  padding: 50px 0;
  @media (max-width: 768px) {
    flex-direction: column;

  }
`;
export const Card = styled.div`
  width: 367px;
  height: 280px;
  background: #faf5e4;
  box-shadow: 10px 18px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Title = styled.h1`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: #faf5e4;
`;
export const CardTitle = styled(Title)`
  background: #4375d9;
  border-radius: 6px;
  width: 57px;
  height: 55px;
`;
export const CardHeader = styled(Title)`
  color: #125b50;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0.015em;
`;
export const CardImage = styled.img``;
export const CardText = styled.p`
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.015em;
  text-transform: capitalize;
  color: #343434;
`;
export const CardElement = styled.div`
  background: #ffffff;
`;
export const ProjectCard = styled(Card)`
  width: 367px;
  height: 172px;
  background: #27538c;
  border-radius: 10px;
`;
export const ReviewSlider = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: row;
  padding: 50px 0;
`;
export const ReviewCard = styled(Card)`
  width: 607px;
  height: 322px;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: start;
  align-content: start;
`;
export const ReviewHeader = styled.div`
  display: flex;
  gap: 20px;
`;
export const ReviewWrapper = styled.div``;
export const ReviewBody = styled.div``;
export const ReviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const ReviewImage = styled.div``;
export const ReviewText = styled.div`
  font-family: "Quicksand";
  height: 107px;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.015em;
  color: #343434;
  overflow-y: scroll;
`;
export const ReviewDate = styled.div`
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.015em;
  color: #343434;
`;
export const ReviewName = styled.div``;

const ArrowButton = styled.button<ArrowButtonProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background: transparent;
  border: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-50%) scale(1.2);
  }

  ${({ direction }) => (direction === "right" ? `right: 0;` : `left: 0;`)}
`;

const DotsContainer = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  list-style: none;
  padding: 0;
`;

const Dot = styled.li<DotProps>`
  margin: 0 0.5rem;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? "#fff" : "#ccc")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export { ArrowButton, DotsContainer, Dot };
