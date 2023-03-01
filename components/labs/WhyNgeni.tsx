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
            Why NGENI
            <br /> LABS?
          </WhyTitle>
          <WhyText>
            NGENI LABS is actively engaged in creating the next
            <br /> phase of the internet. We have built payment
            <br /> gateways, exchanges and shipped some of the most
            <br /> exciting blockchain projects in the recent past.
          </WhyText>
          <Button>SEE CASE STUDIES</Button>
        </WhyGrid>
        <WhyCard />
      </WhyContainer>
    </ToolsWrapper>
  );
}
