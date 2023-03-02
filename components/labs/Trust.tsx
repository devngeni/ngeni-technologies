import {
  TrustBody,
  TrustCard,
  TrustContainer,
  TrustGrid,
  TrustTitle,
  TrustWrapper,
} from "./Trust.Styles";
import Google from "../../public/Google.svg";
import Mac from "../../public/Mac.svg";
import Mazda from "../../public/Mazda.svg";
import Sol from "../../public/Sol.svg";
import Image from "next/image";
export default function TrustSection() {
  return (
    <TrustWrapper>
      <TrustContainer>
        <TrustGrid>
          <TrustTitle>They Trust Us</TrustTitle>
        </TrustGrid>
        <TrustBody>
          <TrustCard>
            <Image src={Mazda} alt="Trust" />
          </TrustCard>
          <TrustCard>
            <Image src={Google} alt="Trust" />
          </TrustCard>
          <TrustCard>
            <Image src={Mac} alt="Trust" />
          </TrustCard>
          <TrustCard>
            <Image src={Sol} alt="Trust" />
          </TrustCard>
        </TrustBody>
      </TrustContainer>
    </TrustWrapper>
  );
}
