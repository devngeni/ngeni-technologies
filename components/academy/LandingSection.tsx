import Image from "next/image";
import {
  Button,
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
        <Container>
          <Image src={Celo} width="100" height="100" alt="celo logo" />
          <Image src={Eth} width="140" height="50" alt="eth logo" />
          <Image src={Polygon} width="50" height="80" alt="polygon logo" />
          <Image src={Harmony} width="50" height="80" alt="harmony logo" />
        </Container>
      </Grid>
    </Wrapper>
  );
}
