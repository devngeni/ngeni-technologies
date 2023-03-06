import { Button, Container } from "../commons";
import { NavbarGrid, NavbarHeader, NavbarText, NavbarWrapper } from "./Navbar.Styles";

export default function NavbarAcademy() {
  return (
    <NavbarWrapper>
      <NavbarGrid>
        <NavbarHeader>NGENI ACADEMY</NavbarHeader>
        <Container>
          <NavbarText>Programs</NavbarText>
          <NavbarText>Hackathons</NavbarText>
          <NavbarText>Resources</NavbarText>
          <Button>Enroll Today</Button>
        </Container>
      </NavbarGrid>
    </NavbarWrapper>
  );
}
