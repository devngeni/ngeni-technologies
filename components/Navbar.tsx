import { Container } from "./commons";
import {
  NavbarGrid,
  NavbarHeader,
  NavbarText,
  NavbarWrapper,
} from "./Navbar.Styles";
import Logo from "../public/Logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter()
  return (
    <NavbarWrapper className="navbar-theme">
      <NavbarGrid>
        <NavbarHeader>
          <Image src={Logo} width={256} height={50} alt="logo" />
        </NavbarHeader>
        <Container style={{padding: "0"}}>
          <NavbarText>Developer Services</NavbarText>
          <NavbarText onClick={() => router.push('/academy')}>Acadamey</NavbarText>
          <NavbarText onClick={() => router.push('/design')}>Design Services</NavbarText>
          <NavbarText onClick={() => router.push('/ai')}>Ngeni AI</NavbarText>
        </Container>
      </NavbarGrid>
    </NavbarWrapper>
  );
}
