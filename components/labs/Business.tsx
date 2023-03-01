import Image from "next/image";
import {
  BusinessCard,
  BusinessCardText,
  BusinessCardTitle,
  BusinessContainer,
  BusinessGrid,
  BusinessTitle,
  BusinessWrapper,
  BussinessLeft,
  BussinessRight,
} from "./Business.Style";
import Hill from "../../public/Hill.svg";
import Nstar from "../../public/Nstar.svg";
import ALogo from "../../public/ALogo.svg";
import Design from "../../public/Design.svg";
import { ToolsWrapper } from "./Tools.Style";

export default function BusinessSection() {
  return (
    <BusinessWrapper>
      <BusinessGrid>
        <BussinessLeft>
          <BusinessTitle>
            <span>Business</span> Units
          </BusinessTitle>
        </BussinessLeft>
      </BusinessGrid>
      <BusinessGrid>
        <BussinessLeft>
          <BusinessCard>
            <Image src={Hill} width={128} height={128} alt="Business" />
            <BusinessCardTitle>Academy</BusinessCardTitle>
            <BusinessCardText>
              Aliquet id sed augue consequat gravida tortor. Tristique at et
              arcu vulputate. Habitasse tempor porta.
            </BusinessCardText>
          </BusinessCard>
        </BussinessLeft>
        <BussinessRight>
          <BusinessCard>
            <Image src={Nstar} width={128} height={128} alt="Business" />
            <BusinessCardTitle>Engineering</BusinessCardTitle>
            <BusinessCardText>
              Aliquet id sed augue consequat gravida tortor. Tristique at et
              arcu vulputate. Habitasse tempor porta.
            </BusinessCardText>
          </BusinessCard>
        </BussinessRight>
      </BusinessGrid>

      <BusinessGrid>
        <BussinessLeft>
          <BusinessCard>
            <Image src={Design} width={128} height={128} alt="Business" />
            <BusinessCardTitle>Design</BusinessCardTitle>
            <BusinessCardText>
              Aliquet id sed augue consequat gravida tortor. Tristique at et
              arcu vulputate. Habitasse tempor porta.
            </BusinessCardText>
          </BusinessCard>
        </BussinessLeft>
        <BussinessRight>
          <BusinessCard>
            <Image src={ALogo} width={128} height={128} alt="Business" />
            <BusinessCardTitle>AI</BusinessCardTitle>
            <BusinessCardText>
              Aliquet id sed augue consequat gravida tortor. Tristique at et
              arcu vulputate. Habitasse tempor porta.
            </BusinessCardText>
          </BusinessCard>
        </BussinessRight>
      </BusinessGrid>
    </BusinessWrapper>
  );
}
