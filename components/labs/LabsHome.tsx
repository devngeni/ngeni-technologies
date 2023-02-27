import { Grid, LeftGrid, RightGrid } from "../commons";
import {
  Button,
  LabLeftGrid,
  LabsGrid,
  LabsTitle,
  LabsWrapper,
  LabText,
} from "./Labs.Styles";
import Heroimg from "../../public/Heroimg.svg";
import Image from "next/image";
export default function LabsHomeSection() {
  return (
    <LabsWrapper>
      <LabsGrid>
        <LabLeftGrid>
          <LabsTitle>We Create Disruptive <span>Blockchain</span> Products</LabsTitle>
          <LabText>
            Ours is a profound commitment to Quality in Building & Training{" "}
          </LabText>
          <Button>SEE OUR CATALOGUE &gt;</Button>
        </LabLeftGrid>
        <RightGrid>
          <Image src={Heroimg} width={600} height={500} alt="hero image" />
        </RightGrid>
      </LabsGrid>
    </LabsWrapper>
  );
}
