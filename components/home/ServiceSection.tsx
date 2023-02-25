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
  ServiceContainer,
  ServiceHeader,
  ServiceIcon,
  ServiceText,
  ServiceTitle,
  ServiceTitle2,
} from "./Service.Styles";
import Phone from "../../public/Phone.svg";
import Image from "next/image";
import Desktop from "../../public/Desktop.svg";
import Contract from "../../public/Contract.svg";

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
    </Wrapper>
  );
}
