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
            Pioneering new frontiers
            <br /> in <span>Web3 </span>and <span>Blockchain</span>
          </LabsTitle>
          <LabText>
            <span>BUILDING. SHAPING. MOVING.</span>
            <br />
            Continuously pushing the limits of technology
            by innovating <br /> through creating and improving existing
            products and services.
          </LabText>
          <Button>SEE OUR CATALOGUE &gt;</Button>
        </LabLeftGrid>
        <LabRightGrid></LabRightGrid>
        <LabRightGrid></LabRightGrid>
      </LabsGrid>
    </LabsWrapper>
  );
}
