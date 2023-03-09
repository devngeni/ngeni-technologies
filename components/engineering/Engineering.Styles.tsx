import styled from "styled-components";

export const DevsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(250, 92, 134, 0.2) 0%,
    rgba(250, 92, 134, 0) 100%
  );
`;
export const DevsGrid = styled.div`
  height: inherit;
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 20px;
  }
`;
export const DevsContainer = styled.div`
  display: flex;
  width: 100%;
  height: inherit;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding: 20px;
    img {
      width: 90%;
      height: 90%;
    }
  }
`;
export const DevsCard = styled.div``;
export const DevsImage = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  @media (max-width: 768px) {
    img {
      width: 40%;
    }
  }
`;
export const DevsTitle = styled.div`
  font-weight: 600;
  font-size: 48px;
  line-height: 130%;
  text-transform: capitalize;
  color: #ffffff;
  font-family: "Urbanist";
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const DevsText = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 151%;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.4);
  font-family: "Quicksand";
`;
export const DevsButton = styled.button`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 20px 35px;
  width: 210px;
  height: 65px;
  background: #27538c;
  border-radius: 5px;
  font-weight: 600;
  color: #ffffff;
  border: none;
  font-family: "Quicksand";
  cursor: pointer;
  &:hover {
    background: transparent;
    border: 1px solid #27538c;
    transition: 0.3s ease-in-out;
  }
`;

export const DevRating = styled(DevsText)`
  font-size: 16px;
`;
export const WhatWrapper = styled(DevsWrapper)`
  height: inherit;
  width: 100%;
  background: #ffffff;
`;
export const WhatBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  object-fit: cover;
  animation: slide-infinite 10s linear infinite;

  @keyframes slide-infinite {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const WhatGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  justify-content: center;
  padding-bottom: 150px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
`;
export const WhatContainer = styled.div`
  display: flex;
  height: inherit;
  padding: 50px 0;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 100vw;
    flex-direction: row;
    gap: 50px;
    justify-content: space-evenly;
    overflow-x: scroll;
  }
`;
export const WhatCard = styled.div`
  width: 367px;
  height: 300px;
  background: #ffffff;
  border: 1.5px solid #eeeeee;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  cursor: pointer;
  &:hover {
    border: 1.5px solid #27538c;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.3s ease-in-out;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    img {
      width: 10%;
    }
  }
`;
export const WhatImage = styled.div``;
export const WhatTitle = styled(DevsTitle)`
  color: #343434;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;
export const WhatText = styled.div`
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.015em;
  color: #343434;
`;
export const WhatButton = styled.button``;
export const WhatHeader = styled.div`
  font-family: "Urbanist";
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.015em;
  text-transform: capitalize;
  color: #27538c;
`;
