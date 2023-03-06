import {
  CardBody,
  CardContainer,
  CardElement,
  CardText,
  ProjectCard,
  Title,
} from "./Cards.Styles";

export default function ProjectsSection() {
  const data = [
    {
      title: "100+",
      text: "Clients Onboarded",
    },
    {
      title: "117+",
      text: "Projects Completed",
    },
    {
      title: "4.1K",
      text: "Hours of Work",
    },
  ];
  return (
    <CardElement>
      <CardContainer>
        <CardBody>
          {data.map((item, index) => (
            <ProjectCard key={index}>
              <Title>{item.title}</Title>
              <CardText style={{ color: "#fff" }}>{item.text}</CardText>
            </ProjectCard>
          ))}
        </CardBody>
      </CardContainer>
    </CardElement>
  );
}
