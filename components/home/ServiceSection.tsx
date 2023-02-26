import {
  Cards,
  Container,
  Grid,
  LeftGrid,
  RightGrid,
  Wrapper,
} from "../commons";
import {
  CardText,
  CardWrapper,
  ExploreButton,
  ServiceCards,
  ServiceContainer,
  ServiceHeader,
  ServiceIcon,
  ServiceText,
  ServiceTitle,
  ServiceTitle2,
  ServiceWrapper,
} from "./Service.Styles";
import Phone from "../../public/Phone.svg";
import Image from "next/image";
import Desktop from "../../public/Desktop.svg";
import Contract from "../../public/Contract.svg";
import Audience from "../../public/Audience.svg";
import { GridCenterItems } from "../commons/LeftGrid";
import { TeamSection } from "./Team";
import Dev from "../../public/Dev.svg";
import Pyro from "../../public/Pyro.svg";
export default function ServiceSection() {
  return (
    <Wrapper className="service-section">
      <Grid>
        <LeftGrid>
          <ServiceHeader>Our Services</ServiceHeader>
          <ServiceTitle>Shaping Afrika’s Future Workforce</ServiceTitle>
        </LeftGrid>
      </Grid>
      <ServiceContainer>
        <Cards>
          <ServiceIcon>
            <Image src={Phone} width={48} height={48} alt="product icon" />
            <ServiceTitle2>Front-End</ServiceTitle2>
          </ServiceIcon>
          <CardText>
            Lessons on design that cover the most recent developments.
          </CardText>
          <ServiceText>Learn More &gt;</ServiceText>
        </Cards>

        <Cards>
          <ServiceIcon>
            <Image src={Desktop} width={48} height={48} alt="product icon" />
            <ServiceTitle2>Back-End</ServiceTitle2>
          </ServiceIcon>
          <CardText>
            Classes in development that cover the most recent advancements in
            web.
          </CardText>
          <ServiceText>Learn More &gt;</ServiceText>
        </Cards>

        <Cards>
          <ServiceIcon>
            <Image src={Contract} width={48} height={48} alt="product icon" />
            <ServiceTitle2>Smart Contract</ServiceTitle2>
          </ServiceIcon>
          <CardText>
            Marketing courses that cover the most recent marketing trends
          </CardText>
          <ServiceText>Learn More &gt;</ServiceText>
        </Cards>
      </ServiceContainer>

      <ServiceWrapper>
        <ServiceHeader>Explore Programs</ServiceHeader>
        <ServiceTitle>Programs</ServiceTitle>
        <CardText style={{ fontSize: "20px" }}>
          Let's join our famous class, the knowledge provided will definitely be
          useful for you.
        </CardText>
      </ServiceWrapper>

      <ServiceContainer>
        <ServiceCards>
          <Image src={Audience} width="336" height={240} alt="audience image" />
          <ServiceHeader>AI</ServiceHeader>
          <CardWrapper>
            <ServiceTitle2>AI & Machine Learning</ServiceTitle2>
            <ServiceTitle2>↗</ServiceTitle2>
          </CardWrapper>
          <CardText>
            Learn from industry experts and become a sought-after developer in
            the world of decentralized technology
          </CardText>
          <CardWrapper>
            <CardText>2023 Enrolled</CardText>
            <ServiceHeader>3 Months</ServiceHeader>
          </CardWrapper>
        </ServiceCards>

        <ServiceCards>
          <Image src={Dev} width="336" height={240} alt="audience image" />
          <ServiceHeader>Development</ServiceHeader>
          <CardWrapper>
            <ServiceTitle2>DevOps</ServiceTitle2>
            <ServiceTitle2>↗</ServiceTitle2>
          </CardWrapper>
          <CardText>
            Learn from industry experts and become a sought-after developer in
            the world of decentralized technology
          </CardText>
          <CardWrapper>
            <CardText>2023 Enrolled</CardText>
            <ServiceHeader>3 Months</ServiceHeader>
          </CardWrapper>
        </ServiceCards>

        <ServiceCards>
          <Image src={Pyro} width="336" height={240} alt="audience image" />
          <ServiceHeader>Development</ServiceHeader>
          <CardWrapper>
            <ServiceTitle2>Bots Development</ServiceTitle2>
            <ServiceTitle2>↗</ServiceTitle2>
          </CardWrapper>
          <CardText>
            Learn from industry experts and become a sought-after developer in
            the world of decentralized technology
          </CardText>
          <CardWrapper>
            <CardText>2023 Enrolled</CardText>
            <ServiceHeader>3 Months</ServiceHeader>
          </CardWrapper>
        </ServiceCards>
      </ServiceContainer>
      <GridCenterItems>
        <ExploreButton>Explore all Programs</ExploreButton>
      </GridCenterItems>

      <ServiceWrapper>
        <ServiceHeader>Trainees</ServiceHeader>
        <ServiceTitle>Recent Developer Trainees</ServiceTitle>
        <CardText style={{ fontSize: "20px" }}>
          Our Trainees go through an Intense and Dense program that make them
          the best in the global market.
        </CardText>
      </ServiceWrapper>
      <TeamSection />
    </Wrapper>
  );
}
