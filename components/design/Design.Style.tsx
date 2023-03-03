import styled from "styled-components";

export const DesignWrapper = styled.div`
  background: ${(props) => props.theme.colors.background};
  height: 100vh;
  @media (max-width: 768px) {
    height: 97vh;
  }
`;
export const DesignContainer = styled.div`
  background: url("/Video.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  align-items: center;
  align-content: center;
  justify-items: center;
  height: 100%;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }
`;
export const DesignTitle = styled.h1`
  font-family: "Syncopate";
  font-weight: 700;
  font-size: 128px;
  line-height: 120px;
  color: ${(props) => props.theme.colors.text};
  @media (max-width: 768px) {
    font-size: 72px;
    line-height: 120px;
  }
`;

export const AboutWrapper = styled.div`
  background: ${(props) => props.theme.colors.primary};
  height: 70vh;
  @media (max-width: 768px) {
    height: 100%;
  }
`;
export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  align-content: center;
  justify-items: center;
  height: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: max-content;
    padding: 20px;
  }
`;
export const AboutTitle = styled.h1`
  font-family: "Syncopate";
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 88px;
  @media (max-width: 768px) {
    font-size: 58px;
    line-height: 68px;
  }
`;
export const AboutText = styled.p`
  font-family: "Noto Sans HK";
  font-weight: 400;
  font-size: 20px;
  line-height: 41px;
`;
export const ProjectWrapper = styled(DesignWrapper)`
  height: 100%;
`;

export const ProjectContainer = styled(AboutContainer)`
  padding: 50px 0;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
export const ProjectGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  align-content: center;
  justify-items: center;
  height: 100%;
  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
`;
export const ProjectHeader = styled.div`
  font-family: "Syncopate";
  color: #ffffff;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
`;
export const ProjectText = styled(AboutText)`
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 41px;
  color: #ffffff;
`;
export const ProjectTitle = styled(DesignTitle)`
  color: #ffffff;
  padding-top: 50px;
  @media (max-width: 768px) {
    font-size: 42px;
  }
`;
export const PhotoImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  justify-items: center;
  gap: 20px;
  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    gap: 20px;
    padding-bottom: 20px;
  }
`;
