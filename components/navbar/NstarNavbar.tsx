import Image from "next/image";
import {
  AiNavWrapper,
  NavbarGrid,
  NstarButton,
  NstarContainer,
  NstarNav,
  NstarText,
  NstarWrapper,
} from "./Navbar.Styles";
import NstarLogo from "../../public/NstarLogo.svg";
import { useEffect, useState } from "react";
import Menu from "../../public/Menu.svg";
export default function NstarNavbar() {
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
  return (
    <NstarWrapper className="engineering-bg">
      <NavbarGrid>
        <NstarNav>
          <Image src={NstarLogo} alt="logo" />
        </NstarNav>
        {mQuery.matches ? (
        <NstarContainer>
          <NstarText>Support</NstarText>
          <NstarText>Pricing</NstarText>
          <NstarButton>Start a Project</NstarButton>
        </NstarContainer>
        ) : (
            <NstarContainer>
                <Image src={Menu} width={24} height={24} alt="logo" />
            </NstarContainer>
        )}
      </NavbarGrid>
    </NstarWrapper>
  );
}
