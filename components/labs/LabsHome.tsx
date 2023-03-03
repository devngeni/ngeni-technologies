import {
  Button,
  LabLeftGrid,
  LabRightGrid,
  LabsGrid,
  LabsTitle,
  LabsWrapper,
  LabText,
} from "./Labs.Styles";

export default function LabsHomeSection() {
  return (
    <LabsWrapper>
      <LabsGrid>
        <LabLeftGrid>
          <LabsTitle>
            We Create Disruptive
            <br /> <span>Blockchain</span> Products
          </LabsTitle>
          <LabText>
            Ours is a profound commitment to Quality
            <br /> in Building & Training{" "}
          </LabText>
          <Button>SEE OUR CATALOGUE &gt;</Button>
        </LabLeftGrid>
        <LabRightGrid>
        </LabRightGrid>
        <LabRightGrid>
        </LabRightGrid>
      </LabsGrid>
    </LabsWrapper>
  );
}
