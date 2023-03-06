import {
  DesignContainer,
  PhotoImage,
  ProjectContainer,
  ProjectGrid,
  ProjectHeader,
  ProjectText,
  ProjectTitle,
  ProjectWrapper,
} from "./Design.Style";
import Media from "../../public/Media.svg";
import Image from "next/image";
import Wdw3 from "../../public/Wdw3.svg";
import Dashboard from "../../public/Dashboard.svg";
import LinkPay from "../../public/LinkPay.svg";
export default function ProjectSection() {
  return (
    <ProjectWrapper>
      <DesignContainer style={{ background: "#000" }}>
        <ProjectTitle>Projects</ProjectTitle>
      </DesignContainer>
      <ProjectContainer>
        <PhotoImage>
          <Image src={Media} alt="media project" />
          <Image src={Wdw3} alt="wdw3 project" />
        </PhotoImage>
        <PhotoImage>
          <Image src={Dashboard} alt="dashboard project" />
        </PhotoImage>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectGrid>
          <ProjectHeader>
            DESIGNING FOR
            <br /> IMPACT
          </ProjectHeader>
          <ProjectText>
            Our methodologies are meant to address current user
            <br /> challenges in the Blockchain ecosystems.
          </ProjectText>
        </ProjectGrid>
        <PhotoImage>
          <Image src={LinkPay} alt="media project" />
        </PhotoImage>
      </ProjectContainer>
    </ProjectWrapper>
  );
}
