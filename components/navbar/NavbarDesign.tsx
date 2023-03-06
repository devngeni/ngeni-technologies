import Image from "next/image";
import W3Logo from "../../public/W3Logo.svg";
import {
  DesignContainer,
  DesignNavMenu,
  DesignNavMenuText,
  DesignNavText,
  DesignNavWrapper,
  NavbarLogo,
} from "./Navbar.Styles";
import Menu from "../../public/Menu.svg";
import { Container } from "../commons";
import Sidebar from "./Sidebar";
import { useState } from "react";
export default function NavbarDesign() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <DesignNavWrapper>
      <DesignContainer>
        <NavbarLogo>
          <Image src={W3Logo} width={97} height={24} alt="wdw3 logo" />
        </NavbarLogo>
        <DesignNavMenu>
          <DesignNavText>
            <DesignNavMenuText>Menu</DesignNavMenuText>
          </DesignNavText>
          <DesignNavText>
            <>
              {isOpen ? (
                <Container>
                  <Sidebar isOpen={isOpen} onClose={handleClose} />
                </Container>
              ) : (
                <DesignNavMenuText>
                  <Image src={Menu} alt="hamberger logo" onClick={() => toggleSidebar()}/>
                </DesignNavMenuText>
              )}
            </>
          </DesignNavText>
        </DesignNavMenu>
      </DesignContainer>
    </DesignNavWrapper>
  );
}
