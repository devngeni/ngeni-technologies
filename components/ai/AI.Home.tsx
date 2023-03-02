import {
  AiBody,
  AiButton,
  AiGrid,
  AiHeader,
  AiRightButton,
  AiText,
  AiTitle,
  AiWrapper,
} from "./AI.Styles";

export default function AIHomeSection() {
  return (
    <AiWrapper className="ai-bg">
      <AiBody>
        <AiTitle>Unlocking The Future</AiTitle>
        <AiHeader>NGENI AI</AiHeader>
        <AiText>
          Empower your business with the future of technology. Join us in
          revolutionizing industries with our cutting-edge AI and machine
          learning solutions.
        </AiText>
        <AiGrid>
          <AiButton>Learn More</AiButton>
          <AiRightButton>Projects</AiRightButton>
        </AiGrid>
      </AiBody>
    </AiWrapper>
  );
}
