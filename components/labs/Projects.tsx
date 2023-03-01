import {
  BusinessContainer,
  BusinessGrid,
  ProjectCard,
  ProjectCardTitle,
  ProjectContainer,
  ProjectGrid,
  ProjectLeft,
  ProjectText,
  ProjectTitle,
  ProjectWrapper,
} from "./Business.Style";

export default function ProjectsSection() {
  return (
    <ProjectWrapper>
      <BusinessContainer>
        <ProjectCard>
          <ProjectGrid>
            <ProjectContainer>
              <ProjectTitle>49+</ProjectTitle>
              <ProjectText>PROJECTS</ProjectText>
            </ProjectContainer>

            <ProjectContainer>
              <ProjectTitle>4</ProjectTitle>
              <ProjectText>LOCATIONS</ProjectText>
            </ProjectContainer>

            <ProjectContainer>
              <ProjectTitle>100+</ProjectTitle>
              <ProjectText>EMPLOYEES</ProjectText>
            </ProjectContainer>
          </ProjectGrid>
        </ProjectCard>
      </BusinessContainer>
    </ProjectWrapper>
  );
}
