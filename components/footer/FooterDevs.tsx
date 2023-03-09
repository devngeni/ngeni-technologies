import Image from "next/image";
import {
  DevBottomContainer,
  DevsBottomGrid,
  DevsButton,
  DevsCard,
  DevsCardImage,
  DevsCardText,
  DevsCardTitle,
  DevsContainer,
  DevsGrid,
  DevsGroup,
  DevsInput,
  DevsInputGroup,
  DevsTopGrid,
  DevsWrapper,
} from "./Footer.Style";
import NstarLogo from "../../public/NstarLogo.svg";
import Visa from "../../public/Visa.svg";

export default function FooterDevs() {
  return (
    <DevsWrapper>
      <DevsContainer>
        <DevsCard>
          <Image src={NstarLogo} alt="footer-logo" />
          <DevsCardTitle>
            Next-gen Web 3, Blockchain & Fintech Engineering Studio
          </DevsCardTitle>
        </DevsCard>

        <DevsGrid>
          <DevsTopGrid>
            <DevsCardTitle>Get insights right into your inbox</DevsCardTitle>
            <DevsInputGroup>
              <DevsInput placeholder="Enter your Email" />
              <DevsButton>Subcribe</DevsButton>
            </DevsInputGroup>
          </DevsTopGrid>

          <DevsBottomGrid>
            <DevsGroup>
              <DevsCardText>Web3</DevsCardText>
              <DevsCardText>Blockchain</DevsCardText>
            </DevsGroup>

            <DevsGroup>
              <DevsCardText>Company.</DevsCardText>
              <DevsCardText>Pricing </DevsCardText>
            </DevsGroup>

            <DevsGroup>
              <DevsCardText>Resources.</DevsCardText>
              <DevsCardText>Support</DevsCardText>
            </DevsGroup>
          </DevsBottomGrid>
        </DevsGrid>
      </DevsContainer>

      <DevBottomContainer>
        <DevsCardText>
          © Copyright {new Date().getFullYear()} - Nstar Devs. All Rights
          Reserved.
        </DevsCardText>
        <DevsCardImage>
            <Image src={Visa} alt="footer-bank-icons" />
        </DevsCardImage>
      </DevBottomContainer>
    </DevsWrapper>
  );
}
