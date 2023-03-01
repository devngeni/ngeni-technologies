import {
  BusinessGrid,
  CompleteCard,
  CompleteText,
  CompleteTitle,
  ProjectCardTitle,
  ProjectGrid,
  ProjectLeft,
  ProjectRight,
} from "./Business.Style";
import Labs from "../../public/Labs.svg";
import Image from "next/image";
import Eclipse from "../../public/Ecllipse.svg";

export default function CompletedSection() {
  return (
    <BusinessGrid style={{ gridTemplateColumns: "1.5fr 1fr", gap: "0" }}>
      <ProjectLeft>
        <ProjectGrid>
          <Image src={Labs} width={41} height={34} alt="projects logo" />
          <ProjectCardTitle>Building | Shaping | Moving</ProjectCardTitle>
          <Image src={Eclipse} width={41} height={34} alt="forwad icon" />
        </ProjectGrid>
        <CompleteCard>
          <CompleteTitle>
            Some Fun
            <br /> Projects
            <br /> We’ve Done
          </CompleteTitle>
        </CompleteCard>
        <CompleteText>
          <ProjectCardTitle>
            <span>Potara</span> | <span>Once App</span> | <span>Boom</span>
            <br />| <span>Gema</span> | <span>Edge</span>
          </ProjectCardTitle>
          <ProjectCardTitle style={{ textAlign: "start", color: "#464646" }}>
            Partnering with
            <br /> leading
            <br /> Blockchain players
            <br /> globally
          </ProjectCardTitle>
        </CompleteText>
      </ProjectLeft>
      <ProjectRight />
    </BusinessGrid>
  );
}
