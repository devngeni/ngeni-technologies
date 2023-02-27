import styled from "styled-components";

export const Title = styled.h1`
  gap: 8px;
  font-weight: 900;
  font-size: 64px;
  line-height: 82px;
  letter-spacing: -0.5px;
  text-transform: capitalize;
  color: #101828;
  flex: none;
  order: 0;
  flex-grow: 0;
  span {
    color: #41bfb3;
  }
  @media (max-width: 768px) {
    font-size: 46px;
    line-height: 44px;
    padding: 20px 0;
  }
`;
