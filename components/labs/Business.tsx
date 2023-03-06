import Image from "next/image";
import {
  BusinessCard,
  BusinessCardText,
  BusinessCardTitle,
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
import { useRouter } from "next/router";

export default function BusinessSection() {
  const router = useRouter();
  return (
    <BusinessWrapper>
      <BusinessGrid>
        <BussinessLeft>
          <BusinessTitle>
            <span>Business</span>&nbsp;Units
          </BusinessTitle>
        </BussinessLeft>
      </BusinessGrid>
      <BusinessGrid>
        <BussinessLeft onClick={() => router.push("/academy")}>
          <BusinessCard>
            <Image src={Hill} width={128} height={128} alt="Business" />
            <BusinessCardTitle>
              Academy
            </BusinessCardTitle>
            <BusinessCardText>
              Aliquet id sed augue consequat gravida tortor. Tristique at et
              arcu vulputate. Habitasse tempor porta.
            </BusinessCardText>
          </BusinessCard>
        </BussinessLeft>
        <BussinessRight>
          <BusinessCard onClick={() => router.push("/engineering")}>
            <Image src={Nstar} width={128} height={128} alt="Business" />
            <BusinessCardTitle>
              Engineering
            </BusinessCardTitle>
            <BusinessCardText>
              Aliquet id sed augue consequat gravida tortor. Tristique at et
              arcu vulputate. Habitasse tempor porta.
            </BusinessCardText>
          </BusinessCard>
        </BussinessRight>
      </BusinessGrid>

      <BusinessGrid>
        <BussinessLeft onClick={() => router.push('/design')}>
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
          <BusinessCard onClick={() => router.push("/ai")}>
            <Image src={ALogo} width={128} height={128} alt="Business" />
            <BusinessCardTitle>
              AI
            </BusinessCardTitle>
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
