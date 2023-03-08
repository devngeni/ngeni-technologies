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
import { useEffect, useState } from "react";

export default function CompletedSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleExpand = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsExpanded(true);
      setIsHidden(true);
      setIsAnimating(true);
    }, 500);
  };
  useEffect(() => {
    if (isAnimating) {
      setTimeout(() => {
        setIsHidden(true);
      }, 250);
    }
  }, [isAnimating]);
  const handleClick = (
    isExpanded: boolean,
    setIsExpanded: any,
    isHidden: boolean,
    setIsHidden: any
  ) => {
    if (isExpanded && isHidden) {
      setIsExpanded(false);
      setTimeout(() => {
        setIsHidden(false);
      }, 500);
    }
  };
  return (
    <CompletedGrid>
      <ProjectLeft hidden={isHidden}>
        <ProjectGrid>
          <Image src={Labs} width={41} height={34} alt="projects logo" />
          <ProjectCardTitle>Building | Shaping | Moving</ProjectCardTitle>
          <Image
            src={Eclipse}
            width={41}
            height={34}
            alt="forwad icon"
            style={{ cursor: "pointer" }}
            onClick={() => handleExpand()}
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
            Partnering with
            <br /> leading
            <br /> Blockchain players
            <br /> globally
          </ProjectCardTitle>
        </CompleteText>
      </ProjectLeft>
      <ProjectRight
        isExpanded={isExpanded}
        isAnimating={isAnimating}
        onClick={() =>
          handleClick(isExpanded, setIsExpanded, isHidden, setIsHidden)
        }
      />
    </CompletedGrid>
  );
}
