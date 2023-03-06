import styled from "styled-components";

export const CardWrapper = styled.div`
  background: #27538c;
`;
export const CardContainer = styled.div`
  padding: 60px 0;
`;
export const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
  padding: 50px 0;
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
export const CardElement = styled.div``;
