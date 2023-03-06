import {
  Card,
  CardBody,
  CardContainer,
  CardHeader,
  CardText,
  CardTitle,
  CardWrapper,
  Title,
} from "./Cards.Styles";

export default function OnbordingSection() {
  const data = [
    {
      id: 1,
      title: "step Title",
      text: "Next-gen Web 3, Blockchain & Fintech Engineering Studio",
    },
    {
      id: 2,
      title: "step Title",
      text: "Next-gen Web 3, Blockchain & Fintech Engineering Studio",
    },
    {
      id: 3,
      title: "step Title",
      text: "Next-gen Web 3, Blockchain & Fintech Engineering Studio",
    },
  ];
  return (
    <CardWrapper>
      <CardContainer>
        <Title>Onboarding Process</Title>
        <CardBody>
          {data.map((item, index) => (
            <Card key={index}>
              <CardTitle>{item.id}</CardTitle>
              <CardHeader>{item.title}</CardHeader>
              <CardText>{item.text}</CardText>
            </Card>
          ))}
        </CardBody>
      </CardContainer>
    </CardWrapper>
  );
}
