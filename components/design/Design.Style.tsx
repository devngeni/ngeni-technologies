import styled from "styled-components";

export const DesignWrapper = styled.div`
  background: ${(props) => props.theme.colors.background};
  height: 100vh;
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
`;
export const DesignTitle = styled.h1`
  font-family: "Syncopate";
  font-weight: 700;
  font-size: 128px;
  line-height: 120px;
  color: ${(props) => props.theme.colors.text};
`;

export const AboutWrapper = styled.div`
  background: ${(props) => props.theme.colors.primary};
  height: 70vh;
`;
export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  align-content: center;
  justify-items: center;
  height: 100%;
`;
export const AboutTitle = styled.h1`
  font-family: "Syncopate";
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 88px;
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
  }
`;
