import Image from "next/image";
import W3Logo from "../public/W3Logo.svg";
import { DesignContainer, DesignNavMenu, DesignNavMenuText, DesignNavText, DesignNavWrapper, NavbarLogo } from "./Navbar.Styles";

export default function NavbarDesign() {
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
            <DesignNavMenuText>
                ▤
            </DesignNavMenuText>
          </DesignNavText>
        </DesignNavMenu>
      </DesignContainer>
    </DesignNavWrapper>
  );
}
