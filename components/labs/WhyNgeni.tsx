import {
  WhyCard,
  WhyContainer,
  WhyGrid,
  WhyText,
  WhyTitle,
} from "./Business.Style";
import { Button } from "./Labs.Styles";
import { ToolsWrapper } from "./Tools.Style";

export default function WhyNgeniSection() {
  return (
    <ToolsWrapper>
      <WhyContainer>
        <WhyGrid>
          <WhyTitle>
            WHY NGENI
            <br /> LABS?
          </WhyTitle>
          <WhyText>
            We BUILD+DESIGN+CREATE+IDEATE for NEW INTERNET ECONOMIES.
            <br /> Ours Is a Profound Commitment in Building & Training.
            <br />
            <br /> At NGENI LABs, we are constantly pushing the boundaries of
            Web3, FinTech,
            <br /> and Blockchain technology, providing exceptional custom
            software development
            <br />
            services to suit your business needs.
            <br />
            <br /> Our developer team delivers complex multi-blockchain
            applications, bots, and dApps,
            <br /> while employing the latest security protocols to protect your
            data and assets. <br />
            Our solutions are scalable, adaptable, and future-proof, with a
            proven record of
            <br /> success for diverse international clients.
          </WhyText>
          <Button>SEE CASE STUDIES</Button>
        </WhyGrid>
        <WhyCard />
      </WhyContainer>
    </ToolsWrapper>
  );
}
