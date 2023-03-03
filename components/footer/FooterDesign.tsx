import Image from "next/image";
import { LeftGrid } from "../commons";
import {
  FooterCopyRight,
  FooterGrid,
  FooterGridItem,
  FooterHeader,
  FooterIcons,
  FooterText,
  FooterTitle,
  FooterWrapper,
} from "./Footer.Style";
import Twitter from "../../public/Twitter.svg";
import LinkedIn from "../../public/LinkedIn.svg";
import Youtube from "../../public/Youtube.svg";
import Discord from "../../public/Discord.svg";
import W3Logo from "../../public/W3Logo.svg";
export default function FooterDesign() {
  return (
    <FooterWrapper>
      <FooterGrid>
        <FooterGridItem>
          <FooterHeader>
            <Image src={W3Logo} width={192} height={37} alt="logo" />
          </FooterHeader>
          <FooterText>
            We are a team of Web3 Designers<br /> based in Kenya, East Africa. Here to
            bring your<br /> ideas to life.
          </FooterText>
        </FooterGridItem>
        <FooterGridItem>
          <FooterTitle>Product Information</FooterTitle>
          <FooterText>Information</FooterText>
          <FooterText>Technical Expertise</FooterText>
          <FooterText>Guides</FooterText>
        </FooterGridItem>

        <FooterGridItem>
          <FooterTitle>Company</FooterTitle>
          <FooterText>About us</FooterText>
          <FooterText>Careers</FooterText>
          <FooterText>Press</FooterText>
        </FooterGridItem>

        <FooterGridItem>
          <FooterTitle>Have a PRoject</FooterTitle>
          <FooterText>Contact us</FooterText>
          <FooterText>info@wdw3.design</FooterText>
        </FooterGridItem>
      </FooterGrid>
      <FooterCopyRight>
        <LeftGrid>
          <FooterTitle
            style={{
              fontSize: "12px",
            }}
          >
           wdw3 ©{new Date().getFullYear()}. All Rights Reserved.
          </FooterTitle>
        </LeftGrid>
        <FooterIcons>
          <Image src={LinkedIn} width={24} height={24} alt="linkedin icon" />
          <Image src={Twitter} width={24} height={24} alt="twitter icon" />
          <Image src={Youtube} width={24} height={24} alt="github icon" />
          <Image src={Discord} width={24} height={24} alt="github icon" />
        </FooterIcons>
      </FooterCopyRight>
    </FooterWrapper>
  );
}
