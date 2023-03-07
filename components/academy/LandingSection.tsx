import Image from "next/image";
import {
  Container,
  Grid,
  LeftGrid,
  RightGrid,
  Title,
  Wrapper,
} from "../commons";
import {
  LandingButton,
  LandingButton2,
  LandingButtons,
  LandingCard,
  LandingContainer,
  LandingGrid,
  LandingPhoto,
  LandingText,
  LandingTitle,
  LandingWrapper,
} from "./Landing.Styles";
import Bell from "../../public/Bell.svg";
import Bulb from "../../public/Bulb.svg";
import Work from "../../public/Work.svg";
import Hero from "../../public/Hero.svg";
import Celo from "../../public/Celo.svg";
import Eth from "../../public/Eth.svg";
import Polygon from "../../public/Polygon.svg";
import Harmony from "../../public/Harmony.svg";
import Laptop from "../../public/Laptop.svg";
import Corhort from "../../public/Cohort.svg";
import { ImageAnimation, ImageContainer } from "../commons/Container";

export default function LandingSection() {
  return (
    <Wrapper className="landing-page-left">
      <Grid className="landing">
        <LeftGrid>
          <Title>
            Level up!
            <br /> your Blockchain
            <br /> <span>career</span>
          </Title>
          <LandingText>
            NGENI Indensity Program provides our developer trainees with
            <br /> modern, hands-on skills for today’s Web3 market.
          </LandingText>
          <LandingButtons>
            <LandingButton>Enroll</LandingButton>
            <LandingButton2>Inquire</LandingButton2>
          </LandingButtons>
          <LandingContainer>
            <LandingWrapper>
              <Image src={Bell} width={26} height={28} alt="product icon" />
              <LandingText>Products</LandingText>
            </LandingWrapper>
            <LandingWrapper>
              <Image src={Work} width={26} height={28} alt="development icon" />
              <LandingText>Development</LandingText>
            </LandingWrapper>
            <LandingWrapper>
              <Image src={Bulb} width={26} height={28} alt="devops icon" />
              <LandingText>DevOps</LandingText>
            </LandingWrapper>
          </LandingContainer>
        </LeftGrid>

        <RightGrid className="landing-page-right">
          <LandingPhoto>
            <Image src={Hero} width="710" height="510" alt="hero background" />
            <LandingGrid>
              <LandingCard>
                <Image src={Laptop} width={48} height={48} alt="laptop icon" />
                <RightGrid>
                  <LandingTitle>2M+</LandingTitle>
                  <LandingText>Github Commits</LandingText>
                </RightGrid>
              </LandingCard>
              <LandingCard>
                <Image src={Corhort} width={48} height={48} alt="laptop icon" />
                <RightGrid>
                  <LandingTitle>12+</LandingTitle>
                  <LandingText>Cohorts</LandingText>
                </RightGrid>
              </LandingCard>
            </LandingGrid>
          </LandingPhoto>
        </RightGrid>
      </Grid>
      <Grid>
        <LeftGrid>
          <LandingTitle>
            <span>250+</span>
            <br />
            Learners
          </LandingTitle>
        </LeftGrid>
        <ImageContainer>
          <ImageAnimation duration={3}>
            <Image src={Celo} width={46} height={38} alt="celo logo" />
          </ImageAnimation>
          <ImageAnimation duration={4}>
            <Image src={Eth} width={46} height={38} alt="eth logo" />
          </ImageAnimation>
          <ImageAnimation duration={6}>
          <Image src={Polygon} width={26} height={28} alt="polygon logo" />
          </ImageAnimation>
          <ImageAnimation duration={8}>
            <Image src={Harmony} width={26} height={28} alt="harmony logo" />
          </ImageAnimation>
        </ImageContainer>
      </Grid>
    </Wrapper>
  );
}
