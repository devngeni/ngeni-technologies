import { Button, Container, Grid, Header, Title, Wrapper } from "./commons";
import { NavbarGrid, NavbarHeader, NavbarText, NavbarWrapper } from "./Navbar.Styles";

export default function Navbar() {
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
