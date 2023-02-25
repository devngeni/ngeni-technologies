import { Button, Container, Grid, Header, Title, Wrapper } from "./commons";
import { NavbarText } from "./Navbar.Styles";

export default function Navbar() {
  return (
    <Wrapper>
      <Grid>
        <Header>NGENI ACADEMY</Header>
        <Container>
            <NavbarText>Programs</NavbarText>
            <NavbarText>Hackathons</NavbarText>
            <NavbarText>Resources</NavbarText>
            <Button>Enroll Today</Button>
        </Container>
      </Grid>
    </Wrapper>
  );
}
