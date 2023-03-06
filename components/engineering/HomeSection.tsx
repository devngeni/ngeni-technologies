import Image from "next/image";
import {
  DevRating,
  DevsButton,
  DevsContainer,
  DevsGrid,
  DevsImage,
  DevsText,
  DevsTitle,
  DevsWrapper,
} from "./Engineering.Styles";
import Rating from "../../public/Rating.svg";
import NstarWeb from "../../public/NstarWeb.svg";

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
            <DevRating>Rated 4.9 on Trustpilot</DevRating>
          </DevsImage>
        </DevsContainer>
        <DevsContainer>
          <Image src={NstarWeb} alt="Engineering" />
        </DevsContainer>
      </DevsGrid>
    </DevsWrapper>
  );
}
