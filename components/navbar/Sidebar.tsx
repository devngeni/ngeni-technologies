import styled from "styled-components";
import { FooterIcons } from "../footer/Footer.Style";
import { SideNavText, SideWrapper } from "./Navbar.Styles";
import Twitter from "../../public/Twitter.svg";
import LinkedIn from "../../public/LinkedIn.svg";
import Youtube from "../../public/Youtube.svg";
import Discord from "../../public/Discord.svg";
import Image from "next/image";
import { useRouter } from "next/router";
interface ContainerProps {
  isOpen: boolean;
  onClose?: () => void;
}
const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 350px;
  background: linear-gradient(
    105.05deg,
    #010c10 10.85%,
    #061d1b 67.36%,
    #141311 128.79%
  );
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transform: translateX(${({ isOpen }) => (isOpen ? 0 : "-100%")});
  transition: transform 1s ease-in-out;
  z-index: 100;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Sidebar = ({ isOpen, onClose }: ContainerProps) => {
    const router = useRouter();
  return (
    <Container isOpen={isOpen} className="moving-bg">
      <CloseButton onClick={onClose}>×</CloseButton>
      <SideWrapper>
        <SideNavText onClick={() => router.push("/")}>Home</SideNavText>
        <SideNavText onClick={() => router.push("/design")}>Design Service</SideNavText>
        <SideNavText onClick={() => router.push("/academy")}>Ngeni Academy</SideNavText>
        <SideNavText onClick={() => router.push("/ai")}>Ngeni Ai</SideNavText>
        <SideNavText onClick={() => router.push("/engineering")}>Developer Service</SideNavText>

        <FooterIcons>
          <Image src={LinkedIn} width={24} height={24} alt="linkedin icon" />
          <Image src={Twitter} width={24} height={24} alt="twitter icon" />
          <Image src={Youtube} width={24} height={24} alt="github icon" />
          <Image src={Discord} width={24} height={24} alt="github icon" />
        </FooterIcons>
      </SideWrapper>
    </Container>
  );
};
export default Sidebar;
