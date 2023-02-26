import Image from "next/image";
import { Grid, RightGrid } from "../commons";
import { LeftGrid } from "../commons/LeftGrid";
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
import Github from "../../public/Github.svg";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterGrid>
        <FooterGridItem>
          <FooterHeader>NGENI ACADEMY</FooterHeader>
          <FooterText>
            Top learning experiences that create more talent in the world.
          </FooterText>
        </FooterGridItem>
        <FooterGridItem>
          <FooterTitle>Product</FooterTitle>
          <FooterText>Programs</FooterText>
          <FooterText>Hackathons</FooterText>
          <FooterText>Resources</FooterText>
        </FooterGridItem>

        <FooterGridItem>
          <FooterTitle>Company</FooterTitle>
          <FooterText>About us</FooterText>
          <FooterText>Careers</FooterText>
          <FooterText>Press</FooterText>
        </FooterGridItem>

        <FooterGridItem>
          <FooterTitle>Social</FooterTitle>
          <FooterText>Twitter</FooterText>
          <FooterText>LinkedIn</FooterText>
          <FooterText>GitHub</FooterText>
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
          <FooterTitle>
            ©{new Date().getFullYear()} NGENI ACADEMY. All rights reserved.
          </FooterTitle>
        </LeftGrid>
        <FooterIcons>
          <Image src={Twitter} width={24} height={24} alt="twitter icon" />
          <Image src={LinkedIn} width={24} height={24} alt="linkedin icon" />
          <Image src={Github} width={24} height={24} alt="github icon" />
        </FooterIcons>
      </FooterCopyRight>
    </FooterWrapper>
  );
}
