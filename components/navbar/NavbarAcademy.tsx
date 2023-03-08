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
    matches: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMQuery({
        matches: window.innerWidth > 768,
      });
      let mediaQuery = window.matchMedia("(min-width: 768px)");
      const handler = (e: { matches: any; }) => {
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
