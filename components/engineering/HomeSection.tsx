import Image from "next/image";
import {
  DevsButton,
  DevsContainer,
  DevsGrid,
  DevsImage,
  DevsText,
  DevsTitle,
  DevsWrapper,
} from "./Engineering.Styles";
import Rating from "../../public/Rating.svg";
export default function HomeSection() {
  return (
    <DevsWrapper className="engineering-bg">
      <DevsGrid>
        <DevsContainer>
          <DevsTitle>
            Blockchain, Web3 & fintech
            <br /> Development
          </DevsTitle>
          <DevsText>
            Next-gen Web 3, Blockchain & Fintech Engineering
            <br /> Studio
          </DevsText>
          <DevsButton>Start A Project</DevsButton>
          <DevsImage>
            <Image src={Rating} alt="Engineering" />
            <DevsText style={{ fontSize: "16px" }}>
              Rated 4.9 on Trustpilot
            </DevsText>
          </DevsImage>
        </DevsContainer>
      </DevsGrid>
    </DevsWrapper>
  );
}
