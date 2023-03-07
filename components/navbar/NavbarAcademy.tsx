import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Container } from "../commons";
import {
  NavbarGrid,
  NavbarHeader,
  NavbarText,
  NavbarWrapper,
} from "./Navbar.Styles";
import MenuBlack from "../../public/MenuBlack.svg";
import { LandingPhoto } from "../academy/Landing.Styles";
import Sidebar from "./Sidebar";
export default function NavbarAcademy() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const [mQuery, setMQuery] = useState({
    matches: typeof window !== "undefined" && window.innerWidth > 768 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addEventListener("change", setMQuery);

    return () => mediaQuery.removeEventListener("change", setMQuery);
  }, []);
  return (
    <NavbarWrapper>
      <NavbarGrid>
        <NavbarHeader>NGENI ACADEMY</NavbarHeader>
        {mQuery.matches ? (
          <Container>
            <NavbarText style={{color: "#000"}}>Programs</NavbarText>
            <NavbarText style={{color: "#000"}}>Hackathons</NavbarText>
            <NavbarText style={{color: "#000"}}>Resources</NavbarText>
            <Button>Enroll Today</Button>
          </Container>
        ) : (
          <>
            {isOpen ? (
              <Container>
                <Sidebar isOpen={isOpen} onClose={handleClose} />
              </Container>
            ) : (
              <LandingPhoto>
                <Image src={MenuBlack} alt="menu icon" onClick={() => toggleSidebar()}/>
              </LandingPhoto>
            )}
          </>
        )}
      </NavbarGrid>
    </NavbarWrapper>
  );
}
