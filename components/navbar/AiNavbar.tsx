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
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Menu from "../../public/Menu.svg";

export default function AiNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [mQuery, setMQuery] = useState({
    matches:
      typeof window !== "undefined" && window.innerWidth > 768 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addEventListener("change", setMQuery);

    return () => mediaQuery.removeEventListener("change", setMQuery);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <NavbarWrapper style={{ background: "#000", color: "#fff" }}>
      <NavbarGrid>
        <AiNavWrapper>
          <Image src={AiBg} width={16} height={50} alt="logo" />
          <AiNavText>NGENI AI</AiNavText>
        </AiNavWrapper>
        {mQuery.matches ? (
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
        ) : (
          <>
            {isOpen ? (
              <Container>
                <Sidebar isOpen={isOpen} onClose={handleClose} />
              </Container>
            ) : (
              <Container>
                <Image src={Menu} alt="menu" onClick={() => toggleSidebar()} />
              </Container>
            )}
          </>
        )}
      </NavbarGrid>
    </NavbarWrapper>
  );
}
