import { useRouter } from "next/router";
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
  const router = useRouter();
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
          <AiRightButton onClick={() => router.push("/chatgpt")}>
            Projects
          </AiRightButton>
        </AiGrid>
      </AiBody>
    </AiWrapper>
  );
}
