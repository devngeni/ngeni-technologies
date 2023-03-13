import {
  NavbarGrid,
  NavbarHeader,
  NavbarText,
  NavbarWrapper,
} from "./Navbar.Styles";
import Logo from "../../public/Logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { Container } from "../commons";
import { useEffect, useState } from "react";
import Menu from "../../public/Menu.svg";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mQuery, setMQuery] = useState({
    matches: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMQuery({
        matches: window.innerWidth > 768,
      });
      let mediaQuery = window.matchMedia("(min-width: 768px)");
      const handler = (e: any) => {
        setMQuery({
          matches: e.matches,
        });
      };
      mediaQuery.addEventListener("change", handler);

      return () => {
        mediaQuery.removeEventListener("change", handler);
      };
    }
  }, []);
  const router = useRouter();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <NavbarWrapper className="navbar-theme">
      <NavbarGrid>
        <NavbarHeader>
          <Image src={Logo} width={256} height={50} alt="logo" />
        </NavbarHeader>
        {mQuery.matches ? (
          <Container style={{ padding: "0" }}>
            <NavbarText onClick={() => router.push("/engineering")}>
              Developer Services
            </NavbarText>
            <NavbarText onClick={() => router.push("/academy")}>
              Academy
            </NavbarText>
            <NavbarText onClick={() => router.push("/design")}>
              Design Services
            </NavbarText>
            <NavbarText onClick={() => router.push("/ai")}>Ngeni AI</NavbarText>
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
