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
import Logo from "../../public/Logo.svg";
import Youtube from "../../public/Youtube.svg";
import Discord from "../../public/Discord.svg";

export default function FooterLabs() {
  return (
    <FooterWrapper>
      <FooterGrid>
        <FooterGridItem>
          <FooterHeader>
            <Image src={Logo} width={192} height={37} alt="logo" />
          </FooterHeader>
          <FooterText>
            NGENI LABs targets to be at the forefront
            <br /> of solving modern and pressing challenges.
            <br /> We design and build using the latest technologies
            <br /> while shaping the young Afrikan developers
            <br /> of tomorrow.
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
          <FooterTitle>Legal</FooterTitle>
          <FooterText>Terms</FooterText>
          <FooterText>Privacy</FooterText>
          <FooterText>Cookies</FooterText>
        </FooterGridItem>
      </FooterGrid>

      <FooterCopyRight>
        <LeftGrid>
          <FooterTitle
            style={{
              fontSize: "12px",
            }}
          >
            ©{new Date().getFullYear()} NGENI LABS. All Rights Reserved.
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
