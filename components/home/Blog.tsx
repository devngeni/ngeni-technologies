import { Wrapper } from "../commons";
import { BlogButtons, BlogGrid, BlogTitle, BlogWrapper, ButtonFlow } from "./Blog.styles";
import {
  CardText,
  ServiceContainer,
  ServiceHeader,
  ServiceTitle2,
  ServiceWrapper,
} from "./Service.Styles";
import Chart from "../../public/Chart.svg";
import { GridFlow } from "../commons/LeftGrid";
import Image from "next/image";
import Bot from "../../public/Bot.svg";
import Web from "../../public/Web.svg";

export default function BlogSection() {
  return (
    <Wrapper>
      <ServiceWrapper>
        <ServiceTitle2 style={{ padding: "40px 0" }}>
          Recent blogs
        </ServiceTitle2>
      </ServiceWrapper>
      <BlogGrid>
        <BlogWrapper>
          <GridFlow>
            <Image src={Chart} width={320} height={200} alt="chart gpt icon" />
            <ServiceWrapper>
              <ServiceHeader>November 16, 2022</ServiceHeader>
              <BlogTitle>chatGPT: The Era of AI</BlogTitle>
              <CardText>
                Delight can be experienced
                <br /> viscerally, behaviourally, and
                <br />
                reflectively. A great design is ...
              </CardText>
              <ButtonFlow>
                <BlogButtons background="#FDF2FA" color="#C11574">
                  Machine learning
                </BlogButtons>
                <BlogButtons background="#ECFDF3" color="#027A48">
                  AI
                </BlogButtons>
              </ButtonFlow>
            </ServiceWrapper>
          </GridFlow>

          <GridFlow>
            <Image src={Bot} width={320} height={200} alt="chart gpt icon" />
            <ServiceWrapper>
              <ServiceHeader>January 24, 2023</ServiceHeader>
              <BlogTitle>Bots and Bets</BlogTitle>
              <CardText>
                Visual-design principles can be
                <br /> applied consistently throughout
                <br />
                the process of creating a<br /> polished UX map...
              </CardText>
              <ButtonFlow>
                <BlogButtons background="#FDF2FA" color="#C11574">
                  Strategy
                </BlogButtons>
                <BlogButtons background="#ECFDF3" color="#027A48">
                  Fintech
                </BlogButtons>
              </ButtonFlow>
            </ServiceWrapper>
          </GridFlow>
        </BlogWrapper>
        <BlogWrapper>
          <Image src={Web} width={585} height={240} alt="web icon" />
          <ServiceWrapper>
            <ServiceHeader>March 13, 2014</ServiceHeader>
            <BlogTitle>The Future of Web3 in Africa</BlogTitle>
            <CardText>
              Agile methods aim to overcome usability barriers in traditional
              development,
              <br /> but post new threats to user experience quality.
            </CardText>
            <ButtonFlow>
              <BlogButtons background="#FDF2FA" color="#C11574">
                Web3
              </BlogButtons>
              <BlogButtons background="#ECFDF3" color="#027A48">
                Fintech
              </BlogButtons>
              <BlogButtons background="#F9F5FF" color="#41BFB3">
                Programming
              </BlogButtons>
            </ButtonFlow>
          </ServiceWrapper>
        </BlogWrapper>
      </BlogGrid>
    </Wrapper>
  );
}
