import Image from "next/image";
import {
  AiContainer,
  AiNavText,
  AiNavWrapper,
  AiText,
  NavbarGrid,

  NavbarWrapper,
} from "./Navbar.Styles";
import AiBg from "../../public/AiBg.svg";
import Github from "../../public/Github.svg";
import Discord from "../../public/Discord.svg";
import { Container } from "../commons";
export default function AiNavbar() {
  return (
    <NavbarWrapper style={{ background: "#000", color: "#fff" }}>
      <NavbarGrid>
        <AiNavWrapper>
          <Image src={AiBg} width={16} height={50} alt="logo" />
          <AiNavText>NGENI AI</AiNavText>
        </AiNavWrapper>
        <Container style={{ padding: "0", flexDirection: "row-reverse" }}>
          <AiText>Solutions</AiText>
          <AiText>Roadmap</AiText>
          <AiContainer>
            <AiText>
              <Image src={Github} width={20} height={20} alt="logo" />
            </AiText>
            <AiText>
              <Image src={Discord} width={20} height={20} alt="logo" />
            </AiText>
          </AiContainer>
        </Container>
      </NavbarGrid>
    </NavbarWrapper>
  );
}
