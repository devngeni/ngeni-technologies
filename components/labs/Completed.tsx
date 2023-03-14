import {
  BusinessGrid,
  CompleteCard,
  CompleteText,
  CompleteTitle,
  ProjectCardTitle,
  ProjectGrid,
  ProjectLeft,
  ProjectRight,
  CompletedGrid,
} from "./Business.Style";
import Labs from "../../public/Labs.svg";
import Image from "next/image";
import Eclipse from "../../public/Ecllipse.svg";
import { useState } from "react";

export default function CompletedSection() {
  const handleClick = () => {
    const wrapper: any = document.querySelector(".Wrapper");
    wrapper.style.gridTemplateColumns = "0fr 1fr";
    const ProjectLeft: any = document.querySelector(".LeftGrid");
    ProjectLeft.style.flexShrink = "0";
    const ProjectRight: any = document.querySelector(".RightGrid");
    ProjectRight.style.flexGrow = "1";
    ProjectRight.style.width = "100vw";
  };
  return (
    <CompletedGrid className="Wrapper">
      <ProjectLeft className="LeftGrid">
        <ProjectGrid>
          <Image src={Labs} width={41} height={34} alt="projects logo" />
          <ProjectCardTitle>Design | Develop | Deliver</ProjectCardTitle>
          <Image
            src={Eclipse}
            width={41}
            height={34}
            alt="forwad icon"
            style={{ cursor: "pointer" }}
            onClick={() => handleClick()}
          />
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
            | <span>Potara</span> | <span>Once App</span> | <span>Boom</span>
            <br />| <span>Gema</span> | <span>Edge</span>
          </ProjectCardTitle>
          <ProjectCardTitle style={{ textAlign: "start", color: "#464646" }}>
            Partnering with leading
            <br /> Blockchain players globally
          </ProjectCardTitle>
        </CompleteText>
      </ProjectLeft>
      <ProjectRight className="RightGrid" />
    </CompletedGrid>
  );
}
